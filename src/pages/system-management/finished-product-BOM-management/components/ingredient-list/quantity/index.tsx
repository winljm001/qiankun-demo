import React, { useCallback, useEffect, memo } from 'react'
import { InputNumber, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import useState from '@/hooks/useState'
import { positiveTwoDecimalPlaces } from '@/utils/number'

import './index.less'

interface QuantityProps {
  value: number

  onChange?: (n: number) => void

  /**
   * 是否可编辑
   * @default false
   */
  edit?: boolean
}

type State = {
  value: number
  edit: boolean
}

const Quantity: React.FC<QuantityProps> = ({ value, edit = false, onChange }) => {
  const [state, setState] = useState<State>({
    value: value,
    edit: false,
  })

  const onClickEdit = useCallback(() => {
    setState({
      edit: true,
    })
  }, [])

  const onChangeInput = useCallback((v: number) => {
    setState({
      value: v,
    })
  }, [])

  const onClickSave = () => {
    onChange?.(state.value)
    setState({
      edit: false,
    })
  }

  useEffect(() => {
    setState({
      value,
    })
  }, [value])

  if (!edit) {
    return <span>{value}</span>
  }

  if (edit && !state.edit) {
    return (
      <span>
        {value} <EditOutlined onClick={onClickEdit} />
      </span>
    )
  }

  return (
    <div className="finished-product-BOM-management-ingredient-list-quantity-input-box">
      <InputNumber
        min={0.01}
        step="0.01"
        placeholder="请输入(最多两位小数)"
        value={state.value}
        formatter={positiveTwoDecimalPlaces}
        onChange={onChangeInput}
      />
      <Button type="primary" onClick={onClickSave}>
        保存
      </Button>
    </div>
  )
}

export default memo(Quantity)
