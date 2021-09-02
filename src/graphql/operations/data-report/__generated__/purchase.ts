import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PitayaPageCommodityBomQueryVariables = SchemaTypes.Exact<{
  commodityName?: SchemaTypes.Maybe<SchemaTypes.Scalars['String']>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageCommodityBomQuery = {
  pitayaPageCommodityBom: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commodityBomId: SchemaTypes.Maybe<number>
          commoditySkuId: SchemaTypes.Maybe<number>
          commodityTypeName: SchemaTypes.Maybe<string>
          commodityCategoryName: SchemaTypes.Maybe<string>
          commodityName: SchemaTypes.Maybe<string>
          commoditySpecOptionName: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
        }>
      >
    >
  }>
}

export const PitayaPageCommodityBomDocument = gql`
  query pitayaPageCommodityBom($commodityName: String, $page: Page) {
    pitayaPageCommodityBom(commodityName: $commodityName, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commodityBomId
        commoditySkuId
        commodityTypeName
        commodityCategoryName
        commodityName
        commoditySpecOptionName
      }
    }
  }
`

/**
 * __usePitayaPageCommodityBomQuery__
 *
 * To run a query within a React component, call `usePitayaPageCommodityBomQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageCommodityBomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageCommodityBomQuery({
 *   variables: {
 *      commodityName: // value for 'commodityName'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageCommodityBomQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageCommodityBomQuery, PitayaPageCommodityBomQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageCommodityBomQuery, PitayaPageCommodityBomQueryVariables>(
    PitayaPageCommodityBomDocument,
    options,
  )
}
export function usePitayaPageCommodityBomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageCommodityBomQuery, PitayaPageCommodityBomQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageCommodityBomQuery, PitayaPageCommodityBomQueryVariables>(
    PitayaPageCommodityBomDocument,
    options,
  )
}
export type PitayaPageCommodityBomQueryHookResult = ReturnType<typeof usePitayaPageCommodityBomQuery>
export type PitayaPageCommodityBomLazyQueryHookResult = ReturnType<typeof usePitayaPageCommodityBomLazyQuery>
export type PitayaPageCommodityBomQueryResult = Apollo.QueryResult<
  PitayaPageCommodityBomQuery,
  PitayaPageCommodityBomQueryVariables
>
