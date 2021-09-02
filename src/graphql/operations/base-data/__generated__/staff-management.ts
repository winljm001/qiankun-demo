import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PageUserManageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.PageUserInput>
}>

export type PageUserManageQuery = {
  pageUserManage: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          id: SchemaTypes.Maybe<number>
          name: SchemaTypes.Maybe<string>
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

export type UserManageQueryVariables = SchemaTypes.Exact<{
  id?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type UserManageQuery = {
  userManage: SchemaTypes.Maybe<{
    id: SchemaTypes.Maybe<number>
    name: SchemaTypes.Maybe<string>
    phone: SchemaTypes.Maybe<string>
    userAccount: SchemaTypes.Maybe<string>
    orgGroupName: SchemaTypes.Maybe<string>
    orgGroupId: SchemaTypes.Maybe<number>
    orgName: SchemaTypes.Maybe<string>
    orgId: SchemaTypes.Maybe<number>
    relOrgIds: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<number>>>
  }>
}

export type CreateUserMangeMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.UserMangerInput>
}>

export type CreateUserMangeMutation = { createUserMange: SchemaTypes.Maybe<string> }

export type UpdateUserManageMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.UserMangerInput>
}>

export type UpdateUserManageMutation = { updateUserManage: SchemaTypes.Maybe<boolean> }

export type ListOrgGroupOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type ListOrgGroupOptionQuery = {
  listOrgGroupOption: SchemaTypes.Maybe<
    Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<number> }>>
  >
}

export type UpdatePasswordMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.UpdatePasswordInput>
}>

export type UpdatePasswordMutation = { updatePassword: SchemaTypes.Maybe<boolean> }

export type OrgAllTreeQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type OrgAllTreeQuery = { orgAllTree: SchemaTypes.Maybe<{ treeJson: SchemaTypes.Maybe<string> }> }

export const PageUserManageDocument = gql`
  query pageUserManage($input: PageUserInput) {
    pageUserManage(input: $input) {
      records {
        id
        name
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
 * __usePageUserManageQuery__
 *
 * To run a query within a React component, call `usePageUserManageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageUserManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageUserManageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageUserManageQuery(
  baseOptions?: Apollo.QueryHookOptions<PageUserManageQuery, PageUserManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageUserManageQuery, PageUserManageQueryVariables>(PageUserManageDocument, options)
}
export function usePageUserManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageUserManageQuery, PageUserManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageUserManageQuery, PageUserManageQueryVariables>(PageUserManageDocument, options)
}
export type PageUserManageQueryHookResult = ReturnType<typeof usePageUserManageQuery>
export type PageUserManageLazyQueryHookResult = ReturnType<typeof usePageUserManageLazyQuery>
export type PageUserManageQueryResult = Apollo.QueryResult<PageUserManageQuery, PageUserManageQueryVariables>
export const UserManageDocument = gql`
  query userManage($id: Int) {
    userManage(id: $id) {
      id
      name
      phone
      userAccount
      orgGroupName
      orgGroupId
      orgName
      orgId
      relOrgIds
    }
  }
`

/**
 * __useUserManageQuery__
 *
 * To run a query within a React component, call `useUserManageQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserManageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserManageQuery(baseOptions?: Apollo.QueryHookOptions<UserManageQuery, UserManageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserManageQuery, UserManageQueryVariables>(UserManageDocument, options)
}
export function useUserManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserManageQuery, UserManageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserManageQuery, UserManageQueryVariables>(UserManageDocument, options)
}
export type UserManageQueryHookResult = ReturnType<typeof useUserManageQuery>
export type UserManageLazyQueryHookResult = ReturnType<typeof useUserManageLazyQuery>
export type UserManageQueryResult = Apollo.QueryResult<UserManageQuery, UserManageQueryVariables>
export const CreateUserMangeDocument = gql`
  mutation createUserMange($input: UserMangerInput) {
    createUserMange(input: $input)
  }
`
export type CreateUserMangeMutationFn = Apollo.MutationFunction<
  CreateUserMangeMutation,
  CreateUserMangeMutationVariables
>

/**
 * __useCreateUserMangeMutation__
 *
 * To run a mutation, you first call `useCreateUserMangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMangeMutation, { data, loading, error }] = useCreateUserMangeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMangeMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMangeMutation, CreateUserMangeMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMangeMutation, CreateUserMangeMutationVariables>(CreateUserMangeDocument, options)
}
export type CreateUserMangeMutationHookResult = ReturnType<typeof useCreateUserMangeMutation>
export type CreateUserMangeMutationResult = Apollo.MutationResult<CreateUserMangeMutation>
export type CreateUserMangeMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMangeMutation,
  CreateUserMangeMutationVariables
>
export const UpdateUserManageDocument = gql`
  mutation updateUserManage($input: UserMangerInput) {
    updateUserManage(input: $input)
  }
`
export type UpdateUserManageMutationFn = Apollo.MutationFunction<
  UpdateUserManageMutation,
  UpdateUserManageMutationVariables
>

/**
 * __useUpdateUserManageMutation__
 *
 * To run a mutation, you first call `useUpdateUserManageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserManageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserManageMutation, { data, loading, error }] = useUpdateUserManageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserManageMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserManageMutation, UpdateUserManageMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserManageMutation, UpdateUserManageMutationVariables>(
    UpdateUserManageDocument,
    options,
  )
}
export type UpdateUserManageMutationHookResult = ReturnType<typeof useUpdateUserManageMutation>
export type UpdateUserManageMutationResult = Apollo.MutationResult<UpdateUserManageMutation>
export type UpdateUserManageMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserManageMutation,
  UpdateUserManageMutationVariables
>
export const ListOrgGroupOptionDocument = gql`
  query listOrgGroupOption {
    listOrgGroupOption {
      label
      value
    }
  }
`

/**
 * __useListOrgGroupOptionQuery__
 *
 * To run a query within a React component, call `useListOrgGroupOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrgGroupOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrgGroupOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOrgGroupOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListOrgGroupOptionQuery, ListOrgGroupOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListOrgGroupOptionQuery, ListOrgGroupOptionQueryVariables>(ListOrgGroupOptionDocument, options)
}
export function useListOrgGroupOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListOrgGroupOptionQuery, ListOrgGroupOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListOrgGroupOptionQuery, ListOrgGroupOptionQueryVariables>(
    ListOrgGroupOptionDocument,
    options,
  )
}
export type ListOrgGroupOptionQueryHookResult = ReturnType<typeof useListOrgGroupOptionQuery>
export type ListOrgGroupOptionLazyQueryHookResult = ReturnType<typeof useListOrgGroupOptionLazyQuery>
export type ListOrgGroupOptionQueryResult = Apollo.QueryResult<
  ListOrgGroupOptionQuery,
  ListOrgGroupOptionQueryVariables
>
export const UpdatePasswordDocument = gql`
  mutation updatePassword($input: UpdatePasswordInput) {
    updatePassword(input: $input)
  }
`
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options)
}
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables
>
export const OrgAllTreeDocument = gql`
  query orgAllTree {
    orgAllTree {
      treeJson
    }
  }
`

/**
 * __useOrgAllTreeQuery__
 *
 * To run a query within a React component, call `useOrgAllTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgAllTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgAllTreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrgAllTreeQuery(baseOptions?: Apollo.QueryHookOptions<OrgAllTreeQuery, OrgAllTreeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrgAllTreeQuery, OrgAllTreeQueryVariables>(OrgAllTreeDocument, options)
}
export function useOrgAllTreeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrgAllTreeQuery, OrgAllTreeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrgAllTreeQuery, OrgAllTreeQueryVariables>(OrgAllTreeDocument, options)
}
export type OrgAllTreeQueryHookResult = ReturnType<typeof useOrgAllTreeQuery>
export type OrgAllTreeLazyQueryHookResult = ReturnType<typeof useOrgAllTreeLazyQuery>
export type OrgAllTreeQueryResult = Apollo.QueryResult<OrgAllTreeQuery, OrgAllTreeQueryVariables>
