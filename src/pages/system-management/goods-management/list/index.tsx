import React, { useRef, useState } from 'react'
import type { FormInstance } from 'antd'
import { Button, Modal, Space, Table } from 'antd'
import { useHistory } from 'react-router-dom'
import { useToggle } from 'ahooks'
import { useMutation } from 'react-query'
import { pageCommodity } from '@/services/commodityService/mods/commodity/pageCommodity'
import BaseCard from '@/components/BaseCard'
import ActionGroup from '@/components/ActionGroup'
import { GOODS_MANAGEMENT_ADD, SKU_MANAGEMENT, SPEC_MANAGEMENT } from '@/router/config/system-management/path'
import StatusChanger from '@/components/StatusChanger'
import subRoute from '@/components/hoc/sub-route'
import useAsyncTable from '@/hooks/useAsyncTable'
import { doUpdateCommodityName } from '@/services/commodityService/mods/commodity/doUpdateCommodityName'
import { doUpdateCommodityStatus } from '@/services/commodityService/mods/commodity/doUpdateCommodityStatus'
import SpuForm from '../components/spu-form'
import SearchForm from './search-form/index'

const GoodsManagementList = () => {
  const history = useHistory()
  const spuFormRef = useRef<FormInstance>()
  const [visible, { toggle }] = useToggle()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({ fetchAction: pageCommodity })
  const [editData, setEditData] = useState()

  // 修改商品状态接口
  const updateName = useMutation(doUpdateCommodityName, {
    onSuccess: () => {
      toggle()
      refresh()
    },
  })
  // 修改商品名接口
  const updateStatus = useMutation(doUpdateCommodityStatus, {
    onSuccess: () => {
      refresh()
    },
  })
  // 修改商品状态
  const handleChangeStatus = (record) => {
    updateStatus.mutate({ commodityId: record?.commodityId, status: record?.status === 0 ? 1 : 0 })
  }
  // 修改商品名
  const handleEditSPU = async () => {
    const res = await spuFormRef.current.validateFields()
    updateName.mutate(res)
  }
  const columns = [
    {
      title: 'SPU名称',
      dataIndex: 'commodityName',
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
      title: 'SKU数',
      dataIndex: 'skuSum',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (val, record) => <StatusChanger checked={val === 1} onConfirm={() => handleChangeStatus(record)} />,
    },
    {
      title: '操作',
      dataIndex: '_',
      render: (val, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '修改SPU',
                onClick() {
                  setEditData(record)
                  toggle()
                },
              },
              {
                children: '规格管理',
                onClick() {
                  history.push(`${SPEC_MANAGEMENT}/${record.commodityId}`)
                },
              },
              {
                children: 'SKU管理',
                onClick() {
                  history.push(`${SKU_MANAGEMENT}/${record.commodityId}`)
                },
              },
            ]}
          />
        )
      },
    },
  ]
  return (
    <div>
      <BaseCard>
        <SearchForm form={form} submit={submit} reset={reset} />
        <Space size={24}>
          <Button
            onClick={() => {
              history.push(`${GOODS_MANAGEMENT_ADD}`)
            }}
            ghost
            type="primary">
            新增果品
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table columns={columns} rowKey="commodityId" {...tableProps} />
      </BaseCard>
      <Modal
        title="修改SPU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => toggle()}
        confirmLoading={updateName.isLoading}
        onOk={handleEditSPU}>
        <SpuForm ref={spuFormRef} data={editData} />
      </Modal>
    </div>
  )
}

export default subRoute(GoodsManagementList)
