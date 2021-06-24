import React, { useCallback, useMemo, useState, memo } from 'react'
import type { RouteConfigComponentProps } from 'react-router-config'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import useGlobalStore from '@/stores/global'
import authHOC from '@/components/hoc/auth'
import { getCurrentRouteAndMenuInfo } from '@/utils/tools'
import styles from './style.module.less'
import SideMenu from './components/side-menu'
import AppBreadcrumb from './components/breadcrubm'
import AppHeader from './components/header'

const { Header, Content, Sider } = Layout

const LayoutComponent: React.FC<RouteConfigComponentProps> = memo((props) => {
  const { route } = props
  const { menuList, userSetting, setUserSetting, userInfo, logout } = useGlobalStore()
  const location = useLocation()
  // 根据pathname获取当前匹配到的路由配置、菜单配置、菜单展开的key
  const [matchedRouteConfig, matchedMenuConfig, matchedOpenKeys] = useMemo(() => {
    return getCurrentRouteAndMenuInfo(location.pathname)
  }, [location.pathname])
  const [openKeys, setOpenKeys] = useState<any[]>(matchedOpenKeys)
  const setCollapsed = useCallback(
    (collapsed) => {
      setUserSetting({ collapsed })
    },
    [setUserSetting],
  )
  const contentPadding = matchedRouteConfig?.meta?.contentPadding

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
  )
})
export default authHOC<RouteConfigComponentProps>(LayoutComponent)
