import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PitayaCommodityTypeOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type PitayaCommodityTypeOptionQuery = {
  pitayaCommodityTypeOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PitayaCategoryOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type PitayaCategoryOptionQuery = {
  pitayaCategoryOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PitayaPageCommodityManageQueryVariables = SchemaTypes.Exact<{
  pageCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PitayaPageCommodityInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageCommodityManageQuery = {
  pitayaPageCommodityManage: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commodityId: SchemaTypes.Maybe<number>
          commodityName: SchemaTypes.Maybe<string>
          commodityTypeId: SchemaTypes.Maybe<number>
          commodityTypeName: SchemaTypes.Maybe<string>
          categoryId: SchemaTypes.Maybe<number>
          categoryName: SchemaTypes.Maybe<string>
          varietyId: SchemaTypes.Maybe<number>
          varietyName: SchemaTypes.Maybe<string>
          originId: SchemaTypes.Maybe<number>
          originName: SchemaTypes.Maybe<string>
          skuQuantity: SchemaTypes.Maybe<number>
          status: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type PitayaUpdateCommodityStatusMutationVariables = SchemaTypes.Exact<{
  updateCommodityStatusInput?: SchemaTypes.Maybe<SchemaTypes.PitayaUpdateCommodityStatusInput>
}>

export type PitayaUpdateCommodityStatusMutation = {
  pitayaUpdateCommodityStatus: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PitayaPageNoCommodityQueryVariables = SchemaTypes.Exact<{
  pageNoCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PitayaPageNoCommodityInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageNoCommodityQuery = {
  pitayaPageNoCommodity: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commodityId: SchemaTypes.Maybe<number>
          commodityName: SchemaTypes.Maybe<string>
          commodityTypeName: SchemaTypes.Maybe<string>
          commodityTypeId: SchemaTypes.Maybe<number>
          commodityCategoryName: SchemaTypes.Maybe<string>
          commodityVarietyName: SchemaTypes.Maybe<string>
          commodityPlaceOriginName: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export type PitayaOriginOptionQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type PitayaOriginOptionQuery = {
  pitayaOriginOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PitayaVarietyOptionQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type PitayaVarietyOptionQuery = {
  pitayaVarietyOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PitayaTableHeadQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type PitayaTableHeadQuery = {
  pitayaTableHead: SchemaTypes.Maybe<{
    spec: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ specId: SchemaTypes.Maybe<number>; specName: SchemaTypes.Maybe<string> }>>
    >
    other: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ key: SchemaTypes.Maybe<string>; title: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type PitayaNotChosenSkuOptionQueryVariables = SchemaTypes.Exact<{
  commodityId: SchemaTypes.Scalars['Int']
}>

export type PitayaNotChosenSkuOptionQuery = {
  pitayaNotChosenSkuOption: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        commoditySkuId: SchemaTypes.Maybe<number>
        optionId: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
      }>
    >
  >
}

export type PitayaUpdateSkuStatusMutationVariables = SchemaTypes.Exact<{
  updateStatusInput?: SchemaTypes.Maybe<SchemaTypes.PitayaUpdateStatusInput>
}>

export type PitayaUpdateSkuStatusMutation = {
  pitayaUpdateSkuStatus: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PitayaUpdateCommoditySkuMutationVariables = SchemaTypes.Exact<{
  updateCommoditySkuInput?: SchemaTypes.Maybe<SchemaTypes.PitayaUpdateCommoditySkuInput>
}>

export type PitayaUpdateCommoditySkuMutation = {
  pitayaUpdateCommoditySku: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PitayaCreateCommoditySkuMutationVariables = SchemaTypes.Exact<{
  commoditySkuId?: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>>>
}>

export type PitayaCreateCommoditySkuMutation = {
  pitayaCreateCommoditySku: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PitayaCreateCommodityMutationVariables = SchemaTypes.Exact<{
  createCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PitayaListCreateCommodityInput>
}>

export type PitayaCreateCommodityMutation = {
  pitayaCreateCommodity: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PitayaPageSkuQueryVariables = SchemaTypes.Exact<{
  pageSku?: SchemaTypes.Maybe<SchemaTypes.PitayaPageSkuInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageSkuQuery = {
  pitayaPageSku: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commoditySkuId: SchemaTypes.Maybe<number>
          total: SchemaTypes.Maybe<string>
          unit: SchemaTypes.Maybe<string>
          status: SchemaTypes.Maybe<number>
          change: SchemaTypes.Maybe<number>
          property: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
          skuOption: SchemaTypes.Maybe<
            Array<SchemaTypes.Maybe<{ specId: SchemaTypes.Maybe<number>; optionName: SchemaTypes.Maybe<string> }>>
          >
        }>
      >
    >
  }>
}

export type ListUnitOptionsQueryVariables = SchemaTypes.Exact<{
  commodityTypeId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type ListUnitOptionsQuery = {
  listUnitOptions: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PitayaCommoditySkuDetailQueryVariables = SchemaTypes.Exact<{
  commoditySkuId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type PitayaCommoditySkuDetailQuery = {
  pitayaCommoditySkuDetail: SchemaTypes.Maybe<{
    commoditySkuId: SchemaTypes.Maybe<number>
    commodityTypeId: SchemaTypes.Maybe<number>
    unitQuantity: SchemaTypes.Maybe<number>
    unitType: SchemaTypes.Maybe<number>
    totalType: SchemaTypes.Maybe<number>
    property: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
    status: SchemaTypes.Maybe<number>
    change: SchemaTypes.Maybe<number>
  }>
}

export const PitayaCommodityTypeOptionDocument = gql`
  query pitayaCommodityTypeOption {
    pitayaCommodityTypeOption {
      label
      value
    }
  }
`

/**
 * __usePitayaCommodityTypeOptionQuery__
 *
 * To run a query within a React component, call `usePitayaCommodityTypeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCommodityTypeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCommodityTypeOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaCommodityTypeOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaCommodityTypeOptionQuery, PitayaCommodityTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaCommodityTypeOptionQuery, PitayaCommodityTypeOptionQueryVariables>(
    PitayaCommodityTypeOptionDocument,
    options,
  )
}
export function usePitayaCommodityTypeOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaCommodityTypeOptionQuery, PitayaCommodityTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaCommodityTypeOptionQuery, PitayaCommodityTypeOptionQueryVariables>(
    PitayaCommodityTypeOptionDocument,
    options,
  )
}
export type PitayaCommodityTypeOptionQueryHookResult = ReturnType<typeof usePitayaCommodityTypeOptionQuery>
export type PitayaCommodityTypeOptionLazyQueryHookResult = ReturnType<typeof usePitayaCommodityTypeOptionLazyQuery>
export type PitayaCommodityTypeOptionQueryResult = Apollo.QueryResult<
  PitayaCommodityTypeOptionQuery,
  PitayaCommodityTypeOptionQueryVariables
>
export const PitayaCategoryOptionDocument = gql`
  query pitayaCategoryOption {
    pitayaCategoryOption {
      label
      value
    }
  }
`

/**
 * __usePitayaCategoryOptionQuery__
 *
 * To run a query within a React component, call `usePitayaCategoryOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCategoryOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCategoryOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaCategoryOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaCategoryOptionQuery, PitayaCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaCategoryOptionQuery, PitayaCategoryOptionQueryVariables>(
    PitayaCategoryOptionDocument,
    options,
  )
}
export function usePitayaCategoryOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaCategoryOptionQuery, PitayaCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaCategoryOptionQuery, PitayaCategoryOptionQueryVariables>(
    PitayaCategoryOptionDocument,
    options,
  )
}
export type PitayaCategoryOptionQueryHookResult = ReturnType<typeof usePitayaCategoryOptionQuery>
export type PitayaCategoryOptionLazyQueryHookResult = ReturnType<typeof usePitayaCategoryOptionLazyQuery>
export type PitayaCategoryOptionQueryResult = Apollo.QueryResult<
  PitayaCategoryOptionQuery,
  PitayaCategoryOptionQueryVariables
>
export const PitayaPageCommodityManageDocument = gql`
  query pitayaPageCommodityManage($pageCommodityInput: PitayaPageCommodityInput, $page: Page) {
    pitayaPageCommodityManage(pageCommodityInput: $pageCommodityInput, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commodityId
        commodityName
        commodityTypeId
        commodityTypeName
        categoryId
        categoryName
        varietyId
        varietyName
        originId
        originName
        skuQuantity
        status
      }
    }
  }
`

/**
 * __usePitayaPageCommodityManageQuery__
 *
 * To run a query within a React component, call `usePitayaPageCommodityManageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageCommodityManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageCommodityManageQuery({
 *   variables: {
 *      pageCommodityInput: // value for 'pageCommodityInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageCommodityManageQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageCommodityManageQuery, PitayaPageCommodityManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageCommodityManageQuery, PitayaPageCommodityManageQueryVariables>(
    PitayaPageCommodityManageDocument,
    options,
  )
}
export function usePitayaPageCommodityManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageCommodityManageQuery, PitayaPageCommodityManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageCommodityManageQuery, PitayaPageCommodityManageQueryVariables>(
    PitayaPageCommodityManageDocument,
    options,
  )
}
export type PitayaPageCommodityManageQueryHookResult = ReturnType<typeof usePitayaPageCommodityManageQuery>
export type PitayaPageCommodityManageLazyQueryHookResult = ReturnType<typeof usePitayaPageCommodityManageLazyQuery>
export type PitayaPageCommodityManageQueryResult = Apollo.QueryResult<
  PitayaPageCommodityManageQuery,
  PitayaPageCommodityManageQueryVariables
>
export const PitayaUpdateCommodityStatusDocument = gql`
  mutation pitayaUpdateCommodityStatus($updateCommodityStatusInput: PitayaUpdateCommodityStatusInput) {
    pitayaUpdateCommodityStatus(updateCommodityStatusInput: $updateCommodityStatusInput)
  }
`
export type PitayaUpdateCommodityStatusMutationFn = Apollo.MutationFunction<
  PitayaUpdateCommodityStatusMutation,
  PitayaUpdateCommodityStatusMutationVariables
>

/**
 * __usePitayaUpdateCommodityStatusMutation__
 *
 * To run a mutation, you first call `usePitayaUpdateCommodityStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaUpdateCommodityStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaUpdateCommodityStatusMutation, { data, loading, error }] = usePitayaUpdateCommodityStatusMutation({
 *   variables: {
 *      updateCommodityStatusInput: // value for 'updateCommodityStatusInput'
 *   },
 * });
 */
export function usePitayaUpdateCommodityStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PitayaUpdateCommodityStatusMutation,
    PitayaUpdateCommodityStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaUpdateCommodityStatusMutation, PitayaUpdateCommodityStatusMutationVariables>(
    PitayaUpdateCommodityStatusDocument,
    options,
  )
}
export type PitayaUpdateCommodityStatusMutationHookResult = ReturnType<typeof usePitayaUpdateCommodityStatusMutation>
export type PitayaUpdateCommodityStatusMutationResult = Apollo.MutationResult<PitayaUpdateCommodityStatusMutation>
export type PitayaUpdateCommodityStatusMutationOptions = Apollo.BaseMutationOptions<
  PitayaUpdateCommodityStatusMutation,
  PitayaUpdateCommodityStatusMutationVariables
>
export const PitayaPageNoCommodityDocument = gql`
  query pitayaPageNoCommodity($pageNoCommodityInput: PitayaPageNoCommodityInput, $page: Page) {
    pitayaPageNoCommodity(pageNoCommodityInput: $pageNoCommodityInput, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commodityId
        commodityName
        commodityTypeName
        commodityTypeId
        commodityCategoryName
        commodityVarietyName
        commodityPlaceOriginName
      }
    }
  }
`

/**
 * __usePitayaPageNoCommodityQuery__
 *
 * To run a query within a React component, call `usePitayaPageNoCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageNoCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageNoCommodityQuery({
 *   variables: {
 *      pageNoCommodityInput: // value for 'pageNoCommodityInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageNoCommodityQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageNoCommodityQuery, PitayaPageNoCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageNoCommodityQuery, PitayaPageNoCommodityQueryVariables>(
    PitayaPageNoCommodityDocument,
    options,
  )
}
export function usePitayaPageNoCommodityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageNoCommodityQuery, PitayaPageNoCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageNoCommodityQuery, PitayaPageNoCommodityQueryVariables>(
    PitayaPageNoCommodityDocument,
    options,
  )
}
export type PitayaPageNoCommodityQueryHookResult = ReturnType<typeof usePitayaPageNoCommodityQuery>
export type PitayaPageNoCommodityLazyQueryHookResult = ReturnType<typeof usePitayaPageNoCommodityLazyQuery>
export type PitayaPageNoCommodityQueryResult = Apollo.QueryResult<
  PitayaPageNoCommodityQuery,
  PitayaPageNoCommodityQueryVariables
>
export const PitayaOriginOptionDocument = gql`
  query pitayaOriginOption($categoryId: Int!) {
    pitayaOriginOption(categoryId: $categoryId) {
      label
      value
    }
  }
`

/**
 * __usePitayaOriginOptionQuery__
 *
 * To run a query within a React component, call `usePitayaOriginOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaOriginOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaOriginOptionQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePitayaOriginOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PitayaOriginOptionQuery, PitayaOriginOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaOriginOptionQuery, PitayaOriginOptionQueryVariables>(PitayaOriginOptionDocument, options)
}
export function usePitayaOriginOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaOriginOptionQuery, PitayaOriginOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaOriginOptionQuery, PitayaOriginOptionQueryVariables>(
    PitayaOriginOptionDocument,
    options,
  )
}
export type PitayaOriginOptionQueryHookResult = ReturnType<typeof usePitayaOriginOptionQuery>
export type PitayaOriginOptionLazyQueryHookResult = ReturnType<typeof usePitayaOriginOptionLazyQuery>
export type PitayaOriginOptionQueryResult = Apollo.QueryResult<
  PitayaOriginOptionQuery,
  PitayaOriginOptionQueryVariables
>
export const PitayaVarietyOptionDocument = gql`
  query pitayaVarietyOption($categoryId: Int!) {
    pitayaVarietyOption(categoryId: $categoryId) {
      label
      value
    }
  }
`

/**
 * __usePitayaVarietyOptionQuery__
 *
 * To run a query within a React component, call `usePitayaVarietyOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaVarietyOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaVarietyOptionQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePitayaVarietyOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PitayaVarietyOptionQuery, PitayaVarietyOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaVarietyOptionQuery, PitayaVarietyOptionQueryVariables>(
    PitayaVarietyOptionDocument,
    options,
  )
}
export function usePitayaVarietyOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaVarietyOptionQuery, PitayaVarietyOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaVarietyOptionQuery, PitayaVarietyOptionQueryVariables>(
    PitayaVarietyOptionDocument,
    options,
  )
}
export type PitayaVarietyOptionQueryHookResult = ReturnType<typeof usePitayaVarietyOptionQuery>
export type PitayaVarietyOptionLazyQueryHookResult = ReturnType<typeof usePitayaVarietyOptionLazyQuery>
export type PitayaVarietyOptionQueryResult = Apollo.QueryResult<
  PitayaVarietyOptionQuery,
  PitayaVarietyOptionQueryVariables
>
export const PitayaTableHeadDocument = gql`
  query pitayaTableHead($commodityId: Int) {
    pitayaTableHead(commodityId: $commodityId) {
      spec {
        specId
        specName
      }
      other {
        key
        title
      }
    }
  }
`

/**
 * __usePitayaTableHeadQuery__
 *
 * To run a query within a React component, call `usePitayaTableHeadQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaTableHeadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaTableHeadQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function usePitayaTableHeadQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaTableHeadQuery, PitayaTableHeadQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaTableHeadQuery, PitayaTableHeadQueryVariables>(PitayaTableHeadDocument, options)
}
export function usePitayaTableHeadLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaTableHeadQuery, PitayaTableHeadQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaTableHeadQuery, PitayaTableHeadQueryVariables>(PitayaTableHeadDocument, options)
}
export type PitayaTableHeadQueryHookResult = ReturnType<typeof usePitayaTableHeadQuery>
export type PitayaTableHeadLazyQueryHookResult = ReturnType<typeof usePitayaTableHeadLazyQuery>
export type PitayaTableHeadQueryResult = Apollo.QueryResult<PitayaTableHeadQuery, PitayaTableHeadQueryVariables>
export const PitayaNotChosenSkuOptionDocument = gql`
  query pitayaNotChosenSkuOption($commodityId: Int!) {
    pitayaNotChosenSkuOption(commodityId: $commodityId) {
      commoditySkuId
      optionId
    }
  }
`

/**
 * __usePitayaNotChosenSkuOptionQuery__
 *
 * To run a query within a React component, call `usePitayaNotChosenSkuOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaNotChosenSkuOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaNotChosenSkuOptionQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function usePitayaNotChosenSkuOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PitayaNotChosenSkuOptionQuery, PitayaNotChosenSkuOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaNotChosenSkuOptionQuery, PitayaNotChosenSkuOptionQueryVariables>(
    PitayaNotChosenSkuOptionDocument,
    options,
  )
}
export function usePitayaNotChosenSkuOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaNotChosenSkuOptionQuery, PitayaNotChosenSkuOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaNotChosenSkuOptionQuery, PitayaNotChosenSkuOptionQueryVariables>(
    PitayaNotChosenSkuOptionDocument,
    options,
  )
}
export type PitayaNotChosenSkuOptionQueryHookResult = ReturnType<typeof usePitayaNotChosenSkuOptionQuery>
export type PitayaNotChosenSkuOptionLazyQueryHookResult = ReturnType<typeof usePitayaNotChosenSkuOptionLazyQuery>
export type PitayaNotChosenSkuOptionQueryResult = Apollo.QueryResult<
  PitayaNotChosenSkuOptionQuery,
  PitayaNotChosenSkuOptionQueryVariables
>
export const PitayaUpdateSkuStatusDocument = gql`
  mutation pitayaUpdateSkuStatus($updateStatusInput: PitayaUpdateStatusInput) {
    pitayaUpdateSkuStatus(updateStatusInput: $updateStatusInput)
  }
`
export type PitayaUpdateSkuStatusMutationFn = Apollo.MutationFunction<
  PitayaUpdateSkuStatusMutation,
  PitayaUpdateSkuStatusMutationVariables
>

/**
 * __usePitayaUpdateSkuStatusMutation__
 *
 * To run a mutation, you first call `usePitayaUpdateSkuStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaUpdateSkuStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaUpdateSkuStatusMutation, { data, loading, error }] = usePitayaUpdateSkuStatusMutation({
 *   variables: {
 *      updateStatusInput: // value for 'updateStatusInput'
 *   },
 * });
 */
export function usePitayaUpdateSkuStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaUpdateSkuStatusMutation, PitayaUpdateSkuStatusMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaUpdateSkuStatusMutation, PitayaUpdateSkuStatusMutationVariables>(
    PitayaUpdateSkuStatusDocument,
    options,
  )
}
export type PitayaUpdateSkuStatusMutationHookResult = ReturnType<typeof usePitayaUpdateSkuStatusMutation>
export type PitayaUpdateSkuStatusMutationResult = Apollo.MutationResult<PitayaUpdateSkuStatusMutation>
export type PitayaUpdateSkuStatusMutationOptions = Apollo.BaseMutationOptions<
  PitayaUpdateSkuStatusMutation,
  PitayaUpdateSkuStatusMutationVariables
>
export const PitayaUpdateCommoditySkuDocument = gql`
  mutation pitayaUpdateCommoditySku($updateCommoditySkuInput: PitayaUpdateCommoditySkuInput) {
    pitayaUpdateCommoditySku(updateCommoditySkuInput: $updateCommoditySkuInput)
  }
`
export type PitayaUpdateCommoditySkuMutationFn = Apollo.MutationFunction<
  PitayaUpdateCommoditySkuMutation,
  PitayaUpdateCommoditySkuMutationVariables
>

/**
 * __usePitayaUpdateCommoditySkuMutation__
 *
 * To run a mutation, you first call `usePitayaUpdateCommoditySkuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaUpdateCommoditySkuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaUpdateCommoditySkuMutation, { data, loading, error }] = usePitayaUpdateCommoditySkuMutation({
 *   variables: {
 *      updateCommoditySkuInput: // value for 'updateCommoditySkuInput'
 *   },
 * });
 */
export function usePitayaUpdateCommoditySkuMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaUpdateCommoditySkuMutation, PitayaUpdateCommoditySkuMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaUpdateCommoditySkuMutation, PitayaUpdateCommoditySkuMutationVariables>(
    PitayaUpdateCommoditySkuDocument,
    options,
  )
}
export type PitayaUpdateCommoditySkuMutationHookResult = ReturnType<typeof usePitayaUpdateCommoditySkuMutation>
export type PitayaUpdateCommoditySkuMutationResult = Apollo.MutationResult<PitayaUpdateCommoditySkuMutation>
export type PitayaUpdateCommoditySkuMutationOptions = Apollo.BaseMutationOptions<
  PitayaUpdateCommoditySkuMutation,
  PitayaUpdateCommoditySkuMutationVariables
>
export const PitayaCreateCommoditySkuDocument = gql`
  mutation pitayaCreateCommoditySku($commoditySkuId: [Int]) {
    pitayaCreateCommoditySku(commoditySkuId: $commoditySkuId)
  }
`
export type PitayaCreateCommoditySkuMutationFn = Apollo.MutationFunction<
  PitayaCreateCommoditySkuMutation,
  PitayaCreateCommoditySkuMutationVariables
>

/**
 * __usePitayaCreateCommoditySkuMutation__
 *
 * To run a mutation, you first call `usePitayaCreateCommoditySkuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCreateCommoditySkuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCreateCommoditySkuMutation, { data, loading, error }] = usePitayaCreateCommoditySkuMutation({
 *   variables: {
 *      commoditySkuId: // value for 'commoditySkuId'
 *   },
 * });
 */
export function usePitayaCreateCommoditySkuMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaCreateCommoditySkuMutation, PitayaCreateCommoditySkuMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaCreateCommoditySkuMutation, PitayaCreateCommoditySkuMutationVariables>(
    PitayaCreateCommoditySkuDocument,
    options,
  )
}
export type PitayaCreateCommoditySkuMutationHookResult = ReturnType<typeof usePitayaCreateCommoditySkuMutation>
export type PitayaCreateCommoditySkuMutationResult = Apollo.MutationResult<PitayaCreateCommoditySkuMutation>
export type PitayaCreateCommoditySkuMutationOptions = Apollo.BaseMutationOptions<
  PitayaCreateCommoditySkuMutation,
  PitayaCreateCommoditySkuMutationVariables
>
export const PitayaCreateCommodityDocument = gql`
  mutation pitayaCreateCommodity($createCommodityInput: PitayaListCreateCommodityInput) {
    pitayaCreateCommodity(createCommodityInput: $createCommodityInput)
  }
`
export type PitayaCreateCommodityMutationFn = Apollo.MutationFunction<
  PitayaCreateCommodityMutation,
  PitayaCreateCommodityMutationVariables
>

/**
 * __usePitayaCreateCommodityMutation__
 *
 * To run a mutation, you first call `usePitayaCreateCommodityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCreateCommodityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCreateCommodityMutation, { data, loading, error }] = usePitayaCreateCommodityMutation({
 *   variables: {
 *      createCommodityInput: // value for 'createCommodityInput'
 *   },
 * });
 */
export function usePitayaCreateCommodityMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaCreateCommodityMutation, PitayaCreateCommodityMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaCreateCommodityMutation, PitayaCreateCommodityMutationVariables>(
    PitayaCreateCommodityDocument,
    options,
  )
}
export type PitayaCreateCommodityMutationHookResult = ReturnType<typeof usePitayaCreateCommodityMutation>
export type PitayaCreateCommodityMutationResult = Apollo.MutationResult<PitayaCreateCommodityMutation>
export type PitayaCreateCommodityMutationOptions = Apollo.BaseMutationOptions<
  PitayaCreateCommodityMutation,
  PitayaCreateCommodityMutationVariables
>
export const PitayaPageSkuDocument = gql`
  query pitayaPageSku($pageSku: PitayaPageSkuInput, $page: Page) {
    pitayaPageSku(pageSku: $pageSku, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commoditySkuId
        skuOption {
          specId
          optionName
        }
        total
        unit
        status
        change
        property
      }
    }
  }
`

/**
 * __usePitayaPageSkuQuery__
 *
 * To run a query within a React component, call `usePitayaPageSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageSkuQuery({
 *   variables: {
 *      pageSku: // value for 'pageSku'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageSkuQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageSkuQuery, PitayaPageSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageSkuQuery, PitayaPageSkuQueryVariables>(PitayaPageSkuDocument, options)
}
export function usePitayaPageSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageSkuQuery, PitayaPageSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageSkuQuery, PitayaPageSkuQueryVariables>(PitayaPageSkuDocument, options)
}
export type PitayaPageSkuQueryHookResult = ReturnType<typeof usePitayaPageSkuQuery>
export type PitayaPageSkuLazyQueryHookResult = ReturnType<typeof usePitayaPageSkuLazyQuery>
export type PitayaPageSkuQueryResult = Apollo.QueryResult<PitayaPageSkuQuery, PitayaPageSkuQueryVariables>
export const ListUnitOptionsDocument = gql`
  query listUnitOptions($commodityTypeId: Int) {
    listUnitOptions(commodityTypeId: $commodityTypeId) {
      label
      value
    }
  }
`

/**
 * __useListUnitOptionsQuery__
 *
 * To run a query within a React component, call `useListUnitOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUnitOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUnitOptionsQuery({
 *   variables: {
 *      commodityTypeId: // value for 'commodityTypeId'
 *   },
 * });
 */
export function useListUnitOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<ListUnitOptionsQuery, ListUnitOptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListUnitOptionsQuery, ListUnitOptionsQueryVariables>(ListUnitOptionsDocument, options)
}
export function useListUnitOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListUnitOptionsQuery, ListUnitOptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListUnitOptionsQuery, ListUnitOptionsQueryVariables>(ListUnitOptionsDocument, options)
}
export type ListUnitOptionsQueryHookResult = ReturnType<typeof useListUnitOptionsQuery>
export type ListUnitOptionsLazyQueryHookResult = ReturnType<typeof useListUnitOptionsLazyQuery>
export type ListUnitOptionsQueryResult = Apollo.QueryResult<ListUnitOptionsQuery, ListUnitOptionsQueryVariables>
export const PitayaCommoditySkuDetailDocument = gql`
  query pitayaCommoditySkuDetail($commoditySkuId: Int) {
    pitayaCommoditySkuDetail(commoditySkuId: $commoditySkuId) {
      commoditySkuId
      commodityTypeId
      unitQuantity
      unitType
      totalType
      property
      status
      change
    }
  }
`

/**
 * __usePitayaCommoditySkuDetailQuery__
 *
 * To run a query within a React component, call `usePitayaCommoditySkuDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCommoditySkuDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCommoditySkuDetailQuery({
 *   variables: {
 *      commoditySkuId: // value for 'commoditySkuId'
 *   },
 * });
 */
export function usePitayaCommoditySkuDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaCommoditySkuDetailQuery, PitayaCommoditySkuDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaCommoditySkuDetailQuery, PitayaCommoditySkuDetailQueryVariables>(
    PitayaCommoditySkuDetailDocument,
    options,
  )
}
export function usePitayaCommoditySkuDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaCommoditySkuDetailQuery, PitayaCommoditySkuDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaCommoditySkuDetailQuery, PitayaCommoditySkuDetailQueryVariables>(
    PitayaCommoditySkuDetailDocument,
    options,
  )
}
export type PitayaCommoditySkuDetailQueryHookResult = ReturnType<typeof usePitayaCommoditySkuDetailQuery>
export type PitayaCommoditySkuDetailLazyQueryHookResult = ReturnType<typeof usePitayaCommoditySkuDetailLazyQuery>
export type PitayaCommoditySkuDetailQueryResult = Apollo.QueryResult<
  PitayaCommoditySkuDetailQuery,
  PitayaCommoditySkuDetailQueryVariables
>
