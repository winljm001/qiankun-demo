import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormInstance, Modal, Space, Table } from 'antd'
import { useBoolean } from 'ahooks'
import {
  COMMODITY_MANAGEMENT_ADD,
  COMMODITY_MANAGEMENT_EDIT_SPEC,
  COMMODITY_MANAGEMENT_SKU,
} from '@/router/config/base-data/path'
import BaseCard from '@/components/base-card'
import useAsyncTable from '@/hooks/useAsyncTable'
import ActionGroup from '@/components/action-group'
import {
  DoUpdateCommodityNameMutationVariables,
  PageCommodityDocument,
  useDoUpdateCommodityNameMutation,
  useGetCommodityLazyQuery,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import BaseForm from '../components/base-form'
import Filter from './components/filter'

const CommodityManagement = () => {
  const history = useHistory()
  const [spuEditModal, { toggle: toggleSpuEditModal }] = useBoolean(false)
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PageCommodityDocument,
    gqlKey: 'pageCommodity',
  })
  const baseFormRef = useRef<FormInstance>(null)
  const [doUpdateCommodityName, { loading: updateLoading }] = useDoUpdateCommodityNameMutation()
  const [getCommodity, { data: editData }] = useGetCommodityLazyQuery()

  const handleEditSPU = () => {
    baseFormRef.current?.validateFields().then((res) => {
      const params: DoUpdateCommodityNameMutationVariables = {
        updateCommodityNameInput: {
          commodityId: res?.commodityId,
          commodityName: res?.nameLocale?.chineseName,
          nameLocale: {
            chineseName: res?.nameLocale?.chineseName,
            englishName: res?.nameLocale?.englishName,
            thailandName: res?.nameLocale?.thailandName,
            vietnamName: res?.nameLocale?.vietnamName,
          },
        },
      }
      doUpdateCommodityName({ variables: params }).then((res) => {
        if (res.data?.doUpdateCommodityName) {
          refresh()
          toggleSpuEditModal()
        }
      })
    })
  }
  const openEditModalAction = (record) => {
    getCommodity({ variables: { commodityId: record?.commodityId } })
    toggleSpuEditModal()
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
    {
      title: '操作',
      dataIndex: '_',
      render: (_, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '修改spu',
                onClick() {
                  openEditModalAction(record)
                },
              },
              {
                children: '修改规格',
                onClick() {
                  history.push(`${COMMODITY_MANAGEMENT_EDIT_SPEC}/${record.commodityId}`)
                },
              },
              {
                children: '管理SKU',
                onClick() {
                  history.push(`${COMMODITY_MANAGEMENT_SKU}/${record?.commodityId}`)
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
              history.push(COMMODITY_MANAGEMENT_ADD)
            }}>
            新增商品
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table {...tableProps} bordered columns={columns} rowKey="commodityBomId" />
      </BaseCard>
      <Modal
        title="修改SPU"
        okText="保存"
        cancelText="取消"
        visible={spuEditModal}
        onCancel={() => toggleSpuEditModal()}
        confirmLoading={updateLoading}
        onOk={handleEditSPU}>
        <BaseForm ref={baseFormRef} data={editData?.getCommodity} />
      </Modal>
    </div>
  )
}

export default withSubRoutes(CommodityManagement)
