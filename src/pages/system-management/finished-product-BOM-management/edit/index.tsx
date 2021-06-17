import React from 'react'
import { useHistory } from 'react-router-dom'
import BaseFormWrap from '@/components/BaseFormWrap'

import IngredientList from '../components/ingredient-list'
import CardFinishedProductInformationProps from '../components/card-finished-product-information'

const FinishedProductBOMManagementEdit: React.FC = () => {
  const history = useHistory()
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
      <CardFinishedProductInformationProps />

      <IngredientList edit />
    </BaseFormWrap>
  )
}

export default FinishedProductBOMManagementEdit
