import React, { useEffect, useCallback, memo } from 'react'
import { Select, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import useState from '@/hooks/useState'

import './index.less'

type State = {
  value: number
  edit: boolean
}

export type CommodityUnitSelectItem = { label: string; value: number }
interface CommodityUnitProps {
  /**
   * 单位选项
   */
  options?: CommodityUnitSelectItem[]

  /**
   * 当前的值
   */
  value: number

  /**
   * 点击确定后的回调
   */
  onChange: (value: number, label: string) => void
}

const CommodityUnit: React.FC<CommodityUnitProps> = ({ options = [], value, onChange }) => {
  const [state, setState] = useState<State>({
    value: value,
    edit: false,
  })

  const onChangeSelect = useCallback((v: number) => {
    setState({ value: v })
  }, [])

  const onClickEdit = useCallback(() => {
    setState({
      edit: true,
    })
  }, [])

  const findLabel = (n: number) => options.filter((op) => op.value === n)[0]?.label

  const onClickSave = () => {
    onChange(state.value, findLabel(state.value))
    setState({
      edit: false,
    })
  }

  useEffect(() => {
    setState({
      value,
    })
  }, [value])

  if (!state.edit) {
    return (
      <span>
        {findLabel(state.value)} <EditOutlined onClick={onClickEdit} />
      </span>
    )
  }

  return (
    <div className="finished-product-BOM-management-ingredient-list-quantity-select-box">
      <Select value={state.value} options={options} onChange={onChangeSelect} />
      <Button type="primary" onClick={onClickSave}>
        保存
      </Button>
    </div>
  )
}

export default memo(CommodityUnit)
