import React, { useState, useCallback, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Form, Input, Spin, message } from 'antd'

import {
  useUserManageLazyQuery,
  useUpdatePasswordMutation,
} from '@/graphql/operations/base-data/__generated__/staff-management'

export interface ModalChangePasswordInstance {
  show: (id: number) => void
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const ModalChangePassword = forwardRef<ModalChangePasswordInstance>((_, ref) => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()
  const [refetchUserManage, { data: dataUserManage, loading: loadingUserManage }] = useUserManageLazyQuery()
  const [fetchUpdatePassword, { loading: loadingUpdatePassword }] = useUpdatePasswordMutation()

  const onCancel = useCallback(() => {
    setVisible(false)
    form.resetFields(['password', 'password2'])
  }, [form])
  const onOk = useCallback(() => {
    form
      .validateFields()
      .then((values) => {
        return fetchUpdatePassword({
          variables: {
            input: {
              id: dataUserManage?.userManage.id,
              password: values.password,
            },
          },
        })
      })
      .then(() => {
        message.success('密码已修改')
        setVisible(false)
      })
  }, [form, fetchUpdatePassword, dataUserManage?.userManage.id])

  useImperativeHandle(ref, () => ({
    show: (id: number) => {
      setVisible(true)

      refetchUserManage({
        variables: {
          id,
        },
      })
    },
  }))

  return (
    <Modal
      maskClosable={false}
      title="修改密码"
      visible={visible}
      okText="确认并修改"
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loadingUserManage || loadingUpdatePassword}>
      <Spin spinning={loadingUserManage}>
        <Form {...layout} form={form}>
          <Form.Item label="账号">{dataUserManage?.userManage.phone}</Form.Item>

          <Form.Item label="姓名">{dataUserManage?.userManage.name}</Form.Item>

          <Form.Item
            required
            hasFeedback
            name="password"
            label="新密码"
            rules={[
              {
                required: true,
                message: '请输入新密码',
              },
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.resolve()
                  }

                  let msg = ''

                  if (value.length < 8 || value.length > 20) {
                    msg = '长度8-20位字符'
                  }

                  if (!msg && (!/[a-z]/g.test(value) || !/[A-Z]/g.test(value) || !/[0-9]/g.test(value))) {
                    msg = '包含大小写字母、数字'
                  }

                  if (!msg && /\s/g.test(value)) {
                    msg = '不包含空格'
                  }

                  if (!msg && !/[\,\.\)\(\*\&\^\%\$\#\@\!\`\~\-\_\=\+\>\<\?\/\\\|\[\]\{\}]/g.test(value)) {
                    msg = '包含特殊符号（,.)(*&^%$#@!`~-_=+><?/\\|[]{}）'
                  }

                  if (!msg && /[^a-zA-Z0-9\,\.\)\(\*\&\^\%\$\#\@\!\`\~\-\_\=\+\>\<\?\/\\\|\[\]\{\}]/g.test(value)) {
                    msg = '请勿输入非大小写字母、数字、特殊符号以外的字符'
                  }

                  if (msg) {
                    return Promise.reject(new Error(msg))
                  }

                  return Promise.resolve()
                },
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            required
            hasFeedback
            name="password2"
            label="确认密码"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: '请再次输入新密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(new Error('两次密码请保持一致'))
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  )
})

export default memo(ModalChangePassword)
