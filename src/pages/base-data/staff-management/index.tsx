import React, { FC, useRef } from 'react'
import { Button, Table } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import useAsyncTable from '@/hooks/useAsyncTable'
import { PageUserManageDocument } from '@/graphql/operations/base-data/__generated__/staff-management'
import type { PageUserManageQuery } from '@/graphql/operations/base-data/__generated__/staff-management'
import Filter from './components/filter'
import type { ModalChangePasswordInstance } from './components/modal-change-password'
import ModalChangePassword from './components/modal-change-password'
import type { ModalUserFormInstance } from './components/modal-user-form'
import ModalUserForm from './components/modal-user-form'

type ColumnTypeItem = PageUserManageQuery['pageUserManage']['records'][0]

/**
 * 员工管理列表页
 */
const StaffManagement: FC = () => {
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PageUserManageDocument,
    gqlKey: 'pageUserManage',
    isSingleParams: true,
    formatParams: ({ page, ...rest }) => {
      return {
        input: {
          ...page,
          ...rest,
        },
      }
    },
  })

  const ModalChangePasswordRef = useRef<ModalChangePasswordInstance>(null)
  const ModalUserFormRef = useRef<ModalUserFormInstance>(null)

  // table表单头部标题
  const columns: ColumnType<ColumnTypeItem>[] = [
    {
      title: '组织架构名称',
      dataIndex: 'orgGroupName',
    },
    {
      title: '组织名称',
      dataIndex: 'orgName',
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
    },
    {
      title: '姓名',
      dataIndex: 'name',
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
                  ModalUserFormRef.current?.show({
                    id: record?.id,
                    callback: refresh,
                  })
                },
              },
              {
                children: '修改密码',
                onClick: () => {
                  ModalChangePasswordRef.current?.show(record?.id)
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
            ModalUserFormRef.current?.show({
              callback: refresh,
            })
          }}>
          新增
        </Button>
      </BaseCard>

      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="id" />
      </BaseCard>

      <ModalUserForm ref={ModalUserFormRef} />

      <ModalChangePassword ref={ModalChangePasswordRef} />
    </div>
  )
}

export default StaffManagement
