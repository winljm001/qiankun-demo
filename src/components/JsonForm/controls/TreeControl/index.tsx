import React, { useState, useEffect } from 'react'
import { Tree, Spin, TreeProps } from 'antd'

export interface TreeControlProps extends TreeProps {
  value?: any[]
  onChange?: (val: any[]) => void
  remote?: {
    fetch: () => Promise<any>
    normalize?: (val: any) => any
  }
}

const TreeControl: React.FC<TreeControlProps> = ({ value, onChange, treeData, remote, ...treeProps }) => {
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
      .then(res => {
        let result = []
        result = typeof normalize === 'function' ? normalize(res.result) : res.result
        setRemoteTreeData(result)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const handleCheck = (...arg: any[]) => {
    onChange?.(arg[0])
  }
  if (loading) {
    return <Spin />
  }
  const _treeData = (remote ? remoteTreeData : treeData) || []
  return <Tree {...treeProps} treeData={_treeData} checkable onCheck={handleCheck} checkedKeys={value} />
}

export default TreeControl
