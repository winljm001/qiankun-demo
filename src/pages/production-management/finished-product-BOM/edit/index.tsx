import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import type { RouteComponentProps } from 'react-router-dom'
import BaseFormWrap from '@/components/base-form-wrap'
import {
  usePitayaUpdateCommodityBomMutation,
  usePitayaListBurdenQuery,
  usePitayaCommoditySkuDetailOnBomQuery,
} from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

import IngredientList from '../components/ingredient-list'
import type { IngredientListInstance } from '../components/ingredient-list'
import CardFinishedProductInformation from '../components/card-finished-product-information'

const FinishedProductBOMManagementEdit: React.FC<RouteComponentProps<{ BOMId: string; SKUId: string }>> = ({
  match,
}) => {
  const { BOMId, SKUId } = match.params
  const history = useHistory()
  const IngredientListRef = useRef<IngredientListInstance>(null)

  const [fetchPitayaUpdateCommodityBom, { loading: loadingPitayaUpdateCommodityBom }] =
    usePitayaUpdateCommodityBomMutation()
  const { data: dataPitayaListBurden, loading: loadingPitayaListBurden } = usePitayaListBurdenQuery({
    variables: {
      bomId: +BOMId,
    },
  })
  const { data: dataPitayaCommoditySkuDetail, loading: loadingPitayaCommoditySkuDetail } =
    usePitayaCommoditySkuDetailOnBomQuery({
      variables: {
        commoditySkuId: +SKUId,
      },
    })

  const onClickSave = () => {
    // 检验数据
    IngredientListRef.current
      ?.getValue()
      .then((list) => {
        // 提交数据
        fetchPitayaUpdateCommodityBom({
          variables: {
            updateCommodityBomInput: {
              commodityBomId: +BOMId,
              commoditySkuId: +SKUId,
              updateCommodityBomDetailInput: list.map((item) => ({
                commodityBomDetailId: +BOMId,
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
          type: 'primary',
          children: '保存',
          onClick: onClickSave,
          loading: loadingPitayaCommoditySkuDetail || loadingPitayaListBurden || loadingPitayaUpdateCommodityBom,
        },
      ]}>
      <div className="pageWrap">
        <CardFinishedProductInformation
          data={dataPitayaCommoditySkuDetail?.pitayaCommoditySkuDetail || ({} as any)}
          loading={loadingPitayaCommoditySkuDetail}
        />

        <IngredientList
          edit
          ref={IngredientListRef}
          value={dataPitayaListBurden?.pitayaListBurden || []}
          loading={loadingPitayaListBurden}
        />
      </div>
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementEdit
