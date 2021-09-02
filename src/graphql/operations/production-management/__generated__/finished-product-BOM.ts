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

export type PitayaPageConditionToGetSkuQueryVariables = SchemaTypes.Exact<{
  conditionToGetSkuInput?: SchemaTypes.Maybe<SchemaTypes.PitayaConditionToGetSkuInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageConditionToGetSkuQuery = {
  pitayaPageConditionToGetSku: SchemaTypes.Maybe<{
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
          commoditySkuId: SchemaTypes.Maybe<number>
          commoditySpecOptionName: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
          unitId: SchemaTypes.Maybe<number>
          unitName: SchemaTypes.Maybe<string>
          categoryId: SchemaTypes.Maybe<number>
          categoryName: SchemaTypes.Maybe<string>
          varietyId: SchemaTypes.Maybe<number>
          varietyName: SchemaTypes.Maybe<string>
          placeOriginId: SchemaTypes.Maybe<number>
          placeOriginName: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export type PitayaPageCommoditySpuManageQueryVariables = SchemaTypes.Exact<{
  pageCommodityInput?: SchemaTypes.Maybe<SchemaTypes.PitayaPageCommodityInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PitayaPageCommoditySpuManageQuery = {
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
          placeOriginId: SchemaTypes.Maybe<number>
          placeOriginName: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export type PitayaCommoditySkuDetailOnBomQueryVariables = SchemaTypes.Exact<{
  commoditySkuId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type PitayaCommoditySkuDetailOnBomQuery = {
  pitayaCommoditySkuDetail: SchemaTypes.Maybe<{
    commoditySkuId: SchemaTypes.Maybe<number>
    commodityTypeId: SchemaTypes.Maybe<number>
    commodityTypeName: SchemaTypes.Maybe<string>
    commodityId: SchemaTypes.Maybe<number>
    commodityName: SchemaTypes.Maybe<string>
    categoryId: SchemaTypes.Maybe<number>
    categoryName: SchemaTypes.Maybe<string>
    varietyId: SchemaTypes.Maybe<number>
    varietyName: SchemaTypes.Maybe<string>
    placeOriginId: SchemaTypes.Maybe<number>
    placeOriginName: SchemaTypes.Maybe<string>
    commoditySpecName: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
    commoditySpecOptionName: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
  }>
}

export type PitayaListBurdenQueryVariables = SchemaTypes.Exact<{
  bomId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type PitayaListBurdenQuery = {
  pitayaListBurden: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        commodityBomDetailId: SchemaTypes.Maybe<number>
        commodityTypeId: SchemaTypes.Maybe<number>
        commodityTypeName: SchemaTypes.Maybe<string>
        commodityCategoryId: SchemaTypes.Maybe<number>
        commodityCategoryName: SchemaTypes.Maybe<string>
        commodityId: SchemaTypes.Maybe<number>
        commodityName: SchemaTypes.Maybe<string>
        commoditySkuId: SchemaTypes.Maybe<number>
        commoditySpecOptionName: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
        quantity: SchemaTypes.Maybe<number>
        quantityUnit: SchemaTypes.Maybe<number>
        quantityUnitName: SchemaTypes.Maybe<string>
      }>
    >
  >
}

export type PitayaDeleteCommodityBomMutationVariables = SchemaTypes.Exact<{
  bomId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type PitayaDeleteCommodityBomMutation = { pitayaDeleteCommodityBom: SchemaTypes.Maybe<boolean> }

export type PitayaSaveCommodityBomMutationVariables = SchemaTypes.Exact<{
  saveCommodityBomInput?: SchemaTypes.Maybe<SchemaTypes.PitayaSaveBomInput>
}>

export type PitayaSaveCommodityBomMutation = { pitayaSaveCommodityBom: SchemaTypes.Maybe<number> }

export type PitayaUpdateCommodityBomMutationVariables = SchemaTypes.Exact<{
  updateCommodityBomInput?: SchemaTypes.Maybe<SchemaTypes.PitayaUpdateBomInput>
}>

export type PitayaUpdateCommodityBomMutation = { pitayaUpdateCommodityBom: SchemaTypes.Maybe<number> }

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
export const PitayaPageConditionToGetSkuDocument = gql`
  query pitayaPageConditionToGetSku($conditionToGetSkuInput: PitayaConditionToGetSkuInput, $page: Page) {
    pitayaPageConditionToGetSku(conditionToGetSkuInput: $conditionToGetSkuInput, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        commodityId
        commodityName
        commodityTypeId
        commodityTypeName
        commoditySkuId
        commoditySpecOptionName
        unitId
        unitName
        categoryId
        categoryName
        varietyId
        varietyName
        placeOriginId
        placeOriginName
      }
    }
  }
`

/**
 * __usePitayaPageConditionToGetSkuQuery__
 *
 * To run a query within a React component, call `usePitayaPageConditionToGetSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageConditionToGetSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageConditionToGetSkuQuery({
 *   variables: {
 *      conditionToGetSkuInput: // value for 'conditionToGetSkuInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageConditionToGetSkuQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageConditionToGetSkuQuery, PitayaPageConditionToGetSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageConditionToGetSkuQuery, PitayaPageConditionToGetSkuQueryVariables>(
    PitayaPageConditionToGetSkuDocument,
    options,
  )
}
export function usePitayaPageConditionToGetSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PitayaPageConditionToGetSkuQuery,
    PitayaPageConditionToGetSkuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageConditionToGetSkuQuery, PitayaPageConditionToGetSkuQueryVariables>(
    PitayaPageConditionToGetSkuDocument,
    options,
  )
}
export type PitayaPageConditionToGetSkuQueryHookResult = ReturnType<typeof usePitayaPageConditionToGetSkuQuery>
export type PitayaPageConditionToGetSkuLazyQueryHookResult = ReturnType<typeof usePitayaPageConditionToGetSkuLazyQuery>
export type PitayaPageConditionToGetSkuQueryResult = Apollo.QueryResult<
  PitayaPageConditionToGetSkuQuery,
  PitayaPageConditionToGetSkuQueryVariables
>
export const PitayaPageCommoditySpuManageDocument = gql`
  query pitayaPageCommoditySpuManage($pageCommodityInput: PitayaPageCommodityInput, $page: Page) {
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
        placeOriginId: originId
        placeOriginName: originName
      }
    }
  }
`

/**
 * __usePitayaPageCommoditySpuManageQuery__
 *
 * To run a query within a React component, call `usePitayaPageCommoditySpuManageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageCommoditySpuManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageCommoditySpuManageQuery({
 *   variables: {
 *      pageCommodityInput: // value for 'pageCommodityInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageCommoditySpuManageQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaPageCommoditySpuManageQuery, PitayaPageCommoditySpuManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaPageCommoditySpuManageQuery, PitayaPageCommoditySpuManageQueryVariables>(
    PitayaPageCommoditySpuManageDocument,
    options,
  )
}
export function usePitayaPageCommoditySpuManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PitayaPageCommoditySpuManageQuery,
    PitayaPageCommoditySpuManageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaPageCommoditySpuManageQuery, PitayaPageCommoditySpuManageQueryVariables>(
    PitayaPageCommoditySpuManageDocument,
    options,
  )
}
export type PitayaPageCommoditySpuManageQueryHookResult = ReturnType<typeof usePitayaPageCommoditySpuManageQuery>
export type PitayaPageCommoditySpuManageLazyQueryHookResult = ReturnType<
  typeof usePitayaPageCommoditySpuManageLazyQuery
>
export type PitayaPageCommoditySpuManageQueryResult = Apollo.QueryResult<
  PitayaPageCommoditySpuManageQuery,
  PitayaPageCommoditySpuManageQueryVariables
>
export const PitayaCommoditySkuDetailOnBomDocument = gql`
  query pitayaCommoditySkuDetailOnBom($commoditySkuId: Int) {
    pitayaCommoditySkuDetail(commoditySkuId: $commoditySkuId) {
      commoditySkuId
      commodityTypeId
      commodityTypeName
      commodityId
      commodityName
      categoryId
      categoryName
      varietyId
      varietyName
      placeOriginId
      placeOriginName
      commoditySpecName
      commoditySpecOptionName
    }
  }
`

/**
 * __usePitayaCommoditySkuDetailOnBomQuery__
 *
 * To run a query within a React component, call `usePitayaCommoditySkuDetailOnBomQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCommoditySkuDetailOnBomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCommoditySkuDetailOnBomQuery({
 *   variables: {
 *      commoditySkuId: // value for 'commoditySkuId'
 *   },
 * });
 */
export function usePitayaCommoditySkuDetailOnBomQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PitayaCommoditySkuDetailOnBomQuery,
    PitayaCommoditySkuDetailOnBomQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaCommoditySkuDetailOnBomQuery, PitayaCommoditySkuDetailOnBomQueryVariables>(
    PitayaCommoditySkuDetailOnBomDocument,
    options,
  )
}
export function usePitayaCommoditySkuDetailOnBomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PitayaCommoditySkuDetailOnBomQuery,
    PitayaCommoditySkuDetailOnBomQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaCommoditySkuDetailOnBomQuery, PitayaCommoditySkuDetailOnBomQueryVariables>(
    PitayaCommoditySkuDetailOnBomDocument,
    options,
  )
}
export type PitayaCommoditySkuDetailOnBomQueryHookResult = ReturnType<typeof usePitayaCommoditySkuDetailOnBomQuery>
export type PitayaCommoditySkuDetailOnBomLazyQueryHookResult = ReturnType<
  typeof usePitayaCommoditySkuDetailOnBomLazyQuery
>
export type PitayaCommoditySkuDetailOnBomQueryResult = Apollo.QueryResult<
  PitayaCommoditySkuDetailOnBomQuery,
  PitayaCommoditySkuDetailOnBomQueryVariables
>
export const PitayaListBurdenDocument = gql`
  query pitayaListBurden($bomId: Int) {
    pitayaListBurden(bomId: $bomId) {
      commodityBomDetailId
      commodityTypeId
      commodityTypeName
      commodityCategoryId
      commodityCategoryName
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionName
      quantity
      quantityUnit
      quantityUnitName
    }
  }
`

/**
 * __usePitayaListBurdenQuery__
 *
 * To run a query within a React component, call `usePitayaListBurdenQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaListBurdenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaListBurdenQuery({
 *   variables: {
 *      bomId: // value for 'bomId'
 *   },
 * });
 */
export function usePitayaListBurdenQuery(
  baseOptions?: Apollo.QueryHookOptions<PitayaListBurdenQuery, PitayaListBurdenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PitayaListBurdenQuery, PitayaListBurdenQueryVariables>(PitayaListBurdenDocument, options)
}
export function usePitayaListBurdenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PitayaListBurdenQuery, PitayaListBurdenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PitayaListBurdenQuery, PitayaListBurdenQueryVariables>(PitayaListBurdenDocument, options)
}
export type PitayaListBurdenQueryHookResult = ReturnType<typeof usePitayaListBurdenQuery>
export type PitayaListBurdenLazyQueryHookResult = ReturnType<typeof usePitayaListBurdenLazyQuery>
export type PitayaListBurdenQueryResult = Apollo.QueryResult<PitayaListBurdenQuery, PitayaListBurdenQueryVariables>
export const PitayaDeleteCommodityBomDocument = gql`
  mutation pitayaDeleteCommodityBom($bomId: Int) {
    pitayaDeleteCommodityBom(bomId: $bomId)
  }
`
export type PitayaDeleteCommodityBomMutationFn = Apollo.MutationFunction<
  PitayaDeleteCommodityBomMutation,
  PitayaDeleteCommodityBomMutationVariables
>

/**
 * __usePitayaDeleteCommodityBomMutation__
 *
 * To run a mutation, you first call `usePitayaDeleteCommodityBomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaDeleteCommodityBomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaDeleteCommodityBomMutation, { data, loading, error }] = usePitayaDeleteCommodityBomMutation({
 *   variables: {
 *      bomId: // value for 'bomId'
 *   },
 * });
 */
export function usePitayaDeleteCommodityBomMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaDeleteCommodityBomMutation, PitayaDeleteCommodityBomMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaDeleteCommodityBomMutation, PitayaDeleteCommodityBomMutationVariables>(
    PitayaDeleteCommodityBomDocument,
    options,
  )
}
export type PitayaDeleteCommodityBomMutationHookResult = ReturnType<typeof usePitayaDeleteCommodityBomMutation>
export type PitayaDeleteCommodityBomMutationResult = Apollo.MutationResult<PitayaDeleteCommodityBomMutation>
export type PitayaDeleteCommodityBomMutationOptions = Apollo.BaseMutationOptions<
  PitayaDeleteCommodityBomMutation,
  PitayaDeleteCommodityBomMutationVariables
>
export const PitayaSaveCommodityBomDocument = gql`
  mutation pitayaSaveCommodityBom($saveCommodityBomInput: PitayaSaveBomInput) {
    pitayaSaveCommodityBom(saveCommodityBomInput: $saveCommodityBomInput)
  }
`
export type PitayaSaveCommodityBomMutationFn = Apollo.MutationFunction<
  PitayaSaveCommodityBomMutation,
  PitayaSaveCommodityBomMutationVariables
>

/**
 * __usePitayaSaveCommodityBomMutation__
 *
 * To run a mutation, you first call `usePitayaSaveCommodityBomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaSaveCommodityBomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaSaveCommodityBomMutation, { data, loading, error }] = usePitayaSaveCommodityBomMutation({
 *   variables: {
 *      saveCommodityBomInput: // value for 'saveCommodityBomInput'
 *   },
 * });
 */
export function usePitayaSaveCommodityBomMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaSaveCommodityBomMutation, PitayaSaveCommodityBomMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaSaveCommodityBomMutation, PitayaSaveCommodityBomMutationVariables>(
    PitayaSaveCommodityBomDocument,
    options,
  )
}
export type PitayaSaveCommodityBomMutationHookResult = ReturnType<typeof usePitayaSaveCommodityBomMutation>
export type PitayaSaveCommodityBomMutationResult = Apollo.MutationResult<PitayaSaveCommodityBomMutation>
export type PitayaSaveCommodityBomMutationOptions = Apollo.BaseMutationOptions<
  PitayaSaveCommodityBomMutation,
  PitayaSaveCommodityBomMutationVariables
>
export const PitayaUpdateCommodityBomDocument = gql`
  mutation pitayaUpdateCommodityBom($updateCommodityBomInput: PitayaUpdateBomInput) {
    pitayaUpdateCommodityBom(updateCommodityBomInput: $updateCommodityBomInput)
  }
`
export type PitayaUpdateCommodityBomMutationFn = Apollo.MutationFunction<
  PitayaUpdateCommodityBomMutation,
  PitayaUpdateCommodityBomMutationVariables
>

/**
 * __usePitayaUpdateCommodityBomMutation__
 *
 * To run a mutation, you first call `usePitayaUpdateCommodityBomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaUpdateCommodityBomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaUpdateCommodityBomMutation, { data, loading, error }] = usePitayaUpdateCommodityBomMutation({
 *   variables: {
 *      updateCommodityBomInput: // value for 'updateCommodityBomInput'
 *   },
 * });
 */
export function usePitayaUpdateCommodityBomMutation(
  baseOptions?: Apollo.MutationHookOptions<PitayaUpdateCommodityBomMutation, PitayaUpdateCommodityBomMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PitayaUpdateCommodityBomMutation, PitayaUpdateCommodityBomMutationVariables>(
    PitayaUpdateCommodityBomDocument,
    options,
  )
}
export type PitayaUpdateCommodityBomMutationHookResult = ReturnType<typeof usePitayaUpdateCommodityBomMutation>
export type PitayaUpdateCommodityBomMutationResult = Apollo.MutationResult<PitayaUpdateCommodityBomMutation>
export type PitayaUpdateCommodityBomMutationOptions = Apollo.BaseMutationOptions<
  PitayaUpdateCommodityBomMutation,
  PitayaUpdateCommodityBomMutationVariables
>
