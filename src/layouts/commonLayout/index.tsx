import React, { useEffect, useMemo } from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import styles from './style.module.less';
import SideMenu from './components/side-menu';
import AppBreadcrumb from './components/breadcrubm';
import AppHeader from './components/header';
import { matchPath, useLocation } from 'react-router-dom';
import allRoutes, { CustomRouteConfig } from '@/router/config';
import useGlobalStore from '@/stores/global';
const { Header, Content, Sider } = Layout;

/**
 * traverse route config using DFS
 * @param routes routes to traverse
 * @param handle handle on each route(stop by returning false)
 */
const traverseRoutes = (routes: CustomRouteConfig[], handle: (route: CustomRouteConfig) => boolean): boolean => {
  const len = routes.length;
  for (let i = 0; i <= len - 1; i++) {
    const route = routes[i];
    let stop = handle(route);
    if (route.routes) {
      const subStop = traverseRoutes(route.routes, handle);
      if (subStop) {
        return true;
      }
    }
    if (stop) {
      return true;
    }
  }
  return false;
};

const LayoutComponent: React.FC<RouteConfigComponentProps> = React.memo((props) => {
  const { route } = props;
  const { isAuthReady, menuList, collapsed, setCollapsed, menuOpenKeys, setMenuOpenKeys, userInfo, logout } =
    useGlobalStore();
  useEffect(() => {
    useGlobalStore.setState({
      isLogin: true,
    });
  }, []);
  const location = useLocation();
  // get current route by pathname
  const matchedRouteConfig = useMemo((): CustomRouteConfig => {
    let currentRoute = null;
    traverseRoutes(allRoutes, (route) => {
      // exact must be true
      const matchedRoute = matchPath(location.pathname, { ...route, exact: true });
      if (matchedRoute) {
        currentRoute = route;
        // stop traversing
        return true;
      }
      // continue
      return false;
    });
    return currentRoute;
  }, [location.pathname]);
  // get openKeys by pathname
  const openKeys = useMemo(() => {
    const keys = [];
    // menuOpenKeys has a higher priority than keys computed by pathname
    if (menuOpenKeys) {
      return menuOpenKeys;
    }
    const traverse = (menu: CustomRouteConfig[]) => {
      for (let i = 0; i <= menu?.length - 1; i++) {
        const route = menu[i];
        // exact must be true
        const matchedRoute = matchPath(location.pathname, { ...route, exact: true });
        if (matchedRoute) {
          // stop traversing
          return true;
        } else {
          if (route.routes?.length) {
            const subResult = traverse(route.routes);
            if (subResult) {
              keys.push(route.meta.menuText);
              // stop traversing
              return true;
            }
          }
        }
      }
      return false;
    };
    traverse(menuList);
    return keys;
  }, [location.pathname, menuList, menuOpenKeys]);
  const contentPadding = matchedRouteConfig.meta?.contentPadding;

  if (!isAuthReady) {
    return null;
  }
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <AppHeader userInfo={userInfo} collapsed={collapsed} setCollapsed={setCollapsed} logout={logout} />
      </Header>
      <Layout>
        <Sider collapsed={collapsed} trigger={null} collapsible width={208}>
          <SideMenu
            menuList={menuList}
            selectedKeys={[matchedRouteConfig.meta?.menuText]}
            openKeys={collapsed ? [] : openKeys}
            onOpenChange={setMenuOpenKeys}
          />
        </Sider>
        <Layout>
          <AppBreadcrumb route={matchedRouteConfig} />
          <Content style={{ padding: contentPadding === undefined ? 16 : contentPadding }}>
            {renderRoutes(route?.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
export default LayoutComponent;
