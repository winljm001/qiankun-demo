import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PageCommodityQueryVariables = SchemaTypes.Exact<{
  commodityName?: SchemaTypes.Maybe<SchemaTypes.Scalars['String']>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PageCommodityQuery = {
  pageCommodity: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commodityId: SchemaTypes.Maybe<number>
          commodityName: SchemaTypes.Maybe<string>
          commodityTypeName: SchemaTypes.Maybe<string>
          commodityCategoryName: SchemaTypes.Maybe<string>
          commodityVarietyName: SchemaTypes.Maybe<string>
          commodityPlaceOriginName: SchemaTypes.Maybe<string>
          status: SchemaTypes.Maybe<number>
          skuSum: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type TypeOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type TypeOptionQuery = {
  typeOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type ListSpuCategoryOptionQueryVariables = SchemaTypes.Exact<{
  commodityTypeId: SchemaTypes.Scalars['Int']
}>

export type ListSpuCategoryOptionQuery = {
  listSpuCategoryOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type SelectVarietyByCategoryIdQueryVariables = SchemaTypes.Exact<{
  categoryId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type SelectVarietyByCategoryIdQuery = {
  selectVarietyByCategoryId: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ value: SchemaTypes.Maybe<number>; label: SchemaTypes.Maybe<string> }>>
  >
}

export type SelectPlaceByCategoryIdQueryVariables = SchemaTypes.Exact<{
  categoryId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type SelectPlaceByCategoryIdQuery = {
  selectPlaceByCategoryId: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        placePid: SchemaTypes.Maybe<number>
        value: SchemaTypes.Maybe<number>
        label: SchemaTypes.Maybe<string>
      }>
    >
  >
}

export type DoInsertCommodityMutationVariables = SchemaTypes.Exact<{
  insertCommodityInput?: SchemaTypes.Maybe<SchemaTypes.InsertCommodityInput>
}>

export type DoInsertCommodityMutation = { doInsertCommodity: SchemaTypes.Maybe<number> }

export type DoUpdateCommodityNameMutationVariables = SchemaTypes.Exact<{
  updateCommodityNameInput?: SchemaTypes.Maybe<SchemaTypes.UpdateCommodityNameInput>
}>

export type DoUpdateCommodityNameMutation = { doUpdateCommodityName: SchemaTypes.Maybe<number> }

export type UpdateSpecMutationVariables = SchemaTypes.Exact<{
  commodityModifyInput?: SchemaTypes.Maybe<SchemaTypes.CommodityModifyInput>
}>

export type UpdateSpecMutation = { updateSpec: SchemaTypes.Maybe<number> }

export type GetCommodityQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type GetCommodityQuery = {
  getCommodity: SchemaTypes.Maybe<{
    commodityId: SchemaTypes.Maybe<number>
    commodityName: SchemaTypes.Maybe<string>
    commodityTypeId: SchemaTypes.Maybe<string>
    commodityTypeName: SchemaTypes.Maybe<string>
    commodityCategoryName: SchemaTypes.Maybe<string>
    commodityVarietyName: SchemaTypes.Maybe<string>
    commodityPlaceOriginName: SchemaTypes.Maybe<string>
    englishName: SchemaTypes.Maybe<string>
    thailandName: SchemaTypes.Maybe<string>
    vietnamName: SchemaTypes.Maybe<string>
  }>
}

export type SpecListQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type SpecListQuery = {
  specList: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        commoditySpecId: SchemaTypes.Maybe<number>
        commoditySpecName: SchemaTypes.Maybe<string>
        commoditySpecSort: SchemaTypes.Maybe<number>
        commoditySpecOptionList: SchemaTypes.Maybe<
          Array<
            SchemaTypes.Maybe<{
              commoditySpecOptionId: SchemaTypes.Maybe<number>
              commoditySpecOptionName: SchemaTypes.Maybe<string>
              nameLocale: SchemaTypes.Maybe<{
                chineseName: SchemaTypes.Maybe<string>
                englishName: SchemaTypes.Maybe<string>
                thailandName: SchemaTypes.Maybe<string>
                vietnamName: SchemaTypes.Maybe<string>
              }>
            }>
          >
        >
        nameLocale: SchemaTypes.Maybe<{
          chineseName: SchemaTypes.Maybe<string>
          englishName: SchemaTypes.Maybe<string>
          thailandName: SchemaTypes.Maybe<string>
          vietnamName: SchemaTypes.Maybe<string>
        }>
      }>
    >
  >
}

export type PageSkuQueryVariables = SchemaTypes.Exact<{
  skuListConditionInput?: SchemaTypes.Maybe<SchemaTypes.SkuListConditionInput>
}>

export type PageSkuQuery = {
  pageSku: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          commoditySkuId: SchemaTypes.Maybe<number>
          skuCommoditySpecOptionList: SchemaTypes.Maybe<
            Array<SchemaTypes.Maybe<{ specId: SchemaTypes.Maybe<number>; optionName: SchemaTypes.Maybe<string> }>>
          >
        }>
      >
    >
  }>
}

export type GetSkuDetailQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type GetSkuDetailQuery = {
  listSkuQueryCondition: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        commoditySpecId: SchemaTypes.Maybe<number>
        commoditySpecName: SchemaTypes.Maybe<string>
        commoditySpecOptionVOList: SchemaTypes.Maybe<
          Array<
            SchemaTypes.Maybe<{
              commoditySpecOptionId: SchemaTypes.Maybe<number>
              commoditySpecOptionName: SchemaTypes.Maybe<string>
            }>
          >
        >
      }>
    >
  >
  getCommodity: SchemaTypes.Maybe<{
    commodityId: SchemaTypes.Maybe<number>
    commodityName: SchemaTypes.Maybe<string>
    commodityTypeId: SchemaTypes.Maybe<string>
    commodityTypeName: SchemaTypes.Maybe<string>
    commodityCategoryName: SchemaTypes.Maybe<string>
    commodityVarietyName: SchemaTypes.Maybe<string>
    commodityPlaceOriginName: SchemaTypes.Maybe<string>
    englishName: SchemaTypes.Maybe<string>
    thailandName: SchemaTypes.Maybe<string>
    vietnamName: SchemaTypes.Maybe<string>
  }>
}

export type ListSkuSelectedCombinationQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type ListSkuSelectedCombinationQuery = {
  listSkuSelectedCombination: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>>>
}

export type DoSaveSkuListMutationVariables = SchemaTypes.Exact<{
  commoditySkus?: SchemaTypes.Maybe<SchemaTypes.CommoditySkuInputSave>
}>

export type DoSaveSkuListMutation = { doSaveSkuList: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>> }

export const PageCommodityDocument = gql`
  query pageCommodity($commodityName: String, $page: Page) {
    pageCommodity(commodityName: $commodityName, page: $page) {
      records {
        commodityId
        commodityName
        commodityTypeName
        commodityCategoryName
        commodityVarietyName
        commodityPlaceOriginName
        status
        skuSum
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageCommodityQuery__
 *
 * To run a query within a React component, call `usePageCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCommodityQuery({
 *   variables: {
 *      commodityName: // value for 'commodityName'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageCommodityQuery(
  baseOptions?: Apollo.QueryHookOptions<PageCommodityQuery, PageCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageCommodityQuery, PageCommodityQueryVariables>(PageCommodityDocument, options)
}
export function usePageCommodityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageCommodityQuery, PageCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageCommodityQuery, PageCommodityQueryVariables>(PageCommodityDocument, options)
}
export type PageCommodityQueryHookResult = ReturnType<typeof usePageCommodityQuery>
export type PageCommodityLazyQueryHookResult = ReturnType<typeof usePageCommodityLazyQuery>
export type PageCommodityQueryResult = Apollo.QueryResult<PageCommodityQuery, PageCommodityQueryVariables>
export const TypeOptionDocument = gql`
  query typeOption {
    typeOption {
      label
      value
    }
  }
`

/**
 * __useTypeOptionQuery__
 *
 * To run a query within a React component, call `useTypeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypeOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useTypeOptionQuery(baseOptions?: Apollo.QueryHookOptions<TypeOptionQuery, TypeOptionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TypeOptionQuery, TypeOptionQueryVariables>(TypeOptionDocument, options)
}
export function useTypeOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TypeOptionQuery, TypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TypeOptionQuery, TypeOptionQueryVariables>(TypeOptionDocument, options)
}
export type TypeOptionQueryHookResult = ReturnType<typeof useTypeOptionQuery>
export type TypeOptionLazyQueryHookResult = ReturnType<typeof useTypeOptionLazyQuery>
export type TypeOptionQueryResult = Apollo.QueryResult<TypeOptionQuery, TypeOptionQueryVariables>
export const ListSpuCategoryOptionDocument = gql`
  query listSpuCategoryOption($commodityTypeId: Int!) {
    listSpuCategoryOption(commodityTypeId: $commodityTypeId) {
      label
      value
    }
  }
`

/**
 * __useListSpuCategoryOptionQuery__
 *
 * To run a query within a React component, call `useListSpuCategoryOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSpuCategoryOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSpuCategoryOptionQuery({
 *   variables: {
 *      commodityTypeId: // value for 'commodityTypeId'
 *   },
 * });
 */
export function useListSpuCategoryOptionQuery(
  baseOptions: Apollo.QueryHookOptions<ListSpuCategoryOptionQuery, ListSpuCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListSpuCategoryOptionQuery, ListSpuCategoryOptionQueryVariables>(
    ListSpuCategoryOptionDocument,
    options,
  )
}
export function useListSpuCategoryOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListSpuCategoryOptionQuery, ListSpuCategoryOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListSpuCategoryOptionQuery, ListSpuCategoryOptionQueryVariables>(
    ListSpuCategoryOptionDocument,
    options,
  )
}
export type ListSpuCategoryOptionQueryHookResult = ReturnType<typeof useListSpuCategoryOptionQuery>
export type ListSpuCategoryOptionLazyQueryHookResult = ReturnType<typeof useListSpuCategoryOptionLazyQuery>
export type ListSpuCategoryOptionQueryResult = Apollo.QueryResult<
  ListSpuCategoryOptionQuery,
  ListSpuCategoryOptionQueryVariables
