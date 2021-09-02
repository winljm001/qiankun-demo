import React, { useRef, FC, useMemo, useCallback } from 'react'
import { Button, message, Table } from 'antd'
import { useHistory } from 'react-router'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import Space from '@/components/space'
import BaseCard from '@/components/base-card'
import {
  PageOrgGroupDocument,
  useCreateOrgGroupMutation,
} from '@/graphql/operations/base-data/__generated__/organization-management'
import ActionGroup from '@/components/action-group'
import { ORGANIZATIONAL_MANAGEMENT_TREE } from '@/router/config/base-data/path'
import useAsyncTableNoForm from '@/hooks/useAsyncTableNoForm'
import { OrgGroupItem } from '../typing'
import CreationModal, { Handles } from './creation-modal'

interface IProps {}

/**
 * 企业组织架构管理分组列表
 */
const OrganizationManagement: FC<IProps> = () => {
  const history = useHistory()
  const creationModalRef = useRef<Handles>(null)

  // 获取分组列表
  const { tableProps, reset } = useAsyncTableNoForm({
    gql: PageOrgGroupDocument,
    gqlKey: 'pageOrgGroup',
    formatParams(fetchParams) {
      return { input: { ...fetchParams.page } }
    },
  })

  // 配置分组列表columns
  const columns = useMemo(() => {
    return [
      {
        title: '组织架构名称',
        dataIndex: 'name',
        width: '60%',
      },
      {
        title: '操作',
        dataIndex: '_',
        render: (_, record: OrgGroupItem) => {
          return (
            <ActionGroup
              actions={[
                {
                  children: '编辑',
                  onClick() {
                    history.push(
                      `${ORGANIZATIONAL_MANAGEMENT_TREE}/${record.id}?name=${encodeURIComponent(record.name)}`,
                    )
                  },
                },
              ]}
            />
          )
        },
      },
    ]
  }, [history])

  // 新增分组
  const [creationMutation] = useCreateOrgGroupMutation()
  const handleCreate = useCallback(() => {
    const { open, close, startLoading, stopLoading } = creationModalRef.current!
    open({
      onOk(data) {
        startLoading()
        creationMutation({
          variables: {
            input: data,
          },
        })
          .then(() => {
            close()
            message.success('新增成功')
            reset()
          })
          .finally(stopLoading)
      },
    })
  }, [creationMutation])

  return (
    <div className="pageWrap">
      <BaseCard>
        <Space size={20} direction="vertical">
          <Button type="primary" ghost onClick={handleCreate}>
            新增
          </Button>
          <CreationModal ref={creationModalRef} />
          <Table<OrgGroupItem> {...tableProps} bordered columns={columns} rowKey="id" />
        </Space>
      </BaseCard>
    </div>
  )
}

export default withSubRoutes(OrganizationManagement)
