import { useState } from 'react'
import { usePersistFn } from 'ahooks'

interface UseTableRowSelectionParams<T> {
  /**
   * 外界控制的已选 key 集合
   */
  selectedRowKeys?: T[]

  /**
   * 默认/初始已选的 key 集合
   */
  defaultSelectedRowKeys?: T[]
}

/**
 * Table 选择的 Hooks
 * @param rowKey 当前数据唯一值的 key，与 Table 的 rowKey 保持一致
 * @param p 其他可选配置
 */
const useTableRowSelection = <KT = any, RT = any>(rowKey: string, p?: UseTableRowSelectionParams<KT>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<KT[]>(p?.defaultSelectedRowKeys || p?.selectedRowKeys || [])
  const onSelect = usePersistFn((record: RT, selected: boolean) => {
    const currentKey = record[rowKey] as KT

    setSelectedRowKeys((rks) => {
      // 无论怎样，先过滤
      const keys = rks.filter((k) => k !== currentKey)

      if (selected) {
        keys.push(currentKey)
      }

      return keys
    })
  })
  const onSelectAll = usePersistFn((selected: boolean, selectedRows: RT[], changeRows: RT[]) => {
    const selectedKeys = changeRows.map((item) => item[rowKey] as KT)

    setSelectedRowKeys((rks) => {
      // 无论怎样，先过滤
      const keys = rks.filter((k) => selectedKeys.indexOf(k) === -1)

      if (selected) {
        return keys.concat(selectedKeys)
      }

      return keys
    })
  })

  return {
    rowSelection: {
      selectedRowKeys,
      onSelect,
      onSelectAll,
    },

    setSelectedRowKeys,
  }
}

export default useTableRowSelection
