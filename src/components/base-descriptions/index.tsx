import React from 'react'
import type { DescriptionsProps } from 'antd'
import { Descriptions } from 'antd'
interface DescriptionsItem {
  label: string
  props?: DescriptionsProps
  value: string | React.ReactNode
}
interface IProps {
  data: DescriptionsItem[]
}
const BaseDescriptions: React.FC<IProps> = ({ data }) => {
  return (
    <Descriptions>
      {data?.map((v, i) => {
        return (
          <Descriptions.Item label={v?.label} key={i} {...v?.props}>
            {v?.value}
          </Descriptions.Item>
        )
      })}
    </Descriptions>
  )
}

export default BaseDescriptions
