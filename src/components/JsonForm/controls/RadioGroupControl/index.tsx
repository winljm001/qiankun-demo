import React from 'react'
import type { RadioGroupProps } from 'antd'
import { Radio } from 'antd'

export type RadioGroupControlProps = RadioGroupProps

const RadioGroupControl: React.FC<RadioGroupControlProps> = (props) => {
  return <Radio.Group {...props} />
}

export default RadioGroupControl
