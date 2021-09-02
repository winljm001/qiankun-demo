import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type CreateCategoryMutationVariables = SchemaTypes.Exact<{
  categoryInput?: SchemaTypes.Maybe<SchemaTypes.CategoryInput>
}>

export type CreateCategoryMutation = {
  createCategory: SchemaTypes.Maybe<{
    categoryId: SchemaTypes.Maybe<number>
    categoryName: SchemaTypes.Maybe<string>
    commodityTypeId: SchemaTypes.Maybe<number>
    commodityTypeName: SchemaTypes.Maybe<string>
    categorySort: SchemaTypes.Maybe<number>
    nameLocale: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ locale: SchemaTypes.Maybe<string>; name: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type UpdateCategoryMutationVariables = SchemaTypes.Exact<{
  categoryInput?: SchemaTypes.Maybe<SchemaTypes.CategoryInput>
}>

export type UpdateCategoryMutation = {
  updateCategory: SchemaTypes.Maybe<{
    categoryId: SchemaTypes.Maybe<number>
    categoryName: SchemaTypes.Maybe<string>
    commodityTypeId: SchemaTypes.Maybe<number>
    commodityTypeName: SchemaTypes.Maybe<string>
    categorySort: SchemaTypes.Maybe<number>
    nameLocale: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ locale: SchemaTypes.Maybe<string>; name: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type DeleteCategoryMutationVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type DeleteCategoryMutation = { deleteCategory: SchemaTypes.Maybe<boolean> }

export type PageCategoryDetailsQueryVariables = SchemaTypes.Exact<{
  pageCategoryInput?: SchemaTypes.Maybe<SchemaTypes.PageCategoryInput>
}>

export type PageCategoryDetailsQuery = {
  pageCategoryDetails: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          categoryId: SchemaTypes.Maybe<number>
          categoryName: SchemaTypes.Maybe<string>
          commodityTypeId: SchemaTypes.Maybe<number>
          commodityTypeName: SchemaTypes.Maybe<string>
          categorySort: SchemaTypes.Maybe<number>
          nameLocale: SchemaTypes.Maybe<
            Array<SchemaTypes.Maybe<{ locale: SchemaTypes.Maybe<string>; name: SchemaTypes.Maybe<string> }>>
          >
        }>
      >
    >
  }>
}

export type CategoryDetailQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars['Int']
}>

export type CategoryDetailQuery = {
  categoryDetail: SchemaTypes.Maybe<{
    categoryId: SchemaTypes.Maybe<number>
    categoryName: SchemaTypes.Maybe<string>
    commodityTypeId: SchemaTypes.Maybe<number>
    commodityTypeName: SchemaTypes.Maybe<string>
    categorySort: SchemaTypes.Maybe<number>
    nameLocale: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ locale: SchemaTypes.Maybe<string>; name: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type CountCategoryQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type CountCategoryQuery = { countCategory: SchemaTypes.Maybe<number> }

export const CreateCategoryDocument = gql`
  mutation createCategory($categoryInput: CategoryInput) {
    createCategory(categoryInput: $categoryInput) {
      categoryId
      categoryName
      commodityTypeId
      commodityTypeName
      categorySort
      nameLocale {
        locale
        name
      }
    }
  }
`
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      categoryInput: // value for 'categoryInput'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options)
}
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>
export const UpdateCategoryDocument = gql`
  mutation updateCategory($categoryInput: CategoryInput) {
    updateCategory(categoryInput: $categoryInput) {
      categoryId
      categoryName
      commodityTypeId
      commodityTypeName
      categorySort
      nameLocale {
        locale
        name
      }
    }
  }
`
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      categoryInput: // value for 'categoryInput'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options)
}
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>
export const DeleteCategoryDocument = gql`
  mutation deleteCategory($categoryId: Int!) {
    deleteCategory(categoryId: $categoryId)
  }
`
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options)
}
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>
export const PageCategoryDetailsDocument = gql`
  query pageCategoryDetails($pageCategoryInput: PageCategoryInput) {
    pageCategoryDetails(pageCategoryInput: $pageCategoryInput) {
      records {
        categoryId
        categoryName
        commodityTypeId
        commodityTypeName
        categorySort
        nameLocale {
          locale
          name
        }
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageCategoryDetailsQuery__
 *
 * To run a query within a React component, call `usePageCategoryDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCategoryDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCategoryDetailsQuery({
 *   variables: {
 *      pageCategoryInput: // value for 'pageCategoryInput'
 *   },
 * });
 */
export function usePageCategoryDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<PageCategoryDetailsQuery, PageCategoryDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageCategoryDetailsQuery, PageCategoryDetailsQueryVariables>(
    PageCategoryDetailsDocument,
    options,
  )
}
export function usePageCategoryDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageCategoryDetailsQuery, PageCategoryDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageCategoryDetailsQuery, PageCategoryDetailsQueryVariables>(
    PageCategoryDetailsDocument,
    options,
  )
}
export type PageCategoryDetailsQueryHookResult = ReturnType<typeof usePageCategoryDetailsQuery>
export type PageCategoryDetailsLazyQueryHookResult = ReturnType<typeof usePageCategoryDetailsLazyQuery>
export type PageCategoryDetailsQueryResult = Apollo.QueryResult<
  PageCategoryDetailsQuery,
  PageCategoryDetailsQueryVariables
>
export const CategoryDetailDocument = gql`
  query categoryDetail($categoryId: Int!) {
    categoryDetail(categoryId: $categoryId) {
      categoryId
      categoryName
      commodityTypeId
      commodityTypeName
      categorySort
      nameLocale {
        locale
        name
      }
    }
  }
`

/**
 * __useCategoryDetailQuery__
 *
 * To run a query within a React component, call `useCategoryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryDetailQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryDetailQuery(
  baseOptions: Apollo.QueryHookOptions<CategoryDetailQuery, CategoryDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoryDetailQuery, CategoryDetailQueryVariables>(CategoryDetailDocument, options)
}
export function useCategoryDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CategoryDetailQuery, CategoryDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoryDetailQuery, CategoryDetailQueryVariables>(CategoryDetailDocument, options)
}
export type CategoryDetailQueryHookResult = ReturnType<typeof useCategoryDetailQuery>
export type CategoryDetailLazyQueryHookResult = ReturnType<typeof useCategoryDetailLazyQuery>
export type CategoryDetailQueryResult = Apollo.QueryResult<CategoryDetailQuery, CategoryDetailQueryVariables>
export const CountCategoryDocument = gql`
  query countCategory {
    countCategory
  }
`

/**
 * __useCountCategoryQuery__
 *
 * To run a query within a React component, call `useCountCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<CountCategoryQuery, CountCategoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CountCategoryQuery, CountCategoryQueryVariables>(CountCategoryDocument, options)
}
export function useCountCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CountCategoryQuery, CountCategoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CountCategoryQuery, CountCategoryQueryVariables>(CountCategoryDocument, options)
}
export type CountCategoryQueryHookResult = ReturnType<typeof useCountCategoryQuery>
export type CountCategoryLazyQueryHookResult = ReturnType<typeof useCountCategoryLazyQuery>
export type CountCategoryQueryResult = Apollo.QueryResult<CountCategoryQuery, CountCategoryQueryVariables>
