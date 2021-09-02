/** 清单数据结构 */
export interface IngredientItem {
  commodityBomDetailId?: number
  commodityTypeId: number
  commodityTypeName: string
  commodityCategoryId: number
  commodityCategoryName: string
  commodityId: number
  commodityName: string
  commoditySkuId?: number
  commoditySpecOptionName?: string[]
  quantity: number | string
  quantityUnit: number
  quantityUnitName: string
}
