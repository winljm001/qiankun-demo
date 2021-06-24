import React from 'react'
import type { SelectProps } from 'antd'
import { Select } from 'antd'

export type SelectControlProps = SelectProps<any>

const SelectControl: React.FC<SelectControlProps> = (props) => {
  return <Select {...props} />
}

export default SelectControl
