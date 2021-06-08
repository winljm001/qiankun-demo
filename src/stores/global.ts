import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes, CustomRouteConfig } from '@/router/config/index';
import { getMenuList, getHomepageUrl } from '@/utils/tools';
import { history } from '@/router';
import { BASE_PATH } from '@/router/config/basePath'
import { Modal } from 'antd';
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
  /** 用户设置 */
  userSetting: {
    /** 菜单是否收起 */
    collapsed: boolean;
  };
  setUserSetting: (value: Partial<State['userSetting']>) => void;
  /** 退出 */
  logout: (callback?: () => void) => void;
};
export const name = 'global-storage';
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
        setUserSetting: (value) => {
          set({ userSetting: { ...get().userSetting, ...value } });
        },
        logout: (callback) => {
          set({ isLogin: false });
          callback?.();
        },
      }),
      {
        name,
        getStorage: () => localStorage,
        // only these props will be persisted
        whitelist: ['isLogin', 'userId', 'token', 'userSetting', 'userInfo'],
      },
    ),
  ),
);

useGlobalStore.subscribe(
  (isLogin) => {
    // 登录成功执行操作
    if (isLogin) {
      // 延迟执行（因为此时token还未存储到localStorage，请求中拿不到token）
      setTimeout(() => {
        authListByUserId({ userId: useGlobalStore.getState().userId })
          .then((resp) => {
            const menuList = getMenuList(mainRoutes, resp.data || []);
            if (location.pathname === BASE_PATH) {
              const homepageUrl = getHomepageUrl(menuList);
              // 获取首页路由（第一个可选中菜单项），若无可跳转路由，则提示无访问权限
              if (homepageUrl) {
                history.replace(homepageUrl);
              } else {
                Modal.warning({
                  title: '系统提示',
                  content: '暂无访问权限',
                  okText: '知道了',
                });
              }
            }
            useGlobalStore.setState({ isAuthReady: true, menuList: menuList });
          })
          .catch(() => {
            useGlobalStore.setState({ isAuthReady: true });
          });
      });
    } else {
      // empty user data
      useGlobalStore.setState({ userId: null, token: null, userInfo: null });
    }
  },
  (state) => state.isLogin,
);

export default useGlobalStore;
