import { CustomRouteConfig } from "@/router/config";

/**
 * 根据路由配置和权限数据获取菜单配置
 * @param routes 路由配置
 * @param authData 权限数据
 */
export const getMenuList = (routes: CustomRouteConfig[], authData: any[]): defs.authService.AuthDTO[] => {
  return routes?.filter(({ meta, authKey }) => {
    // 如果路由配置了authKey
    if (authKey) {
      // 如果拥有权限
      if (authData.some(item => item.authKey === authKey)) {
        // 如果路由配置了menuText
        return !!meta?.menuText
      }
      // 无权限
      return false
    }
    // 如果路由没有配置authKey则默认有权限
    return !!meta?.menuText
  }).map(item => ({
    ...item,
    // 递归处理
    routes: getMenuList(item.routes, authData)
  })) || []
};

/**
 * 从菜单中获取默认首页路由（第一个可选菜单项目）
 * @param menuList 菜单列表
 */
export const getHomepageUrl = (menuList: CustomRouteConfig[]) => {
  let menu: CustomRouteConfig  = menuList.find(item => {
    if (item.routes?.length) {
      return getHomepageUrl(item.routes)
    }
    return item.meta?.menuText
  })
  while (menu.routes?.length) {
    menu = menu.routes[0]
  }
  return Array.isArray(menu?.path) ? menu.path[0] : menu?.path
}
