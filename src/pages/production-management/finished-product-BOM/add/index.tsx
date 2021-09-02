import React, { useState, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Space, Typography, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import BaseFormWrap from '@/components/base-form-wrap'
import BaseCard from '@/components/base-card'
import type { PitayaPageConditionToGetSkuQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import { usePitayaSaveCommodityBomMutation } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

import IngredientList from '../components/ingredient-list'
import type { IngredientListInstance } from '../components/ingredient-list'
import ModalFinishedProduct from './modal-finished-product'
import type { ModalFinishedProductInstance } from './modal-finished-product'

type FinishedProduct = PitayaPageConditionToGetSkuQuery['pitayaPageConditionToGetSku']['records'][0]

const FinishedProductBOMManagementAdd: React.FC = () => {
  const history = useHistory()
  const ModalFinishedProductRef = useRef<ModalFinishedProductInstance>(null)
  const IngredientListRef = useRef<IngredientListInstance>(null)
  const [finishedProduct, setFinishedProduct] = useState<FinishedProduct>({} as any)
  const [fetchPitayaSaveCommodityBom, { loading: loadingPitayaSaveCommodityBom }] = usePitayaSaveCommodityBomMutation()

  const onClickShowModal = useCallback(() => {
    ModalFinishedProductRef.current?.show(finishedProduct.commodityId, (p) => {
      setFinishedProduct(p)
    })
  }, [finishedProduct.commodityId])

  const onClickSave = () => {
    // 检验数据
    if (!finishedProduct.commodityId) {
      message.error('请选择商品')
      return
    }

    IngredientListRef.current
      ?.getValue()
      .then((list) => {
        // 提交数据
        fetchPitayaSaveCommodityBom({
          variables: {
            saveCommodityBomInput: {
              commoditySkuId: finishedProduct.commoditySkuId,
              saveCommodityBomDetailInput: list.map((item) => ({
                commoditySkuId: item.commoditySkuId,
                commodityId: item.commodityId,
                quantity: +item.quantity,
                quantityUnit: item.quantityUnit,
              })),
            },
          },
        }).then(() => {
          history.goBack()
        })
      })
      .catch(() => {})
  }

  return (
    <BaseFormWrap
      actions={[
        {
          children: '返回',
          onClick: history.goBack,
        },
        {
          loading: loadingPitayaSaveCommodityBom,
          type: 'primary',
          children: '保存',
          onClick: onClickSave,
        },
      ]}>
      <div className="pageWrap">
        <BaseCard title="成品资料">
          <ModalFinishedProduct ref={ModalFinishedProductRef} />

          {finishedProduct.commodityId ? (
            <>
              <Form.Item required label="商品名称">
                <Space>
                  <span>{finishedProduct.commodityName}</span>
                  <Typography.Link onClick={onClickShowModal}>重新选择</Typography.Link>
                </Space>
              </Form.Item>

              <Form.Item required label="商品规格">
                {finishedProduct.commoditySpecOptionName?.join('、')}
              </Form.Item>
            </>
          ) : (
            <Form.Item required label="选择果品">
              <Button type="dashed" icon={<PlusOutlined />} onClick={onClickShowModal}>
                选择商品
              </Button>
            </Form.Item>
          )}
        </BaseCard>

        <IngredientList edit ref={IngredientListRef} />
      </div>
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementAdd
