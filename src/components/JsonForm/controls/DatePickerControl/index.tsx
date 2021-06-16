import React from 'react'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/lib/date-picker'
import { NamePath } from 'rc-field-form/lib/interface'

type DateControlConfig = {
  pickerType: 'DATE'
} & DatePickerProps
type DateRangeControlConfig = {
  pickerType: 'RANGE'
  related?: [NamePath, NamePath]
} & RangePickerProps
export type DatePickerControlConfig = DateControlConfig | DateRangeControlConfig

const DatePickerControl: React.FC<DatePickerControlConfig> = ({ pickerType, ...pickerConfig }) => {
  switch (pickerType) {
    case 'RANGE': {
      const { related, ...rangePickerProps } = pickerConfig as DateRangeControlConfig
      return <DatePicker.RangePicker {...(rangePickerProps as RangePickerProps)} />
    }
    default:
      return <DatePicker {...(pickerConfig as DatePickerProps)} />
  }
}

export default DatePickerControl
