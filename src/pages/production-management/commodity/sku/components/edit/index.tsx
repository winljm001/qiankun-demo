import React, { useEffect, useRef } from 'react'
import type { FormInstance } from 'antd'
import { Modal, Button } from 'antd'
import { commodityTypeKey } from '@/pages/production-management/const'
import {
  PitayaUpdateCommoditySkuMutationVariables,
  usePitayaCommoditySkuDetailLazyQuery,
  usePitayaUpdateCommoditySkuMutation,
} from '@/graphql/operations/production-management/__generated__/commodity'
import FruitForm from './components/fruit-form'
import FoodForm from './components/food-form'

type IProps = {
  // 商品类型（1-水果，2-食品）
  commodityTypeId: number
  // modal显示状态
  visible: boolean
  // 设置modal显示状态
  setVisible: (value: boolean) => void
  // 需要编辑的项的id
  ids: number[]
  // 保存成功回调
  onSuccess: () => void
}

const Edit: React.FC<IProps> = ({ commodityTypeId, visible, setVisible, ids, onSuccess }) => {
  const formRef = useRef<FormInstance>(null)
  const [commoditySkuDetail, { data: detailData }] = usePitayaCommoditySkuDetailLazyQuery()
  useEffect(() => {
    if (ids?.length === 1) {
      commoditySkuDetail({ variables: { commoditySkuId: ids[0] } })
    } else {
      formRef.current?.resetFields()
    }
  }, [ids])
  useEffect(() => {
    if (detailData?.pitayaCommoditySkuDetail) {
      formRef.current?.setFieldsValue({
        ...detailData?.pitayaCommoditySkuDetail,
        totalType:
          detailData?.pitayaCommoditySkuDetail.totalType === -1 ? '' : detailData?.pitayaCommoditySkuDetail.totalType,
        unitQuantity:
          detailData?.pitayaCommoditySkuDetail.unitQuantity === -1
            ? ''
            : detailData?.pitayaCommoditySkuDetail.unitQuantity,
        unitType:
          detailData?.pitayaCommoditySkuDetail.unitType === -1 ? '' : detailData?.pitayaCommoditySkuDetail.unitType,
        isDefective: detailData?.pitayaCommoditySkuDetail?.property?.[0] === commodityTypeKey.DEFECTIVE ? true : false,
        status: detailData?.pitayaCommoditySkuDetail.status === 1 ? true : false,
      })
    }
  }, [detailData])
  const [updateCommoditySku] = usePitayaUpdateCommoditySkuMutation()
  // 保存
  const handleSave = () => {
    formRef.current?.validateFields().then((values) => {
      const isDefective = values?.isDefective
      const property = isDefective ? [commodityTypeKey.DEFECTIVE] : values?.property
      const params: PitayaUpdateCommoditySkuMutationVariables = {
        updateCommoditySkuInput: {
          skuId: ids,
          unitQuantity: values?.unitQuantity,
          unitType: values?.unitType,
          totalType: values?.totalType,
          property: property,
          status: values?.status ? 1 : 99,
        },
      }
      updateCommoditySku({ variables: params }).then((res) => {
        if (res.data?.pitayaUpdateCommoditySku) {
          onSuccess?.()
        }
      })
    })
  }

  return (
    <Modal
      title="编辑sku"
      width={600}
      visible={visible}
      onCancel={() => {
        setVisible(false)
      }}
      centered
      destroyOnClose
      footer={[
        <Button
          key="back"
          onClick={() => {
            setVisible(false)
          }}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          保存
        </Button>,
      ]}>
      {commodityTypeId === commodityTypeKey.FRUIT || commodityTypeId === commodityTypeKey.FOOD ? (
        <FruitForm ref={formRef} />
      ) : (
        <FoodForm ref={formRef} commodityTypeId={commodityTypeId} data={detailData?.pitayaCommoditySkuDetail} />
      )}
    </Modal>
  )
}

export default Edit
