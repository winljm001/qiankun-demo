import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Loading from '@/components/loading'
import useGlobalStore, { name as globalStoreName } from '@/stores/global'

function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { authStatus } = useGlobalStore()
    const history = useHistory()
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem(globalStoreName))?.state?.token
      if (!token) {
        history.replace('/login')
      }
    }, [history])
    if (authStatus === null || authStatus === 'fail') {
      return null
    }
    if (authStatus === 'ok') {
      return <Component {...props} />
    }
    return <Loading />
  }
}

export default auth
