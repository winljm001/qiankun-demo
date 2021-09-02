import React, { FC } from 'react'
import { Form, Row, Col, Button, Space, Select } from 'antd'
import type { FormInstance } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import AsyncSelect from '@/components/async-select'
import {
  PitayaCommodityTypeOptionDocument,
  usePitayaOriginOptionLazyQuery,
  usePitayaVarietyOptionLazyQuery,
} from '@/graphql/operations/production-management/__generated__/commodity'
import { useListSpuCategoryOptionLazyQuery } from '@/graphql/operations/base-data/__generated__/commodity-management'

interface IProps {
  submit: (values) => void
  reset: () => void
  form: FormInstance
}
const baseOptions: { label: string; value: number | null }[] = [
  {
    label: '全部',
    value: null,
  },
]

const Filter: FC<IProps> = ({ submit, reset, form }) => {
  // 获取商品品类
  const [refetch, commodityOptions] = useListSpuCategoryOptionLazyQuery()
  // 商品品种
  const [varietyRefetch, varietyOptions] = usePitayaVarietyOptionLazyQuery()
  // 商品产地
  const [originReftch, originOptions] = usePitayaOriginOptionLazyQuery()
  // 商品类型改变回调函数
  const onChange = () => {
    form.resetFields(['categoryId'])
    const commodityTypeId = form.getFieldValue(['typeId'])
    refetch({
      variables: {
        commodityTypeId,
      },
    })
  }
  // 商品品类改变回调函数
  const onChangeVariety = (value) => {
    form.resetFields(['varietyId', 'originId'])
    if (value === null) {
      return
    } else {
      varietyRefetch({
        variables: {
          categoryId: value,
        },
      })
      originReftch({
        variables: {
          categoryId: value,
        },
      })
    }
  }
  return (
    <Form form={form} initialValues={{ typeId: '', categoryId: null, varietyId: null, originId: null }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="typeId" label="商品类型">
            <AsyncSelect
              hasAny
              onChange={onChange}
              remote={{
                gql: PitayaCommodityTypeOptionDocument,
                gqlKey: 'pitayaCommodityTypeOption',
              }}
            />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item noStyle shouldUpdate>
            {({ getFieldValue }) => {
              const typeId = getFieldValue(['typeId'])
              return (
                <Form.Item label="商品品类" name="categoryId">
                  <Select onChange={onChangeVariety} disabled={!typeId ? true : false}>
                    {baseOptions.concat(commodityOptions?.data?.listSpuCategoryOption || []).map((item, index) => (
                      <Select.Option key={index} value={item.value as any}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )
            }}
          </Form.Item>
          {/* <Form.Item name="categoryId" label="商品品类">
            <AsyncSelect
              showSearch
              onChange={() => {
                form.resetFields(['varietyId', 'originId'])
              }}
              hasAny
              filterOption={(input, option: any) => option?.label?.indexOf(input) >= 0}
              remote={{
              
                gql: PitayaCategoryOptionDocument,
                gqlKey: 'pitayaCategoryOption',
              }}
            />
          </Form.Item> */}
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const id = getFieldValue(['categoryId'])
              return id && varietyOptions?.data?.pitayaVarietyOption?.length ? (
                <Form.Item label="商品品种" name="varietyId">
                  <Select>
                    {(varietyOptions?.data?.pitayaVarietyOption || []).map((item, index) => (
                      <Select.Option key={index} value={item.value as any}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : null
            }}
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const id = getFieldValue(['categoryId'])
              return id && originOptions?.data?.pitayaOriginOption.length ? (
                <Form.Item label="商品产地" name="originId">
                  <Select>
                    {(originOptions?.data?.pitayaOriginOption || []).map((item, index) => (
                      <Select.Option key={index} value={item.value as any}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : null
            }}
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
