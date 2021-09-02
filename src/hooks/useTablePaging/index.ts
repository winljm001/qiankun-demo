import qs from 'querystring'
import { useCallback, useState, useRef, useMemo } from 'react'
import { Form } from 'antd'
import type { TablePaginationConfig } from 'antd/es/table/interface'
import { usePersistFn } from 'ahooks'
import { useHistory, useLocation } from 'react-router-dom'

import useOriginalDeepCopy from '../useOriginalDeepCopy'

/**
 * 参数类型
 * @description multiple 多选，应该解析成数组
 * @description multipleNumber 多选的值是数组
 * @description moment 时间类型
 * @description momentRange 时间段
 */
type ParamsValueType = 'multiple' | 'multipleNumber' | 'moment' | 'momentRange'

type PagingData<DT> = {
  pageCurrent: number
  pageSize: number
  totalRecords: number
  records: DT[]
}

export interface UseTablePagingParams<DT, PT> {
  request: (params: any) => Promise<PagingData<DT>>

  /**
   * 是否手动执行，页面初始化好后不自动请求数据
   * @description 在一些搜索页面需要先输入关键词
   * @default false
   */
  manual?: boolean

  /**
   * 默认第几页
   * @default 1
   */
  defaultPageCurrent?: number | string

  /**
   * 每页多少个数据
   * @description 变更不会引起重新拉取数据，如果有需求，可以手动刷新或修改组件
   * @default 10
   */
  defaultPageSize?: number | string

  /**
   * 默认参数
   * @description 这个适合页面进来就需要预置的参数
   */
  defaultParams?: PT

  /**
   * 自定义参数
   */
  formatParams?: (values: any) => any

  /**
   * 特殊参数值类型对应表
   */
  paramsValueTypeMap?: Record<string, ParamsValueType>

  /**
   * 重置表单时忽略的字段
   */
  resetFieldsIgnores?: string[]

  /**
   * 参数是否同步到 search
   * @default true
   */
  params2search?: boolean
}

/**
 * 配合 Table 组件的分页
 */
const useTablePaging = <DT, PT = Record<string, any>>({
  manual = false,
  defaultPageCurrent = 1,
  defaultPageSize = 10,
  request,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  defaultParams = {} as PT,
  formatParams,
  paramsValueTypeMap,
  resetFieldsIgnores,
  params2search = true,
}: UseTablePagingParams<DT, PT>) => {
  const location = useLocation()
  const { push } = useHistory()

  /** 请求函数 */
  const requestPersistFn = usePersistFn(request)
  /** 重置忽略字段 */
  const resetFieldsIgnoresOriginalDeepCopy = useOriginalDeepCopy(resetFieldsIgnores)

  const [form] = Form.useForm()
  /** 分页参数，表单里面的原始值 */
  const PagingParams = useRef<Record<string, any>>({})
  /** 额外不变的参数 */
  const DefaultParams = useRef(defaultParams)
  /** 请求时间戳 */
  const Timestamp = useRef(0)
  /** 记录变更参数是否是主动触发的 */
  const ChangeParamsByAction = useRef(false)

  // 维护 Pagination分页 状态
  const [paging, setPaging] = useState<PagingData<DT> & { loading: boolean }>({
    pageCurrent: +defaultPageCurrent,
    pageSize: +defaultPageSize,
    totalRecords: 0,
    records: [],
    loading: false,
  })

  const pagination = useMemo(
    () => ({
      current: paging.pageCurrent,
      pageSize: paging.pageSize,
      total: paging.totalRecords,
      showSizeChanger: true,
      showTotal: (total: number) => `共 ${total} 记录`,
    }),
    [paging],
  )

  /**
   * 请求数据
   */
  const fetchData = useCallback(
    (p: any) => {
      const xx = {}

      const ts = new Date().getTime()

      Timestamp.current = ts

      setPaging((s) => ({
        ...s,
        loading: true,
      }))

      // 重置锁
      ChangeParamsByAction.current = false

      requestPersistFn(xx)
        .then((data) => {
          if (Timestamp.current === ts) {
            setPaging({
              ...data,
              loading: false,
            })
          }
        })
        .catch(() => {
          if (Timestamp.current === ts) {
            setPaging((s) => ({
              ...s,
              loading: false,
              records: [],
            }))
          }
        })
    },
    [requestPersistFn],
  )

  /**
   * 正向解析表单里面的参数
   */
  const parseParams = useCallback((v: any) => {
    return v
  }, [])

  /**
   * 方向解析表单里面的参数
   */
  const stringifyParams = useCallback(() => {}, [])

  /**
   * 重置表单
   */
  const resetForm = useCallback(
    (callback: () => void) => {
      const values: Record<string, any> = form.getFieldsValue()
      const ignoresValue: Record<string, any> = {}

      Object.entries(values).forEach(([key, value]) => {
        if (resetFieldsIgnoresOriginalDeepCopy && resetFieldsIgnoresOriginalDeepCopy.indexOf(key) > -1) {
          ignoresValue[key] = value
        }
      })

      form.resetFields()

      form.setFieldsValue(ignoresValue)

      callback?.()
    },
    [form, resetFieldsIgnoresOriginalDeepCopy],
  )

  /**
   * 改变参数
   */
  const runChangeParams = useCallback(
    (p: any) => {
      const parsed = parseParams(p)

      if (params2search) {
        push({
          pathname: location.pathname,
          search: qs.stringify(parsed),
        })
      }

      // TODO 优化路由变更后在请求数据
      setTimeout(() => {
        fetchData(parsed)
      })
    },
    [parseParams, params2search, fetchData, push, location.pathname],
  )

  /**
   * 只触发页面变更
   */
  const runChangePagination = useCallback(
    (p: { pageCurrent?: number; pageSize?: number }) => {
      runChangeParams({
        ...PagingParams.current,
        ...p,
      })
    },
    [runChangeParams],
  )

  const submit = useCallback(() => {
    const values: Record<string, any> = form.getFieldsValue()
    runChangeParams(values)
  }, [runChangeParams, form])

  /**
   * 重置表单并且重新搜索
   */
  const reset = useCallback(() => {
    resetForm(() => {
      submit()
    })
  }, [resetForm, submit])

  const refresh = useCallback(() => {}, [])

  /**
   * Table 页码变化
   */
  const onChange = useCallback(
    (p: TablePaginationConfig) => {
      runChangePagination({
        pageCurrent: p.current,
        pageSize: p.pageSize,
      })
    },
    [runChangePagination],
  )

  return {
    form,
    submit,
    reset,
    refresh,
    tableProps: {
      loading: paging.loading,
      pagination,
      onChange,
    },
  }
}

export default useTablePaging
