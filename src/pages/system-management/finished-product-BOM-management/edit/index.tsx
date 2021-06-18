import React from 'react'
import { useHistory } from 'react-router-dom'
import type { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'react-query'
import {
  getFinishProduct as fetchDeleteCommodityBom,
  USE_GET_FINISH_PRODUCT_KEY,
} from '@/services/commodityService/mods/commodityBom/getFinishProduct'
import BaseFormWrap from '@/components/BaseFormWrap'

import IngredientList from '../components/ingredient-list'
import CardFinishedProductInformation from '../components/card-finished-product-information'

const FinishedProductBOMManagementEdit: React.FC<RouteComponentProps<{ commodityBOMId: string }>> = ({ match }) => {
  const { commodityBOMId } = match.params
  const history = useHistory()
  const { data: dataFinishProduct, isLoading: isLoadingFinishProduct } = useQuery(
    [USE_GET_FINISH_PRODUCT_KEY, commodityBOMId],
    () =>
      fetchDeleteCommodityBom({
        commodityBomId: +commodityBOMId,
      }).then((d) => d.data),
  )

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
          onClick: () => {},
        },
      ]}>
      <CardFinishedProductInformation data={dataFinishProduct} loading={isLoadingFinishProduct} />

      <IngredientList edit />
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementEdit
