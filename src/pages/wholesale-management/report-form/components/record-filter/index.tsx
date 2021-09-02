import React, { FC } from 'react'
import { Form, Row, Col, Button, Space, FormInstance, Select, Input } from 'antd'
import dayjs from 'dayjs'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import DatePicker from '@/components/date-picker'
import {
  useExportOrderReportFormQuery,
  useListCustomerTypeOptionQuery,
  useListMerchantOptionQuery,
  useListPayMethodOptionQuery,
} from '@/graphql/operations/wholesale-management/__generated__/report-form'
import { download } from '../../download'
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
 * 订单报表Filter组件
 */
const RecordFilter: FC<IProps> = ({ submit, reset, form }) => {
  // 客户类型下拉请求数据
  const customerTypeNameListResponse = useListCustomerTypeOptionQuery()
  // 所属商户下拉请求数据
  const businessNameListResponse = useListMerchantOptionQuery()
  // 付款类型下拉请求数据
  const payNameListResponse = useListPayMethodOptionQuery()

  // 订单报表导出
  const exportRecordOrder = useExportOrderReportFormQuery({
    variables: {
      input: {},
    },
    skip: true,
  })

  // 点击导出btn事件
  const handleExport = () => {
    const formValues = form.getFieldsValue(true)
    const { merchantId, orderCode, customerType, customerName, salesmanName, cashierName, payMethod } = formValues
    // 判断时间戳默认时取null
    const payStartTime =
      +dayjs(formValues?.outOrderTime?.[0]) === +dayjs() ? undefined : +dayjs(formValues?.outOrderTime?.[0])
    const payEndTime =
      +dayjs(formValues?.outOrderTime?.[1]) === +dayjs() ? undefined : +dayjs(formValues?.outOrderTime?.[0])
    exportRecordOrder
      .refetch({
        input: {
          merchantId: Number(merchantId),
          orderCode,
          customerType,
          customerName,
          salesmanName,
          cashierName,
          payMethod,
          payStartTime,
          payEndTime,
        },
      })
      .then((res) => {
        let url = res?.data?.exportOrderReportForm
        download(url)
      })
  }

  return (
    <Form
      form={form}
      name="search"
      className="searchForm"
      initialValues={{
        merchantId: null,
        customerType: null,
      }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="orderCode" label="订单号">
            <Input />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="merchantId" label="所属商户">
            <Select>
              {baseOptions
                .concat((businessNameListResponse?.data?.listMerchantOption?.options as any) || [])
                .map((item, index) => (
                  <Option key={index} value={item.value as any}>
                    {item.label}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="customerType" label="客户类型">
            <Select>
              {baseOptions
                .concat((customerTypeNameListResponse?.data?.listCustomerTypeOption?.options as any) || [])
                .map((item, index) => (
                  <Option key={index} value={item.value as any}>
                    {item.label}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="customerName" label="客户名称">
            <Input />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="salesmanName" label="销售员">
            <Input />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="cashierName" label="收银员">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="payMethod" label="付款类型">
            <Select mode="tags">
              {((payNameListResponse?.data?.listPayMethodOption?.options as any) || []).map((item, index) => (
                <Option key={index} value={item.value as any}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="payTime" label="支付时间">
            <RangePicker showTime format="YYYY-MM-DD HH:mm" />
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
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Button onClick={handleExport}>导出</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default RecordFilter
