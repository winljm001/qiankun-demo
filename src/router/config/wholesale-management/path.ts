import { BASE_PATH } from '../path'

export const BASE_URL = `${BASE_PATH}/wholesale-management`
// 商户管理
export const BUSINESS_MANAGEMENT = `${BASE_URL}/business-management`
// 库存管理
export const INVENTORY_MANAGEMENT = `${BASE_URL}/inventory-management`
// 库存管理盘点
export const VIEW_INVENTORY_MANAGEMENT = `${INVENTORY_MANAGEMENT}/view-inventory-management`
// 库存管理盘点查看
export const VIEW_INVENTORY_MANAGEMENT_CHILD = `${VIEW_INVENTORY_MANAGEMENT}/view-inventory-management-detail`
// 报表
export const REPORT_FORM = `${BASE_URL}/report-form`
// // 出库报表
// export const OUT_ORDER_REPORT_FORM = `${REPORT_FORM}/out-order-report-form`
// // 销售报表
// export const SALE_REPORT_FORM = `${REPORT_FORM}/sale-report-form`
// // 订单报表
// export const RECORD_REPORT_FORM = `${REPORT_FORM}/record-report-form`
// 生产商品管理页面
export const COMMODITY = `${BASE_URL}/commodity`
// 商品管理列表
export const WHOLESALE_COMMODITY_LIST = `${COMMODITY}/list`
// 商品新增
export const WHOLESALE_COMMODITY_ADD = `${WHOLESALE_COMMODITY_LIST}/add`
// 商品sku管理
export const WHOLESALE_COMMODITY_SKU = `${WHOLESALE_COMMODITY_LIST}/sku`
