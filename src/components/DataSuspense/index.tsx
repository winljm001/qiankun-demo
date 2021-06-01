import React, { useState, useEffect, useCallback } from 'react'
import { Spin, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

interface ChildrenParameter<DataT> {
  data: DataT
  reload: () => void
}
interface IProps<DataT = any> {
  load: () => Promise<DataT>
  children: (parameter: ChildrenParameter<DataT>) => React.ReactNode
}

function DataSuspense<DataT = any>(props: IProps<DataT>) {
  const { load, children } = props
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<DataT>(null)
  const [errMsg, setErrMsg] = useState<string>('')

  const loadData = useCallback(() => {
    setLoading(true)
    load()
      .then(data => {
        setData(data)
        setErrMsg('')
        setLoading(false)
      })
      .catch(msg => {
        setErrMsg(msg || '暂无数据')
        setLoading(false)
      })
  }, [load])
  useEffect(() => {
    loadData()
  }, [loadData])

  if (loading) {
    return (
      <div style={{ height: '100%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
      </div>
    )
  }
  if (errMsg) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={errMsg} />
  }
  return <>{children({ data, reload: loadData })}</>
}

export default DataSuspense
