import { Form, Input } from 'antd'
import React, { forwardRef, useImperativeHandle } from 'react'
import AsyncSelect from '@/components/async-select'
import { TypeOptionDocument } from '@/graphql/operations/base-data/__generated__/commodity-management'
import { FormRef } from '../../index'

/* 新增or编辑模式 */
export type EditMode = 'editMode' | 'addMode' | null

export interface InitialValues {
  categorySort: number
  commodityTypeId: number
  categoryId?: number
  commodityTypeName?: string
  nameLocale: { name: string; locale: string }[]
}

interface IProps {
  /*  初始化值 */
  initialValues?: InitialValues
  /* 新增or编辑模式 */
  mode: EditMode
}

const NewOrEditForm = forwardRef<FormRef, IProps>(({ initialValues, mode }, ref) => {
  const [form] = Form.useForm()
  useImperativeHandle(ref, () => ({
    form,
  }))
  return (
    <Form form={form} initialValues={{ ...initialValues }} layout="vertical">
      <Form.Item name="categoryId" hidden>
        <Input />
      </Form.Item>
      <Form.Item label="商品类型" name="commodityTypeId" rules={[{ required: true, message: '请选择商品类型!' }]}>
        {mode === 'editMode' ? (
          initialValues?.commodityTypeName
        ) : (
          <AsyncSelect remote={{ gql: TypeOptionDocument, gqlKey: 'typeOption' }} />
        )}
      </Form.Item>

      <Form.Item
        label="分类名称(中文)"
        name={['nameLocale', 0, 'name']}
        rules={[{ required: true, message: '请输入分类名称!' }]}>
        <Input maxLength={10} placeholder="请输入（不超10个字）" />
      </Form.Item>
      <Form.Item name={['nameLocale', 0, 'locale']} hidden initialValue="zh-CN" />
      <Form.Item label="分类名称(英文)" name={['nameLocale', 1, 'name']}>
        <Input maxLength={10} placeholder="请输入（不超10个字）" />
      </Form.Item>
      <Form.Item name={['nameLocale', 1, 'locale']} hidden initialValue="en-US" />
      <Form.Item label="分类名称(泰文)" name={['nameLocale', 2, 'name']}>
        <Input maxLength={10} placeholder="请输入（不超10个字）" />
      </Form.Item>
      <Form.Item name={['nameLocale', 2, 'locale']} hidden initialValue="th-TH" />
      <Form.Item label="分类名称(越南文)" name={['nameLocale', 3, 'name']}>
        <Input maxLength={10} placeholder="请输入（不超10个字）" />
      </Form.Item>
      <Form.Item name={['nameLocale', 3, 'locale']} hidden initialValue="vi-VN" />

      <Form.Item
        label="分类排序"
        name="categorySort"
        rules={[
          { required: true, message: '请输入分类排序!' },
          { pattern: /^\+?[1-9]\d*$/, message: '请输入大于0的整数!' },
        ]}>
        <Input placeholder="请输入数字" />
      </Form.Item>
    </Form>
  )
})
export default NewOrEditForm
