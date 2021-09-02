import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type CreateOrgGroupMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.CreateOrgGroupInput>
}>

export type CreateOrgGroupMutation = { createOrgGroup: SchemaTypes.Maybe<boolean> }

export type PageOrgGroupQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.PageOrgGroupInput>
}>

export type PageOrgGroupQuery = {
  pageOrgGroup: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ id: SchemaTypes.Maybe<number>; name: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type CreateOrgMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OrgInput>
}>

export type CreateOrgMutation = { createOrg: SchemaTypes.Maybe<boolean> }

export type UpdateOrgMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OrgInput>
}>

export type UpdateOrgMutation = { updateOrg: SchemaTypes.Maybe<boolean> }

export type OrgTreeQueryVariables = SchemaTypes.Exact<{
  id?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type OrgTreeQuery = { orgTree: SchemaTypes.Maybe<{ treeJson: SchemaTypes.Maybe<string> }> }

export type OrgQueryVariables = SchemaTypes.Exact<{
  id?: SchemaTypes.Maybe<SchemaTypes.Scalars['Int']>
}>

export type OrgQuery = {
  org: SchemaTypes.Maybe<{
    id: SchemaTypes.Maybe<number>
    orgName: string
    nameLocale: string
    country: number
    leadingCadre: SchemaTypes.Maybe<string>
    phone: SchemaTypes.Maybe<string>
    remark: SchemaTypes.Maybe<string>
    address: SchemaTypes.Maybe<string>
    lat: SchemaTypes.Maybe<string>
    lng: SchemaTypes.Maybe<string>
    businessName: SchemaTypes.Maybe<string>
    legalRep: SchemaTypes.Maybe<string>
    socialCreditCode: SchemaTypes.Maybe<string>
    businessAddress: SchemaTypes.Maybe<string>
    parentName: SchemaTypes.Maybe<string>
    parentId: SchemaTypes.Maybe<number>
    bizLicense: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          fileId: SchemaTypes.Maybe<string>
          fileUrl: SchemaTypes.Maybe<string>
          filename: SchemaTypes.Maybe<string>
        }>
      >
    >
    accountCert: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          fileId: SchemaTypes.Maybe<string>
          fileUrl: SchemaTypes.Maybe<string>
          filename: SchemaTypes.Maybe<string>
        }>
      >
    >
  }>
}

export const CreateOrgGroupDocument = gql`
  mutation createOrgGroup($input: CreateOrgGroupInput) {
    createOrgGroup(input: $input)
  }
`
export type CreateOrgGroupMutationFn = Apollo.MutationFunction<CreateOrgGroupMutation, CreateOrgGroupMutationVariables>

/**
 * __useCreateOrgGroupMutation__
 *
 * To run a mutation, you first call `useCreateOrgGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrgGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrgGroupMutation, { data, loading, error }] = useCreateOrgGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrgGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrgGroupMutation, CreateOrgGroupMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOrgGroupMutation, CreateOrgGroupMutationVariables>(CreateOrgGroupDocument, options)
}
export type CreateOrgGroupMutationHookResult = ReturnType<typeof useCreateOrgGroupMutation>
export type CreateOrgGroupMutationResult = Apollo.MutationResult<CreateOrgGroupMutation>
export type CreateOrgGroupMutationOptions = Apollo.BaseMutationOptions<
  CreateOrgGroupMutation,
  CreateOrgGroupMutationVariables
>
export const PageOrgGroupDocument = gql`
  query pageOrgGroup($input: PageOrgGroupInput) {
    pageOrgGroup(input: $input) {
      records {
        id
        name
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageOrgGroupQuery__
 *
 * To run a query within a React component, call `usePageOrgGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOrgGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOrgGroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageOrgGroupQuery(
  baseOptions?: Apollo.QueryHookOptions<PageOrgGroupQuery, PageOrgGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageOrgGroupQuery, PageOrgGroupQueryVariables>(PageOrgGroupDocument, options)
}
export function usePageOrgGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageOrgGroupQuery, PageOrgGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageOrgGroupQuery, PageOrgGroupQueryVariables>(PageOrgGroupDocument, options)
}
export type PageOrgGroupQueryHookResult = ReturnType<typeof usePageOrgGroupQuery>
export type PageOrgGroupLazyQueryHookResult = ReturnType<typeof usePageOrgGroupLazyQuery>
export type PageOrgGroupQueryResult = Apollo.QueryResult<PageOrgGroupQuery, PageOrgGroupQueryVariables>
export const CreateOrgDocument = gql`
  mutation createOrg($input: OrgInput) {
    createOrg(input: $input)
  }
`
export type CreateOrgMutationFn = Apollo.MutationFunction<CreateOrgMutation, CreateOrgMutationVariables>

/**
 * __useCreateOrgMutation__
 *
 * To run a mutation, you first call `useCreateOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrgMutation, { data, loading, error }] = useCreateOrgMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrgMutation, CreateOrgMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOrgMutation, CreateOrgMutationVariables>(CreateOrgDocument, options)
}
export type CreateOrgMutationHookResult = ReturnType<typeof useCreateOrgMutation>
export type CreateOrgMutationResult = Apollo.MutationResult<CreateOrgMutation>
export type CreateOrgMutationOptions = Apollo.BaseMutationOptions<CreateOrgMutation, CreateOrgMutationVariables>
export const UpdateOrgDocument = gql`
  mutation updateOrg($input: OrgInput) {
    updateOrg(input: $input)
  }
`
export type UpdateOrgMutationFn = Apollo.MutationFunction<UpdateOrgMutation, UpdateOrgMutationVariables>

/**
 * __useUpdateOrgMutation__
 *
 * To run a mutation, you first call `useUpdateOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrgMutation, { data, loading, error }] = useUpdateOrgMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateOrgMutation, UpdateOrgMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateOrgMutation, UpdateOrgMutationVariables>(UpdateOrgDocument, options)
}
export type UpdateOrgMutationHookResult = ReturnType<typeof useUpdateOrgMutation>
export type UpdateOrgMutationResult = Apollo.MutationResult<UpdateOrgMutation>
export type UpdateOrgMutationOptions = Apollo.BaseMutationOptions<UpdateOrgMutation, UpdateOrgMutationVariables>
export const OrgTreeDocument = gql`
  query orgTree($id: Int) {
    orgTree(id: $id) {
      treeJson
    }
  }
`

/**
 * __useOrgTreeQuery__
 *
 * To run a query within a React component, call `useOrgTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgTreeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrgTreeQuery(baseOptions?: Apollo.QueryHookOptions<OrgTreeQuery, OrgTreeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrgTreeQuery, OrgTreeQueryVariables>(OrgTreeDocument, options)
}
export function useOrgTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgTreeQuery, OrgTreeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrgTreeQuery, OrgTreeQueryVariables>(OrgTreeDocument, options)
}
export type OrgTreeQueryHookResult = ReturnType<typeof useOrgTreeQuery>
export type OrgTreeLazyQueryHookResult = ReturnType<typeof useOrgTreeLazyQuery>
export type OrgTreeQueryResult = Apollo.QueryResult<OrgTreeQuery, OrgTreeQueryVariables>
export const OrgDocument = gql`
  query org($id: Int) {
    org(id: $id) {
      id
      orgName
      nameLocale
      country
      leadingCadre
      phone
      remark
      address
      lat
      lng
      businessName
      legalRep
      socialCreditCode
      businessAddress
      bizLicense {
        fileId
        fileUrl
        filename
      }
      accountCert {
        fileId
        fileUrl
        filename
      }
      parentName
      parentId
    }
  }
`

/**
 * __useOrgQuery__
 *
 * To run a query within a React component, call `useOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrgQuery(baseOptions?: Apollo.QueryHookOptions<OrgQuery, OrgQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options)
}
export function useOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgQuery, OrgQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options)
}
export type OrgQueryHookResult = ReturnType<typeof useOrgQuery>
export type OrgLazyQueryHookResult = ReturnType<typeof useOrgLazyQuery>
export type OrgQueryResult = Apollo.QueryResult<OrgQuery, OrgQueryVariables>
