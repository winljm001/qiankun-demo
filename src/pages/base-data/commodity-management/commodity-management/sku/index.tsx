import React, { useMemo, useRef } from 'react'
import { Button, message, Modal, Space, Table } from 'antd'
import { useParams } from 'react-router-dom'
import { useToggle } from 'ahooks'
import BaseCard from '@/components/base-card'
import {
  DoSaveSkuListMutationVariables,
  PageSkuDocument,
  PageSkuQuery,
  useDoSaveSkuListMutation,
  useGetSkuDetailQuery,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
import useAsyncTable from '@/hooks/useAsyncTable'
import BaseInfo from './components/base-info'
import Filter from './components/filter'
import SkuSelect, { SkuSelectRefProps } from './components/sku-select'
const SKUManagement = () => {
  const routeParams: any = useParams()
  const { id } = routeParams
  const [visible, { toggle }] = useToggle()
  const skuSelectFormRef = useRef<SkuSelectRefProps>(null)
  const { data } = useGetSkuDetailQuery({ variables: { commodityId: id } })

  const detailData = useMemo(() => {
    return data
  }, [data])

  const [doSaveSkuList] = useDoSaveSkuListMutation()
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PageSkuDocument,
    gqlParamKey: 'skuListConditionInput',
    isSingleParams: true,
    gqlKey: 'pageSku',
    formatParams: (values) => {
      const newParams = JSON.parse(JSON.stringify(values))
      const commoditySpecOptionConditionInput: any[] = []
      for (let key in values?.commoditySpecOptionConditionInput) {
        if (values?.commoditySpecOptionConditionInput.hasOwnProperty(key)) {
          const val = values?.commoditySpecOptionConditionInput[key]
          if (val) {
            commoditySpecOptionConditionInput.push({
              commoditySpecId: key,
              commoditySpecOptionId: val,
            })
          }
        }
      }
      if (commoditySpecOptionConditionInput?.length > 0) {
        newParams.commoditySpecOptionConditionInput = commoditySpecOptionConditionInput
      } else {
        delete newParams.commoditySpecOptionConditionInput
      }
      return newParams
    },
    extraParams: {
      commodityId: id,
    },
  })
  const handleAddSku = () => {
    const res = skuSelectFormRef.current?.getData()
    if (res && res?.selected?.length > 0) {
      const params: DoSaveSkuListMutationVariables = {
        commoditySkus: {
          commoditySkuSaveInput: res?.selected?.map((v) => ({
            commodityId: id,
            commoditySpecIdList: res?.selectSpec?.map((val) => val?.commoditySpecId),
            commoditySpecOptionIdsList: v,
          })),
        },
      }
      doSaveSkuList({ variables: params }).then(() => {
        refresh()
        toggle()
      })
    } else {
      message.error('请选择sku')
    }
  }
  const columns =
    detailData?.listSkuQueryCondition?.map((item) => ({
      title: item.commoditySpecName,
      dataIndex: item.commoditySpecId,
      key: item.commoditySpecId,
      render(text, record) {
        return record?.skuCommoditySpecOptionList?.find((v) => v?.specId === item.commoditySpecId)?.optionName
      },
    })) || []
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
            生成sku
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table<PageSkuQuery['pageSku']['records'][0]>
          {...tableProps}
          bordered
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
