import React, { memo } from 'react'
import type { FormInstance } from 'antd'
import { Form, Row, Col, Input, Button, Space } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'

interface IProps {
  form: FormInstance
  submit: () => void
  reset: () => void
}

const SearchForm: React.FC<IProps> = ({ form, submit, reset }) => {
  return (
    <Form form={form}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item label="品种组名称" name="name">
            <Input placeholder="请输入查询" />
          </Form.Item>
        </Col>

        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item>
            <Space size={24}>
              <Button type="primary" htmlType="submit" onClick={submit}>
                查询
              </Button>
              <Button type="default" htmlType="reset" onClick={reset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default memo(SearchForm)
