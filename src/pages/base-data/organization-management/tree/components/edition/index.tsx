import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button, message, Space } from 'antd'
import { useBoolean } from 'ahooks'
import DataSuspense from '@/components/data-suspense'
import { useOrgLazyQuery } from '@/graphql/operations/base-data/__generated__/organization-management'
import Form, { Handles as FormHandles, Values } from '../components/form'
import styles from '../../index.module.less'

interface IProps {}
export interface Options {
  id: number
  onOk?: (
    data: Values & {
      id: number
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
 * 编辑组织
 */
const Edition = forwardRef<Handles, IProps>((_, ref) => {
  const [id, setId] = useState<number | null>(null)
  const [saveLoading, { setTrue: startOkLoading, setFalse: stopOkLoading }] = useBoolean(false)
  const formRef = useRef<FormHandles>(null)
  const optionsRef = useRef<Omit<Options, 'id'>>({})

  // 获取详情数据
  const [query, { loading, error, data }] = useOrgLazyQuery({
    variables: {
      id: id!,
    },
  })
  useEffect(() => {
    if (id !== null) {
      query({
        variables: {
          id: id!,
        },
      })
    }
  }, [id])

  // 禁止隐藏
  const disableHiding = () => {
    message.warning('正在保存中，请稍后')
    return false
  }
  // 返回false说明隐藏失败
  const hide = () => {
    if (saveLoading) return disableHiding()
    setId(null)
    optionsRef.current.onCancel?.()
    optionsRef.current = {}
    return true
  }
  // 对外暴露接口，
  useImperativeHandle(ref, () => ({
    show: ({ id: newId, ...restOptions }) => {
      if (saveLoading) return disableHiding()
      if (newId === id) {
        hide()
      } else {
        optionsRef.current = restOptions
        setId(newId)
      }
    },
    hide,
    startOkLoading,
    stopOkLoading,
  }))

  // 保存
  const handleSave = () => {
    formRef.current!.form.validateFields().then((values) => {
      optionsRef.current.onOk?.({ ...values, id: id!, parentId: data!.org.parentId })
    })
  }

  // id为null，不展示任何内容
  if (id === null) return null

  // json化nameLocale字段
  let nameLocale: any = {}
  try {
    nameLocale = JSON.parse(data!.org.nameLocale)
  } catch {}

  return (
    <div className={styles.formArea}>
      <DataSuspense loading={loading || data === undefined} error={!!error}>
        {() => (
          <>
            <Form ref={formRef} initialValues={{ ...data!.org, nameLocale }} />
            <Space className={styles.footer}>
              <Button type="primary" ghost onClick={hide}>
                取消
              </Button>
              <Button type="primary" onClick={handleSave} loading={saveLoading}>
                确认修改
              </Button>
            </Space>
          </>
        )}
      </DataSuspense>
    </div>
  )
})

export default Edition
