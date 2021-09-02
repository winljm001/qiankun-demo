import {
  GetSkuDetailQuery,
  ListSkuSelectedCombinationQuery,
} from '@/graphql/operations/base-data/__generated__/commodity-management'

export type ListSkuQueryCondition = GetSkuDetailQuery['listSkuQueryCondition']
export type GetCommodity = GetSkuDetailQuery['getCommodity']
export type ListSkuSelectedCombination = ListSkuSelectedCombinationQuery['listSkuSelectedCombination']
