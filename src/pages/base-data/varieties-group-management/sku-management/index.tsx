import React, { useRef } from 'react'
import type { ColumnType } from 'antd/lib/table/interface'
import { Button, Space, Table, Popconfirm, Skeleton, Modal } from 'antd'
import type { RouteComponentProps } from 'react-router-dom'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import useAsyncTable from '@/hooks/useAsyncTable'
import useTableRowSelection from '@/hooks/useTableRowSelection'
import {
  useVarietyGroupDetailQuery,
  useDelVarietyGroupSkuMutation,
  PageVarietyGroupSkuDocument,
} from '@/graphql/operations/base-data/__generated__/varieties-group-management'
import type { PageVarietyGroupSkuQuery } from '@/graphql/operations/base-data/__generated__/varieties-group-management'
import Styles from './index.module.less'
import ModalAdd from './components/modal-add'
import type { ModalAddInstance } from './components/modal-add'

type ColumnTypeItem = PageVarietyGroupSkuQuery['pageVarietyGroupSku']['records'][0]

const VarietiesGroupSKUManagement: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { loading: loadingVarietyGroupDetail, data: dataVarietyGroupDetail } = useVarietyGroupDetailQuery({
    variables: {
      id: +match.params.id,
    },
  })
  const [fetchDelVarietyGroupSku, { loading: loadingDelVarietyGroupSku }] = useDelVarietyGroupSkuMutation()
  const { tableProps, refresh, refreshByDelete } = useAsyncTable({
    gql: PageVarietyGroupSkuDocument,
    gqlKey: 'pageVarietyGroupSku',
    isCache: false,
    extraParams: {
      groupId: match.params.id,
    },
  })
  const { rowSelection, setSelectedRowKeys } = useTableRowSelection<number>('varietySkuId')
  const ModalAddRef = useRef<ModalAddInstance>(null)

  const deleteVarietyGroupSku = (p: number[]) => {
    fetchDelVarietyGroupSku({
      variables: {
        delVarietyGroupSkuInput: {
          varietyGroupSkuId: p,
        },
      },
    }).then(() => {
      setSelectedRowKeys([])
      refreshByDelete(p.length)
    })
  }

  // table表单头部标题
  const columns: ColumnType<ColumnTypeItem>[] = [
    {
      title: '品类名称',
      dataIndex: 'categoryName',
    },
    {
      title: 'SPU名称',
      dataIndex: 'spuName',
    },
    {
      title: 'SKU名称',
      dataIndex: 'skuName',
    },
    {
      title: '操作',
      dataIndex: '_',
      render(_, record) {
        return (
          <ActionGroup
            actions={[
              {
                children: '删除',
                render: (children) => {
                  return (
                    <Popconfirm
                      title="确定要删除？"
                      onConfirm={() => {
                        deleteVarietyGroupSku([record.varietySkuId])
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

  const selectedRowKeyNum = rowSelection.selectedRowKeys.length

  return (
    <div className="pageWrap">
      <BaseCard title="基本信息">
        <Skeleton active loading={loadingVarietyGroupDetail}>
          <p>品种组名称：{dataVarietyGroupDetail?.varietyGroupDetail.groupName}</p>
        </Skeleton>
      </BaseCard>

      <BaseCard>
        <Space className={Styles.btns}>
          <Button
            type="primary"
            ghost
            onClick={() => {
              ModalAddRef.current?.show(+match.params.id, refresh)
            }}>
            添加SKU
          </Button>
          <Button
            type="primary"
            disabled={selectedRowKeyNum === 0}
            loading={loadingDelVarietyGroupSku}
            onClick={() => {
              Modal.confirm({
                title: '确定要删除？',
                onOk: () => {
                  deleteVarietyGroupSku(rowSelection.selectedRowKeys)
                },
              })
            }}>
            批量删除{selectedRowKeyNum ? `${selectedRowKeyNum}个SKU` : null}
          </Button>
        </Space>

        <Table
          {...tableProps}
          bordered
          loading={tableProps.loading || loadingDelVarietyGroupSku}
          columns={columns}
          rowKey="varietySkuId"
          rowSelection={rowSelection}
        />
      </BaseCard>

      <ModalAdd ref={ModalAddRef} />
    </div>
  )
}

export default VarietiesGroupSKUManagement
