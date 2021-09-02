import React, { memo } from 'react'

// import { Tabs } from 'antd'

import Styles from './index.module.less'

// const { TabPane } = Tabs

const CustomTabs: React.FC = () => {
  return <p className={Styles.tabs}>CustomTabs</p>
}

export default memo(CustomTabs)
