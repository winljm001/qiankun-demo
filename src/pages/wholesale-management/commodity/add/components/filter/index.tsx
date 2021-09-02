import React, { FC, useState } from 'react'
import { Form, Row, Col, Button, Space } from 'antd'
import type { FormInstance } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import AsyncSelect from '@/components/async-select'
import {
  PeachCategoryOptionDocument,
  PeachCommodityTypeOptionDocument,
  PeachOriginOptionDocument,
  PeachVarietyOptionDocument,
} from '@/graphql/operations/wholesale-management/__generated__/commodity'

interface IProps {
  submit: (values) => void
  reset: () => void
  form: FormInstance
}

const Filter: FC<IProps> = ({ submit, reset, form }) => {
  const [categoryId, setCategoryId] = useState()

  return (
    <Form
      form={form}
      initialValues={{ typeId: '', categoryId: '', varietyId: '', originId: '' }}
      onValuesChange={(values) => {
        if (values?.categoryId) {
          setCategoryId(values?.categoryId)
        }
      }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="typeId" label="商品类型">
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
          <Form.Item name="categoryId" label="商品品类">
            <AsyncSelect
              showSearch
              hasAny
              filterOption={(input, option: any) => option?.label?.indexOf(input) >= 0}
              remote={{
                gql: PeachCategoryOptionDocument,
                gqlKey: 'peachCategoryOption',
              }}
            />
          </Form.Item>
        </Col>
        {categoryId ? (
          <>
            <Col {...listSearchFromItemProps.colProps}>
              <Form.Item label="商品品种" name="varietyId">
                <AsyncSelect
                  remote={{
                    gql: PeachVarietyOptionDocument,
                    gqlKey: 'peachVarietyOption',
                    extraParams: { categoryId },
                  }}
                />
              </Form.Item>
            </Col>
            <Col {...listSearchFromItemProps.colProps}>
              <Form.Item label="商品产地" name="originId">
                <AsyncSelect
                  remote={{
                    gql: PeachOriginOptionDocument,
                    gqlKey: 'peachOriginOption',
                    extraParams: { categoryId },
                  }}
                />
              </Form.Item>
            </Col>
          </>
        ) : null}
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
