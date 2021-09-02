import qs from 'querystring'
import { useCallback, useState, useRef, useMemo, useEffect } from 'react'
import { Form } from 'antd'
import type { TablePaginationConfig } from 'antd/es/table/interface'
import { usePersistFn } from 'ahooks'
import { useHistory, useLocation } from 'react-router-dom'
import type { Moment } from 'moment'
import moment from 'moment'
import { isArray } from '@/utils/typeof'
import useOriginalDeepCopy from '../useOriginalDeepCopy'

type UnknownObject = Record<string, any>

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
const useTablePaging = <DT = any, PT = UnknownObject>({
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
  /** 自定义函数 */
  const formatParamsPersistFn = usePersistFn((v: any) => {
    if (formatParams) {
      return formatParams(v)
    }
    return v
  })
  /** 重置忽略字段 */
  const resetFieldsIgnoresOriginalDeepCopy = useOriginalDeepCopy(resetFieldsIgnores)
  /** 参数值类型对照表 */
  const paramsValueTypeMapOriginalDeepCopy = useOriginalDeepCopy(paramsValueTypeMap)

  const [form] = Form.useForm()
  /** 分页参数，表单里面的原始值 */
  const PagingParams = useRef<UnknownObject>({})
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

  /** Pagination分页 状态 */
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

  const searchObject: Record<string, string | string[]> = useMemo(
    () => (location.search ? (qs.parse(location.search.slice(1)) as Record<string, string | string[]>) : {}),
    [location.search],
  )

  /**
   * 请求数据
   */
  const fetchData = useCallback(
    (params: any) => {
      const formattedParams = formatParamsPersistFn(params)

      const ts = new Date().getTime()

      Timestamp.current = ts

      setPaging((s) => ({
        ...s,
        loading: true,
      }))

      // 重置锁
      ChangeParamsByAction.current = false

      requestPersistFn(formattedParams)
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
    [requestPersistFn, formatParamsPersistFn],
  )

  /**
   * 正向解析表单里面的参数
   */
  const parseParams = useCallback(
    (v: UnknownObject) => {
      const parsed: UnknownObject = {}

      Object.entries(v).forEach(([key, value]) => {
        parsed[key] = value

        if (paramsValueTypeMapOriginalDeepCopy && value) {
          const t = paramsValueTypeMapOriginalDeepCopy[key]

          if (t) {
            switch (t) {
              case 'moment':
                parsed[key] = (value as Moment).valueOf()
                break
              case 'momentRange':
                parsed[key] = (value as Moment[]).filter(Boolean).map((v) => v.valueOf())
                break
              case 'multiple':
              case 'multipleNumber':
                parsed[key] = isArray(value) ? value : [value]
                break
            }
          }
        }
      })

      return parsed
    },
    [paramsValueTypeMapOriginalDeepCopy],
  )

  /**
   * 方向解析表单里面的参数
   */
  const stringifyParams = useCallback(
    (v: UnknownObject) => {
      const parsed: UnknownObject = {}

      Object.entries(v).forEach(([key, value]) => {
        parsed[key] = value

        if (paramsValueTypeMapOriginalDeepCopy && value) {
          const t = paramsValueTypeMapOriginalDeepCopy[key]

          if (t) {
            switch (t) {
              case 'moment':
                parsed[key] = moment(+value)
                break
              case 'momentRange':
                parsed[key] = (value as string[]).filter(Boolean).map((v) => moment(+v))
                break
              case 'multiple':
                parsed[key] = isArray(value) ? value : [value]
                break
              case 'multipleNumber':
                parsed[key] = (isArray(value) ? value : [value]).filter(Boolean).map((v) => +(v as string))
                break
            }
          }
        }
      })

      return parsed
    },
    [paramsValueTypeMapOriginalDeepCopy],
  )

  /**
   * 重置表单
   */
  const resetForm = useCallback(
    (callback: () => void) => {
      const values: UnknownObject = form.getFieldsValue()
      const ignoresValue: UnknownObject = {}

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

      console.log(parsed)

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
    ChangeParamsByAction.current = true
    const values: UnknownObject = form.getFieldsValue(true)
    runChangeParams({
      ...values,
      pageCurrent: 1,
      pageSize: PagingParams.current.pageSize || defaultPageSize,
    })
  }, [form, runChangeParams, defaultPageSize])

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
      ChangeParamsByAction.current = true
      runChangePagination({
        pageCurrent: p.current,
        pageSize: p.pageSize,
      })
    },
    [runChangePagination],
  )

  useEffect(() => {
    const query: UnknownObject = location.search ? qs.parse(location.search.slice(1)) : {}

    // 补全基础数据
    // 补全必要的参数
    if (!query.pageCurrent) {
      query.pageCurrent = +defaultPageCurrent
    }

    if (!query.pageSize) {
      query.pageSize = +defaultPageSize
    }

    // 反向解析成表单数据
    PagingParams.current = stringifyParams(query)

    if (!ChangeParamsByAction.current) {
      // 还原表单数据
      resetForm(() => {
        form.setFieldsValue(PagingParams.current)

        if (!manual) {
          fetchData(query)
        }
      })
    }
  }, [defaultPageCurrent, defaultPageSize, fetchData, form, location.search, manual, resetForm, stringifyParams])

  return {
    form,
    submit,
    reset,
    refresh,
    tableProps: {
      loading: paging.loading,
      pagination,
      onChange,
      dataSource: paging.records,
    },
    searchObject,
  }
}

export default useTablePaging
