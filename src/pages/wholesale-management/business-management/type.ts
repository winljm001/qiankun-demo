import {
  PageMerchantQueryVariables,
  MerchantQuery,
  SearchUserQuery,
} from '@/graphql/operations/wholesale-management/__generated__/business-management'
// 商户列表参数接口类型
export type BusinessListVariables = PageMerchantQueryVariables['input']
// 编辑默认数据接口类型
export type InitialValuesQuery = MerchantQuery['merchant']
// 编辑商户表单模糊查询数据接口类型
export type SearchValuesQuery = SearchUserQuery['searchUser']
