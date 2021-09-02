import React, { useRef, forwardRef, useCallback, useImperativeHandle, useMemo } from 'react'
import { Modal, ModalProps } from 'antd'
import { useBoolean, useToggle } from 'ahooks'
import Form, { Handles as FormHandles, Values } from './components/form'

interface IProps {}

/** 暴露接口 */
export interface Handles {
  /** 打开弹框，返回一个Promise，为true表示，false表示创建失败 */
  open: (options?: PartialOptions) => void
  /** 关闭弹框 */
  close: () => void
  /** 开始loading */
  startLoading: () => void
  /** 停止loading */
  stopLoading: () => void
}

/** 配置项 */
interface Options extends Omit<ModalProps, 'visible' | 'onCancel' | 'onOk' | 'okButtonProps'> {
  /** 弹框标题 */
  title: string
  /** ok按钮props */
  okButtonProps: Omit<ModalProps['okButtonProps'], 'loading'>
  onOk: (data: Values) => void
  onCancel: () => void
}
type PartialOptions = Partial<Options>
/** 默认配置项 */
const defaultOptions = { title: '新增', destroyOnClose: true }

/**
 * 创建组织架构分组弹框
 */
const CreationModal = forwardRef<Handles, IProps>((props, ref) => {
  const [visible, { toggle }] = useToggle(false)
  const [loading, { setFalse: stopLoading, setTrue: startLoading }] = useBoolean(false)
  const formRef = useRef<FormHandles>(null)
  const initialValues = useMemo(() => ({ name: '' }), [])
  const optionsRef = useRef<PartialOptions>(defaultOptions)
  const options = optionsRef.current

  // 打开弹框
  const open = useCallback((opts: PartialOptions = {}) => {
    toggle(true)
    optionsRef.current = { ...optionsRef.current, ...opts }
  }, [])

  // 关闭弹框
  const close = useCallback(() => {
    toggle(false)
    optionsRef.current = defaultOptions
  }, [])

  // 点击取消
  const onCancel = useCallback(() => {
    if (loading) return false
    optionsRef.current.onCancel?.()
    close()
  }, [loading])

  // 点击确认
  const onOk = useCallback(() => {
    formRef.current!.form.validateFields().then((values) => {
      optionsRef.current.onOk?.(values)
    })
  }, [])

  // 对外暴露方法
  useImperativeHandle(ref, () => ({
    open,
    close,
    startLoading,
    stopLoading,
  }))

  return (
    <Modal {...options} visible={visible} onCancel={onCancel} onOk={onOk} okButtonProps={{ loading }}>
      <Form ref={formRef} initialValues={initialValues} />
    </Modal>
  )
})

export default CreationModal
