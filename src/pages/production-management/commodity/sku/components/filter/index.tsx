import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Space } from 'antd'
import type { FormInstance } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import { ListSkuQueryCondition } from '../../type'
const { Option } = Select
interface IProps {
  data: ListSkuQueryCondition | undefined
  submit: (values) => void
  reset: () => void
  form: FormInstance
}

const Filter: FC<IProps> = ({ data, submit, reset, form }) => {
  return (
    <Form form={form}>
      <Row {...listSearchFromItemProps.rowProps}>
        {data?.map((v, i) => {
          return (
            <Col {...listSearchFromItemProps.colProps} key={i}>
              <Form.Item name={['skuCondition', String(v?.commoditySpecId)]} label={v?.commoditySpecName}>
                <Select defaultValue="">
                  <Option value="">全部</Option>
                  {v?.commoditySpecOptionVOList?.map((option, j) => {
                    return (
                      <Option value={option?.commoditySpecOptionId} key={j}>
                        {option?.commoditySpecOptionName}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </Col>
          )
        })}
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
