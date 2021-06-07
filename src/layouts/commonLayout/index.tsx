import React, { useCallback, useMemo, useState } from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import styles from './style.module.less';
import SideMenu from './components/side-menu';
import AppBreadcrumb from './components/breadcrubm';
import AppHeader from './components/header';
import { matchPath, useLocation } from 'react-router-dom';
import allRoutes, { CustomRouteConfig } from '@/router/config';
import useGlobalStore from '@/stores/global';
import authHOC from '@/components/auth-hoc'
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
  const { menuList, userSetting, setUserSetting, userInfo, logout } =
    useGlobalStore();
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
  const [openKeys, setOpenKeys] = useState((() => {
    const keys = [];
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
  })())
  const setCollapsed = useCallback(collapsed => {
    setUserSetting({ collapsed })
  }, [userSetting.collapsed])
  const contentPadding = matchedRouteConfig.meta?.contentPadding;

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <AppHeader userInfo={userInfo} collapsed={userSetting.collapsed} setCollapsed={setCollapsed} logout={logout} />
      </Header>
      <Layout>
        <Sider collapsed={userSetting.collapsed} trigger={null} collapsible width={208}>
          <SideMenu
            menuList={menuList}
            defaultSelectedKeys={[matchedRouteConfig.meta?.menuText]}
            openKeys={userSetting.collapsed ? [] : openKeys}
            onOpenChange={setOpenKeys}
            inlineCollapsed={userSetting.collapsed}
          />
        </Sider>
        <Layout>
          <AppBreadcrumb route={matchedRouteConfig} />
          <Content className={styles.content} style={{ padding: contentPadding === undefined ? 16 : contentPadding }}>
            {renderRoutes(route?.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
export default authHOC<RouteConfigComponentProps>(LayoutComponent);
