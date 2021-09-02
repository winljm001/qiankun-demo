import React, { FC } from 'react'
import { Form, Row, Col, Button, Space, FormInstance, Select, Input } from 'antd'
import dayjs from 'dayjs'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import DatePicker from '@/components/date-picker'
import {
  useExportOutBoundReportFormQuery,
  useListMerchantOptionQuery,
  useListStockTypeOptionQuery,
} from '@/graphql/operations/wholesale-management/__generated__/report-form'
import { StockRecordType } from '@/graphql/generated/types'
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
 * 出库单报表filter组件
 */
const OutOrderFilter: FC<IProps> = ({ submit, reset, form }) => {
  // 所属商户下拉请求数据
  const businessNameListResponse = useListMerchantOptionQuery()

  // 出库类型下拉请求数据
  const warehouseNameListResponse = useListStockTypeOptionQuery({
    variables: {
      input: { stockRecordType: StockRecordType.Out },
    },
  })

  // 出库报表导出
  const exportOutOrder = useExportOutBoundReportFormQuery({
    variables: {
      input: {},
    },
    skip: true,
  })

  // 点击导出btn事件
  const handleExport = () => {
    const formValues = form.getFieldsValue(true)
    const { merchantId, outBoundNum, batchCode, product, outBoundType } = formValues
    // 判断时间戳默认时取null
    const outBoundStartTime =
      +dayjs(formValues?.outOrderTime?.[0]) === +dayjs() ? undefined : +dayjs(formValues?.outOrderTime?.[0])
    const outBoundEndTime =
      +dayjs(formValues?.outOrderTime?.[1]) === +dayjs() ? undefined : +dayjs(formValues?.outOrderTime?.[0])
    exportOutOrder
      .refetch({
        input: {
          merchantId: Number(merchantId),
          outBoundNum,
          batchCode,
          product,
          outBoundType,
          outBoundStartTime,
          outBoundEndTime,
        },
      })
      .then((res) => {
        let url = res?.data?.exportOutBoundReportForm
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
        outBoundType: null,
      }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="outBoundNum" label="出库单号">
            <Input />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="batchCode" label="批次号">
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
      </Row>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="outBoundType" label="出库类型">
            <Select>
              {baseOptions
                .concat((warehouseNameListResponse?.data?.listStockTypeOption?.option as any) || [])
                .map((item, index) => (
                  <Option key={index} value={item.value as any}>
                    {item.label}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="product" label="商品">
            <Input />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="outOrderTime" label="出库时间">
            <RangePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
        </Col>
      </Row>
      <Row {...listSearchFromItemProps.rowProps}>
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

export default OutOrderFilter
