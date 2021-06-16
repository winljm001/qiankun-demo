import React, { useState, useEffect } from 'react'
import { TreeSelect, TreeSelectProps } from 'antd'

export interface TreeSelectControlProps extends TreeSelectProps<any> {
  remote?: {
    fetch: () => Promise<any>
    normalize?: (val: any) => any
  }
}

const TreeControl: React.FC<TreeSelectControlProps> = ({
  style = {},
  treeData,
  remote,
  treeCheckable = true,
  showCheckedStrategy = TreeSelect.SHOW_PARENT,
  ...treeProps
}) => {
  const [loading, setLoading] = useState(!!remote)
  const [remoteTreeData, setRemoteTreeData] = useState([])

  useEffect(() => {
    if (remote) {
      fetchTreeData()
    }
  }, [])
  const fetchTreeData = () => {
    const { fetch, normalize } = remote
    fetch()
      .then((res) => {
        let result = []
        result = typeof normalize === 'function' ? normalize(res?.result) : res?.result
        setRemoteTreeData(result || [])
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const _treeData = (remote ? remoteTreeData : treeData) || []
  return (
    <TreeSelect
      style={{ width: '100%', ...style }}
      showCheckedStrategy={showCheckedStrategy}
      loading={loading}
      treeData={_treeData}
      treeCheckable={treeCheckable}
      {...treeProps}
    />
  )
}

export default TreeControl
