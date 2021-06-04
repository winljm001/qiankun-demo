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
  };
  setUserSetting: (value: Partial<State['userSetting']>) => void;
  /** 退出 */
  logout: (callback?: () => void) => void;
};
const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        isLogin: false,
        userId: null,
        token: null,
        userInfo: {
          companyName: '',
          username: '',
        },
        userSetting: {
          collapsed: false,
        },
        isAuthReady: false,
        setMenuList: (menuList) => {
          set({ menuList });
        },
        setUserSetting: (value) => {
          set({ userSetting: { ...get().userSetting, ...value } });
        },
        logout: (callback) => {
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
      useGlobalStore.setState({ userId: null, token: null, userInfo: null });
    }
  },
  (state) => state.isLogin,
);
useGlobalStore.subscribe((state) => {
  console.log(state, '------log')
})

export default useGlobalStore;
