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
    username: string;
    corpName: string;
  };
  /** 权限是否准备好 */
  isAuthReady: boolean;
  setMenuList: (value: CustomRouteConfig[]) => void;
  /** 默认菜单展开项keys */
  menuOpenKeys: React.Key[];
  setMenuOpenKeys: (openKeys: React.Key[]) => void;
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
        menuOpenKeys: null,
        isLogin: false,
        token:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6MSwib3JnYW5pemF0aW9uTmFtZSI6IumHjeW6hua0quS5neaenOWTgeiCoeS7veaciemZkOWFrOWPuOmHjeW6huWIhuWFrOWPuCIsInVzZXJfbmFtZSI6Iua4uOaAuyIsInNjb3BlIjpbImFsbCJdLCJpZCI6MSwiZXhwIjoxNjIzMzEwNDQxLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIwYTI1M2QzMi0yMWEyLTQyZTMtYjk2ZS02ZTYxOWJhZTcxZDgiLCJwbGF0Zm9ybSI6MTAsImNsaWVudF9pZCI6ImNsaWVudC1hcHAifQ.MvEtXmZUBBNmgpAqrP229aOszEVWIgH4DMLYd_KvLqVG3NpckiFV9_JkptVk35pGgPQqC0_-WsEzFJngFjvbcenzn7eMphMVHPKzusFAxpvrIVenRfa1SNSCmQGxygfVIGL3sXBYZ76oqn_VNpenIji8Tv9spK_kul9vx2guKhw',
        userInfo: {
          corpName: 'test',
          username: 'test',
        },
        isAuthReady: false,
        setMenuList: (menuList) => {
          set({ menuList });
        },
        setMenuOpenKeys: (openKeys) => {
          set({ menuOpenKeys: openKeys });
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
        whitelist: ['isLogin', 'token', 'collapsed', 'userInfo', 'menuOpenKeys'],
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
