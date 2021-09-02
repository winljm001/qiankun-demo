import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type SelectVarietyAndPlaceByCategoryIdQueryVariables = SchemaTypes.Exact<{
  categoryId?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type SelectVarietyAndPlaceByCategoryIdQuery = {
  selectVarietyByCategoryId: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ value: SchemaTypes.Maybe<number>; label: SchemaTypes.Maybe<string> }>>
  >
  selectPlaceByCategoryId: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ value: SchemaTypes.Maybe<number>; label: SchemaTypes.Maybe<string> }>>
  >
}

export type SpecsQueryVariables = SchemaTypes.Exact<{
  specsInput?: SchemaTypes.Maybe<SchemaTypes.SpecsInput>
}>

export type SpecsQuery = {
  specs: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        specId: SchemaTypes.Maybe<number>
        specName: SchemaTypes.Maybe<string>
        specOption: SchemaTypes.Maybe<
          Array<
            SchemaTypes.Maybe<{
              optionId: SchemaTypes.Maybe<number>
              optionName: SchemaTypes.Maybe<string>
              specId: SchemaTypes.Maybe<number>
            }>
          >
        >
      }>
    >
  >
}

export type PageVarietyGroupQueryVariables = SchemaTypes.Exact<{
  name?: SchemaTypes.Maybe<SchemaTypes.Scalars['String']>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PageVarietyGroupQuery = {
  pageVarietyGroup: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ groupId: SchemaTypes.Maybe<number>; groupName: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type CreateVarietyGroupMutationVariables = SchemaTypes.Exact<{
  groupName: SchemaTypes.Scalars['String']
}>

export type CreateVarietyGroupMutation = {
  createVarietyGroup: SchemaTypes.Maybe<{ groupId: SchemaTypes.Maybe<number>; groupName: SchemaTypes.Maybe<string> }>
}

export type UpdateVarietyGroupMutationVariables = SchemaTypes.Exact<{
  varietyGroupInput?: SchemaTypes.Maybe<SchemaTypes.VarietyGroupInput>
}>

export type UpdateVarietyGroupMutation = {
  updateVarietyGroup: SchemaTypes.Maybe<{ groupId: SchemaTypes.Maybe<number>; groupName: SchemaTypes.Maybe<string> }>
}

export type VarietyGroupDetailQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['Int']
}>

export type VarietyGroupDetailQuery = {
  varietyGroupDetail: SchemaTypes.Maybe<{ groupId: SchemaTypes.Maybe<number>; groupName: SchemaTypes.Maybe<string> }>
}

export type PageVarietyGroupSkuQueryVariables = SchemaTypes.Exact<{
  groupId: SchemaTypes.Scalars['Int']
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PageVarietyGroupSkuQuery = {
  pageVarietyGroupSku: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          varietySkuId: SchemaTypes.Maybe<number>
          groupId: SchemaTypes.Maybe<number>
          skuId: SchemaTypes.Maybe<number>
          categoryName: SchemaTypes.Maybe<string>
          spuName: SchemaTypes.Maybe<string>
          skuName: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export type CreateVarietyGroupSkuMutationVariables = SchemaTypes.Exact<{
  createVarietyGroupSkuInput?: SchemaTypes.Maybe<SchemaTypes.CreateVarietyGroupSkuInput>
}>

export type CreateVarietyGroupSkuMutation = { createVarietyGroupSku: SchemaTypes.Maybe<boolean> }

export type DelVarietyGroupSkuMutationVariables = SchemaTypes.Exact<{
  delVarietyGroupSkuInput?: SchemaTypes.Maybe<SchemaTypes.DelVarietyGroupSkuInput>
}>

export type DelVarietyGroupSkuMutation = { delVarietyGroupSku: SchemaTypes.Maybe<boolean> }

export type PageGroupSkuQueryVariables = SchemaTypes.Exact<{
  groupSkuInput?: SchemaTypes.Maybe<SchemaTypes.GroupSkuInput>
  page?: SchemaTypes.Maybe<SchemaTypes.Page>
}>

export type PageGroupSkuQuery = {
  pageGroupSku: SchemaTypes.Maybe<{
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

export const SelectVarietyAndPlaceByCategoryIdDocument = gql`
  query selectVarietyAndPlaceByCategoryId($categoryId: Int) {
    selectVarietyByCategoryId(categoryId: $categoryId) {
      value: varietyId
      label: varietyName
    }
    selectPlaceByCategoryId(categoryId: $categoryId) {
      value: placeId
      label: placeName
    }
  }
`

/**
 * __useSelectVarietyAndPlaceByCategoryIdQuery__
 *
 * To run a query within a React component, call `useSelectVarietyAndPlaceByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectVarietyAndPlaceByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectVarietyAndPlaceByCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSelectVarietyAndPlaceByCategoryIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SelectVarietyAndPlaceByCategoryIdQuery,
    SelectVarietyAndPlaceByCategoryIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SelectVarietyAndPlaceByCategoryIdQuery, SelectVarietyAndPlaceByCategoryIdQueryVariables>(
    SelectVarietyAndPlaceByCategoryIdDocument,
    options,
  )
}
export function useSelectVarietyAndPlaceByCategoryIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SelectVarietyAndPlaceByCategoryIdQuery,
    SelectVarietyAndPlaceByCategoryIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SelectVarietyAndPlaceByCategoryIdQuery, SelectVarietyAndPlaceByCategoryIdQueryVariables>(
    SelectVarietyAndPlaceByCategoryIdDocument,
    options,
  )
}
export type SelectVarietyAndPlaceByCategoryIdQueryHookResult = ReturnType<
  typeof useSelectVarietyAndPlaceByCategoryIdQuery
>
export type SelectVarietyAndPlaceByCategoryIdLazyQueryHookResult = ReturnType<
  typeof useSelectVarietyAndPlaceByCategoryIdLazyQuery
>
export type SelectVarietyAndPlaceByCategoryIdQueryResult = Apollo.QueryResult<
  SelectVarietyAndPlaceByCategoryIdQuery,
  SelectVarietyAndPlaceByCategoryIdQueryVariables
>
export const SpecsDocument = gql`
  query specs($specsInput: SpecsInput) {
    specs(specsInput: $specsInput) {
      specId
      specName
      specOption {
        optionId
        optionName
        specId
      }
    }
  }
`

/**
 * __useSpecsQuery__
 *
 * To run a query within a React component, call `useSpecsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecsQuery({
 *   variables: {
 *      specsInput: // value for 'specsInput'
 *   },
 * });
 */
export function useSpecsQuery(baseOptions?: Apollo.QueryHookOptions<SpecsQuery, SpecsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SpecsQuery, SpecsQueryVariables>(SpecsDocument, options)
}
export function useSpecsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecsQuery, SpecsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SpecsQuery, SpecsQueryVariables>(SpecsDocument, options)
}
export type SpecsQueryHookResult = ReturnType<typeof useSpecsQuery>
export type SpecsLazyQueryHookResult = ReturnType<typeof useSpecsLazyQuery>
export type SpecsQueryResult = Apollo.QueryResult<SpecsQuery, SpecsQueryVariables>
export const PageVarietyGroupDocument = gql`
  query pageVarietyGroup($name: String, $page: Page) {
    pageVarietyGroup(name: $name, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        groupId
        groupName
      }
    }
  }
`

/**
 * __usePageVarietyGroupQuery__
 *
 * To run a query within a React component, call `usePageVarietyGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageVarietyGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageVarietyGroupQuery({
 *   variables: {
 *      name: // value for 'name'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageVarietyGroupQuery(
  baseOptions?: Apollo.QueryHookOptions<PageVarietyGroupQuery, PageVarietyGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageVarietyGroupQuery, PageVarietyGroupQueryVariables>(PageVarietyGroupDocument, options)
}
export function usePageVarietyGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageVarietyGroupQuery, PageVarietyGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageVarietyGroupQuery, PageVarietyGroupQueryVariables>(PageVarietyGroupDocument, options)
}
export type PageVarietyGroupQueryHookResult = ReturnType<typeof usePageVarietyGroupQuery>
export type PageVarietyGroupLazyQueryHookResult = ReturnType<typeof usePageVarietyGroupLazyQuery>
export type PageVarietyGroupQueryResult = Apollo.QueryResult<PageVarietyGroupQuery, PageVarietyGroupQueryVariables>
export const CreateVarietyGroupDocument = gql`
  mutation createVarietyGroup($groupName: String!) {
    createVarietyGroup(groupName: $groupName) {
      groupId
      groupName
    }
  }
`
export type CreateVarietyGroupMutationFn = Apollo.MutationFunction<
  CreateVarietyGroupMutation,
  CreateVarietyGroupMutationVariables
>

/**
 * __useCreateVarietyGroupMutation__
 *
 * To run a mutation, you first call `useCreateVarietyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVarietyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVarietyGroupMutation, { data, loading, error }] = useCreateVarietyGroupMutation({
 *   variables: {
 *      groupName: // value for 'groupName'
 *   },
 * });
 */
export function useCreateVarietyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateVarietyGroupMutation, CreateVarietyGroupMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateVarietyGroupMutation, CreateVarietyGroupMutationVariables>(
    CreateVarietyGroupDocument,
    options,
  )
}
export type CreateVarietyGroupMutationHookResult = ReturnType<typeof useCreateVarietyGroupMutation>
export type CreateVarietyGroupMutationResult = Apollo.MutationResult<CreateVarietyGroupMutation>
export type CreateVarietyGroupMutationOptions = Apollo.BaseMutationOptions<
  CreateVarietyGroupMutation,
  CreateVarietyGroupMutationVariables
>
export const UpdateVarietyGroupDocument = gql`
  mutation updateVarietyGroup($varietyGroupInput: VarietyGroupInput) {
    updateVarietyGroup(varietyGroupInput: $varietyGroupInput) {
      groupId
      groupName
    }
  }
`
export type UpdateVarietyGroupMutationFn = Apollo.MutationFunction<
  UpdateVarietyGroupMutation,
  UpdateVarietyGroupMutationVariables
>

/**
 * __useUpdateVarietyGroupMutation__
 *
 * To run a mutation, you first call `useUpdateVarietyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVarietyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVarietyGroupMutation, { data, loading, error }] = useUpdateVarietyGroupMutation({
 *   variables: {
 *      varietyGroupInput: // value for 'varietyGroupInput'
 *   },
 * });
 */
export function useUpdateVarietyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateVarietyGroupMutation, UpdateVarietyGroupMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateVarietyGroupMutation, UpdateVarietyGroupMutationVariables>(
    UpdateVarietyGroupDocument,
    options,
  )
}
export type UpdateVarietyGroupMutationHookResult = ReturnType<typeof useUpdateVarietyGroupMutation>
export type UpdateVarietyGroupMutationResult = Apollo.MutationResult<UpdateVarietyGroupMutation>
export type UpdateVarietyGroupMutationOptions = Apollo.BaseMutationOptions<
  UpdateVarietyGroupMutation,
  UpdateVarietyGroupMutationVariables
>
export const VarietyGroupDetailDocument = gql`
  query varietyGroupDetail($id: Int!) {
    varietyGroupDetail(id: $id) {
      groupId
      groupName
    }
  }
`

/**
 * __useVarietyGroupDetailQuery__
 *
 * To run a query within a React component, call `useVarietyGroupDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useVarietyGroupDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVarietyGroupDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVarietyGroupDetailQuery(
  baseOptions: Apollo.QueryHookOptions<VarietyGroupDetailQuery, VarietyGroupDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VarietyGroupDetailQuery, VarietyGroupDetailQueryVariables>(VarietyGroupDetailDocument, options)
}
export function useVarietyGroupDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VarietyGroupDetailQuery, VarietyGroupDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VarietyGroupDetailQuery, VarietyGroupDetailQueryVariables>(
    VarietyGroupDetailDocument,
    options,
  )
}
export type VarietyGroupDetailQueryHookResult = ReturnType<typeof useVarietyGroupDetailQuery>
export type VarietyGroupDetailLazyQueryHookResult = ReturnType<typeof useVarietyGroupDetailLazyQuery>
export type VarietyGroupDetailQueryResult = Apollo.QueryResult<
  VarietyGroupDetailQuery,
  VarietyGroupDetailQueryVariables
>
export const PageVarietyGroupSkuDocument = gql`
  query pageVarietyGroupSku($groupId: Int!, $page: Page) {
    pageVarietyGroupSku(groupId: $groupId, page: $page) {
      pageCurrent
      pageSize
      totalRecords
      records {
        varietySkuId
        groupId
        skuId
        categoryName
        spuName
        skuName
      }
    }
  }
`

/**
 * __usePageVarietyGroupSkuQuery__
 *
 * To run a query within a React component, call `usePageVarietyGroupSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageVarietyGroupSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageVarietyGroupSkuQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageVarietyGroupSkuQuery(
  baseOptions: Apollo.QueryHookOptions<PageVarietyGroupSkuQuery, PageVarietyGroupSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageVarietyGroupSkuQuery, PageVarietyGroupSkuQueryVariables>(
    PageVarietyGroupSkuDocument,
    options,
  )
}
export function usePageVarietyGroupSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageVarietyGroupSkuQuery, PageVarietyGroupSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageVarietyGroupSkuQuery, PageVarietyGroupSkuQueryVariables>(
    PageVarietyGroupSkuDocument,
    options,
  )
}
export type PageVarietyGroupSkuQueryHookResult = ReturnType<typeof usePageVarietyGroupSkuQuery>
export type PageVarietyGroupSkuLazyQueryHookResult = ReturnType<typeof usePageVarietyGroupSkuLazyQuery>
export type PageVarietyGroupSkuQueryResult = Apollo.QueryResult<
  PageVarietyGroupSkuQuery,
  PageVarietyGroupSkuQueryVariables
>
export const CreateVarietyGroupSkuDocument = gql`
  mutation createVarietyGroupSku($createVarietyGroupSkuInput: CreateVarietyGroupSkuInput) {
    createVarietyGroupSku(createVarietyGroupSkuInput: $createVarietyGroupSkuInput)
  }
`
export type CreateVarietyGroupSkuMutationFn = Apollo.MutationFunction<
  CreateVarietyGroupSkuMutation,
  CreateVarietyGroupSkuMutationVariables
>

/**
 * __useCreateVarietyGroupSkuMutation__
 *
 * To run a mutation, you first call `useCreateVarietyGroupSkuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVarietyGroupSkuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVarietyGroupSkuMutation, { data, loading, error }] = useCreateVarietyGroupSkuMutation({
 *   variables: {
 *      createVarietyGroupSkuInput: // value for 'createVarietyGroupSkuInput'
 *   },
 * });
 */
export function useCreateVarietyGroupSkuMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateVarietyGroupSkuMutation, CreateVarietyGroupSkuMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateVarietyGroupSkuMutation, CreateVarietyGroupSkuMutationVariables>(
    CreateVarietyGroupSkuDocument,
    options,
  )
}
export type CreateVarietyGroupSkuMutationHookResult = ReturnType<typeof useCreateVarietyGroupSkuMutation>
export type CreateVarietyGroupSkuMutationResult = Apollo.MutationResult<CreateVarietyGroupSkuMutation>
export type CreateVarietyGroupSkuMutationOptions = Apollo.BaseMutationOptions<
  CreateVarietyGroupSkuMutation,
  CreateVarietyGroupSkuMutationVariables
>
export const DelVarietyGroupSkuDocument = gql`
  mutation delVarietyGroupSku($delVarietyGroupSkuInput: DelVarietyGroupSkuInput) {
    delVarietyGroupSku(delVarietyGroupSkuInput: $delVarietyGroupSkuInput)
  }
`
export type DelVarietyGroupSkuMutationFn = Apollo.MutationFunction<
  DelVarietyGroupSkuMutation,
  DelVarietyGroupSkuMutationVariables
>

/**
 * __useDelVarietyGroupSkuMutation__
 *
 * To run a mutation, you first call `useDelVarietyGroupSkuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelVarietyGroupSkuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delVarietyGroupSkuMutation, { data, loading, error }] = useDelVarietyGroupSkuMutation({
 *   variables: {
 *      delVarietyGroupSkuInput: // value for 'delVarietyGroupSkuInput'
 *   },
 * });
 */
export function useDelVarietyGroupSkuMutation(
  baseOptions?: Apollo.MutationHookOptions<DelVarietyGroupSkuMutation, DelVarietyGroupSkuMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DelVarietyGroupSkuMutation, DelVarietyGroupSkuMutationVariables>(
    DelVarietyGroupSkuDocument,
    options,
  )
}
export type DelVarietyGroupSkuMutationHookResult = ReturnType<typeof useDelVarietyGroupSkuMutation>
export type DelVarietyGroupSkuMutationResult = Apollo.MutationResult<DelVarietyGroupSkuMutation>
export type DelVarietyGroupSkuMutationOptions = Apollo.BaseMutationOptions<
  DelVarietyGroupSkuMutation,
  DelVarietyGroupSkuMutationVariables
>
export const PageGroupSkuDocument = gql`
  query pageGroupSku($groupSkuInput: GroupSkuInput, $page: Page) {
    pageGroupSku(groupSkuInput: $groupSkuInput, page: $page) {
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
 * __usePageGroupSkuQuery__
 *
 * To run a query within a React component, call `usePageGroupSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageGroupSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageGroupSkuQuery({
 *   variables: {
 *      groupSkuInput: // value for 'groupSkuInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageGroupSkuQuery(
  baseOptions?: Apollo.QueryHookOptions<PageGroupSkuQuery, PageGroupSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageGroupSkuQuery, PageGroupSkuQueryVariables>(PageGroupSkuDocument, options)
}
export function usePageGroupSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageGroupSkuQuery, PageGroupSkuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageGroupSkuQuery, PageGroupSkuQueryVariables>(PageGroupSkuDocument, options)
}
export type PageGroupSkuQueryHookResult = ReturnType<typeof usePageGroupSkuQuery>
export type PageGroupSkuLazyQueryHookResult = ReturnType<typeof usePageGroupSkuLazyQuery>
export type PageGroupSkuQueryResult = Apollo.QueryResult<PageGroupSkuQuery, PageGroupSkuQueryVariables>
