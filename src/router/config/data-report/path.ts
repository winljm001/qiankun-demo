import { BASE_PATH } from '../path'

export const BASE_URL = `${BASE_PATH}/data-report`

/** 采购报表 */
export const DATA_REPORT_PURCHASE = `${BASE_URL}/purchase`

/** 生产报表 */
export const DATA_REPORT_PRODUCE = `${BASE_URL}/produce`

/** 生产报表 生产日报表 */
export const DATA_REPORT_PRODUCE_DAY = `${DATA_REPORT_PRODUCE}/day`

/** 生产报表 单品人工成本表 */
export const DATA_REPORT_PRODUCE_SINGLE_PRODUCT_LABOR = `${DATA_REPORT_PRODUCE}/single-product-labor`

/** 生产报表 损耗统计表 */
export const DATA_REPORT_PRODUCE_LOSS_STATISTICS = `${DATA_REPORT_PRODUCE}/loss-statistics`

/** 销售报表 */
export const DATA_REPORT_SALES = `${BASE_URL}/sales`

/** 汇总报表 */
export const DATA_REPORT_SUMMARY = `${BASE_URL}/summary`
