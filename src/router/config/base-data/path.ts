import { BASE_PATH } from '../path'

export const BASE_URL = `${BASE_PATH}/base-data`
// 商品管理页面
export const COMMODITY = `${BASE_URL}/commodity`
// 商品管理列表
export const COMMODITY_MANAGEMENT = `${COMMODITY}/management`
// 商品管理列表
export const COMMODITY_MANAGEMENT_LIST = `${COMMODITY}/list`
// 商品管理新增商品
export const COMMODITY_MANAGEMENT_ADD = `${COMMODITY_MANAGEMENT_LIST}/add`
// 商品管理修改规格
export const COMMODITY_MANAGEMENT_EDIT_SPEC = `${COMMODITY_MANAGEMENT_LIST}/edit-spec`
// 商品管理管理sku
export const COMMODITY_MANAGEMENT_SKU = `${COMMODITY_MANAGEMENT_LIST}/sku`

// 商品管理分类
export const COMMODITY_CLASSIFICATION = `${COMMODITY}/classification`
// 品种管理和产地
export const COMMODITY_VARIETY_MANAGEMENT = `${COMMODITY_CLASSIFICATION}/variety`
// 商品产地管理
export const COMMODITY_PLACE_MANAGEMENT = `${COMMODITY}/place`

// 组织架构管理
export const ORGANIZATIONAL_MANAGEMENT = `${BASE_URL}/organizational-management`
// 组织架构管理树
export const ORGANIZATIONAL_MANAGEMENT_TREE = `${ORGANIZATIONAL_MANAGEMENT}/tree`
// 员工管理
export const STAFF_MANAGEMENT = `${BASE_URL}/staff-management`
// 品种组管理
export const VARIETIES_GROUP_MANAGEMENT = `${BASE_URL}/varieties-group-management`
// 品种组SKU管理
export const VARIETIES_GROUP_SKU_MANAGEMENT = `${VARIETIES_GROUP_MANAGEMENT}/varieties-group-sku-management`
