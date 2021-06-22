import React from 'react'
import { Button, Space, Table } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import { useHistory } from 'react-router-dom'
import { pageCommodityBom } from '@/services/commodityService/mods/commodityBom/pageCommodityBom'
import BaseCard from '@/components/BaseCard'
import ActionGroup from '@/components/ActionGroup'
import subRoute from '@/components/hoc/sub-route'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  FINISHED_PRODUCT_BOM_MANAGEMENT_ADD,
  FINISHED_PRODUCT_BOM_MANAGEMENT_DETAILS,
  FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT,
} from '@/router/config/system-management/path'
import SearchForm from './search-form/index'

/** useAsyncTable 参数 */
const useAsyncTableParams = { fetchAction: pageCommodityBom }

const FinishedProductBOMManagementList = () => {
  const history = useHistory()
  const { tableProps, form, submit, reset } = useAsyncTable(useAsyncTableParams)

  const columns: ColumnType<defs.commodityService.CommodityBomListVO>[] = [
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
                children: '详情',
                onClick() {
                  history.push(`${FINISHED_PRODUCT_BOM_MANAGEMENT_DETAILS}/${record.commodityBomId}`)
                },
              },
              {
                children: '编辑',
                onClick() {
                  history.push(`${FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT}/${record.commodityBomId}`)
                },
              },
            ]}
          />
        )
      },
    },
  ]

  return (
    <>
      <BaseCard>
        <SearchForm form={form} submit={submit} reset={reset} />
        <Space size={24}>
          <Button
            onClick={() => {
              history.push(FINISHED_PRODUCT_BOM_MANAGEMENT_ADD)
            }}
            type="primary">
            新增BOM
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table columns={columns} rowKey="commodityBomId" {...tableProps} />
      </BaseCard>
    </>
  )
}

export default subRoute(FinishedProductBOMManagementList)
