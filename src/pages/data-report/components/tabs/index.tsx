import React, { memo } from 'react'
import { Tabs } from 'antd'

import Styles from './index.module.less'

const { TabPane } = Tabs

interface CustomTabsProps {
  options: { value: string; label: string }[]
  value?: string
  defaultValue?: string
}

const CustomTabs: React.FC<CustomTabsProps> = ({ options, defaultValue, value }) => {
  return (
    <div className={Styles.tabs}>
      <Tabs defaultActiveKey={defaultValue} activeKey={value}>
        {options.map((item) => {
          return <TabPane key={item.value} tab={item.label} />
        })}
      </Tabs>
    </div>
  )
}

export default memo(CustomTabs)
