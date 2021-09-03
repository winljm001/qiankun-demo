import React, { useEffect, useCallback } from 'react'
import type { RouteConfigComponentProps } from 'react-router-config'
import { renderRoutes } from 'react-router-config'

import {
  DATA_REPORT_PRODUCE_DAY,
  DATA_REPORT_PRODUCE_SINGLE_PRODUCT_LABOR,
  DATA_REPORT_PRODUCE_LOSS_STATISTICS,
} from '@/router/config/data-report/path'
import Tabs from '../components/tabs'

const tabsOptions = [
  {
    label: '生产日报表',
    value: DATA_REPORT_PRODUCE_DAY,
  },
  {
    label: '单品人工成本表',
    value: DATA_REPORT_PRODUCE_SINGLE_PRODUCT_LABOR,
  },
  {
    label: '损耗统计表',
    value: DATA_REPORT_PRODUCE_LOSS_STATISTICS,
  },
]

/**
 * 生产报表
 */
const DataReportProduce: React.FC<RouteConfigComponentProps> = ({
  route,
  history: {
    push,
    location: { pathname },
  },
}) => {
  useEffect(() => {
    if (tabsOptions.filter((to) => to.value === pathname).length === 0) {
      push(tabsOptions[0].value)
    }
  }, [pathname, push])

  const onChangeTabs = useCallback(
    (v: string) => {
      push(v)
    },
    [push],
  )

  return (
    <>
      <Tabs options={tabsOptions} value={pathname} onChange={onChangeTabs} />

      {renderRoutes(route!.routes)}
    </>
  )
}

export default DataReportProduce
