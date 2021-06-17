import { BASE_PATH } from '../basePath'

export const BASE_URL = `${BASE_PATH}/system-management`

/** 果品管理 */
export const GOODS_MANAGEMENT = `${BASE_URL}/goods-management`
/** 新增果品 */
export const GOODS_MANAGEMENT_ADD = `${GOODS_MANAGEMENT}/add`
/** 规格管理 */
export const SPEC_MANAGEMENT = `${GOODS_MANAGEMENT}/spec-management`
/** SKU管理 */
export const SKU_MANAGEMENT = `${GOODS_MANAGEMENT}/sku-management`

/** 辅料管理 */
export const SUBSIDIARY_MANAGEMENT = `${BASE_URL}/subsidiary-management`
/** 新增果品 */
export const SUBSIDIARY_MANAGEMENT_ADD = `${SUBSIDIARY_MANAGEMENT}/add`
/** 规格管理 */
export const SUBSIDIARY_SPEC_MANAGEMENT = `${SUBSIDIARY_MANAGEMENT}/spec-management`
/** SKU管理 */
export const SUBSIDIARY_SKU_MANAGEMENT = `${SUBSIDIARY_MANAGEMENT}/sku-management`

/** 成品 BOM 管理 分页 */
export const FINISHED_PRODUCT_BOM_MANAGEMENT = `${BASE_URL}/finished-product-BOM-management`
/** 成品 BOM 管理 新增 */
export const FINISHED_PRODUCT_BOM_MANAGEMENT_ADD = `${FINISHED_PRODUCT_BOM_MANAGEMENT}/add`
/** 成品 BOM 管理 编辑 */
export const FINISHED_PRODUCT_BOM_MANAGEMENT_EDIT = `${FINISHED_PRODUCT_BOM_MANAGEMENT}/edit`
/** 成品 BOM 管理 详情 */
export const FINISHED_PRODUCT_BOM_MANAGEMENT_DETAILS = `${FINISHED_PRODUCT_BOM_MANAGEMENT}/details`
