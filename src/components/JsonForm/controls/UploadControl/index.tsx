import React from 'react'
import { UploadProps } from 'antd/lib/upload/interface'

export interface UploadControlProps extends UploadProps {
  readonly?: boolean
}

const UploadControl: React.FC<UploadControlProps> = ({ onChange, readonly, ...uploadProps }) => {
  // TODO:
  return null
}

export default UploadControl
