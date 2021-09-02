import React, { useEffect, useState } from 'react'
import type { UploadProps } from 'antd'
import { Button, message, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadChangeParam } from 'antd/lib/upload'
import type { UploadFile } from 'antd/lib/upload/interface'
import { uniqBy } from 'lodash'
import nsLocalStorage from '@/utils/storage'
import systemConfig from '@/config'

const { authKey } = systemConfig
interface IProps extends Omit<UploadProps, 'onChange'> {
  multiple?: boolean // 是否支持多选文件
  showList?: boolean // 是否显示文件列表
  disabled?: boolean // 是否禁用
  data?: any // 上传所需额外参数或返回上传额外参数的方法
  headers?: any // 请求头
  value?: Array<IFile> // 已上传的文件列表
  /**
   * fileList为通用文件上传接口处理后的文件返回值数组
   * info为上传文件自身的返回值，可以不用传递，通常用于处理特殊的文件上传状态操作
   */
  onChange?: (fileList?: any[], info?: any) => void
}

interface IFile {
  filename: string
  fileUrl: string
  fileId: string
}

/**
 * 代码源于物流项目
 */
const FileUpload: React.FC<IProps> = (props) => {
  const {
    multiple = false,
    showList = true,
    disabled = false,
    data = {},
    headers = {},
    value,
    onChange,
    children,
    maxCount,
    ...restProps
  } = props
  // 获取token
  const Authorization = nsLocalStorage.getItem(authKey)
  // 上传的文件列表
  const [pageFilesList, setPageFilesList] = useState<UploadFile<any>[]>([])
  const [loading, setLoading] = useState(false)

  // 是否显示文件列表，如果显示则配置
  let showUploadList: any = null
  showList &&
    (showUploadList = {
      showDownloadIcon: true,
      showRemoveIcon: true,
    })

  // 参数配置
  const upLoadProps = {
    multiple,
    showUploadList,
    disabled,
    data,
    name: 'file',
    headers: {
      ...headers,
      'X-Access-Token': Authorization,
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },
    action: restProps?.action ? restProps?.action : `/_files/upload`,
    beforeUpload: (file) => {
      const size = file.size / 1024 / 1024
      const maxSize = 50 // 文件最大值，单位Mb
      return new Promise<File>((resolve, reject) => {
        if (size > maxSize) {
          message.error('上传文件不能大于50Mb')
          reject(new Error('上传文件不能大于50Mb'))
        } else {
          resolve(file)
        }
      })
    },
    ...restProps,
  }
  // 只有初次(赋值)才执行
  useEffect(() => {
    if (value) {
      const nextValues = uniqBy(value, 'fileId').map((file, index) => ({
        uid: file?.fileId || index,
        name: file?.filename || `文件${index + 1}`,
        status: 'done',
        url: file?.fileUrl || '',
      }))
      setPageFilesList([...(nextValues as any)])
    }
  }, [value])

  function updateLoadStatusChange(info: UploadChangeParam<UploadFile<any>>) {
    setPageFilesList(
      info.fileList.map((item) => {
        if (item?.response?.fileUrl) {
          return {
            ...item,
            url: item.response.fileUrl,
          }
        } else if (item?.response?.result?.fileUrl) {
          /**
           * 兼容后端直接用 result 包裹文件属性返回的情况
           */
          return {
            ...item,
            url: item.response?.result?.fileUrl,
          }
        } else {
          return item
        }
      }),
    )
    if (info.file.status === 'uploading') {
      setLoading(true)
    } else {
      setLoading(false)
    }
    if (info.file.status === 'done') {
      const res = info.file.response
      if (res.fileUrl) {
        const current = { fileId: res.fileId, fileUrl: res.fileUrl, filename: res.filename }
        const nextValue = value ? [...value, current] : [current]
        onChange?.(uniqBy(uniqBy([...nextValue], 'fileId'), 'fileId'), current)
      } else if (res.result) {
        /**
         * 兼容后端直接用 result 包裹文件属性返回的情况
         */
        const result = res.result
        const current = { fileId: result.fileId, fileUrl: result.fileUrl, filename: result.filename }
        const nextValue = value ? [...value, current] : [current]
        onChange?.(uniqBy([...nextValue], 'fileId'), current)
      } else {
        message.error(`文件上传失败，请稍候再试`)
      }
    }
    if (info.file.status === 'removed' && value) {
      const fileId = info.file.uid
      const nextValues = value.filter((file) => file.fileId !== fileId)
      onChange?.(uniqBy([...nextValues], 'fileId'), {})
    }
    if (info.file.status === 'error') {
      message.error(`${info.file.name}上传失败`)
    }
  }
  const showPlusBtn = !maxCount ? true : maxCount > pageFilesList.length // 是否显示新增按钮
  return (
    <Upload {...upLoadProps} fileList={pageFilesList} maxCount={10} onChange={updateLoadStatusChange}>
      {showPlusBtn
        ? children || (
            <Button disabled={disabled} icon={<UploadOutlined />} loading={loading}>
              上传
            </Button>
          )
        : null}
    </Upload>
  )
}

export default FileUpload