>
export const SelectVarietyByCategoryIdDocument = gql`
  query selectVarietyByCategoryId($categoryId: Int) {
    selectVarietyByCategoryId(categoryId: $categoryId) {
      value: varietyId
      label: varietyName
    }
  }
`

/**
 * __useSelectVarietyByCategoryIdQuery__
 *
 * To run a query within a React component, call `useSelectVarietyByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectVarietyByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectVarietyByCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSelectVarietyByCategoryIdQuery(
  baseOptions?: Apollo.QueryHookOptions<SelectVarietyByCategoryIdQuery, SelectVarietyByCategoryIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SelectVarietyByCategoryIdQuery, SelectVarietyByCategoryIdQueryVariables>(
    SelectVarietyByCategoryIdDocument,
    options,
  )
}
export function useSelectVarietyByCategoryIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SelectVarietyByCategoryIdQuery, SelectVarietyByCategoryIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SelectVarietyByCategoryIdQuery, SelectVarietyByCategoryIdQueryVariables>(
    SelectVarietyByCategoryIdDocument,
    options,
  )
}
export type SelectVarietyByCategoryIdQueryHookResult = ReturnType<typeof useSelectVarietyByCategoryIdQuery>
export type SelectVarietyByCategoryIdLazyQueryHookResult = ReturnType<typeof useSelectVarietyByCategoryIdLazyQuery>
export type SelectVarietyByCategoryIdQueryResult = Apollo.QueryResult<
  SelectVarietyByCategoryIdQuery,
  SelectVarietyByCategoryIdQueryVariables
>
export const SelectPlaceByCategoryIdDocument = gql`
  query selectPlaceByCategoryId($categoryId: Int) {
    selectPlaceByCategoryId(categoryId: $categoryId) {
      value: placeId
      label: placeName
      placePid
    }
  }
`

/**
 * __useSelectPlaceByCategoryIdQuery__
 *
 * To run a query within a React component, call `useSelectPlaceByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectPlaceByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectPlaceByCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSelectPlaceByCategoryIdQuery(
  baseOptions?: Apollo.QueryHookOptions<SelectPlaceByCategoryIdQuery, SelectPlaceByCategoryIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SelectPlaceByCategoryIdQuery, SelectPlaceByCategoryIdQueryVariables>(
    SelectPlaceByCategoryIdDocument,
    options,
  )
}
export function useSelectPlaceByCategoryIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SelectPlaceByCategoryIdQuery, SelectPlaceByCategoryIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SelectPlaceByCategoryIdQuery, SelectPlaceByCategoryIdQueryVariables>(
    SelectPlaceByCategoryIdDocument,
    options,
  )
}
export type SelectPlaceByCategoryIdQueryHookResult = ReturnType<typeof useSelectPlaceByCategoryIdQuery>
export type SelectPlaceByCategoryIdLazyQueryHookResult = ReturnType<typeof useSelectPlaceByCategoryIdLazyQuery>
export type SelectPlaceByCategoryIdQueryResult = Apollo.QueryResult<
  SelectPlaceByCategoryIdQuery,
  SelectPlaceByCategoryIdQueryVariables
>
export const DoInsertCommodityDocument = gql`
  mutation doInsertCommodity($insertCommodityInput: InsertCommodityInput) {
    doInsertCommodity(insertCommodityInput: $insertCommodityInput)
  }
`
export type DoInsertCommodityMutationFn = Apollo.MutationFunction<
  DoInsertCommodityMutation,
  DoInsertCommodityMutationVariables
>

/**
 * __useDoInsertCommodityMutation__
 *
 * To run a mutation, you first call `useDoInsertCommodityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoInsertCommodityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doInsertCommodityMutation, { data, loading, error }] = useDoInsertCommodityMutation({
 *   variables: {
 *      insertCommodityInput: // value for 'insertCommodityInput'
 *   },
 * });
 */
