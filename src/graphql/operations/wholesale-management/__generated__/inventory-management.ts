import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PageTakeStockRecordQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.TakeStockRecordInput>
}>

export type PageTakeStockRecordQuery = {
  pageTakeStockRecord: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          checkId: SchemaTypes.Maybe<number>
          orgName: SchemaTypes.Maybe<string>
          checkDate: SchemaTypes.Maybe<number>
          totalStatus: SchemaTypes.Maybe<number>
          warehouseName: SchemaTypes.Maybe<string>
          checkNum: SchemaTypes.Maybe<number>
          username: SchemaTypes.Maybe<string>
          createTime: SchemaTypes.Maybe<number>
          remark: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export type GetTakeStockRecordDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.TakeStockRecordDetailInput>
}>

export type GetTakeStockRecordDetailQuery = {
  getTakeStockRecordDetail: SchemaTypes.Maybe<{
    warehouseName: SchemaTypes.Maybe<string>
    checkDate: SchemaTypes.Maybe<number>
    abnormalQuantity: SchemaTypes.Maybe<number>
    username: SchemaTypes.Maybe<string>
    remark: SchemaTypes.Maybe<string>
    createTime: SchemaTypes.Maybe<number>
    orgName: SchemaTypes.Maybe<string>
    orgId: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          checkStatus: SchemaTypes.Maybe<number>
          stockOrderCode: SchemaTypes.Maybe<string>
          commoditySkuName: SchemaTypes.Maybe<string>
          unitQuantity: SchemaTypes.Maybe<number>
          checkUnitQuantity: SchemaTypes.Maybe<number>
          orderType: SchemaTypes.Maybe<number>
          remark: SchemaTypes.Maybe<string>
          batchCode: SchemaTypes.Maybe<string>
          skuId: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type ListWarehouseOptionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.WarehouseOptionInput>
}>

export type ListWarehouseOptionQuery = {
  listWarehouseOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ id: SchemaTypes.Maybe<number>; name: SchemaTypes.Maybe<string> }>>
  >
}

export type MerchantOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type MerchantOptionQuery = {
  merchantOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export const PageTakeStockRecordDocument = gql`
  query pageTakeStockRecord($input: TakeStockRecordInput) {
    pageTakeStockRecord(input: $input) {
      records {
        checkId
        orgName
        checkDate
        totalStatus
        warehouseName
        checkNum
        username
        createTime
        remark
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageTakeStockRecordQuery__
 *
 * To run a query within a React component, call `usePageTakeStockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageTakeStockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageTakeStockRecordQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageTakeStockRecordQuery(
  baseOptions?: Apollo.QueryHookOptions<PageTakeStockRecordQuery, PageTakeStockRecordQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageTakeStockRecordQuery, PageTakeStockRecordQueryVariables>(
    PageTakeStockRecordDocument,
    options,
  )
}
export function usePageTakeStockRecordLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageTakeStockRecordQuery, PageTakeStockRecordQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageTakeStockRecordQuery, PageTakeStockRecordQueryVariables>(
    PageTakeStockRecordDocument,
    options,
  )
}
export type PageTakeStockRecordQueryHookResult = ReturnType<typeof usePageTakeStockRecordQuery>
export type PageTakeStockRecordLazyQueryHookResult = ReturnType<typeof usePageTakeStockRecordLazyQuery>
export type PageTakeStockRecordQueryResult = Apollo.QueryResult<
  PageTakeStockRecordQuery,
  PageTakeStockRecordQueryVariables
>
export const GetTakeStockRecordDetailDocument = gql`
  query getTakeStockRecordDetail($input: TakeStockRecordDetailInput) {
    getTakeStockRecordDetail(input: $input) {
      warehouseName
      checkDate
      abnormalQuantity
      username
      remark
      createTime
      orgName
      orgId
      records {
        checkStatus
        stockOrderCode
        commoditySkuName
        unitQuantity
        checkUnitQuantity
        orderType
        remark
        batchCode
        skuId
      }
    }
  }
`

/**
 * __useGetTakeStockRecordDetailQuery__
 *
 * To run a query within a React component, call `useGetTakeStockRecordDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTakeStockRecordDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTakeStockRecordDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTakeStockRecordDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTakeStockRecordDetailQuery, GetTakeStockRecordDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTakeStockRecordDetailQuery, GetTakeStockRecordDetailQueryVariables>(
    GetTakeStockRecordDetailDocument,
    options,
  )
}
export function useGetTakeStockRecordDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTakeStockRecordDetailQuery, GetTakeStockRecordDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTakeStockRecordDetailQuery, GetTakeStockRecordDetailQueryVariables>(
    GetTakeStockRecordDetailDocument,
    options,
  )
}
export type GetTakeStockRecordDetailQueryHookResult = ReturnType<typeof useGetTakeStockRecordDetailQuery>
export type GetTakeStockRecordDetailLazyQueryHookResult = ReturnType<typeof useGetTakeStockRecordDetailLazyQuery>
export type GetTakeStockRecordDetailQueryResult = Apollo.QueryResult<
  GetTakeStockRecordDetailQuery,
  GetTakeStockRecordDetailQueryVariables
>
export const ListWarehouseOptionDocument = gql`
  query listWarehouseOption($input: WarehouseOptionInput) {
    listWarehouseOption(input: $input) {
      id
      name
    }
  }
`

/**
 * __useListWarehouseOptionQuery__
 *
 * To run a query within a React component, call `useListWarehouseOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListWarehouseOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListWarehouseOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListWarehouseOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListWarehouseOptionQuery, ListWarehouseOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListWarehouseOptionQuery, ListWarehouseOptionQueryVariables>(
    ListWarehouseOptionDocument,
    options,
  )
}
export function useListWarehouseOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListWarehouseOptionQuery, ListWarehouseOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListWarehouseOptionQuery, ListWarehouseOptionQueryVariables>(
    ListWarehouseOptionDocument,
    options,
  )
}
export type ListWarehouseOptionQueryHookResult = ReturnType<typeof useListWarehouseOptionQuery>
export type ListWarehouseOptionLazyQueryHookResult = ReturnType<typeof useListWarehouseOptionLazyQuery>
export type ListWarehouseOptionQueryResult = Apollo.QueryResult<
  ListWarehouseOptionQuery,
  ListWarehouseOptionQueryVariables
>
export const MerchantOptionDocument = gql`
  query merchantOption {
    merchantOption {
      label
      value
    }
  }
`

/**
 * __useMerchantOptionQuery__
 *
 * To run a query within a React component, call `useMerchantOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerchantOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useMerchantOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<MerchantOptionQuery, MerchantOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MerchantOptionQuery, MerchantOptionQueryVariables>(MerchantOptionDocument, options)
}
export function useMerchantOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MerchantOptionQuery, MerchantOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MerchantOptionQuery, MerchantOptionQueryVariables>(MerchantOptionDocument, options)
}
export type MerchantOptionQueryHookResult = ReturnType<typeof useMerchantOptionQuery>
export type MerchantOptionLazyQueryHookResult = ReturnType<typeof useMerchantOptionLazyQuery>
export type MerchantOptionQueryResult = Apollo.QueryResult<MerchantOptionQuery, MerchantOptionQueryVariables>
