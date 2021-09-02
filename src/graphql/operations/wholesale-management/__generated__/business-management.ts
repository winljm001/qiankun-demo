import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PageMerchantQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.MerchantPageInput>
}>

export type PageMerchantQuery = {
  pageMerchant: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          id: SchemaTypes.Maybe<number>
          name: SchemaTypes.Maybe<string>
          userName: SchemaTypes.Maybe<string>
          phone: SchemaTypes.Maybe<string>
          orgGroupName: SchemaTypes.Maybe<string>
          orgGroupId: SchemaTypes.Maybe<number>
          orgName: SchemaTypes.Maybe<string>
          orgId: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type MerchantQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.MerchantIdInput>
}>

export type MerchantQuery = {
  merchant: SchemaTypes.Maybe<{
    id: SchemaTypes.Maybe<number>
    name: SchemaTypes.Maybe<string>
    userName: SchemaTypes.Maybe<string>
    userId: SchemaTypes.Maybe<number>
    phone: SchemaTypes.Maybe<string>
    orgGroupName: SchemaTypes.Maybe<string>
    orgGroupId: SchemaTypes.Maybe<number>
    orgName: SchemaTypes.Maybe<string>
    orgId: SchemaTypes.Maybe<number>
  }>
}

export type SearchUserQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.SearchUserInput>
}>

export type SearchUserQuery = {
  searchUser: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        userId: SchemaTypes.Maybe<number>
        userName: SchemaTypes.Maybe<string>
        phone: SchemaTypes.Maybe<string>
        used: SchemaTypes.Maybe<number>
      }>
    >
  >
}

export type CreteMerchantMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.MerchantInput>
}>

export type CreteMerchantMutation = { creteMerchant: SchemaTypes.Maybe<boolean> }

export type UpdateMerchantMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.MerchantInput>
}>

export type UpdateMerchantMutation = { updateMerchant: SchemaTypes.Maybe<boolean> }

export const PageMerchantDocument = gql`
  query pageMerchant($input: MerchantPageInput) {
    pageMerchant(input: $input) {
      records {
        id
        name
        userName
        phone
        orgGroupName
        orgGroupId
        orgName
        orgId
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageMerchantQuery__
 *
 * To run a query within a React component, call `usePageMerchantQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageMerchantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageMerchantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageMerchantQuery(
  baseOptions?: Apollo.QueryHookOptions<PageMerchantQuery, PageMerchantQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageMerchantQuery, PageMerchantQueryVariables>(PageMerchantDocument, options)
}
export function usePageMerchantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageMerchantQuery, PageMerchantQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageMerchantQuery, PageMerchantQueryVariables>(PageMerchantDocument, options)
}
export type PageMerchantQueryHookResult = ReturnType<typeof usePageMerchantQuery>
export type PageMerchantLazyQueryHookResult = ReturnType<typeof usePageMerchantLazyQuery>
export type PageMerchantQueryResult = Apollo.QueryResult<PageMerchantQuery, PageMerchantQueryVariables>
export const MerchantDocument = gql`
  query merchant($input: MerchantIdInput) {
    merchant(input: $input) {
      id
      name
      userName
      userId
      phone
      orgGroupName
      orgGroupId
      orgName
      orgId
    }
  }
`

/**
 * __useMerchantQuery__
 *
 * To run a query within a React component, call `useMerchantQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerchantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMerchantQuery(baseOptions?: Apollo.QueryHookOptions<MerchantQuery, MerchantQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MerchantQuery, MerchantQueryVariables>(MerchantDocument, options)
}
export function useMerchantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MerchantQuery, MerchantQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MerchantQuery, MerchantQueryVariables>(MerchantDocument, options)
}
export type MerchantQueryHookResult = ReturnType<typeof useMerchantQuery>
export type MerchantLazyQueryHookResult = ReturnType<typeof useMerchantLazyQuery>
export type MerchantQueryResult = Apollo.QueryResult<MerchantQuery, MerchantQueryVariables>
export const SearchUserDocument = gql`
  query searchUser($input: SearchUserInput) {
    searchUser(input: $input) {
      userId
      userName
      phone
      used
    }
  }
`

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions?: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options)
}
export function useSearchUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options)
}
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>
export const CreteMerchantDocument = gql`
  mutation creteMerchant($input: MerchantInput) {
    creteMerchant(input: $input)
  }
`
export type CreteMerchantMutationFn = Apollo.MutationFunction<CreteMerchantMutation, CreteMerchantMutationVariables>

/**
 * __useCreteMerchantMutation__
 *
 * To run a mutation, you first call `useCreteMerchantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreteMerchantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [creteMerchantMutation, { data, loading, error }] = useCreteMerchantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreteMerchantMutation(
  baseOptions?: Apollo.MutationHookOptions<CreteMerchantMutation, CreteMerchantMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreteMerchantMutation, CreteMerchantMutationVariables>(CreteMerchantDocument, options)
}
export type CreteMerchantMutationHookResult = ReturnType<typeof useCreteMerchantMutation>
export type CreteMerchantMutationResult = Apollo.MutationResult<CreteMerchantMutation>
export type CreteMerchantMutationOptions = Apollo.BaseMutationOptions<
  CreteMerchantMutation,
  CreteMerchantMutationVariables
>
export const UpdateMerchantDocument = gql`
  mutation updateMerchant($input: MerchantInput) {
    updateMerchant(input: $input)
  }
`
export type UpdateMerchantMutationFn = Apollo.MutationFunction<UpdateMerchantMutation, UpdateMerchantMutationVariables>

/**
 * __useUpdateMerchantMutation__
 *
 * To run a mutation, you first call `useUpdateMerchantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMerchantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMerchantMutation, { data, loading, error }] = useUpdateMerchantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMerchantMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateMerchantMutation, UpdateMerchantMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateMerchantMutation, UpdateMerchantMutationVariables>(UpdateMerchantDocument, options)
}
export type UpdateMerchantMutationHookResult = ReturnType<typeof useUpdateMerchantMutation>
export type UpdateMerchantMutationResult = Apollo.MutationResult<UpdateMerchantMutation>
export type UpdateMerchantMutationOptions = Apollo.BaseMutationOptions<
  UpdateMerchantMutation,
  UpdateMerchantMutationVariables
>
