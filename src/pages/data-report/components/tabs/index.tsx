import React, { memo } from 'react'
import { Tabs } from 'antd'

import Styles from './index.module.less'

const { TabPane } = Tabs

interface CustomTabsProps {
  options: { value: string; label: string }[]
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
}

const CustomTabs: React.FC<CustomTabsProps> = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={Styles.tabs}>
      <Tabs defaultActiveKey={defaultValue} activeKey={value} onChange={onChange}>
        {options.map((item) => {
          return <TabPane key={item.value} tab={item.label} />
        })}
      </Tabs>
    </div>
  )
}

export default memo(CustomTabs)
