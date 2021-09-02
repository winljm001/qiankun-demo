import { useCallback, useState, useRef } from 'react'
import { Form } from 'antd'
import { usePersistFn } from 'ahooks'

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
   * 默认参数，设置一次就改不了，如果要重置，使用向外暴露的 setParams 函数修改
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
}: UseTablePagingParams<DT, PT>) => {
  const requestPersistFn = usePersistFn(request)

  const [form] = Form.useForm()
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
  const parseParams = useCallback(() => {}, [])

  /**
   * 方向解析表单里面的参数
   */
  const stringifyParams = useCallback(() => {}, [])

  const resetForm = useCallback(() => {}, [])

  const submit = useCallback(() => {}, [])

  const reset = useCallback(() => {}, [])

  const refresh = useCallback(() => {}, [])

  return {
    form,
    submit,
    reset,
    refresh,
    tableProps: {
      loading: paging.loading,
      pagination: {},
    },
  }
}

export default useTablePaging
