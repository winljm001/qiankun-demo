import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import type { RouteComponentProps } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import {
  getFinishProduct as fetchDeleteCommodityBom,
  USE_GET_FINISH_PRODUCT_KEY,
} from '@/services/commodityService/mods/commodityBom/getFinishProduct'
import {
  listDetail as fetchListDetail,
  USE_LIST_DETAIL_KEY,
} from '@/services/commodityService/mods/commodityBom/listDetail'
import { updateCommodityBom as fetchUpdateCommodityBom } from '@/services/commodityService/mods/commodityBom/updateCommodityBom'
import BaseFormWrap from '@/components/BaseFormWrap'

import IngredientList from '../components/ingredient-list'
import type { IngredientListInstance } from '../components/ingredient-list'

import CardFinishedProductInformation from '../components/card-finished-product-information'

const FinishedProductBOMManagementEdit: React.FC<RouteComponentProps<{ commodityBOMId: string }>> = ({ match }) => {
  const { commodityBOMId } = match.params
  const history = useHistory()
  const IngredientListRef = useRef<IngredientListInstance>(null)
  const { data: dataFinishProduct, isLoading: isLoadingFinishProduct } = useQuery(
    [USE_GET_FINISH_PRODUCT_KEY, commodityBOMId],
    () =>
      fetchDeleteCommodityBom({
        commodityBomId: +commodityBOMId,
      }).then((d) => d.data),
  )
  const { data: dataListDetail, isLoading: isLoadingList } = useQuery([USE_LIST_DETAIL_KEY, commodityBOMId], () =>
    fetchListDetail({
      commodityBomId: +commodityBOMId,
    }).then((d) => d.data),
  )
  const { mutate: mutateUpdateCommodityBom } = useMutation(fetchUpdateCommodityBom, {
    onSuccess() {
      history.goBack()
    },
  })

  const onClickSave = () => {
    // 检验数据
    IngredientListRef.current
      .getValue()
      .then((list) => {
        console.log(dataFinishProduct)
        console.log(list)
        // 提交数据
        mutateUpdateCommodityBom({
          ...dataFinishProduct,
          commodityBomId: +commodityBOMId,
          updateCommodityBomDetailDTOS: list,
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
        },
      ]}>
      <CardFinishedProductInformation data={dataFinishProduct} loading={isLoadingFinishProduct} />

      <IngredientList edit ref={IngredientListRef} value={dataListDetail} loading={isLoadingList} />
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementEdit
