import { useCallback } from 'react'
import type { DocumentNode } from '@apollo/client'
import { usePersistFn } from 'ahooks'
import graphqlClient from '@/graphql/client'

import type { UseTablePagingParams } from './'
import useTablePaging from './'

interface UseTablePagingGQLParams<DT, PT> extends Omit<UseTablePagingParams<DT, PT>, 'request'> {
  gql: DocumentNode
  gqlKey: string
  gqlParamKey?: string
  isSingleParams?: boolean
}

const useTablePagingGQL = <DT, PT = Record<string, any>>({
  gql,
  gqlKey,
  gqlParamKey,
  formatParams,
  isSingleParams,
  ...restProps
}: UseTablePagingGQLParams<DT, PT>) => {
  const formatParamsPersistFn = usePersistFn((v: any) => {
    if (formatParams) {
      return formatParams(v)
    }
    return formatParams
  })

  const request = useCallback(
    ({ pageSize, pageCurrent, ...rest }: any) => {
      let page = {
        pageSize: +pageSize,
        pageCurrent: +pageCurrent,
      }
      if (rest.page) {
        page = rest.page
        delete rest.page
      }
      let variables = {}
      if (gqlParamKey) {
        variables[gqlParamKey] = rest
        if (isSingleParams) {
          variables[gqlParamKey]['page'] = page
        } else {
          variables['page'] = page
        }
      } else {
        if (isSingleParams) {
          Object.assign(variables, page)
          Object.assign(variables, rest)
        } else {
          Object.assign(variables, { page: page })
          Object.assign(variables, rest)
        }
      }

      variables = formatParamsPersistFn(formatParamsPersistFn)

      return graphqlClient
        .query({
          query: gql,
          variables,
        })
        .then((data) => data.data[gqlKey] || {})
    },
    [formatParamsPersistFn, gql, gqlKey, gqlParamKey, isSingleParams],
  )

  return useTablePaging({
    ...restProps,
    request,
  })
}

export default useTablePagingGQL
