import React from 'react'
import loadable from '@loadable/component'
import { ApartmentOutlined } from '@ant-design/icons'
import BlankLayout from '@/layouts/blank'
import type { CustomRouteConfig } from '@/router/config/types'
import {
  BASE_URL,
  DATA_REPORT_PURCHASE,
  DATA_REPORT_SALES,
  DATA_REPORT_SUMMARY,
  DATA_REPORT_PRODUCE,
  DATA_REPORT_PRODUCE_DAY,
  DATA_REPORT_PRODUCE_SINGLE_PRODUCT_LABOR,
  DATA_REPORT_PRODUCE_LOSS_STATISTICS,
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
        path: DATA_REPORT_PURCHASE,
        meta: {
          menu: {
            title: '采购报表',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '采购报表' }],
          },
        },
        component: loadable(() => import('@/pages/data-report/purchase')),
      },
      {
        path: DATA_REPORT_PRODUCE,
        meta: {
          menu: {
            title: '生产报表',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '生产报表' }],
          },
        },
        component: loadable(() => import('@/pages/data-report/produce')),
        routes: [
          {
            path: DATA_REPORT_PRODUCE_DAY,
            meta: {
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '生产报表' }, { name: '生产日报表' }],
              },
            },
            component: loadable(() => import('@/pages/data-report/produce/day')),
          },
          {
            path: DATA_REPORT_PRODUCE_SINGLE_PRODUCT_LABOR,
            meta: {
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '生产报表' }, { name: '单品人工成本表' }],
              },
            },
            component: loadable(() => import('@/pages/data-report/produce/single-product-labor')),
          },
          {
            path: DATA_REPORT_PRODUCE_LOSS_STATISTICS,
            meta: {
              breadcrumb: {
                items: [{ name: '基础管理' }, { name: '生产报表' }, { name: '损耗统计表' }],
              },
            },
            component: loadable(() => import('@/pages/data-report/produce/loss-statistics')),
          },
        ],
      },
      {
        path: DATA_REPORT_SALES,
        meta: {
          menu: {
            title: '销售报表',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '销售报表' }],
          },
        },
        component: loadable(() => import('@/pages/data-report/sales')),
      },
      {
        path: DATA_REPORT_SUMMARY,
        meta: {
          menu: {
            title: '汇总报表',
          },
          breadcrumb: {
            items: [{ name: '基础管理' }, { name: '汇总报表' }],
          },
        },
        component: loadable(() => import('@/pages/data-report/summary')),
      },
    ],
  },
]

export default routes
