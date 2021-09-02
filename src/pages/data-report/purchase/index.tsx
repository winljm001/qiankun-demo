import React, { useCallback } from 'react'
import type { ColumnType } from 'antd/lib/table/interface'
import { Button, Space, Table, Form, DatePicker, Input } from 'antd'
import BaseCard from '@/components/base-card'
import useTablePagingGQL from '@/hooks/useTablePaging/gql'
import { PitayaPageCommodityBomDocument } from '@/graphql/operations/data-report/__generated__/purchase'
import type { PitayaPageCommodityBomQuery } from '@/graphql/operations/data-report/__generated__/purchase'
import Tabs from '../components/tabs'

type ColumnTypeItem = PitayaPageCommodityBomQuery['pitayaPageCommodityBom']['records'][0]

const { RangePicker } = DatePicker

const tabsOptions = [
  {
    label: '原料采购',
    value: '1',
  },
  {
    label: '辅料采购',
    value: '2',
  },
]

/**
 * 采购报表
 */
const DataReportPurchase: React.FC = () => {
  const { tableProps, form, submit, reset, searchObject } = useTablePagingGQL({
    gql: PitayaPageCommodityBomDocument,
    gqlKey: 'pitayaPageCommodityBom',
    paramsValueTypeMap: {
      time: 'momentRange',
    },
    formatParams: (v) => {
      if (v.time) {
        v.startTime = v.time[0]
        v.endTime = v.time[1]
        v.time = null
      }
      console.log('formatParams  ->  ', v)
      return v
    },
  })

  const columns: ColumnType<ColumnTypeItem>[] = [
    {
      title: '商品类型',
      dataIndex: 'commodityTypeName',
    },
    {
      title: '商品分类',
      dataIndex: 'commodityCategoryName',
    },
    {
      title: '商品名称',
      dataIndex: 'commodityName',
    },
    {
      title: '商品规格',
      dataIndex: 'commoditySpecOptionName',
    },
    {
      title: '操作',
      dataIndex: '_',
    },
  ]

  const onChangeTabs = useCallback(
    (v: string) => {
      form.setFieldsValue({
        type: v,
      })

      submit()
    },
    [form, submit],
  )

  const tabsValue = (searchObject.type as string) || tabsOptions[0].value

  return (
    <>
      <Tabs options={tabsOptions} value={tabsValue} onChange={onChangeTabs} />

      <div className="pageWrap">
        <BaseCard>
          <Form
            layout="inline"
            form={form}
            initialValues={{
              type: tabsValue,
            }}>
            <Form.Item hidden name="type">
              <Input />
            </Form.Item>

            <Form.Item label="时间" name="time">
              <RangePicker />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" onClick={submit}>
                  查询
                </Button>
                <Button type="default" onClick={reset}>
                  重置
                </Button>
                <Button ghost type="primary">
                  导出汇总
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </BaseCard>

        <BaseCard>
          <Table {...tableProps} bordered columns={columns} rowKey="commodityBomId" />
        </BaseCard>
      </div>
    </>
  )
}

export default DataReportPurchase
