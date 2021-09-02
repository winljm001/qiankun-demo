import React, { useState } from 'react'
import { Button, message, Modal, Space, Table } from 'antd'
import pickBy from 'lodash/pickBy'
import BaseCard from '@/components/base-card'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  PitayaPageNoCommodityDocument,
  PitayaPageNoCommodityQuery,
  usePitayaCreateCommodityMutation,
} from '@/graphql/operations/production-management/__generated__/commodity'
import Filter from './components/filter'

const CommodityManagement = () => {
  const [selectedRow, setSelectedRow] = useState<PitayaPageNoCommodityQuery['pitayaPageNoCommodity']['records'][0][]>()
  const [pitayaCreateCommodity] = usePitayaCreateCommodityMutation()
  const rowSelection = {
    onChange: (e, val) => {
      setSelectedRow(val)
    },
  }
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    formatParams: (values) => {
      const { page, ...others } = values
      return {
        pageNoCommodityInput: pickBy(others, (v) => !!v),
        page,
      }
    },
    gql: PitayaPageNoCommodityDocument,
    gqlKey: 'pitayaPageNoCommodity',
  })

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'commodityName',
    },
    {
      title: '商品类型',
      dataIndex: 'commodityTypeName',
    },
    {
      title: '商品品类',
      dataIndex: 'commodityCategoryName',
    },
    {
      title: '品种',
      dataIndex: 'commodityVarietyName',
    },
    {
      title: '产地',
      dataIndex: 'commodityPlaceOriginName',
    },
  ]
  const batchAddAction = () => {
    if (selectedRow && selectedRow?.length > 0) {
      Modal.confirm({
        title: '确定添加',
        content: '确定添加?',
        onOk: () => {
          pitayaCreateCommodity({
            variables: {
              createCommodityInput: {
                createCommodityInput: selectedRow?.map((v) => ({
                  commodityId: v?.commodityId,
                  commodityTypeId: v?.commodityTypeId,
                })),
              },
            },
          }).then((res) => {
            if (res.data?.pitayaCreateCommodity) {
              refresh()
            }
          })
        },
      })
    } else {
      message.error('请勾选要添加的商品')
      return false
    }
  }
  return (
    <div className="pageWrap">
      <BaseCard>
        <Filter submit={submit} reset={reset} form={form} />
        <Space size={24}>
          <Button
            type="primary"
            ghost
            onClick={() => {
              batchAddAction()
            }}>
            批量添加
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="commodityId" rowSelection={rowSelection} />
      </BaseCard>
    </div>
  )
}

export default CommodityManagement
