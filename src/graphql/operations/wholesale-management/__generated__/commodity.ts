import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PeachCommodityTypeOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type PeachCommodityTypeOptionQuery = {
  peachCommodityTypeOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PeachCategoryOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type PeachCategoryOptionQuery = {
  peachCategoryOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PeachPageCommodityManageQueryVariables = SchemaTypes.Exact<{
  pageCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PeachPageCommodityInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PeachPageCommodityManageQuery = {
  peachPageCommodityManage: SchemaTypes.Maybe<{
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

export type PeachUpdateCommodityStatusMutationVariables = SchemaTypes.Exact<{
  updateCommodityStatusInput?: SchemaTypes.Maybe<SchemaTypes.PeachUpdateCommodityStatusInput>
}>

export type PeachUpdateCommodityStatusMutation = {
  peachUpdateCommodityStatus: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PeachPageNoCommodityQueryVariables = SchemaTypes.Exact<{
  pageNoCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PeachPageNoCommodityInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PeachPageNoCommodityQuery = {
  peachPageNoCommodity: SchemaTypes.Maybe<{
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
          commodityCategoryId: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type PeachOriginOptionQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type PeachOriginOptionQuery = {
  peachOriginOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PeachVarietyOptionQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type PeachVarietyOptionQuery = {
  peachVarietyOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type PeachNotChosenSkuOptionQueryVariables = SchemaTypes.Exact<{
  commodityId: SchemaTypes.Scalars['Int']
}>

export type PeachNotChosenSkuOptionQuery = {
  peachNotChosenSkuOption: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        commoditySkuId: SchemaTypes.Maybe<number>
        optionId: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
      }>
    >
  >
}

export type PeachUpdateSkuStatusMutationVariables = SchemaTypes.Exact<{
  updateStatusInput?: SchemaTypes.Maybe<SchemaTypes.PeachUpdateStatusInput>
}>

export type PeachUpdateSkuStatusMutation = { peachUpdateSkuStatus: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>> }

export type PeachCreateCommoditySkuMutationVariables = SchemaTypes.Exact<{
  commoditySkuId?: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>>>
}>

export type PeachCreateCommoditySkuMutation = {
  peachCreateCommoditySku: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
}

export type PeachCreateCommodityMutationVariables = SchemaTypes.Exact<{
  createCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PeachListCreateCommodityInput>
}>

export type PeachCreateCommodityMutation = { peachCreateCommodity: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>> }

export type PeachPageSkuQueryVariables = SchemaTypes.Exact<{
  pageSku?: SchemaTypes.Maybe<SchemaTypes.PeachPageSkuInput>
}>

export type PeachPageSkuQuery = {
  peachPageSku: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commoditySkuId: SchemaTypes.Maybe<number>
          status: SchemaTypes.Maybe<number>
          skuOption: SchemaTypes.Maybe<
            Array<SchemaTypes.Maybe<{ specId: SchemaTypes.Maybe<number>; optionName: SchemaTypes.Maybe<string> }>>
          >
        }>
      >
    >
  }>
}

export const PeachCommodityTypeOptionDocument = gql`
  query peachCommodityTypeOption {
    peachCommodityTypeOption {
      label
      value
    }
  }
`

/**
 * __usePeachCommodityTypeOptionQuery__
 *
 * To run a query within a React component, call `usePeachCommodityTypeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachCommodityTypeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachCommodityTypeOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeachCommodityTypeOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<PeachCommodityTypeOptionQuery, PeachCommodityTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachCommodityTypeOptionQuery, PeachCommodityTypeOptionQueryVariables>(
    PeachCommodityTypeOptionDocument,
    options,
  )
}
export function usePeachCommodityTypeOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachCommodityTypeOptionQuery, PeachCommodityTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachCommodityTypeOptionQuery, PeachCommodityTypeOptionQueryVariables>(
    PeachCommodityTypeOptionDocument,
    options,
  )
}
export type PeachCommodityTypeOptionQueryHookResult = ReturnType<typeof usePeachCommodityTypeOptionQuery>
export type PeachCommodityTypeOptionLazyQueryHookResult = ReturnType<typeof usePeachCommodityTypeOptionLazyQuery>
export type PeachCommodityTypeOptionQueryResult = Apollo.QueryResult<
  PeachCommodityTypeOptionQuery,
  PeachCommodityTypeOptionQueryVariables
>
export const PeachCategoryOptionDocument = gql`
  query peachCategoryOption {
    peachCategoryOption {
      label
      value
    }
  }
`

/**
 * __usePeachCategoryOptionQuery__
 *
 * To run a query within a React component, call `usePeachCategoryOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachCategoryOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachCategoryOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeachCategoryOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<PeachCategoryOptionQuery, PeachCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachCategoryOptionQuery, PeachCategoryOptionQueryVariables>(
    PeachCategoryOptionDocument,
    options,
  )
}
export function usePeachCategoryOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachCategoryOptionQuery, PeachCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachCategoryOptionQuery, PeachCategoryOptionQueryVariables>(
    PeachCategoryOptionDocument,
    options,
  )
}
export type PeachCategoryOptionQueryHookResult = ReturnType<typeof usePeachCategoryOptionQuery>
export type PeachCategoryOptionLazyQueryHookResult = ReturnType<typeof usePeachCategoryOptionLazyQuery>
export type PeachCategoryOptionQueryResult = Apollo.QueryResult<
  PeachCategoryOptionQuery,
  PeachCategoryOptionQueryVariables
>
export const PeachPageCommodityManageDocument = gql`
  query peachPageCommodityManage($pageCommodityInput: PeachPageCommodityInput, $page: Page) {
    peachPageCommodityManage(pageCommodityInput: $pageCommodityInput, page: $page) {
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
 * __usePeachPageCommodityManageQuery__
 *
 * To run a query within a React component, call `usePeachPageCommodityManageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachPageCommodityManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachPageCommodityManageQuery({
 *   variables: {
 *      pageCommodityInput: // value for 'pageCommodityInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePeachPageCommodityManageQuery(
  baseOptions?: Apollo.QueryHookOptions<PeachPageCommodityManageQuery, PeachPageCommodityManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachPageCommodityManageQuery, PeachPageCommodityManageQueryVariables>(
    PeachPageCommodityManageDocument,
    options,
  )
}
export function usePeachPageCommodityManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachPageCommodityManageQuery, PeachPageCommodityManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachPageCommodityManageQuery, PeachPageCommodityManageQueryVariables>(
    PeachPageCommodityManageDocument,
    options,
  )
}
export type PeachPageCommodityManageQueryHookResult = ReturnType<typeof usePeachPageCommodityManageQuery>
export type PeachPageCommodityManageLazyQueryHookResult = ReturnType<typeof usePeachPageCommodityManageLazyQuery>
export type PeachPageCommodityManageQueryResult = Apollo.QueryResult<
  PeachPageCommodityManageQuery,
  PeachPageCommodityManageQueryVariables
>
export const PeachUpdateCommodityStatusDocument = gql`
  mutation peachUpdateCommodityStatus($updateCommodityStatusInput: PeachUpdateCommodityStatusInput) {
    peachUpdateCommodityStatus(updateCommodityStatusInput: $updateCommodityStatusInput)
  }
`
export type PeachUpdateCommodityStatusMutationFn = Apollo.MutationFunction<
  PeachUpdateCommodityStatusMutation,
  PeachUpdateCommodityStatusMutationVariables
>

/**
 * __usePeachUpdateCommodityStatusMutation__
 *
 * To run a mutation, you first call `usePeachUpdateCommodityStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePeachUpdateCommodityStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [peachUpdateCommodityStatusMutation, { data, loading, error }] = usePeachUpdateCommodityStatusMutation({
 *   variables: {
 *      updateCommodityStatusInput: // value for 'updateCommodityStatusInput'
 *   },
 * });
 */
export function usePeachUpdateCommodityStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PeachUpdateCommodityStatusMutation,
    PeachUpdateCommodityStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PeachUpdateCommodityStatusMutation, PeachUpdateCommodityStatusMutationVariables>(
    PeachUpdateCommodityStatusDocument,
    options,
  )
}
export type PeachUpdateCommodityStatusMutationHookResult = ReturnType<typeof usePeachUpdateCommodityStatusMutation>
export type PeachUpdateCommodityStatusMutationResult = Apollo.MutationResult<PeachUpdateCommodityStatusMutation>
export type PeachUpdateCommodityStatusMutationOptions = Apollo.BaseMutationOptions<
  PeachUpdateCommodityStatusMutation,
  PeachUpdateCommodityStatusMutationVariables
>
export const PeachPageNoCommodityDocument = gql`
  query peachPageNoCommodity($pageNoCommodityInput: PeachPageNoCommodityInput, $page: Page) {
    peachPageNoCommodity(pageNoCommodityInput: $pageNoCommodityInput, page: $page) {
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
        commodityCategoryId
      }
    }
  }
`

/**
 * __usePeachPageNoCommodityQuery__
 *
 * To run a query within a React component, call `usePeachPageNoCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachPageNoCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachPageNoCommodityQuery({
 *   variables: {
 *      pageNoCommodityInput: // value for 'pageNoCommodityInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePeachPageNoCommodityQuery(
  baseOptions?: Apollo.QueryHookOptions<PeachPageNoCommodityQuery, PeachPageNoCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachPageNoCommodityQuery, PeachPageNoCommodityQueryVariables>(
    PeachPageNoCommodityDocument,
    options,
  )
}
export function usePeachPageNoCommodityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachPageNoCommodityQuery, PeachPageNoCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachPageNoCommodityQuery, PeachPageNoCommodityQueryVariables>(
    PeachPageNoCommodityDocument,
    options,
  )
}
export type PeachPageNoCommodityQueryHookResult = ReturnType<typeof usePeachPageNoCommodityQuery>
export type PeachPageNoCommodityLazyQueryHookResult = ReturnType<typeof usePeachPageNoCommodityLazyQuery>
export type PeachPageNoCommodityQueryResult = Apollo.QueryResult<
  PeachPageNoCommodityQuery,
  PeachPageNoCommodityQueryVariables
>
export const PeachOriginOptionDocument = gql`
  query peachOriginOption($categoryId: Int!) {
    peachOriginOption(categoryId: $categoryId) {
      label
      value
    }
  }
`

/**
 * __usePeachOriginOptionQuery__
 *
 * To run a query within a React component, call `usePeachOriginOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachOriginOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachOriginOptionQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePeachOriginOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PeachOriginOptionQuery, PeachOriginOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachOriginOptionQuery, PeachOriginOptionQueryVariables>(PeachOriginOptionDocument, options)
}
export function usePeachOriginOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachOriginOptionQuery, PeachOriginOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachOriginOptionQuery, PeachOriginOptionQueryVariables>(
    PeachOriginOptionDocument,
    options,
  )
}
export type PeachOriginOptionQueryHookResult = ReturnType<typeof usePeachOriginOptionQuery>
export type PeachOriginOptionLazyQueryHookResult = ReturnType<typeof usePeachOriginOptionLazyQuery>
export type PeachOriginOptionQueryResult = Apollo.QueryResult<PeachOriginOptionQuery, PeachOriginOptionQueryVariables>
export const PeachVarietyOptionDocument = gql`
  query peachVarietyOption($categoryId: Int!) {
    peachVarietyOption(categoryId: $categoryId) {
      label
      value
    }
  }
`

/**
 * __usePeachVarietyOptionQuery__
 *
 * To run a query within a React component, call `usePeachVarietyOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachVarietyOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachVarietyOptionQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePeachVarietyOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PeachVarietyOptionQuery, PeachVarietyOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachVarietyOptionQuery, PeachVarietyOptionQueryVariables>(PeachVarietyOptionDocument, options)
}
export function usePeachVarietyOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachVarietyOptionQuery, PeachVarietyOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachVarietyOptionQuery, PeachVarietyOptionQueryVariables>(
    PeachVarietyOptionDocument,
    options,
  )
}
export type PeachVarietyOptionQueryHookResult = ReturnType<typeof usePeachVarietyOptionQuery>
export type PeachVarietyOptionLazyQueryHookResult = ReturnType<typeof usePeachVarietyOptionLazyQuery>
export type PeachVarietyOptionQueryResult = Apollo.QueryResult<
  PeachVarietyOptionQuery,
  PeachVarietyOptionQueryVariables
>
export const PeachNotChosenSkuOptionDocument = gql`
  query peachNotChosenSkuOption($commodityId: Int!) {
    peachNotChosenSkuOption(commodityId: $commodityId) {
      commoditySkuId
      optionId
    }
  }
`

/**
 * __usePeachNotChosenSkuOptionQuery__
 *
 * To run a query within a React component, call `usePeachNotChosenSkuOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachNotChosenSkuOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachNotChosenSkuOptionQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function usePeachNotChosenSkuOptionQuery(
  baseOptions: Apollo.QueryHookOptions<PeachNotChosenSkuOptionQuery, PeachNotChosenSkuOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachNotChosenSkuOptionQuery, PeachNotChosenSkuOptionQueryVariables>(
    PeachNotChosenSkuOptionDocument,
    options,
  )
}
export function usePeachNotChosenSkuOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachNotChosenSkuOptionQuery, PeachNotChosenSkuOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachNotChosenSkuOptionQuery, PeachNotChosenSkuOptionQueryVariables>(
    PeachNotChosenSkuOptionDocument,
    options,
  )
}
export type PeachNotChosenSkuOptionQueryHookResult = ReturnType<typeof usePeachNotChosenSkuOptionQuery>
export type PeachNotChosenSkuOptionLazyQueryHookResult = ReturnType<typeof usePeachNotChosenSkuOptionLazyQuery>
export type PeachNotChosenSkuOptionQueryResult = Apollo.QueryResult<
  PeachNotChosenSkuOptionQuery,
  PeachNotChosenSkuOptionQueryVariables
>
export const PeachUpdateSkuStatusDocument = gql`
  mutation peachUpdateSkuStatus($updateStatusInput: PeachUpdateStatusInput) {
    peachUpdateSkuStatus(updateStatusInput: $updateStatusInput)
  }
`
export type PeachUpdateSkuStatusMutationFn = Apollo.MutationFunction<
  PeachUpdateSkuStatusMutation,
  PeachUpdateSkuStatusMutationVariables
>

/**
 * __usePeachUpdateSkuStatusMutation__
 *
 * To run a mutation, you first call `usePeachUpdateSkuStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePeachUpdateSkuStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [peachUpdateSkuStatusMutation, { data, loading, error }] = usePeachUpdateSkuStatusMutation({
 *   variables: {
 *      updateStatusInput: // value for 'updateStatusInput'
 *   },
 * });
 */
export function usePeachUpdateSkuStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<PeachUpdateSkuStatusMutation, PeachUpdateSkuStatusMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PeachUpdateSkuStatusMutation, PeachUpdateSkuStatusMutationVariables>(
    PeachUpdateSkuStatusDocument,
    options,
  )
}
export type PeachUpdateSkuStatusMutationHookResult = ReturnType<typeof usePeachUpdateSkuStatusMutation>
export type PeachUpdateSkuStatusMutationResult = Apollo.MutationResult<PeachUpdateSkuStatusMutation>
export type PeachUpdateSkuStatusMutationOptions = Apollo.BaseMutationOptions<
  PeachUpdateSkuStatusMutation,
  PeachUpdateSkuStatusMutationVariables
>
export const PeachCreateCommoditySkuDocument = gql`
  mutation peachCreateCommoditySku($commoditySkuId: [Int]) {
    peachCreateCommoditySku(commoditySkuId: $commoditySkuId)
  }
`
export type PeachCreateCommoditySkuMutationFn = Apollo.MutationFunction<
  PeachCreateCommoditySkuMutation,
  PeachCreateCommoditySkuMutationVariables
>

/**
 * __usePeachCreateCommoditySkuMutation__
 *
 * To run a mutation, you first call `usePeachCreateCommoditySkuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePeachCreateCommoditySkuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [peachCreateCommoditySkuMutation, { data, loading, error }] = usePeachCreateCommoditySkuMutation({
 *   variables: {
 *      commoditySkuId: // value for 'commoditySkuId'
 *   },
 * });
 */
export function usePeachCreateCommoditySkuMutation(
  baseOptions?: Apollo.MutationHookOptions<PeachCreateCommoditySkuMutation, PeachCreateCommoditySkuMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PeachCreateCommoditySkuMutation, PeachCreateCommoditySkuMutationVariables>(
    PeachCreateCommoditySkuDocument,
    options,
  )
}
export type PeachCreateCommoditySkuMutationHookResult = ReturnType<typeof usePeachCreateCommoditySkuMutation>
export type PeachCreateCommoditySkuMutationResult = Apollo.MutationResult<PeachCreateCommoditySkuMutation>
export type PeachCreateCommoditySkuMutationOptions = Apollo.BaseMutationOptions<
  PeachCreateCommoditySkuMutation,
  PeachCreateCommoditySkuMutationVariables
>
export const PeachCreateCommodityDocument = gql`
  mutation peachCreateCommodity($createCommodityInput: PeachListCreateCommodityInput) {
    peachCreateCommodity(createCommodityInput: $createCommodityInput)
  }
`
export type PeachCreateCommodityMutationFn = Apollo.MutationFunction<
  PeachCreateCommodityMutation,
  PeachCreateCommodityMutationVariables
>

/**
 * __usePeachCreateCommodityMutation__
 *
 * To run a mutation, you first call `usePeachCreateCommodityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePeachCreateCommodityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [peachCreateCommodityMutation, { data, loading, error }] = usePeachCreateCommodityMutation({
 *   variables: {
 *      createCommodityInput: // value for 'createCommodityInput'
 *   },
 * });
 */
export function usePeachCreateCommodityMutation(
  baseOptions?: Apollo.MutationHookOptions<PeachCreateCommodityMutation, PeachCreateCommodityMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PeachCreateCommodityMutation, PeachCreateCommodityMutationVariables>(
    PeachCreateCommodityDocument,
    options,
  )
}
export type PeachCreateCommodityMutationHookResult = ReturnType<typeof usePeachCreateCommodityMutation>
export type PeachCreateCommodityMutationResult = Apollo.MutationResult<PeachCreateCommodityMutation>
export type PeachCreateCommodityMutationOptions = Apollo.BaseMutationOptions<
  PeachCreateCommodityMutation,
  PeachCreateCommodityMutationVariables
>
export const PeachPageSkuDocument = gql`
  query peachPageSku($pageSku: PeachPageSkuInput) {
    peachPageSku(pageSku: $pageSku) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commoditySkuId
        skuOption {
          specId
          optionName
        }
        status
      }
    }
  }
`

/**
 * __usePeachPageSkuQuery__
 *
 * To run a query within a React component, call `usePeachPageSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeachPageSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeachPageSkuQuery({
 *   variables: {
 *      pageSku: // value for 'pageSku'
 *   },
 * });
 */
export function usePeachPageSkuQuery(
  baseOptions?: Apollo.QueryHookOptions<PeachPageSkuQuery, PeachPageSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PeachPageSkuQuery, PeachPageSkuQueryVariables>(PeachPageSkuDocument, options)
}
export function usePeachPageSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PeachPageSkuQuery, PeachPageSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PeachPageSkuQuery, PeachPageSkuQueryVariables>(PeachPageSkuDocument, options)
}
export type PeachPageSkuQueryHookResult = ReturnType<typeof usePeachPageSkuQuery>
export type PeachPageSkuLazyQueryHookResult = ReturnType<typeof usePeachPageSkuLazyQuery>
export type PeachPageSkuQueryResult = Apollo.QueryResult<PeachPageSkuQuery, PeachPageSkuQueryVariables>
