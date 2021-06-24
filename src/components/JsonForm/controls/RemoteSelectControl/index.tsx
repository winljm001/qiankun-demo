import type { PropsWithChildren } from 'react'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import type { SelectProps } from 'antd'
import { Select } from 'antd'
import { isEqual } from 'lodash'

export interface RemoteSelectControlProps<VT = any> extends Omit<SelectProps<VT>, 'options' | 'loading' | 'fetch'> {
  fetch: (params?: any) => Promise<any>
  params?: { [prop: string]: any } | (() => any)
  fetchable?: () => boolean
  // 是否启用option中的disabled属性
  enableDisabled?: boolean
  normalize?: (rawData: any) => VT[]
  onOptionsChange?: (options: VT[], rawData: VT[], times: number) => void
  convertValue?: (val: string | number, option: VT) => any
  parseValue?: (val: any) => string | number
}

const handleDisabled = (options: any[], enableDisabled: boolean) => {
  if (enableDisabled) {
    return options
  }
  return options.map((item) => ({
    ...item,
    disabled: false,
  }))
}

function RemoteSelectControl<VT extends { label: React.ReactNode; value: string | number }>(
  props: PropsWithChildren<RemoteSelectControlProps<VT>>,
) {
  const {
    fetch,
    params,
    fetchable = () => true,
    enableDisabled = true,
    normalize,
    convertValue = (val) => val,
    parseValue = (val) => val,
    onChange,
    value,
    onOptionsChange,
    ...restProps
  } = props
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<VT[]>([])
  const paramsProp = typeof params === 'function' ? params() : params
  const [fetchParams, setFetchParams] = useState(paramsProp)
  const paramsRef = useRef(paramsProp)
  const times = useRef(0)

  useEffect(() => {
    const newParams = typeof params === 'function' ? params() : params
    if (!isEqual(paramsRef.current, newParams)) {
      paramsRef.current = newParams
      setFetchParams(newParams)
    }
  })
  useEffect(() => {
    if (fetchable()) {
      setFetching(true)
      fetch(fetchParams)
        .then((res) => {
          const rawData = res?.result || []
          const optionsAfterFormat = handleDisabled(rawData, enableDisabled)
          const result = typeof normalize === 'function' ? normalize(optionsAfterFormat) : optionsAfterFormat
          setOptions(result)
          onOptionsChange?.(result, rawData, ++times.current)
        })
        .finally(() => {
          setFetching(false)
        })
    } else {
      setOptions([])
      onOptionsChange?.([], [], ++times.current)
    }
  }, [fetchParams])
  const handleChange = useCallback(
    (value, option) => {
      onChange(convertValue(value, option), option)
    },
    [onChange, convertValue],
  )

  return (
    <Select options={options} onChange={handleChange} value={parseValue(value)} {...restProps} loading={fetching} />
  )
}

export default RemoteSelectControl
