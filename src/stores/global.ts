import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes, CustomRouteConfig } from '@/router/config/index';
import { getMenuList } from '@/utils/tools';
import React from 'react';
interface State {
  /** menuList */
  menuList: CustomRouteConfig[];
  /** 是否登录 */
  isLogin: boolean;
  /** token */
  token: string;
  /** 用户信息 */
  userInfo: any;
  /** 权限是否准备好 */
  isAuthReady: boolean;
  setMenuList: (value: CustomRouteConfig[]) => void;
  /** 默认菜单展开项keys */
  menuOpenKeys: React.Key[];
  setMenuOpenKeys: (openKeys: React.Key[]) => void;
  /** 退出 */
  logout: () => void;
  [key: string]: any;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: [],
        menuOpenKeys: [],
        isLogin: false,
        token: null,
        userInfo: null,
        isAuthReady: false,
        setMenuList: (menuList) => {
          set({ menuList });
        },
        setMenuOpenKeys: openKeys => {
          set({ menuOpenKeys: openKeys })
        },
        logout: () => {
          set({ isLogin: false, token: '', userInfo: {} });
        },
      }),
      {
        name: 'global-storage',
        getStorage: () => localStorage,
      },
    ),
  ),
);

// init menuList while isLogin turn to be true
useGlobalStore.subscribe(
  (isLogin) => {
    if (isLogin) {
      new Promise<any[]>((resolve) => {
        resolve([]);
      })
      .then((authData) => {
          useGlobalStore.setState({ isAuthReady: true, menuList: getMenuList(mainRoutes, authData) });
        })
        .catch(() => {
          useGlobalStore.setState({ isAuthReady: true });
        })
        .finally(() => {});
    }
  },
  (state) => state.isLogin,
);

export default useGlobalStore;
