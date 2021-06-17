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
