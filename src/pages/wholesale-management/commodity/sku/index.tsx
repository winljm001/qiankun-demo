import React, { useRef, useState } from 'react'
import { Button, message, Modal, Space, Table } from 'antd'
import { useParams } from 'react-router-dom'
import { useToggle } from 'ahooks'
import BaseCard from '@/components/base-card'
import { useGetSkuDetailQuery } from '@/graphql/operations/base-data/__generated__/commodity-management'
import useAsyncTable from '@/hooks/useAsyncTable'
import StatusChanger from '@/components/status-changer'
import {
  PeachCreateCommoditySkuMutationVariables,
  PeachPageSkuDocument,
  PeachPageSkuQuery,
  usePeachCreateCommoditySkuMutation,
  usePeachUpdateSkuStatusMutation,
} from '@/graphql/operations/wholesale-management/__generated__/commodity'
import BaseInfo from './components/base-info'
import Filter from './components/filter'
import SkuSelect, { SkuSelectRefProps } from './components/sku-select'

const SKUManagement = () => {
  const routeParams: any = useParams()
  const { id } = routeParams
  const [visible, { toggle }] = useToggle()
  const [selectedKeys, setSelectedKeys] = useState([])
  const skuSelectFormRef = useRef<SkuSelectRefProps>(null)
  const { data: detailData } = useGetSkuDetailQuery({ variables: { commodityId: id } })
  const [updateSkuStatus] = usePeachUpdateSkuStatusMutation()
  const [createCommoditySku] = usePeachCreateCommoditySkuMutation()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PeachPageSkuDocument,
    gqlParamKey: 'pageSku',
    isSingleParams: true,
    gqlKey: 'peachPageSku',
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
      if (skuCondition?.length > 0) {
        newParams.skuCondition = skuCondition
      } else {
        delete newParams.skuCondition
      }
      return newParams
    },
    extraParams: {
      commodityId: id,
    },
  })
  const handleAddSku = () => {
    const res = skuSelectFormRef.current?.getData()
    const params: PeachCreateCommoditySkuMutationVariables = {
      commoditySkuId: res?.selected?.map((v) => v?.commoditySkuId),
    }
    createCommoditySku({ variables: params }).then(() => {
      refresh()
      toggle()
    })
  }
  const columns = [
    ...(detailData?.listSkuQueryCondition?.map((item) => ({
      title: item.commoditySpecName,
      dataIndex: item.commoditySpecId,
      key: item.commoditySpecId,
      render(text, record) {
        return record?.skuOption?.find((v) => v?.specId === item.commoditySpecId)?.optionName
      },
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
      if (res?.data?.peachUpdateSkuStatus) {
        refresh()
      }
    })
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
        <Table<PeachPageSkuQuery['peachPageSku']['records'][0]>
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
