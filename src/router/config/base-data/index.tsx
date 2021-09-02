import React from 'react'
import loadable from '@loadable/component'
import { ApartmentOutlined } from '@ant-design/icons'
import BlankLayout from '@/layouts/blank'
import { CustomRouteConfig } from '@/router/config/types.td'
import {
  BASE_URL,
  COMMODITY,
  COMMODITY_MANAGEMENT_LIST,
  COMMODITY_MANAGEMENT_ADD,
  COMMODITY_MANAGEMENT_EDIT_SPEC,
  COMMODITY_MANAGEMENT_SKU,
  COMMODITY_CLASSIFICATION,
  COMMODITY_VARIETY_MANAGEMENT,
  COMMODITY_PLACE_MANAGEMENT,
  ORGANIZATIONAL_MANAGEMENT,
  ORGANIZATIONAL_MANAGEMENT_TREE,
  STAFF_MANAGEMENT,
  VARIETIES_GROUP_MANAGEMENT,
  VARIETIES_GROUP_SKU_MANAGEMENT,
} from './path'

const routes: CustomRouteConfig[] = [
  {
    path: BASE_URL,
    component: BlankLayout,
    meta: {
      menu: {
        title: '基础管理',
        icon: <ApartmentOutlined />,
      },
    },
    routes: [
      {
        path: COMMODITY,
        component: BlankLayout,
        meta: {
          menu: {
            title: '商品管理',
          },
        },
        routes: [
          {
            path: COMMODITY_MANAGEMENT_LIST,

            meta: {
              menu: {
                title: '商品基础管理',
              },
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '商品管理' }, { name: '商品基础管理' }],
              },
            },
            component: loadable(() => import('@/pages/base-data/commodity-management/commodity-management/list')),
            routes: [
              {
                path: COMMODITY_MANAGEMENT_ADD,

                meta: {
                  breadcrumb: {
                    items: [
                      { name: '基础管理' },
                      { name: '商品管理' },
                      { name: '商品基础管理', path: COMMODITY_MANAGEMENT_LIST },
                      { name: '添加商品' },
                    ],
                  },
                },
                component: loadable(() => import('@/pages/base-data/commodity-management/commodity-management/add')),
              },
              {
                path: `${COMMODITY_MANAGEMENT_EDIT_SPEC}/:id`,

                meta: {
                  breadcrumb: {
                    items: [
                      { name: '基础管理' },
                      { name: '商品管理' },
                      { name: '商品基础管理', path: COMMODITY_MANAGEMENT_LIST },
                      { name: '修改规格' },
                    ],
                  },
                },
                component: loadable(
                  () => import('@/pages/base-data/commodity-management/commodity-management/edit-spec'),
                ),
              },
              {
                path: `${COMMODITY_MANAGEMENT_SKU}/:id`,
                meta: {
                  breadcrumb: {
                    items: [
                      { name: '基础管理' },
                      { name: '商品管理' },
                      { name: '商品基础管理', path: COMMODITY_MANAGEMENT_LIST },
                      { name: '管理SKU' },
                    ],
                  },
                },
                component: loadable(() => import('@/pages/base-data/commodity-management/commodity-management/sku')),
              },
            ],
          },
          {
            path: COMMODITY_CLASSIFICATION,
            meta: {
              menu: {
                title: '商品分类',
              },
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '商品管理' }, { name: '商品分类' }],
              },
            },
            component: loadable(() => import('@/pages/base-data/commodity-management/classification-management')),
            routes: [
              {
                path: `${COMMODITY_VARIETY_MANAGEMENT}/:id`,
                meta: {
                  breadcrumb: {
                    items: [
                      { name: '基础管理' },
                      { name: '商品管理' },
                      { name: '商品分类', path: COMMODITY_CLASSIFICATION },
                      { name: '商品管理品种/产地' },
                    ],
                  },
                },
                component: loadable(
                  () => import('@/pages/base-data/commodity-management/classification-management/variety-management'),
                ),
              },
            ],
          },
          {
            path: COMMODITY_PLACE_MANAGEMENT,
            component: loadable(() => import('@/pages/base-data/commodity-management/place-management')),
            meta: {
              menu: {
                title: '商品产地管理',
              },
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '商品产地管理' }],
              },
            },
          },
        ],
      },
      {
        path: ORGANIZATIONAL_MANAGEMENT,
        component: loadable(() => import('@/pages/base-data/organization-management/list')),
        meta: {
          menu: {
            title: '组织架构管理',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '组织架构管理' }],
          },
        },
        routes: [
          {
            path: `${ORGANIZATIONAL_MANAGEMENT_TREE}/:id`,
            component: loadable(() => import('@/pages/base-data/organization-management/tree')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '基础管理' },
                  { name: '组织架构管理', path: ORGANIZATIONAL_MANAGEMENT },
                  { name: '编辑' },
                ],
              },
            },
          },
        ],
      },
      {
        path: STAFF_MANAGEMENT,
        component: loadable(() => import('@/pages/base-data/staff-management')),
        meta: {
          menu: {
            title: '员工管理',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '员工管理' }],
          },
        },
      },

      {
        path: VARIETIES_GROUP_MANAGEMENT,
        component: loadable(() => import('@/pages/base-data/varieties-group-management')),
        meta: {
          menu: {
            title: '品种组管理',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '品种组管理' }],
          },
        },
        routes: [
          {
            path: `${VARIETIES_GROUP_SKU_MANAGEMENT}/:id`,
            component: loadable(() => import('@/pages/base-data/varieties-group-management/sku-management')),
            meta: {
              breadcrumb: {
                items: [
                  { name: '基础管理' },
                  { name: '品种组管理', path: VARIETIES_GROUP_MANAGEMENT },
                  { name: '管理SKU' },
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
