import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes, CustomRouteConfig } from '@/router/config/index';
import { getMenuList } from '@/utils/tools';
import React from 'react';
export interface State {
  /** menuList */
  menuList: CustomRouteConfig[];
  /** 是否登录 */
  isLogin: boolean;
  /** token */
  token: string;
  /** 用户信息 */
  userInfo: {
    /** 用户名 */
    username: string;
    /** 公司名 */
    companyName: string;
  };
  /** 权限是否准备好 */
  isAuthReady: boolean;
  setMenuList: (value: CustomRouteConfig[]) => void;
  /** 菜单是否收起 */
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  /** 退出 */
  logout: (callback?: () => void) => void;
  [key: string]: any;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        collapsed: false,
        isLogin: false,
        token: null,
        userInfo: {
          companyName: 'test',
          username: 'test',
        },
        isAuthReady: false,
        setMenuList: (menuList) => {
          set({ menuList });
        },
        setCollapsed: (value) => {
          set({ collapsed: value });
        },
        logout: (callback) => {
          set({ isLogin: false, token: null, userInfo: null });
          callback?.();
        },
      }),
      {
        name: 'global-storage',
        getStorage: () => localStorage,
        // only these props will be persisted
        whitelist: ['isLogin', 'token', 'collapsed', 'userInfo'],
      },
    ),
  ),
);

useGlobalStore.subscribe(
  (isLogin) => {
    if (isLogin) {
      // init menuList while isLogin turn to be true
      new Promise<any[]>((resolve) => {
        resolve([]);
      })
        .then((authData) => {
          useGlobalStore.setState({ isAuthReady: true, menuList: getMenuList(mainRoutes, authData) });
        })
        .catch(() => {
          useGlobalStore.setState({ isAuthReady: true });
        });
    }
  },
  (state) => state.isLogin,
);
useGlobalStore.setState({ isLogin: true });

export default useGlobalStore;
