import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes, CustomRouteConfig } from '@/router/config/index';
import { getMenuList } from '@/utils/tools';

import { authListByUserId } from '@/services/authService/mods/role/authListByUserId';
export type State = {
  /** menuList */
  menuList: CustomRouteConfig[];
  /** 是否登录 */
  isLogin: boolean;
  /** 用户id */
  userId: number;
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
  /** 用户设置 */
  userSetting: {
    /** 菜单是否收起 */
    collapsed: boolean;
  },
  setUserSetting: (value: Partial<State['userSetting']>) => void;
  /** 退出 */
  logout: (callback?: () => void) => void;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        isLogin: false,
        userId: null,
        token:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6MSwib3JnYW5pemF0aW9uTmFtZSI6IumHjeW6hua0quS5neaenOWTgeiCoeS7veaciemZkOWFrOWPuOmHjeW6huWIhuWFrOWPuCIsInVzZXJfbmFtZSI6Iua4uOaAuyIsInNjb3BlIjpbImFsbCJdLCJpZCI6MSwiZXhwIjoxNjIzMzEwNDQxLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIwYTI1M2QzMi0yMWEyLTQyZTMtYjk2ZS02ZTYxOWJhZTcxZDgiLCJwbGF0Zm9ybSI6MTAsImNsaWVudF9pZCI6ImNsaWVudC1hcHAifQ.MvEtXmZUBBNmgpAqrP229aOszEVWIgH4DMLYd_KvLqVG3NpckiFV9_JkptVk35pGgPQqC0_-WsEzFJngFjvbcenzn7eMphMVHPKzusFAxpvrIVenRfa1SNSCmQGxygfVIGL3sXBYZ76oqn_VNpenIji8Tv9spK_kul9vx2guKhw',
        userInfo: {
          companyName: '',
          username: '',
        },
        userSetting: {
          collapsed: false,
        },
        isAuthReady: false,
        setMenuList: menuList => {
          set({ menuList });
        },
        setUserSetting: value => {
          set({ userSetting: { ...get().userSetting, ...value } });
        },
        logout: callback => {
          set({ isLogin: false });
          callback?.();
        },
      }),
      {
        name: 'global-storage',
        getStorage: () => localStorage,
        // only these props will be persisted
        whitelist: ['isLogin', 'userId', 'token', 'userSetting', 'userInfo'],
      },
    ),
  ),
);

useGlobalStore.subscribe(
  (isLogin) => {
    if (isLogin) {
      // init menuList while isLogin turn to be true
      authListByUserId({ userId: useGlobalStore.getState().userId })
        .then((resp) => {
          useGlobalStore.setState({ isAuthReady: true, menuList: getMenuList(mainRoutes, resp.data || []) });
        })
        .catch(() => {
          useGlobalStore.setState({ isAuthReady: true });
        });
    } else {
      // empty user data
      useGlobalStore.setState({ userId: null, token: null, userInfo: null, });
    }
  },
  (state) => state.isLogin,
);

export default useGlobalStore;
