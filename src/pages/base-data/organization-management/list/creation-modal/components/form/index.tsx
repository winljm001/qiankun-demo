import React, { forwardRef, useImperativeHandle } from 'react'
import { Form as AntdForm, FormInstance, Input } from 'antd'

/** 表单值 */
export interface Values {
  /** 组织架构名称 */
  name: string
}
/** 组件props */
interface IProps {
  initialValues: Values
}
/** 暴露接口 */
export interface Handles {
  /** 表单实例 */
  form: FormInstance<Values>
}

/**
 * 创建组织架构分组表单
 */
const Form = forwardRef<Handles, IProps>(({ initialValues }, ref) => {
  const [form] = AntdForm.useForm<Values>()
  useImperativeHandle(ref, () => ({
    form,
  }))
  return (
    <AntdForm<Values> form={form} initialValues={initialValues} layout="vertical">
      <AntdForm.Item label="组织架构名称" name="name" rules={[{ required: true, message: '请输入组织架构名称' }]}>
        <Input autoFocus maxLength={20} placeholder="请输入组织架构名称（不超过20个字）" />
      </AntdForm.Item>
    </AntdForm>
  )
})

export default Form
