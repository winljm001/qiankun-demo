import React from 'react'
import loadable from '@loadable/component'
import { ApartmentOutlined } from '@ant-design/icons'
import BlankLayout from '@/layouts/blank'
import type { CustomRouteConfig } from '@/router/config/types'
import { BASE_URL, DATA_REPORT_PURCHASE } from './path'

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
    ],
  },
]

export default routes
