import { commodityTypeKey } from '@/pages/production-management/const'

export const propertyList = [
  { label: '原料', value: commodityTypeKey.RAW_MATERIAL },
  { label: '成品', value: commodityTypeKey.PRODUCT },
  { label: '半成品', value: commodityTypeKey.HALF_PRODUCT },
  { label: '退货品', value: commodityTypeKey.RETURN },
]
export const boxPropertyList = [{ label: '周转筐', value: commodityTypeKey.BOX }]
