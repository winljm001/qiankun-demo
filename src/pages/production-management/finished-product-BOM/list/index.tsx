import React, { useCallback } from 'react'
import type { ColumnType } from 'antd/lib/table/interface'
import { Button, Space, Table, Popconfirm } from 'antd'
import { useHistory } from 'react-router-dom'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import useAsyncTable from '@/hooks/useAsyncTable'
import { FINISHED_PRODUCT_BOM_ADD, FINISHED_PRODUCT_BOM_EDIT } from '@/router/config/production-management/path'
import {
  PitayaPageCommodityBomDocument,
  usePitayaDeleteCommodityBomMutation,
} from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import type { PitayaPageCommodityBomQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

import SearchForm from './search-form'

type ColumnTypeItem = PitayaPageCommodityBomQuery['pitayaPageCommodityBom']['records'][0]

const FinishedProductBOMManagementList: React.FC = () => {
  const history = useHistory()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PitayaPageCommodityBomDocument,
    gqlKey: 'pitayaPageCommodityBom',
  })
  const [fetchPitayaDeleteCommodityBom] = usePitayaDeleteCommodityBomMutation()

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
      render: (text: string[]) => text.join('、'),
    },
    {
      title: '操作',
      dataIndex: '_',
      render: (_, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '编辑',
                onClick() {
                  history.push(`${FINISHED_PRODUCT_BOM_EDIT}/${record.commodityBomId}/${record.commoditySkuId}`)
                },
              },
              {
                children: '删除',
                render: (children) => {
                  return (
                    <Popconfirm
                      title="确定要删除？"
                      onConfirm={() => {
                        fetchPitayaDeleteCommodityBom({
                          variables: {
                            bomId: record.commodityBomId,
                          },
                        }).then(() => {
                          refresh()
                        })
                      }}>
                      {children}
                    </Popconfirm>
                  )
                },
              },
            ]}
          />
        )
      },
    },
  ]

  const onClickGoAdd = useCallback(() => {
    history.push(FINISHED_PRODUCT_BOM_ADD)
  }, [history])

  return (
    <div className="pageWrap">
      <BaseCard>
        <SearchForm submit={submit} reset={reset} form={form} />
        <Space size={24}>
          <Button ghost onClick={onClickGoAdd} type="primary">
            新增BOM
          </Button>
        </Space>
      </BaseCard>

      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="commodityBomId" />
      </BaseCard>
    </div>
  )
}

export default withSubRoutes(FinishedProductBOMManagementList)
