import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Button, message, Space } from 'antd'
import { useBoolean } from 'ahooks'
import Form, { Handles as FormHandles, Values, InitialValues } from '../components/form'
import styles from '../../index.module.less'

interface IProps {}
export interface Options {
  parentId: number
  parentName: string
  onOk?: (
    data: Values & {
      parentId: number
    },
  ) => void
  onCancel?: () => void
}
export interface Handles {
  /** 显示表单 */
  show: (options: Options) => void
  /** 隐藏表单 */
  hide: () => boolean
  /** ok按钮开始loading */
  startOkLoading: () => void
  /** ok按钮停止loading */
  stopOkLoading: () => void
}

/**
 * 创建组织
 */
const Creation = forwardRef<Handles, IProps>((_, ref) => {
  const [parentId, setParentId] = useState<number | null>(null)
  const [saveLoading, { setTrue: startOkLoading, setFalse: stopOkLoading }] = useBoolean(false)
  const formRef = useRef<FormHandles>(null)
  const optionsRef = useRef<Omit<Options, 'parentId' | 'parentName'>>({})
  const initialValuesRef = useRef<InitialValues>({
    parentName: '',
    country: null,
    leadingCadre: '',
    phone: '',
    address: '',
    remark: '',
    businessName: '',
    legalRep: '',
    socialCreditCode: '',
    lat: '',
    lng: '',
    bizLicense: [],
    accountCert: [],
    businessAddress: '',
    nameLocale: {
      'zh-CN': '',
      'en-US': '',
      'th-TH': '',
      'vi-VN': '',
    },
  })

  // 禁止隐藏
  const disableHiding = () => {
    message.warning('正在新增中，请稍后')
    return false
  }
  // 返回false说明隐藏失败
  const hide = (): boolean => {
    if (saveLoading) return disableHiding()
    setParentId(null)
    optionsRef.current.onCancel?.()
    optionsRef.current = {}
    return true
  }
  // 对外暴露接口
  useImperativeHandle(ref, () => ({
    show: ({ parentId: newParentId, parentName, ...restOptions }) => {
      if (saveLoading) return disableHiding()
      if (newParentId === parentId) {
        hide()
      } else {
        initialValuesRef.current.parentName = parentName
        optionsRef.current = restOptions
        setParentId(newParentId)
      }
    },
    hide,
    startOkLoading,
    stopOkLoading,
  }))

  // 保存
  const handleSave = () => {
    formRef.current!.form.validateFields().then((values) => {
      optionsRef.current.onOk?.({ ...values, parentId: parentId! })
    })
  }

  // parentId为null，不展示任何内容
  if (parentId === null) return null

  return (
    <div className={styles.formArea}>
      <Form ref={formRef} initialValues={initialValuesRef.current} />
      <Space className={styles.footer}>
        <Button type="primary" ghost onClick={hide}>
          取消
        </Button>
        <Button type="primary" onClick={handleSave} loading={saveLoading}>
          确认新增
        </Button>
      </Space>
    </div>
  )
})

export default Creation
