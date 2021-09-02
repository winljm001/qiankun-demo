import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Space, Table } from 'antd'
import StatusChanger from '@/components/status-changer'
import BaseCard from '@/components/base-card'
import useAsyncTable from '@/hooks/useAsyncTable'
import ActionGroup from '@/components/action-group'
import {
  PeachPageCommodityManageDocument,
  usePeachUpdateCommodityStatusMutation,
} from '@/graphql/operations/wholesale-management/__generated__/commodity'
import { WHOLESALE_COMMODITY_ADD, WHOLESALE_COMMODITY_SKU } from '@/router/config/wholesale-management/path'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import Filter from './components/filter'

const CommodityManagement = () => {
  const history = useHistory()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PeachPageCommodityManageDocument,
    gqlKey: 'peachPageCommodityManage',
  })
  const [updateCommodityStatus] = usePeachUpdateCommodityStatusMutation()
  // 修改商品状态
  const handleChangeStatus = (record) => {
    updateCommodityStatus({
      variables: {
        updateCommodityStatusInput: {
          status: record?.status === 1 ? 99 : 1,
          commodityId: [record?.commodityId],
        },
      },
    }).then(() => {
      refresh()
    })
  }
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
      dataIndex: 'categoryName',
    },
    {
      title: '品种',
      dataIndex: 'varietyName',
    },
    {
      title: '产地',
      dataIndex: 'originName',
    },
    {
      title: 'SKU数',
      dataIndex: 'skuQuantity',
    },

    {
      title: '状态',
      dataIndex: 'status',
      render: (val, record) => <StatusChanger checked={val === 1} onConfirm={() => handleChangeStatus(record)} />,
    },
    {
      title: '操作',
      dataIndex: '_',
      render: (_, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '管理SKU',
                onClick() {
                  history.push(`${WHOLESALE_COMMODITY_SKU}/${record?.commodityId}`)
                },
              },
            ]}
          />
        )
      },
    },
  ]
  return (
    <div className="pageWrap">
      <BaseCard>
        <Filter submit={submit} reset={reset} form={form} />
        <Space size={24}>
          <Button
            type="primary"
            ghost
            onClick={() => {
              history.push(WHOLESALE_COMMODITY_ADD)
            }}>
            新增商品
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="commodityId" />
      </BaseCard>
    </div>
  )
}

export default withSubRoutes(CommodityManagement)
