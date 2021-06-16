import React, { useRef, useState } from 'react'
import { Modal, Button, message, FormInstance } from 'antd'
import { doUpdateSku } from '@/services/commodityService/mods/commoditySku/doUpdateSku'
import FruitForm from './components/fruit-form'
import FoodForm from './components/food-form'

type IProps = {
  // 商品类型（1-水果，2-食品）
  commodityTypeId: number
  // modal显示状态
  visible: boolean
  // 设置modal显示状态
  setVisible: (value: boolean) => void
  // 需要编辑的项的id
  ids: number[]
  // 表单初始值
  initialValues: defs.commodityService.SkuDetails
  // 保存成功回调
  onSuccess: () => void
}

export type FormRef = {
  form: FormInstance
}

const Edit: React.FC<IProps> = ({ commodityTypeId, visible, setVisible, ids, initialValues, onSuccess }) => {
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<FormRef>()
  // 保存
  const handleSave = () => {
    formRef.current.form
      .validateFields()
      .then((values) => {
        setSubmitting(true)
        doUpdateSku({
          commoditySkuIds: ids,
          ...values,
          status: Number(values.status),
        })
          .then(() => {
            message.success('编辑sku成功')
            // 关闭弹窗
            setVisible(false)
            onSuccess?.()
          })
          .catch(() => {})
          .finally(() => {
            setSubmitting(false)
          })
      })
      .catch(() => {})
  }
  return (
    <Modal
      title="编辑sku"
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
          disabled={submitting}
          onClick={() => {
            setVisible(false)
          }}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={submitting} onClick={handleSave}>
          保存
        </Button>,
      ]}>
      {commodityTypeId === 1 ? (
        <FruitForm ref={formRef} initialValues={initialValues} />
      ) : (
        <FoodForm ref={formRef} initialValues={initialValues} />
      )}
    </Modal>
  )
}

export default Edit
