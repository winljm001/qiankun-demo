import React from 'react';
import loadable from '@loadable/component';
import BlankLayout from '@/layouts/blankLayout/index';
import { BASE_URL, GOODS_MANAGEMENT, GOODS_MANAGEMENT_ADD, SKU_MANAGEMENT, SPEC_MANAGEMENT } from './path';
import { CustomRouteConfig } from '../index';
const routes: CustomRouteConfig[] = [
  {
    path: BASE_URL,
    component: BlankLayout,
    authKey: '211',
    meta: {
      menuText: '系统管理',
      menuIcon: 'SettingOutlined',
    },
    routes: [
      {
        path: GOODS_MANAGEMENT,
        authKey: '211011',
        meta: {
          menuText: '果品管理',
        },
        component: loadable(() => import('@/pages/system-management/goods-management/list/index')),
        breadcrumb: [{ name: '系统管理' }, { name: '果品管理' }],
        routes: [
          {
            path: GOODS_MANAGEMENT_ADD,
            exact: true,
            meta: {
              contentPadding: 0,
            },
            component: loadable(() => import('@/pages/system-management/goods-management/add/index')),
            breadcrumb: [{ name: '系统管理' }, { name: '果品管理', path: GOODS_MANAGEMENT }],
          },
          {
            path: `${SKU_MANAGEMENT}/:id`,
            exact: true,
            component: loadable(() => import('@/pages/system-management/goods-management/sku-management')),
            breadcrumb: [{ name: '系统管理' }, { name: '果品管理', path: GOODS_MANAGEMENT }, { name: 'SKU管理' }],
          },
          {
            path: `${SPEC_MANAGEMENT}/:id`,
            exact: true,
            meta: {
              contentPadding: 0,
            },
            component: loadable(() => import('@/pages/system-management/goods-management/spec-management')),
            breadcrumb: [{ name: '系统管理' }, { name: '果品管理', path: GOODS_MANAGEMENT }, { name: '规格管理' }],
          },
        ],
      },
    ],
  },
];

export default routes;
