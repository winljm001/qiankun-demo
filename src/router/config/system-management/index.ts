import React from 'react';
import loadable from '@loadable/component';
import BlankLayout from '@/layouts/blankLayout/index';
import { BASE_URL, GOODS_MANAGEMENT } from './path';
import { RouteConfig } from 'react-router-config';
const routes: RouteConfig[] = [
  {
    path: BASE_URL,
    title: '系统管理',
    component: BlankLayout,
    meta: {
      inMenu: true,
    },
    routes: [
      {
        path: GOODS_MANAGEMENT,
        title: '果品管理',
        exact: true,
        meta: {
          inMenu: true,
        },
        component: loadable(() => import('@/pages/system-management/goods-management/list/index')),
      },
    ],
  },
];

export default routes;
