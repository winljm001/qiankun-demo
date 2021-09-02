import { BASE_PATH } from '../path'

export const BASE_URL = `${BASE_PATH}/production`
// 生产商品管理页面
export const COMMODITY = `${BASE_URL}/commodity`
// 商品管理列表
export const PRODUCTION_COMMODITY_LIST = `${COMMODITY}/list`
// 商品新增
export const PRODUCTION_COMMODITY_ADD = `${PRODUCTION_COMMODITY_LIST}/add`
// 商品sku管理
export const PRODUCTION_COMMODITY_SKU = `${PRODUCTION_COMMODITY_LIST}/sku`

/** 成品 BOM 清单 */
export const FINISHED_PRODUCT_BOM = `${BASE_URL}/finished-product-BOM`

/** 成品 BOM 清单 */
export const FINISHED_PRODUCT_BOM_LIST = `${FINISHED_PRODUCT_BOM}`

/** 成品 BOM 清单 */
export const FINISHED_PRODUCT_BOM_ADD = `${FINISHED_PRODUCT_BOM_LIST}/add`

/** 成品 BOM 清单 */
export const FINISHED_PRODUCT_BOM_EDIT = `${FINISHED_PRODUCT_BOM_LIST}/edit`
