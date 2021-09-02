import React, { useRef, useState } from 'react'
import { Button, message, Modal, Space, Table } from 'antd'
import { useParams } from 'react-router-dom'
import { useToggle } from 'ahooks'
import BaseCard from '@/components/base-card'
import { useGetSkuDetailQuery } from '@/graphql/operations/base-data/__generated__/commodity-management'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  PitayaCreateCommoditySkuMutationVariables,
  PitayaPageSkuDocument,
  PitayaPageSkuQuery,
  usePitayaCreateCommoditySkuMutation,
  usePitayaTableHeadQuery,
  usePitayaUpdateSkuStatusMutation,
} from '@/graphql/operations/production-management/__generated__/commodity'
import StatusChanger from '@/components/status-changer'
import ActionGroup from '@/components/action-group'
import { commodityTypeKey } from '../../const'
import BaseInfo from './components/base-info'
import EditModal from './components/edit'
import Filter from './components/filter'
import SkuSelect, { SkuSelectRefProps } from './components/sku-select'

const SKUManagement = () => {
  const routeParams: any = useParams()
  const { id } = routeParams
  const [showEditModal, { toggle: showEditToggle }] = useToggle()
  const [visible, { toggle }] = useToggle()
  const [selectedKeys, setSelectedKeys] = useState([])
  const [editKeys, setEditKeys] = useState([])
  const skuSelectFormRef = useRef<SkuSelectRefProps>(null)
  const { data: detailData } = useGetSkuDetailQuery({ variables: { commodityId: id } })
  const { data: tableHeadData } = usePitayaTableHeadQuery({ variables: { commodityId: id } })

  const [updateSkuStatus] = usePitayaUpdateSkuStatusMutation()
  const [createCommoditySku] = usePitayaCreateCommoditySkuMutation()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PitayaPageSkuDocument,
    gqlParamKey: 'pageSku',
    gqlKey: 'pitayaPageSku',
    formatParams: (values) => {
      const newParams = JSON.parse(JSON.stringify(values))
      const skuCondition: any[] = []
      for (let key in values?.skuCondition) {
        if (values?.skuCondition.hasOwnProperty(key)) {
          const val = values?.skuCondition[key]
          if (val) {
            skuCondition.push({
              specId: key,
              optionId: val,
            })
          }
        }
      }
      newParams.skuCondition = skuCondition

      return newParams
    },
    extraParams: {
      commodityId: id,
    },
  })

  const handleAddSku = () => {
    const res = skuSelectFormRef.current?.getData()
    const params: PitayaCreateCommoditySkuMutationVariables = {
      commoditySkuId: res?.selected?.map((v) => v?.commoditySkuId),
    }
    createCommoditySku({ variables: params }).then(() => {
      refresh()
      toggle()
    })
  }
  const columns = [
    ...(tableHeadData?.pitayaTableHead.spec?.map((item) => ({
      title: item.specName,
      dataIndex: item.specId,
      key: item.specId,
      render(text, record) {
        return record?.skuOption?.find((v) => v?.specId === item.specId)?.optionName
      },
    })) || []),
    ...(tableHeadData?.pitayaTableHead.other?.map((item) => ({
      title: item.title,
      dataIndex: item.key,
      key: item.key,
    })) || []),
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render(_, record) {
        return (
          <StatusChanger
            onConfirm={() => {
              // change为0时表示需要完善信息，不能启用
              if (record.change === 0 && record.status === 0) {
                return message.warning('sku信息未完善，不允许启用')
              }
              handleStatusChange([record.commoditySkuId], record.status === 1 ? 99 : 1)
            }}
            checked={record.status === 1}
          />
        )
      },
    },
    {
      title: '操作',
      dataIndex: '_',
      render: (_, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '编辑sku',
                onClick: () => {
                  handleEdit([record.commoditySkuId])
                },
              },
            ]}
          />
        )
      },
    },
  ]

  const handleStatusChange = (ids: number[], status: number) => {
    updateSkuStatus({
      variables: {
        updateStatusInput: {
          status,
          commoditySkuId: ids,
        },
      },
    }).then((res) => {
      if (res?.data?.pitayaUpdateSkuStatus) {
        refresh()
      }
    })
  }
  const handleEdit = (ids) => {
    setEditKeys(ids)
    showEditToggle()
  }
  const onEditSuccess = () => {
    showEditToggle()
    refresh()
  }
  return (
    <div className="pageWrap">
      <BaseCard>
        <BaseInfo data={detailData?.getCommodity} />
        <Filter
          data={detailData?.listSkuQueryCondition}
          form={form}
          submit={() => {
            submit()
          }}
          reset={reset}
        />
        <Space size={16}>
          <Button
            type="primary"
            ghost
            onClick={() => {
              toggle()
            }}>
            添加sku
          </Button>
          <Button
            disabled={selectedKeys.length === 0}
            onClick={() => {
              handleEdit(selectedKeys.map((key) => Number(key)))
            }}>
            批量编辑sku
          </Button>
          <Button
            disabled={selectedKeys.length === 0}
            onClick={() => {
              handleStatusChange(
                selectedKeys.map((key) => Number(key)),
                1,
              )
            }}>
            批量启用
          </Button>
          <Button
            disabled={selectedKeys.length === 0}
            onClick={() => {
              handleStatusChange(
                selectedKeys.map((key) => Number(key)),
                0,
              )
            }}>
            批量禁用
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table<PitayaPageSkuQuery['pitayaPageSku']['records'][0]>
          {...tableProps}
          bordered
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (v: any) => {
              setSelectedKeys(v)
            },
          }}
          columns={columns}
          rowKey="commoditySkuId"
        />
      </BaseCard>
      <EditModal
        visible={showEditModal}
        commodityTypeId={Number(detailData?.getCommodity?.commodityTypeId || commodityTypeKey.FRUIT)}
        setVisible={showEditToggle}
        ids={editKeys}
        onSuccess={onEditSuccess}
      />
      <Modal
        width="750px"
        destroyOnClose={true}
        title="选择SKU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => {
          toggle()
        }}
        onOk={handleAddSku}>
        <SkuSelect ref={skuSelectFormRef} id={id} specData={detailData?.listSkuQueryCondition} />
      </Modal>
    </div>
  )
}

export default SKUManagement
