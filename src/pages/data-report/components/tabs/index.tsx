import React, { memo } from 'react'

// import { Tabs } from 'antd'

import Styles from './index.module.less'

// const { TabPane } = Tabs

interface CustomTabsProps {
  options: { value: string; label: string }[]
  value?: string
  defaultValue?: string
}

const CustomTabs: React.FC<CustomTabsProps> = () => {
  return <p className={Styles.tabs}>CustomTabs</p>
}

export default memo(CustomTabs)