export function useDoInsertCommodityMutation(
  baseOptions?: Apollo.MutationHookOptions<DoInsertCommodityMutation, DoInsertCommodityMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DoInsertCommodityMutation, DoInsertCommodityMutationVariables>(
    DoInsertCommodityDocument,
    options,
  )
}
export type DoInsertCommodityMutationHookResult = ReturnType<typeof useDoInsertCommodityMutation>
export type DoInsertCommodityMutationResult = Apollo.MutationResult<DoInsertCommodityMutation>
export type DoInsertCommodityMutationOptions = Apollo.BaseMutationOptions<
  DoInsertCommodityMutation,
  DoInsertCommodityMutationVariables
>
export const DoUpdateCommodityNameDocument = gql`
  mutation doUpdateCommodityName($updateCommodityNameInput: UpdateCommodityNameInput) {
    doUpdateCommodityName(updateCommodityNameInput: $updateCommodityNameInput)
  }
`
export type DoUpdateCommodityNameMutationFn = Apollo.MutationFunction<
  DoUpdateCommodityNameMutation,
  DoUpdateCommodityNameMutationVariables
>

/**
 * __useDoUpdateCommodityNameMutation__
 *
 * To run a mutation, you first call `useDoUpdateCommodityNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoUpdateCommodityNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doUpdateCommodityNameMutation, { data, loading, error }] = useDoUpdateCommodityNameMutation({
 *   variables: {
 *      updateCommodityNameInput: // value for 'updateCommodityNameInput'
 *   },
 * });
 */
export function useDoUpdateCommodityNameMutation(
  baseOptions?: Apollo.MutationHookOptions<DoUpdateCommodityNameMutation, DoUpdateCommodityNameMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DoUpdateCommodityNameMutation, DoUpdateCommodityNameMutationVariables>(
    DoUpdateCommodityNameDocument,
    options,
  )
}
export type DoUpdateCommodityNameMutationHookResult = ReturnType<typeof useDoUpdateCommodityNameMutation>
export type DoUpdateCommodityNameMutationResult = Apollo.MutationResult<DoUpdateCommodityNameMutation>
export type DoUpdateCommodityNameMutationOptions = Apollo.BaseMutationOptions<
  DoUpdateCommodityNameMutation,
  DoUpdateCommodityNameMutationVariables
>
export const UpdateSpecDocument = gql`
  mutation updateSpec($commodityModifyInput: CommodityModifyInput) {
    updateSpec(commodityModifyInput: $commodityModifyInput)
  }
`
export type UpdateSpecMutationFn = Apollo.MutationFunction<UpdateSpecMutation, UpdateSpecMutationVariables>

