import { Checkbox } from 'antd'
import { useControllableValue } from 'ahooks'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
interface IProps {
  remote?: {
    fetch: (val: any) => Promise<any>
    params?: any
    normalize?: (val: any) => void
    onFetched?: (obj: any) => void
  }
  noDisable?: any
  hasAny?: any
  value?: any
  onChange?: (obj: any) => void
}
const BaseCheckboxByFetch: React.FC<IProps> = ({
  value,
  hasAny = false,
  remote,
  noDisable = false,
  onChange,
  ...props
}) => {
  const { fetch, normalize, params, onFetched } = remote
  const [state, setState] = useControllableValue<any[]>(
    { ...props, value },
    {
      defaultValue: value,
    },
  )
  const [uid] = useState(Date.now())
  // 这里的key应该是有问题
  const { data } = useQuery([`BaseCheckboxByFetch${uid}`, params], () => {
    return fetch(params).then((res) => {
      const list = normalize ? normalize(res?.data) : res?.data
      onFetched?.(list)
      const item = list?.find((v) => {
        return state === v?.value
      })
      if (!item) {
        setState([])
      }
      return list
    })
  })
  const listData = useMemo(() => {
    return data?.sort((prev, next) => {
      if (prev.disabled && !next.disabled) {
        return 1
      } else if (!prev.disabled && next.disabled) {
        return -1
      } else {
        return 0
      }
    })
  }, [data])
  return (
    <Checkbox.Group
      options={listData}
      onChange={(v) => {
        setState(v)
        onChange?.(v)
      }}
    />
  )
}
export default BaseCheckboxByFetch
