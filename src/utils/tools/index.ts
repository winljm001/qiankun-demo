import { CustomRouteConfig } from "@/router/config";

/**
 * get menu config by routes and authData
 * @param routes routes
 * @param authData auth
 * @returns menuList
 */
export const getMenuList = (routes: CustomRouteConfig[], authData: any[]): defs.authService.AuthDTO[] => {
  return routes?.filter(({ meta, authKey }) => {
    // with authKey
    if (authKey) {
      // own the auth
      if (authData.some(item => item.authKey === authKey)) {
        // show menu if menuText is 'true'
        return !!meta?.menuText
      }
      // no auth
      return false
    }
    // show menu if menuText is 'true'
    return !!meta?.menuText
  }).map(item => ({
    ...item,
    // handle sub route
    routes: getMenuList(item.routes, authData)
  })) || []
};
