import React from 'react'
import loadable from '@loadable/component'
import { ContainerOutlined } from '@ant-design/icons'
import BlankLayout from '@/layouts/blank'
import { CustomRouteConfig } from '@/router/config/types.td'
import {
  BASE_URL,
  BUSINESS_MANAGEMENT,
  REPORT_FORM,
  VIEW_INVENTORY_MANAGEMENT,
  INVENTORY_MANAGEMENT,
  VIEW_INVENTORY_MANAGEMENT_CHILD,
  WHOLESALE_COMMODITY_LIST,
  WHOLESALE_COMMODITY_ADD,
  WHOLESALE_COMMODITY_SKU,
} from './path'

const routes: CustomRouteConfig[] = [
  {
    path: BASE_URL,
    component: BlankLayout,
    meta: {
      menu: {
        title: '批发管理',
        icon: <ContainerOutlined />,
      },
    },
    routes: [
      {
        path: WHOLESALE_COMMODITY_LIST,
        component: loadable(() => import('@/pages/wholesale-management/commodity/list')),
        meta: {
          menu: {
            title: '商品管理',
          },
          breadcrumb: {
            items: [{ name: '批发管理' }, { name: '商品管理' }],
          },
        },
        routes: [
          {
            path: `${WHOLESALE_COMMODITY_SKU}/:id`,
            component: loadable(() => import('@/pages/wholesale-management/commodity/sku')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '批发管理' },
                  { name: '商品管理', path: WHOLESALE_COMMODITY_LIST },
                  { name: 'sku管理' },
                ],
              },
            },
          },
          {
            path: WHOLESALE_COMMODITY_ADD,
            component: loadable(() => import('@/pages/wholesale-management/commodity/add')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '批发管理' },
                  { name: '商品管理', path: WHOLESALE_COMMODITY_LIST },
                  { name: '新增商品' },
                ],
              },
            },
          },
        ],
      },
      {
        path: BUSINESS_MANAGEMENT,
        component: loadable(() => import('@/pages/wholesale-management/business-management')),
        meta: {
          menu: {
            title: '商户管理',
          },
          breadcrumb: {
            items: [{ name: '批发管理' }, { name: '商户管理' }],
          },
        },
      },
      {
        path: INVENTORY_MANAGEMENT,
        component: BlankLayout,
        meta: {
          menu: {
            title: '库存管理',
          },
        },
        routes: [
          {
            exact: false,
            path: VIEW_INVENTORY_MANAGEMENT,
            component: loadable(
              () => import('@/pages/wholesale-management/inventory-management/view-inwentory-management'),
            ),
            meta: {
              menu: {
                title: '盘点查看',
              },
              breadcrumb: {
                items: [{ name: '批发管理' }, { name: '库存管理' }, { name: '盘点查看' }],
              },
            },
            routes: [
              {
                exact: true,
                path: `${VIEW_INVENTORY_MANAGEMENT_CHILD}/:id`,
                component: loadable(
                  () => import('@/pages/wholesale-management/inventory-management/view-inventory-management-detail'),
                ),
                meta: {
                  breadcrumb: {
                    items: [
                      { name: '批发管理' },
                      { name: '库存管理' },
                      { name: '盘点查看', path: VIEW_INVENTORY_MANAGEMENT },
                      { name: '查看' },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      {
        path: REPORT_FORM,
        component: loadable(() => import('@/pages/wholesale-management/report-form')),
        meta: {
          menu: {
            title: '报表',
          },
          breadcrumb: {
            items: [{ name: '批发管理' }, { name: '报表' }],
          },
        },
      },
    ],
  },
]

export default routes
