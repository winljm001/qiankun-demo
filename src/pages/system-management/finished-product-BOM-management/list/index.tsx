import React, { useCallback } from 'react'
import { Button, Space, Table, Popconfirm } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { pageCommodityBom as fetchPageCommodityBom } from '@/services/commodityService/mods/commodityBom/pageCommodityBom'
import { deleteCommodityBom as fetchDeleteCommodityBom } from '@/services/commodityService/mods/commodityBom/deleteCommodityBom'
import BaseCard from '@/components/BaseCard'
import ActionGroup from '@/components/ActionGroup'
import subRoute from '@/components/hoc/sub-route'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  FINISHED_PRODUCT_BOM_MANAGEMENT_ADD,
  FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT,
} from '@/router/config/system-management/path'
import SearchForm from './search-form/index'

/** useAsyncTable 参数 */
const useAsyncTableParams = { fetchAction: fetchPageCommodityBom }

const FinishedProductBOMManagementList = () => {
  const history = useHistory()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable(useAsyncTableParams)
  const { mutate: mutateDeleteCommodityBom, isLoading: isLoadingDeleteCommodityBom } = useMutation(
    fetchDeleteCommodityBom,
    {
      onSuccess() {
        refresh()
      },
    },
  )

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
                children: '编辑',
                onClick() {
                  history.push(`${FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT}/${record.commodityBomId}`)
                },
              },
              {
                children: '删除',
                render: (children) => {
                  return (
                    <Popconfirm
                      title="确定要删除？"
                      onConfirm={() => {
                        mutateDeleteCommodityBom({
                          commodityBomId: record.commodityBomId,
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
    history.push(FINISHED_PRODUCT_BOM_MANAGEMENT_ADD)
  }, [history])

  return (
    <>
      <BaseCard>
        <SearchForm form={form} submit={submit} reset={reset} />
        <Space size={24}>
          <Button ghost onClick={onClickGoAdd} type="primary">
            新增BOM
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table
          {...tableProps}
          bordered
          columns={columns}
          rowKey="commodityBomId"
          loading={tableProps.loading || isLoadingDeleteCommodityBom}
        />
      </BaseCard>
    </>
  )
}

export default subRoute(FinishedProductBOMManagementList)
