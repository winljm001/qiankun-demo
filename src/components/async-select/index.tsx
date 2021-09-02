import type { SelectProps } from 'antd'
import { Select } from 'antd'
import React, { useMemo } from 'react'
import { useControllableValue } from 'ahooks'
import get from 'lodash/get'
import type { DocumentNode } from '@apollo/client'
import { useQuery } from '@apollo/client'
import type { PropertyPath } from 'lodash'
const { Option } = Select
export interface AsyncSelectProps extends SelectProps<any> {
  remote: {
    gql: DocumentNode
    gqlKey: PropertyPath
    gqlParamKey?: string
    extraParams?: any
    // 格式化函数
    normalize?: (val: any) => any
    // 是否手动调用
    manual?: boolean
  }
  noDisable?: boolean
  hasAny?: boolean
  value?: any
  onChange?: (obj: any) => void
  defaultValue?: any
}
const AsyncSelect: React.FC<AsyncSelectProps> = (props) => {
  // 网络请求
  const { remote, noDisable, hasAny = false, defaultValue, ...selectProps } = props
  const [state, setState] = useControllableValue<string>(props, {
    defaultValue,
  })
  const { gql, gqlKey } = remote
  const { loading, data } = useQuery(gql, {
    variables: remote.extraParams,
  })
  // 格式化选项list
  const optionList = useMemo(() => {
    const queryData = get(data, gqlKey) || []
    const resList = typeof remote?.normalize === 'function' ? remote?.normalize(queryData) : queryData
    return resList || []
  }, [data])

  return (
    <Select loading={loading} value={state} onChange={(e) => setState(e)} {...selectProps}>
      {hasAny ? <Option value="">全部</Option> : null}
      {optionList?.map((v, i) => {
        return (
          <Option label={v?.label} value={v?.value} key={i} disabled={noDisable ? false : v?.disabled}>
            {v?.label}
          </Option>
        )
      })}
    </Select>
  )
}

export default AsyncSelect
