import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes } from '@/router/config/index';
import { getMenuList } from '@/utils/tools';
interface State {
  /** menuList */
  menuList: any[];
  setMenuList: () => void;
  /** 是否登录 */
  isLogin: boolean;
  /** token */
  token: string;
  /** 用户信息 */
  userInfo: any;
  /** 退出 */
  logout: () => void;
  [key: string]: any;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        isLogin: null,
        token:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6MSwib3JnYW5pemF0aW9uTmFtZSI6IumHjeW6hua0quS5neaenOWTgeiCoeS7veaciemZkOWFrOWPuOmHjeW6huWIhuWFrOWPuCIsInVzZXJfbmFtZSI6Iua4uOaAuyIsInNjb3BlIjpbImFsbCJdLCJpZCI6MSwiZXhwIjoxNjIzMzEwNDQxLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIwYTI1M2QzMi0yMWEyLTQyZTMtYjk2ZS02ZTYxOWJhZTcxZDgiLCJwbGF0Zm9ybSI6MTAsImNsaWVudF9pZCI6ImNsaWVudC1hcHAifQ.MvEtXmZUBBNmgpAqrP229aOszEVWIgH4DMLYd_KvLqVG3NpckiFV9_JkptVk35pGgPQqC0_-WsEzFJngFjvbcenzn7eMphMVHPKzusFAxpvrIVenRfa1SNSCmQGxygfVIGL3sXBYZ76oqn_VNpenIji8Tv9spK_kul9vx2guKhw',
        userInfo: null,
        setMenuList: () => {
          set({
            menuList: getMenuList(mainRoutes),
          });
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
export default useGlobalStore;