/**
 * __useUpdateSpecMutation__
 *
 * To run a mutation, you first call `useUpdateSpecMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSpecMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSpecMutation, { data, loading, error }] = useUpdateSpecMutation({
 *   variables: {
 *      commodityModifyInput: // value for 'commodityModifyInput'
 *   },
 * });
 */
export function useUpdateSpecMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateSpecMutation, UpdateSpecMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateSpecMutation, UpdateSpecMutationVariables>(UpdateSpecDocument, options)
}
export type UpdateSpecMutationHookResult = ReturnType<typeof useUpdateSpecMutation>
export type UpdateSpecMutationResult = Apollo.MutationResult<UpdateSpecMutation>
export type UpdateSpecMutationOptions = Apollo.BaseMutationOptions<UpdateSpecMutation, UpdateSpecMutationVariables>
export const GetCommodityDocument = gql`
  query getCommodity($commodityId: Int) {
    getCommodity(commodityId: $commodityId) {
      commodityId
      commodityName
      commodityTypeId
      commodityTypeName
      commodityCategoryName
      commodityVarietyName
      commodityPlaceOriginName
      englishName
      thailandName
      vietnamName
    }
  }
`

/**
 * __useGetCommodityQuery__
 *
 * To run a query within a React component, call `useGetCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommodityQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useGetCommodityQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCommodityQuery, GetCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCommodityQuery, GetCommodityQueryVariables>(GetCommodityDocument, options)
}
export function useGetCommodityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCommodityQuery, GetCommodityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCommodityQuery, GetCommodityQueryVariables>(GetCommodityDocument, options)
}
export type GetCommodityQueryHookResult = ReturnType<typeof useGetCommodityQuery>
export type GetCommodityLazyQueryHookResult = ReturnType<typeof useGetCommodityLazyQuery>
export type GetCommodityQueryResult = Apollo.QueryResult<GetCommodityQuery, GetCommodityQueryVariables>
export const SpecListDocument = gql`
  query specList($commodityId: Int) {
    specList(commodityId: $commodityId) {
      commoditySpecId
      commoditySpecName
      commoditySpecOptionList {
        commoditySpecOptionId
        commoditySpecOptionName
        nameLocale {
          chineseName
          englishName
          thailandName
          vietnamName
        }
      }
      commoditySpecSort
      nameLocale {
        chineseName
        englishName
        thailandName
        vietnamName
      }
    }
  }
`

/**
 * __useSpecListQuery__
 *
 * To run a query within a React component, call `useSpecListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecListQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useSpecListQuery(baseOptions?: Apollo.QueryHookOptions<SpecListQuery, SpecListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SpecListQuery, SpecListQueryVariables>(SpecListDocument, options)
}
export function useSpecListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecListQuery, SpecListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SpecListQuery, SpecListQueryVariables>(SpecListDocument, options)
}
export type SpecListQueryHookResult = ReturnType<typeof useSpecListQuery>
export type SpecListLazyQueryHookResult = ReturnType<typeof useSpecListLazyQuery>
export type SpecListQueryResult = Apollo.QueryResult<SpecListQuery, SpecListQueryVariables>
export const PageSkuDocument = gql`
  query pageSku($skuListConditionInput: SkuListConditionInput) {
    pageSku(skuListConditionInput: $skuListConditionInput) {
      records {
        commoditySkuId
        skuCommoditySpecOptionList {
          specId
          optionName
        }
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageSkuQuery__
 *
 * To run a query within a React component, call `usePageSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSkuQuery({
 *   variables: {
 *      skuListConditionInput: // value for 'skuListConditionInput'
 *   },
 * });
 */
export function usePageSkuQuery(baseOptions?: Apollo.QueryHookOptions<PageSkuQuery, PageSkuQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageSkuQuery, PageSkuQueryVariables>(PageSkuDocument, options)
}
export function usePageSkuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSkuQuery, PageSkuQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageSkuQuery, PageSkuQueryVariables>(PageSkuDocument, options)
}
export type PageSkuQueryHookResult = ReturnType<typeof usePageSkuQuery>
export type PageSkuLazyQueryHookResult = ReturnType<typeof usePageSkuLazyQuery>
export type PageSkuQueryResult = Apollo.QueryResult<PageSkuQuery, PageSkuQueryVariables>
export const GetSkuDetailDocument = gql`
  query getSkuDetail($commodityId: Int) {
    listSkuQueryCondition(commodityId: $commodityId) {
      commoditySpecId
      commoditySpecName
      commoditySpecOptionVOList {
        commoditySpecOptionId
        commoditySpecOptionName
      }
    }
    getCommodity(commodityId: $commodityId) {
      commodityId
      commodityName
      commodityTypeId
      commodityTypeName
      commodityCategoryName
      commodityVarietyName
      commodityPlaceOriginName
      englishName
      thailandName
      vietnamName
    }
  }
`

