import React, { FC } from 'react'
import { Form, Row, Col, Input, Button, Space } from 'antd'
import type { FormInstance } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import AsyncSelect from '@/components/async-select'
import {
  PeachCategoryOptionDocument,
  PeachCommodityTypeOptionDocument,
} from '@/graphql/operations/wholesale-management/__generated__/commodity'

interface IProps {
  submit: (values) => void
  reset: () => void
  form: FormInstance
}

const Filter: FC<IProps> = ({ submit, reset, form }) => {
  return (
    <Form form={form} initialValues={{ pageCommodityInput: { typeId: '', categoryId: '' } }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name={['pageCommodityInput', 'typeId']} label="商品类型">
            <AsyncSelect
              hasAny
              remote={{
                gql: PeachCommodityTypeOptionDocument,
                gqlKey: 'peachCommodityTypeOption',
              }}
            />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name={['pageCommodityInput', 'categoryId']} label="商品品类">
            <AsyncSelect
              hasAny
              remote={{
                gql: PeachCategoryOptionDocument,
                gqlKey: 'peachCategoryOption',
              }}
            />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name={['pageCommodityInput', 'commodityName']} label="商品名称">
            <Input placeholder="请输入查询" />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item>
            <Space size={24}>
              <Button type="primary" htmlType="submit" onClick={submit}>
                查询
              </Button>
              <Button onClick={reset}>重置</Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Filter
