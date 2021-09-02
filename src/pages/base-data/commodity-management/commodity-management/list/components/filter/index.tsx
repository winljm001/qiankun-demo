import React, { FC } from 'react'
import { Form, Row, Col, Input, Button, Space } from 'antd'
import type { FormInstance } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'

interface IProps {
  submit: (values) => void
  reset: () => void
  form: FormInstance
}

const Filter: FC<IProps> = ({ submit, reset, form }) => {
  return (
    <Form form={form}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="commodityName" label="商品名称">
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
