import React from 'react'
import { useHistory } from 'react-router-dom'
import type { RouteComponentProps } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { Button, Modal } from 'antd'
import {
  getFinishProduct as fetchGetFinishProduct,
  USE_GET_FINISH_PRODUCT_KEY,
} from '@/services/commodityService/mods/commodityBom/getFinishProduct'
import { listDetail, USE_LIST_DETAIL_KEY } from '@/services/commodityService/mods/commodityBom/listDetail'
import { deleteCommodityBom as fetchDeleteCommodityBom } from '@/services/commodityService/mods/commodityBom/deleteCommodityBom'
import BaseFormWrap from '@/components/BaseFormWrap'
import { FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT } from '@/router/config/system-management/path'

import IngredientList from '../components/ingredient-list'
import CardFinishedProductInformation from '../components/card-finished-product-information'

const FinishedProductBOMManagementDetails: React.FC<RouteComponentProps<{ commodityBOMId: string }>> = ({ match }) => {
  const { commodityBOMId } = match.params
  const history = useHistory()
  const { data: dataFinishProduct, isLoading: isLoadingFinishProduct } = useQuery(
    [USE_GET_FINISH_PRODUCT_KEY, commodityBOMId],
    () =>
      fetchGetFinishProduct({
        commodityBomId: +commodityBOMId,
      }).then((d) => d.data),
  )
  const { data: dataListDetail, isLoading: isLoadingList } = useQuery([USE_LIST_DETAIL_KEY, commodityBOMId], () =>
    listDetail({
      commodityBomId: +commodityBOMId,
    }).then((d) => d.data),
  )
  const { mutate: mutateDeleteCommodityBom, isLoading: isLoadingDeleteCommodityBom } = useMutation(
    fetchDeleteCommodityBom,
    {
      onSuccess() {
        history.goBack()
      },
    },
  )

  const onClickDelete = () => {
    Modal.confirm({
      title: '删除BOM',
      content: '确认删除成品BOM清单?',
      onOk: () => {
        mutateDeleteCommodityBom({
          commodityBomId: +commodityBOMId,
        })
      },
    })
  }

  return (
    <BaseFormWrap
      actions={[
        {
          children: '返回',
          onClick: history.goBack,
        },
        {
          danger: true,
          loading: isLoadingDeleteCommodityBom,
          children: '删除BOM',
          onClick: onClickDelete,
        },
      ]}>
      <CardFinishedProductInformation data={dataFinishProduct} loading={isLoadingFinishProduct} />

      <IngredientList
        value={dataListDetail}
        loading={isLoadingList}
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push(`${FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT}/${commodityBOMId}`)
            }}>
            修改配料
          </Button>
        }
      />
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementDetails
