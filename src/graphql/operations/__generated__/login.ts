import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {}
export type LoginMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.LoginInput>
}>

export type LoginMutation = { login: SchemaTypes.Maybe<string> }

export type SendCodeMsgMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.SendCodeMsgInput>
}>

export type SendCodeMsgMutation = { sendCodeMsg: SchemaTypes.Maybe<boolean> }

export type RefreshTokenMutationVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type RefreshTokenMutation = { refreshToken: SchemaTypes.Maybe<string> }

export type GetCurrentUserQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type GetCurrentUserQuery = {
  getCurrentUser: SchemaTypes.Maybe<{
    userId: SchemaTypes.Maybe<number>
    userName: SchemaTypes.Maybe<string>
    phone: SchemaTypes.Maybe<string>
    roleNames: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
    avatar: SchemaTypes.Maybe<string>
    organizationName: SchemaTypes.Maybe<string>
  }>
}

export const LoginDocument = gql`
  mutation login($input: LoginInput) {
    login(input: $input)
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const SendCodeMsgDocument = gql`
  mutation sendCodeMsg($input: SendCodeMsgInput) {
    sendCodeMsg(input: $input)
  }
`
export type SendCodeMsgMutationFn = Apollo.MutationFunction<SendCodeMsgMutation, SendCodeMsgMutationVariables>

/**
 * __useSendCodeMsgMutation__
 *
 * To run a mutation, you first call `useSendCodeMsgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodeMsgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodeMsgMutation, { data, loading, error }] = useSendCodeMsgMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendCodeMsgMutation(
  baseOptions?: Apollo.MutationHookOptions<SendCodeMsgMutation, SendCodeMsgMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SendCodeMsgMutation, SendCodeMsgMutationVariables>(SendCodeMsgDocument, options)
}
export type SendCodeMsgMutationHookResult = ReturnType<typeof useSendCodeMsgMutation>
export type SendCodeMsgMutationResult = Apollo.MutationResult<SendCodeMsgMutation>
export type SendCodeMsgMutationOptions = Apollo.BaseMutationOptions<SendCodeMsgMutation, SendCodeMsgMutationVariables>
export const RefreshTokenDocument = gql`
  mutation refreshToken {
    refreshToken
  }
`
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options)
}
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    getCurrentUser {
      userId
      userName
      phone
      roleNames
      avatar
      organizationName
    }
  }
`

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options)
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options)
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>