/**
 * __useGetSkuDetailQuery__
 *
 * To run a query within a React component, call `useGetSkuDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkuDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkuDetailQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useGetSkuDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSkuDetailQuery, GetSkuDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSkuDetailQuery, GetSkuDetailQueryVariables>(GetSkuDetailDocument, options)
}
export function useGetSkuDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSkuDetailQuery, GetSkuDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSkuDetailQuery, GetSkuDetailQueryVariables>(GetSkuDetailDocument, options)
}
export type GetSkuDetailQueryHookResult = ReturnType<typeof useGetSkuDetailQuery>
export type GetSkuDetailLazyQueryHookResult = ReturnType<typeof useGetSkuDetailLazyQuery>
export type GetSkuDetailQueryResult = Apollo.QueryResult<GetSkuDetailQuery, GetSkuDetailQueryVariables>
export const ListSkuSelectedCombinationDocument = gql`
  query listSkuSelectedCombination($commodityId: Int) {
    listSkuSelectedCombination(commodityId: $commodityId)
  }
`

/**
 * __useListSkuSelectedCombinationQuery__
 *
 * To run a query within a React component, call `useListSkuSelectedCombinationQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSkuSelectedCombinationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSkuSelectedCombinationQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useListSkuSelectedCombinationQuery(
  baseOptions?: Apollo.QueryHookOptions<ListSkuSelectedCombinationQuery, ListSkuSelectedCombinationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListSkuSelectedCombinationQuery, ListSkuSelectedCombinationQueryVariables>(
    ListSkuSelectedCombinationDocument,
    options,
  )
}
export function useListSkuSelectedCombinationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListSkuSelectedCombinationQuery, ListSkuSelectedCombinationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListSkuSelectedCombinationQuery, ListSkuSelectedCombinationQueryVariables>(
    ListSkuSelectedCombinationDocument,
    options,
  )
}
export type ListSkuSelectedCombinationQueryHookResult = ReturnType<typeof useListSkuSelectedCombinationQuery>
export type ListSkuSelectedCombinationLazyQueryHookResult = ReturnType<typeof useListSkuSelectedCombinationLazyQuery>
export type ListSkuSelectedCombinationQueryResult = Apollo.QueryResult<
  ListSkuSelectedCombinationQuery,
  ListSkuSelectedCombinationQueryVariables
>
export const DoSaveSkuListDocument = gql`
  mutation doSaveSkuList($commoditySkus: CommoditySkuInputSave) {
    doSaveSkuList(commoditySkus: $commoditySkus)
  }
`
export type DoSaveSkuListMutationFn = Apollo.MutationFunction<DoSaveSkuListMutation, DoSaveSkuListMutationVariables>

/**
 * __useDoSaveSkuListMutation__
 *
 * To run a mutation, you first call `useDoSaveSkuListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoSaveSkuListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doSaveSkuListMutation, { data, loading, error }] = useDoSaveSkuListMutation({
 *   variables: {
 *      commoditySkus: // value for 'commoditySkus'
 *   },
 * });
 */
export function useDoSaveSkuListMutation(
  baseOptions?: Apollo.MutationHookOptions<DoSaveSkuListMutation, DoSaveSkuListMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DoSaveSkuListMutation, DoSaveSkuListMutationVariables>(DoSaveSkuListDocument, options)
}
export type DoSaveSkuListMutationHookResult = ReturnType<typeof useDoSaveSkuListMutation>
export type DoSaveSkuListMutationResult = Apollo.MutationResult<DoSaveSkuListMutation>
export type DoSaveSkuListMutationOptions = Apollo.BaseMutationOptions<
  DoSaveSkuListMutation,
  DoSaveSkuListMutationVariables
>
