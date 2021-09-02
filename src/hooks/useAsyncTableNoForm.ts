import { useAntdTable } from 'ahooks'
import { PaginatedParams } from 'ahooks/lib/useAntdTable'
import type { DocumentNode } from '@apollo/client'
import useUrlState from '@ahooksjs/use-url-state'
import { useCallback, useEffect } from 'react'
import graphqlClient from '@/graphql/client'
import { removeNull } from '@/utils'
interface IProps {
  /** 请求 */
  gql: DocumentNode
  gqlKey: string
  gqlParamKey?: string
  extraParams?: any
  isSingleParams?: boolean
  formatParams?: (values: any) => any
  /* 是否手动调用 */
  manual?: boolean
  /** 模拟数据响应（应只在开发阶段使用） */
  mockData?: any[]
  /* 是否缓存 */
  isCache?: boolean
  /* 是否存在form */
  hasCache?: boolean
}
const useAsyncTableNoForm = (props: IProps) => {
  const {
    gql,
    gqlKey,
    gqlParamKey,
    isSingleParams = false,
    mockData,
    formatParams,
    isCache = true,
    manual = false,
    extraParams = {},
  } = props
  const request = useCallback(
    ({ pageSize, pageCurrent, ...rest }: any) => {
      let page = {
        pageSize,
        pageCurrent,
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
        Object.assign(variables, { page: page })
        Object.assign(variables, rest)
      }
      // 开发阶段使用
      if (mockData) {
        return new Promise((resolve) => {
          const wait = 300
          setTimeout(() => {
            resolve({
              records: mockData,
              totalRecords: mockData.length,
              pageCurrent,
              pageSize,
            })
          }, wait)
        })
      }

      return graphqlClient
        .query({
          query: gql,
          variables,
        })
        .then((data) => data.data[gqlKey] || {})
    },
    [gql, gqlKey, gqlParamKey, mockData],
  )
  const getTableData = ({ current, pageSize }: PaginatedParams[0]) => {
    let fetchParams = { page: { pageCurrent: current, pageSize }, ...extraParams }

    // 删除空参数
    removeNull(fetchParams)
    if (typeof formatParams === 'function') {
      fetchParams = formatParams(fetchParams)
    }
    return request(fetchParams).then((res: any) => {
      const { totalRecords, records, recordList } = res
      // recordList临时兼容后端有时字段不统一的问题，后端应该统一叫records
      return { total: totalRecords, list: records ? records : recordList }
    })
  }

  // 缓存逻辑开始

  const [cacheParams, setCacheParams] = useUrlState({})

  const defaultParamsObj: any = isCache
    ? JSON.stringify(cacheParams) !== '{}'
      ? { defaultParams: [cacheParams, cacheParams] }
      : {}
    : {}
  // 缓存逻辑结束
  const { tableProps, params, search, refresh } = useAntdTable(
    (data) => {
      return getTableData(data)
    },
    {
      ...defaultParamsObj,
      manual,
    },
  )
  useEffect(() => {
    if (isCache) {
      if (params?.length > 1) {
        setCacheParams({ ...params[0], ...params[1] })
      }
    }
  }, [params])
  const { submit, reset } = search
  tableProps['pagination'].showSizeChanger = true
  tableProps['pagination'].showTotal = (total) => `共 ${total} 记录`
  return { tableProps, search, submit, reset, refresh }
}

export default useAsyncTableNoForm
