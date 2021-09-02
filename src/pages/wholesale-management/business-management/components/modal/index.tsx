import React, { FC, useRef, useState } from 'react'
import { FormInstance, message, Modal } from 'antd'
import {
  useCreteMerchantMutation,
  useUpdateMerchantMutation,
} from '@/graphql/operations/wholesale-management/__generated__/business-management'
import { Mode } from '../..'
import type { InitialValuesQuery } from '../../type'
import NewForm from './components/form'

export type FormRef = {
  form: FormInstance
}
interface IProps {
  // 模态框显示
  visible: boolean
  // 控制模态框显示函数
  setVisible: (value: boolean) => void
  // 新增 or 编辑模式
  mode: Mode
  // 表单初始值
  initialValues: InitialValuesQuery
  // 编辑or新增修改动数据成功回调
  handleSuccess: () => void
}

/**
 * 商户模态框组件
 */
const NewModal: FC<IProps> = ({ visible, setVisible, mode, initialValues, handleSuccess }) => {
  const formRef = useRef<FormRef>(null)
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

  // 新增商户接口
  const [createBusinessMutation] = useCreteMerchantMutation()
  const [updateBusinessMutation] = useUpdateMerchantMutation()

  // 新增保存接口函数
  const newCreateStaffMutation = (res) => {
    setConfirmLoading(true)
    const orgId = Number(res?.orgId)
    // 新增保存接口
    createBusinessMutation({
      variables: {
        input: {
          id: res?.id,
          orgGroupId: res?.orgGroupId,
          orgId: orgId,
          phone: res?.phone,
          name: res?.name,
          userId: res?.userId,
          userName: res?.userName,
        },
      },
    })
      .then(() => {
        message.success('保存成功')
        setConfirmLoading(false)
        setVisible(false)
        handleSuccess()
      })
      .catch(() => {
        setConfirmLoading(false)
      })
  }

  // 修改保存接口函数
  const newUpdateStaffMutation = (res) => {
    setConfirmLoading(true)
    const orgId = Number(res?.orgId)
    // 修改保存接口
    updateBusinessMutation({
      variables: {
        input: {
          id: res?.id,
          orgGroupId: res?.orgGroupId,
          orgId: orgId,
          phone: res?.phone,
          name: res?.name,
          userId: res?.userId,
          userName: res?.userName,
        },
      },
    })
      .then(() => {
        message.success('修改成功')
        setConfirmLoading(false)
        setVisible(false)
        handleSuccess()
      })
      .catch(() => {
        setConfirmLoading(false)
      })
  }

  // 点击确认事件
  const handleConfirm = () => {
    formRef?.current?.form?.validateFields().then((res) => {
      mode === 'CREATE' ? newCreateStaffMutation(res) : newUpdateStaffMutation(res)
    })
  }

  return (
    <Modal
      maskClosable={false}
      title={mode === 'CREATE' ? '新增员工' : '编辑员工'}
      width={600}
      visible={visible}
      centered
      destroyOnClose
      confirmLoading={confirmLoading}
      onCancel={() => {
        setVisible(confirmLoading)
      }}
      onOk={handleConfirm}>
      <NewForm mode={mode} ref={formRef} initialValues={initialValues} />
    </Modal>
  )
}

export default NewModal
