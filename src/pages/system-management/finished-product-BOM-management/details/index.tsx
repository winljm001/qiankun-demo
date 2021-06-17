import React from 'react'

import IngredientList from '../components/ingredient-list'
import CardFinishedProductInformationProps from '../components/card-finished-product-information'

const FinishedProductBOMManagementDetails: React.FC = () => {
  return (
    <>
      <CardFinishedProductInformationProps />

      <IngredientList />
    </>
  )
}

export default FinishedProductBOMManagementDetails
