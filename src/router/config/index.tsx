import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';
import Layouts from '@/layouts/commonLayout/index';

import { Redirect } from 'react-router-dom';
import { BASE_PATH } from './basePath';
import React from 'react';
const modules = import.meta.globEager('./**/index.ts');
let config: RouteConfig[] = [];
// eslint-disable-next-line guard-for-in
for (const path in modules) {
  config.push(...modules[path].default);
}
export const mainRoutes: RouteConfig[] = [
  {
    path: BASE_PATH,
    exact: true,
    title: '首页',
    component: loadable(() => import('@/pages/home')),
  },
  ...config,
];
const routes: RouteConfig[] = [
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
    path: BASE_PATH,
    component: Layouts,
    routes: mainRoutes,
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/404/index')),
  },
];
export default routes;
