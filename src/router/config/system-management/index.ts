// import React from 'react';
import loadable from '@loadable/component'
import BlankLayout from '@/layouts/blankLayout/index'
import { CustomRouteConfig } from '../index'
import {
  BASE_URL,
  GOODS_MANAGEMENT,
  GOODS_MANAGEMENT_ADD,
  SKU_MANAGEMENT,
  SPEC_MANAGEMENT,
  SUBSIDIARY_MANAGEMENT,
  SUBSIDIARY_MANAGEMENT_ADD,
  SUBSIDIARY_SKU_MANAGEMENT,
  SUBSIDIARY_SPEC_MANAGEMENT,
  FINISHED_PRODUCT_BOM_MANAGEMENT,
  FINISHED_PRODUCT_BOM_MANAGEMENT_ADD,
  FINISHED_PRODUCT_BOM_MANAGEMENT_DETAILS,
  FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT,
} from './path'
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
      {
        path: SUBSIDIARY_MANAGEMENT,
        authKey: '211012',
        meta: {
          menuText: '辅料管理',
        },
        component: loadable(() => import('@/pages/system-management/subsidiary-management/list/index')),
        breadcrumb: [{ name: '系统管理' }, { name: '辅料管理' }],
        routes: [
          {
            path: SUBSIDIARY_MANAGEMENT_ADD,
            exact: true,
            meta: {
              contentPadding: 0,
            },
            component: loadable(() => import('@/pages/system-management/subsidiary-management/add/index')),
            breadcrumb: [{ name: '系统管理' }, { name: '辅料管理', path: GOODS_MANAGEMENT }],
          },
          {
            path: `${SUBSIDIARY_SKU_MANAGEMENT}/:id`,
            exact: true,
            component: loadable(() => import('@/pages/system-management/subsidiary-management/sku-management')),
            breadcrumb: [{ name: '系统管理' }, { name: '辅料管理', path: GOODS_MANAGEMENT }, { name: 'SKU管理' }],
          },
          {
            path: `${SUBSIDIARY_SPEC_MANAGEMENT}/:id`,
            exact: true,
            meta: {
              contentPadding: 0,
            },
            component: loadable(() => import('@/pages/system-management/subsidiary-management/spec-management')),
            breadcrumb: [{ name: '系统管理' }, { name: '辅料管理', path: GOODS_MANAGEMENT }, { name: '规格管理' }],
          },
        ],
      },
      {
        path: FINISHED_PRODUCT_BOM_MANAGEMENT,
        meta: {
          menuText: '成品BOM管理',
        },
        component: loadable(() => import('@/pages/system-management/finished-product-BOM-management/list')),
        breadcrumb: [{ name: '系统管理' }, { name: '成品BOM管理' }],
        routes: [
          {
            path: FINISHED_PRODUCT_BOM_MANAGEMENT_ADD,
            exact: true,
            meta: {
              contentPadding: 0,
            },
            component: loadable(() => import('@/pages/system-management/finished-product-BOM-management/add')),
            breadcrumb: [{ name: '系统管理' }, { name: '成品BOM管理', path: FINISHED_PRODUCT_BOM_MANAGEMENT }],
          },
          {
            path: `${FINISHED_PRODUCT_BOM_MANAGEMENT_DETAILS}/:commodityBOMId`,
            exact: true,
            component: loadable(() => import('@/pages/system-management/finished-product-BOM-management/details')),
            breadcrumb: [{ name: '系统管理' }, { name: '成品BOM管理', path: FINISHED_PRODUCT_BOM_MANAGEMENT }],
          },
          {
            path: `${FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT}/:commodityBOMId`,
            exact: true,
            component: loadable(() => import('@/pages/system-management/finished-product-BOM-management/edit')),
            breadcrumb: [{ name: '系统管理' }, { name: '成品BOM管理', path: FINISHED_PRODUCT_BOM_MANAGEMENT }],
          },
        ],
      },
    ],
  },
]

export default routes
