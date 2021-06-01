import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input/TextArea'

export type TextAreaControlProps = TextAreaProps

const TextAreaControl: React.FC<TextAreaControlProps> = props => {
  return <Input.TextArea {...props} />
}

export default TextAreaControl
