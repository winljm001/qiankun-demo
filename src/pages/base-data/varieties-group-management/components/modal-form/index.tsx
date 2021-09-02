import React, { useState, useRef, useCallback, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Form, Input } from 'antd'
import { isDef } from '@/utils/typeof'
import {
  useCreateVarietyGroupMutation,
  useUpdateVarietyGroupMutation,
} from '@/graphql/operations/base-data/__generated__/varieties-group-management'

export interface ModalFormInstance {
  show: (p: { id?: number; groupName?: string; callback: () => void }) => void
}

const ModalForm = forwardRef<ModalFormInstance>((_, ref) => {
  const [form] = Form.useForm()
  const [fetchCreateVarietyGroup, { loading: loadingCreateVarietyGroup }] = useCreateVarietyGroupMutation()
  const [fetchUpdateVarietyGroup, { loading: loadingUpdateVarietyGroup }] = useUpdateVarietyGroupMutation()

  const [state, setState] = useState({
    visible: false,
    edit: false,
  })
  const editId = useRef<number>()
  const Callback = useRef<() => void>(() => {})

  useImperativeHandle(ref, () => ({
    show: ({ id, groupName, callback }) => {
      form.setFieldsValue({
        groupName,
      })

      editId.current = id
      Callback.current = callback

      setState((s) => ({
        ...s,
        visible: true,
        edit: isDef(id),
      }))
    },
  }))

  const onCancel = useCallback(() => {
    setState((s) => ({
      ...s,
      visible: false,
    }))
  }, [])

  const onOk = useCallback(() => {
    form.validateFields().then((values) => {
      const doFetch = () => {
        if (editId.current) {
          return fetchUpdateVarietyGroup({
            variables: {
              varietyGroupInput: {
                groupId: editId.current,
                groupName: values.groupName,
              },
            },
          })
        } else {
          return fetchCreateVarietyGroup({
            variables: {
              groupName: values.groupName,
            },
          })
        }
      }

      doFetch().then(() => {
        Callback.current()
        setState((s) => ({
          ...s,
          visible: false,
        }))
      })
    })
  }, [fetchCreateVarietyGroup, fetchUpdateVarietyGroup, form])

  return (
    <Modal
      visible={state.visible}
      title={`${state.edit ? '编辑' : '新增'}品种组织`}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loadingCreateVarietyGroup || loadingUpdateVarietyGroup}>
      <Form form={form}>
        <Form.Item
          required
          label="品种组名称"
          name="groupName"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input placeholder="请输入品种组名称" />
        </Form.Item>
      </Form>
    </Modal>
  )
})

export default memo(ModalForm)
