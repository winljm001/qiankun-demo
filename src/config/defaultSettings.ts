import type { CheckboxOptionType } from 'antd'

// 表单栅格配置
const fromRowProps = { gutter: { xs: 0, sm: 24 } }
const fromColProps = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 8 },
}

// 列表上查询条件表单布局配置
const listSearchFromItemProps = {
  rowProps: { gutter: { xs: 12, sm: 24 } },
  colProps: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
    xl: { span: 8 },
    xxl: { span: 6 },
  },
}
const listSearchFromLayout = {
  small: {
    rowProps: { gutter: { xs: 24, sm: 24 } },
    colProps: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: 12 },
      xl: { span: 12 },
      xxl: { span: 12 },
    },
  },
  middle: {
    rowProps: { gutter: { xs: 12, sm: 24 } },
    colProps: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: 8 },
      xl: { span: 8 },
      xxl: { span: 6 },
    },
  },
  large: {
    rowProps: { gutter: { xs: 12, sm: 24 } },
    colProps: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: 8 },
      xl: { span: 8 },
      xxl: { span: 6 },
    },
  },
}
const listSearchFromProps = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
    md: { span: 10 },
    lg: { span: 10 },
    xl: { span: 8 },
    xxl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
    md: { span: 14 },
    lg: { span: 14 },
    xl: { span: 16 },
    xxl: { span: 16 },
  },
}

// 启用/禁用状态配置
const StatusOptions: Array<CheckboxOptionType> = [
  {
    label: '启用',
    value: 1,
  },
  {
    label: '禁用',
    value: 99,
  },
]

// 单列表单配置
const fromSingleLayoutProps = {
  labelCol: {
    xxl: {
      span: 24,
    },
    md: {
      span: 24,
    },
    xs: {
      span: 24,
    },
  },
  wrapperCol: {
    xxl: {
      span: 6,
    },
    md: {
      span: 12,
    },
    xs: {
      span: 12,
    },
  },
}

export {
  fromColProps,
  fromRowProps,
  listSearchFromProps,
  listSearchFromItemProps,
  listSearchFromLayout,
  StatusOptions,
  fromSingleLayoutProps,
}
