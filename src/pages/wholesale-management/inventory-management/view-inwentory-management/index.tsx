import React, { FC } from 'react'
import { Popover, Table, TableColumnProps } from 'antd'
import { useHistory } from 'react-router-dom'
import dayjs from 'dayjs'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import useAsyncTable from '@/hooks/useAsyncTable'
import { VIEW_INVENTORY_MANAGEMENT_CHILD } from '@/router/config/wholesale-management/path'
import { PageTakeStockRecordDocument } from '@/graphql/operations/wholesale-management/__generated__/inventory-management'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import Filter from './components/filter'

interface IProps {}

/**
 * 库存管理盘点查看列表页
 */
const BusinessManagement: FC<IProps> = () => {
  // 路由钩子
  const history = useHistory()

  // 获取商户列表接口数据
  const { tableProps, form, submit, reset } = useAsyncTable({
    formatParams: (values) => {
      const startDate = +dayjs(values?.startDate?.[0] || null).startOf('d')
      const expireDate = +dayjs(values?.startDate?.[1] || null).startOf('d')
      let temp = JSON.parse(JSON.stringify(values))
      let newValues = { ...temp, startDate, expireDate }
      const { orgId, expireDate: newExpireDate, startDate: newStartDate, warehouseId, page } = newValues
      return {
        input: {
          orgId,
          warehouseId,
          startDate: newStartDate,
          expireDate: newExpireDate,
          pageCurrent: page.pageCurrent || 1,
          pageSize: page.pageSize || 10,
        },
      }
    },
    isCache: false,
    gql: PageTakeStockRecordDocument,
    gqlKey: 'pageTakeStockRecord',
  })

  // table表单头部标题
  const columns: TableColumnProps<any>[] = [
    {
      title: '盘点商户',
      dataIndex: 'orgName',
    },
    {
      title: '仓库名称',
      dataIndex: 'warehouseName',
    },
    {
      title: '盘点人员',
      dataIndex: 'username',
    },
    {
      title: '盘点日期',
      dataIndex: 'checkDate',
      render(_, record) {
        return dayjs(record.checkDate).format('YYYY-MM-DD')
      },
    },
    {
      title: '提交时间',
      dataIndex: 'createTime',
      render(_, record) {
        return dayjs(record.createTime).format('YYYY-MM-DD HH:mm')
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      render(_, record) {
        const context = (
          <div>
            <p>{record?.remark}</p>
          </div>
        )
        return (
          <Popover content={context} trigger="hover">
            <p
              style={{
                width: 110 + 'px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {record?.remark}
            </p>
          </Popover>
        )
      },
    },
    {
      title: '操作',
      dataIndex: '_',
      render(_, record) {
        return (
          <ActionGroup
            actions={[
              {
                children: '查看',
                onClick: () => {
                  history.push(`${VIEW_INVENTORY_MANAGEMENT_CHILD}/${record?.checkId}`)
                },
              },
            ]}
          />
        )
      },
    },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <BaseCard>
        <Filter submit={submit} reset={reset} form={form} />
      </BaseCard>
      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="checkId" />
      </BaseCard>
    </div>
  )
}

export default withSubRoutes(BusinessManagement)
