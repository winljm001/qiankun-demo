import type React from 'react'
import type { UploadProps } from 'antd/lib/upload/interface'

export interface UploadControlProps extends UploadProps {
  readonly?: boolean
}

const UploadControl: React.FC<UploadControlProps> = ({ onChange, readonly, ...uploadProps }) => {
  // TODO:
  return null
}

export default UploadControl
