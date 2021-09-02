import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import type { ColumnType } from 'antd/lib/table/interface'
import { Button, Table } from 'antd'
import { VARIETIES_GROUP_SKU_MANAGEMENT } from '@/router/config/base-data/path'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import useAsyncTable from '@/hooks/useAsyncTable'
import { PageVarietyGroupDocument } from '@/graphql/operations/base-data/__generated__/varieties-group-management'
import type { PageVarietyGroupQuery } from '@/graphql/operations/base-data/__generated__/varieties-group-management'
import Filter from './components/filter'
import ModalForm from './components/modal-form'
import type { ModalFormInstance } from './components/modal-form'

type ColumnTypeItem = PageVarietyGroupQuery['pageVarietyGroup']['records'][0]

const VarietiesGroupManagement: React.FC = () => {
  const history = useHistory()
  const ModalFormRef = useRef<ModalFormInstance>(null)
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PageVarietyGroupDocument,
    gqlKey: 'pageVarietyGroup',
  })

  // table表单头部标题
  const columns: ColumnType<ColumnTypeItem>[] = [
    {
      title: '品种组名称',
      dataIndex: 'groupName',
    },
    {
      title: '操作',
      dataIndex: '_',
      render(_, record) {
        return (
          <ActionGroup
            actions={[
              {
                children: '编辑',
                onClick: () => {
                  ModalFormRef.current?.show({
                    callback: refresh,
                    id: record.groupId,
                    groupName: record.groupName,
                  })
                },
              },
              {
                children: '管理SKU',
                onClick: () => {
                  history.push(`${VARIETIES_GROUP_SKU_MANAGEMENT}/${record.groupId}`)
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
        <Button
          type="primary"
          ghost
          onClick={() => {
            ModalFormRef.current?.show({
              callback: refresh,
            })
          }}>
          新增
        </Button>
      </BaseCard>

      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="groupId" />
      </BaseCard>

      <ModalForm ref={ModalFormRef} />
    </div>
  )
}

export default withSubRoutes(VarietiesGroupManagement)
