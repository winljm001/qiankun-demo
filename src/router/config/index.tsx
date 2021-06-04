import React, { CSSProperties } from 'react';
import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';
import Layouts from '@/layouts/commonLayout/index';
import * as Icons from '@ant-design/icons/lib/icons';
import { Redirect } from 'react-router-dom';
import { BASE_PATH } from './basePath';
import { BreadcrumbItem } from '@/layouts/commonLayout/components/breadcrubm';

const modules = import.meta.globEager('./**/index.ts');
let config: RouteConfig[] = [];
// eslint-disable-next-line guard-for-in
for (const path in modules) {
  config.push(...modules[path].default);
}
export interface CustomRouteConfig extends RouteConfig {
  /** 面包屑配置 */
  breadcrumb?: BreadcrumbItem[];
  /** 权限 */
  authKey?: string;
  /** 页面信息配置 */
  meta?: {
    /** 系统左侧菜单栏文案（为空或未配置则不会出现在菜单栏） */
    menuText?: string;
    /** 菜单按钮 */
    menuIcon?: keyof typeof Icons;
    /** 主内容区域padding（默认16px） */
    contentPadding?: CSSProperties['padding'];
  };
  /** 子路由 */
  routes?: CustomRouteConfig[];
}
export const mainRoutes: CustomRouteConfig[] = [
  {
    path: BASE_PATH,
    exact: true,
    component: loadable(() => import('@/pages/home')),
    meta: {
      menuText: '首页',
    },
    breadcrumb: [{ name: '首页' }, { name: '首页' }],
    routes: [
      {
        path: `${BASE_PATH}/test`,
        exact: true,
        component: loadable(() => import('@/pages/home')),
        breadcrumb: [{ name: '测试' }, { name: '测试' }],
        routes: [],
        meta: {
          menuText: '测试',
        },
      },
    ],
  },
  ...config,
];
const routes: CustomRouteConfig[] = [
  {
    path: BASE_PATH,
    component: Layouts,
    routes: mainRoutes,
  },
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={BASE_PATH} />,
  },
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('@/pages/login')),
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/404/index')),
  },
];
export default routes;
