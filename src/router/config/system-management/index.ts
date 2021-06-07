import React from 'react';
import loadable from '@loadable/component';
import BlankLayout from '@/layouts/blankLayout/index';
import { BASE_URL, GOODS_MANAGEMENT, GOODS_MANAGEMENT_ADD, INGREDIENTS_MANAGEMENT, SKU_MANAGEMENT } from './path';
import { CustomRouteConfig } from '../index';
const routes: CustomRouteConfig[] = [
  {
    path: BASE_URL,
    component: BlankLayout,
    meta: {
      menuText: '系统管理',
      menuIcon: 'SettingOutlined',
    },
    routes: [
      {
        path: GOODS_MANAGEMENT,
        exact: true,
        meta: {
          menuText: '果品管理',
        },
        component: loadable(() => import('@/pages/system-management/goods-management/list/index')),
        breadcrumb: [{ name: '系统管理' }, { name: '果品管理' }],
      },
      {
        path: INGREDIENTS_MANAGEMENT,
        exact: true,
        meta: {
          menuText: '辅料管理',
        },
        component: loadable(() => import('@/pages/system-management/goods-management/list/index')),
        breadcrumb: [{ name: '系统管理' }, { name: '果品管理' }],
      },
      {
        path: GOODS_MANAGEMENT_ADD,
        exact: true,
        component: loadable(() => import('@/pages/system-management/goods-management/add/index')),
        breadcrumb: [{ name: '系统管理' }, { name: '果品管理' }],
      },
      {
        path: SKU_MANAGEMENT,
        exact: true,
        component: loadable(() => import('@/pages/system-management/goods-management/sku-management')),
        breadcrumb: [{ name: '系统管理' }, { name: '果品管理' }, { name: 'SKU管理' }],
      },
    ],
  },
];

export default routes;
