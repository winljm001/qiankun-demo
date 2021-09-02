import React, { FC } from 'react'
import { Form, Row, Col, Input, Button, Space, FormInstance } from 'antd'

import { listSearchFromItemProps } from '@/config/defaultSettings'
import AsyncSelect from '@/components/async-select'
import { TypeOptionDocument } from '@/graphql/operations/base-data/__generated__/commodity-management'

interface IProps {
  /* 查询之后刷新列表 */
  submit: (values) => void
  reset: () => void
  getFilterValues: (values) => void
  form: FormInstance
}

const Filter: FC<IProps> = ({ form, submit, reset, getFilterValues }) => {
  /* 提交表单 */
  const onFinish = (values) => {
    getFilterValues(values)
    submit(values)
  }

  return (
    <Form form={form} onFinish={onFinish} initialValues={{ commodityTypeId: '', categoryName: '' }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="commodityTypeId" label="商品类型">
            <AsyncSelect hasAny remote={{ gql: TypeOptionDocument, gqlKey: 'typeOption' }} />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="categoryName" label="商品分类">
            <Input placeholder="请输入查询" />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item>
            <Space size={24}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                onClick={() => {
                  reset()
                  form.resetFields()
                }}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Filter
