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
import authHOC from '@/components/hoc/auth';
const { Header, Content, Sider } = Layout;

const LayoutComponent: React.FC<RouteConfigComponentProps> = React.memo((props) => {
  const { route } = props;
  const { menuList, userSetting, setUserSetting, userInfo, logout } = useGlobalStore();
  const location = useLocation();
  // 根据pathname获取当前匹配到的路由配置、菜单配置、菜单展开的key
  const [matchedRouteConfig, matchedMenuConfig, matchedOpenKeys] = useMemo(() => {
    let currentRoute: CustomRouteConfig = null;
    let currentMenu: CustomRouteConfig = null;
    let openKeys: string[] = [];
    const traverse = (menu: CustomRouteConfig[]) => {
      for (let i = 0; i <= menu?.length - 1; i++) {
        const route = menu[i];
        // exact需要为true
        const matchedRoute = matchPath(location.pathname, { ...route, exact: true });
        if (matchedRoute) {
          currentRoute = route;
          if (route.meta?.menuText) {
            currentMenu = route;
          }
          return true;
        } else {
          if (route.routes?.length) {
            const subResult = traverse(route.routes);
            // 如果子路由被匹配到
            if (subResult) {
              // 如果已获取到当前菜单项则将父菜单的menuText存储到openKeys
              if (currentMenu) {
                route.meta?.menuText && openKeys.push(route.meta.menuText);
              }
              // 如果尚未获取到当前菜单项，则判断当前路由是否有menuText，若有则将route设置为当前菜单项
              if (!currentMenu) {
                route.meta?.menuText && (currentMenu = route);
              }
              return true;
            }
          }
        }
      }
      return false;
    };
    traverse(allRoutes);
    return [currentRoute, currentMenu, openKeys];
  }, [location.pathname]);
  const [openKeys, setOpenKeys] = useState<any[]>(matchedOpenKeys);
  const setCollapsed = useCallback(
    (collapsed) => {
      setUserSetting({ collapsed });
    },
    [userSetting.collapsed],
  );
  const contentPadding = matchedRouteConfig?.meta?.contentPadding;

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <AppHeader userInfo={userInfo} collapsed={userSetting.collapsed} setCollapsed={setCollapsed} logout={logout} />
      </Header>
      <Layout>
        <Sider collapsed={userSetting.collapsed} trigger={null} collapsible width={208}>
          <SideMenu
            menuList={menuList}
            defaultSelectedKeys={[matchedMenuConfig?.meta?.menuText]}
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
