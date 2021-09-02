import { useEffect } from 'react'
import useState from './useState'
import type { UpdateState } from './useState'
import useOriginalDeepCopy from './useOriginalDeepCopy'

const useQueryDataUpdate = <T>(data: T, isDeep = true): [T, UpdateState<T>] => {
  const [state, setState] = useState(data)
  const dataDeep = useOriginalDeepCopy(data)

  useEffect(() => {
    if (isDeep) {
      setState(dataDeep)
    }
  }, [dataDeep, isDeep])

  useEffect(() => {
    if (!isDeep) {
      setState(data)
    }
  }, [data, isDeep])

  return [state, setState]
}

export default useQueryDataUpdate
