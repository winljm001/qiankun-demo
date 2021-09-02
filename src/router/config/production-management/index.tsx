import React from 'react'
import loadable from '@loadable/component'
import { FileProtectOutlined } from '@ant-design/icons'
import BlankLayout from '@/layouts/blank'
import { CustomRouteConfig } from '@/router/config/types.td'
import {
  BASE_URL,
  PRODUCTION_COMMODITY_ADD,
  PRODUCTION_COMMODITY_LIST,
  PRODUCTION_COMMODITY_SKU,
  FINISHED_PRODUCT_BOM_LIST,
  FINISHED_PRODUCT_BOM_ADD,
  FINISHED_PRODUCT_BOM_EDIT,
} from './path'

const routes: CustomRouteConfig[] = [
  {
    path: BASE_URL,
    component: BlankLayout,
    meta: {
      menu: {
        title: '生产管理',
        icon: <FileProtectOutlined />,
      },
    },
    routes: [
      {
        path: PRODUCTION_COMMODITY_LIST,
        component: loadable(() => import('@/pages/production-management/commodity/list')),
        meta: {
          menu: {
            title: '商品管理',
          },
          breadcrumb: {
            items: [{ name: '生产管理' }, { name: '商品管理' }],
          },
        },
        routes: [
          {
            path: PRODUCTION_COMMODITY_ADD,
            component: loadable(() => import('@/pages/production-management/commodity/add')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '生产管理' },
                  { name: '商品管理', path: PRODUCTION_COMMODITY_LIST },
                  { name: '新增商品' },
                ],
              },
            },
          },
          {
            path: `${PRODUCTION_COMMODITY_SKU}/:id`,
            component: loadable(() => import('@/pages/production-management/commodity/sku')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '生产管理' },
                  { name: '商品管理', path: PRODUCTION_COMMODITY_LIST },
                  { name: 'sku管理' },
                ],
              },
            },
          },
        ],
      },

      {
        path: FINISHED_PRODUCT_BOM_LIST,
        component: loadable(() => import('@/pages/production-management/finished-product-BOM/list')),
        meta: {
          menu: {
            title: '成品BOM管理',
          },
          breadcrumb: {
            items: [{ name: '生产管理' }, { name: '成品BOM管理' }],
          },
        },
        routes: [
          {
            path: FINISHED_PRODUCT_BOM_ADD,
            component: loadable(() => import('@/pages/production-management/finished-product-BOM/add')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '生产管理' },
                  { name: '成品BOM管理', path: FINISHED_PRODUCT_BOM_LIST },
                  { name: '新增成品BOM' },
                ],
              },
            },
          },
          {
            path: `${FINISHED_PRODUCT_BOM_EDIT}/:BOMId/:SKUId`,
            component: loadable(() => import('@/pages/production-management/finished-product-BOM/edit')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '生产管理' },
                  { name: '成品BOM管理', path: FINISHED_PRODUCT_BOM_LIST },
                  { name: '编辑成品BOM' },
                ],
              },
            },
          },
        ],
      },
    ],
  },
]

export default routes
