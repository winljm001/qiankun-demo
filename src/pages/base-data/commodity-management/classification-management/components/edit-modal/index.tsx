import React, { FC, useEffect, useRef } from 'react'
import { Modal, Button, FormInstance } from 'antd'

import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from '@/graphql/operations/base-data/__generated__/classification-management'
import NewOrEditForm, { EditMode, InitialValues } from './components/new-or-edit-form'

interface IProps {
  /* 弹窗显示 */
  visible: boolean
  /* 设置弹窗显示 */
  setVisible: (value: boolean) => void
  /* 新增or编辑模式 */
  mode: EditMode
  /* 初始化值到时看看具体什么类型 */
  initialValues?: InitialValues
  /* 编辑or新增修改动数据成功回调 */
  onSuccess: () => void
}

export type FormRef = {
  form: FormInstance
}

const EditModal: FC<IProps> = ({ visible, setVisible, mode, initialValues, onSuccess }) => {
  const formRef = useRef<FormRef>(null)

  const titleText = useRef<string>()

  titleText.current = mode === 'editMode' ? '修改分类' : '新增分类'

  /* 编辑或者新增商品分类接口，不传Id则为新增，传入Id则是编辑 */
  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()

  /* 保存并返回 */
  /* 保存并继续添加 */
  const handleSave = (back = false) => {
    formRef.current?.form
      .validateFields()
      .then((data) => {
        const nameLocale = data.nameLocale?.filter((v) => !!v?.name)
        const commodityTypeId = data.commodityTypeId
        const categorySort = data.categorySort
        const params = {
          nameLocale,
          commodityTypeId,
          categorySort,
        }
        if (data?.categoryId) {
          updateCategory({ variables: { categoryInput: { categoryId: data?.categoryId, ...params } } })
            .then(() => {
              if (back) {
                setVisible(false)
              }
              onSuccess?.()
            })
            .catch(() => {})
        } else {
          createCategory({ variables: { categoryInput: params } })
            .then(() => {
              if (back) {
                setVisible(false)
              } else {
                formRef.current?.form.resetFields()
              }
              onSuccess?.()
            })
            .catch(() => {})
        }
      })
      .catch(() => {})
  }
  useEffect(() => {
    formRef.current?.form.setFieldsValue(initialValues)
  }, [initialValues])

  return (
    <Modal
      title={titleText.current}
      width={600}
      visible={visible}
      onCancel={() => {
        setVisible(false)
      }}
      centered
      destroyOnClose
      footer={[
        <Button
          key="back"
          onClick={() => {
            setVisible(false)
          }}>
          取消
        </Button>,
        <span key="cancelSpan" style={{ padding: '0 10px' }}>
          <Button
            key="cancel"
            type="primary"
            onClick={() => {
              handleSave(true)
            }}>
            {mode === 'editMode' ? '保存' : '保存并返回'}
          </Button>
        </span>,
        <span key="submitSpan">
          {mode === 'editMode' ? null : (
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                handleSave()
              }}>
              保存并继续添加
            </Button>
          )}
        </span>,
      ]}>
      <NewOrEditForm ref={formRef} initialValues={initialValues} mode={mode} />
    </Modal>
  )
}

export default EditModal
