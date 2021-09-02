import React from 'react'
// import type { ColumnType } from 'antd/lib/table/interface'
import Tabs from '../components/tabs'
// import BaseCard from '@/components/base-card'

const tabsOptions = [
  {
    label: '原料采购',
    value: '1',
  },
  {
    label: '辅料采购',
    value: '2',
  },
]

/**
 * 采购报表
 */
const DataReportPurchase: React.FC = () => {
  return (
    <>
      <Tabs options={tabsOptions} />
      <p>采购报表</p>
    </>
  )
}

export default DataReportPurchase
