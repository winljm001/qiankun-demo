import React, { useState, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import BaseFormWrap from '@/components/BaseFormWrap'
import BaseCard from '@/components/BaseCard'
import { saveCommodityBom as fetchSaveCommodityBOM } from '@/services/commodityService/mods/commodityBom/saveCommodityBom'

import IngredientList from '../components/ingredient-list'
import type { IngredientListInstance } from '../components/ingredient-list'
import ModalFinishedProduct from './modal-finished-product'
import type { ModalFinishedProductInstance } from './modal-finished-product'

type FinishedProduct = defs.commodityService.FinishedGoodsReturnedList

const FinishedProductBOMManagementAdd: React.FC = () => {
  const history = useHistory()
  const ModalFinishedProductRef = useRef<ModalFinishedProductInstance>(null)
  const IngredientListRef = useRef<IngredientListInstance>(null)
  const [finishedProduct, setFinishedProduct] = useState<FinishedProduct>({} as any)
  const { isLoading: isLoadingSaveCommodityBOM, mutate: mutateSaveCommodityBOM } = useMutation(fetchSaveCommodityBOM, {
    onSuccess() {
      history.goBack()
    },
  })

  const onClickShowModal = useCallback(() => {
    ModalFinishedProductRef.current.show(finishedProduct.commodityId, (p) => {
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
      .getValue()
      .then((list) => {
        console.log(finishedProduct)
        console.log(list)
        // 提交数据
        console.log(mutateSaveCommodityBOM)
        mutateSaveCommodityBOM({
          commodityCategoryId: finishedProduct.commodityCategoryId,
          commodityCategoryName: finishedProduct.categoryText,
          commodityId: finishedProduct.commodityId,
          commodityName: finishedProduct.commodityName,
          commoditySkuId: finishedProduct.commoditySkuId,
          commodityTypeId: finishedProduct.commodityTypeId,
          saveCommodityBomDetailDTOS: list,
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
          loading: isLoadingSaveCommodityBOM,
          type: 'primary',
          children: '保存',
          onClick: onClickSave,
        },
      ]}>
      <div style={{ padding: '16px 16px 0' }}>
        <BaseCard title="成品资料">
          <ModalFinishedProduct ref={ModalFinishedProductRef} />

          <Form.Item required label="选择果品">
            <Button type="dashed" icon={<PlusOutlined />} onClick={onClickShowModal}>
              选择商品
            </Button>
          </Form.Item>

          {finishedProduct.commodityId ? (
            <>
              <Form.Item required label="商品名称">
                {finishedProduct.commodityName}
              </Form.Item>

              <Form.Item required label="商品规格">
                {finishedProduct.specText.join('、')}
              </Form.Item>
            </>
          ) : null}
        </BaseCard>

        <IngredientList edit ref={IngredientListRef} />
      </div>
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementAdd
