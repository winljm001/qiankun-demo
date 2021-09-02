import React, { FC } from 'react'
import { Form, Row, Col, Button, Space, FormInstance, Select } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import {
  useListWarehouseOptionLazyQuery,
  useMerchantOptionQuery,
} from '@/graphql/operations/wholesale-management/__generated__/inventory-management'
import DatePicker from '@/components/date-picker'

const { RangePicker } = DatePicker
const { Option } = Select

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

/**
 * 盘点查看头部filter组件
 */
const Filter: FC<IProps> = ({ submit, reset, form }) => {
  // 商户下拉请求数据
  const businessNameListResponse = useMerchantOptionQuery()

  // 仓库下拉请求数据
  const [refetch, warehouseNameListResponse] = useListWarehouseOptionLazyQuery({})

  // 盘点商户下拉框改变回调函数
  const onChange = (value) => {
    refetch({
      variables: {
        input: {
          orgId: value as number,
        },
      },
    })
  }

  // 商户下拉选项element函数
  const businessListElement = () => {
    return baseOptions.concat(businessNameListResponse?.data?.merchantOption || []).map((item, index) => (
      <Option key={index} value={item.value as any}>
        {item.label}
      </Option>
    ))
  }

  // 仓库名称下拉选项element函数
  const warehouseListElement = () => {
    return baseOptions
      .concat(
        warehouseNameListResponse?.data?.listWarehouseOption.map((item) => ({
          value: item.id,
          label: item.name,
        })) || [],
      )
      .map((item, index) => {
        return (
          <Option key={index} value={item.value as any}>
            {item.label}
          </Option>
        )
      })
  }

  return (
    <Form
      form={form}
      name="search"
      className="searchForm"
      initialValues={{
        startDate: [],
        orgId: null,
        warehouseId: null,
      }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="orgId" label="盘点商户">
            <Select onChange={onChange}>{businessListElement()}</Select>
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item shouldUpdate>
            {({ getFieldValue }) => {
              const orgId = getFieldValue(['orgId'])
              return (
                <Form.Item name="warehouseId" label="仓库名称">
                  <Select disabled={orgId ? false : true}>{warehouseListElement()}</Select>
                </Form.Item>
              )
            }}
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="startDate" label="盘点日期">
            <RangePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
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
