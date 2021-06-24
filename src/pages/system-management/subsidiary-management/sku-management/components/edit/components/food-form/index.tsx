import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { Form, Input, Select, Switch } from 'antd'
import { useBoolean } from 'ahooks'
import { useForm } from '@/components/JsonForm'
import { listUnitOptions } from '@/services/commodityService/mods/subsidiarySku/listUnitOptions'
import type { FormRef } from '../../index'

type IProps = {
  initialValues: defs.commodityService.SkuDetails
}

const FoodForm = forwardRef<FormRef, IProps>(({ initialValues }, ref) => {
  const [skuUnitOptions, setSkuUnitOptions] = useState([])
  const [totalTypeOptions, setTotalTypeOptions] = useState([])
  const [unitState, { toggle, setTrue }] = useBoolean(false)
  const [form] = useForm()
  useImperativeHandle(ref, () => ({
    form,
  }))
  useEffect(() => {
    listUnitOptions({ commodityTypeId: 2 })
      .then((res) => {
        const data = res.data
        setTotalTypeOptions(data)
        setSkuUnitOptions(data)
      })
      .catch((err) => {})
  }, [])
  useEffect(() => {
    if (initialValues?.totalType) {
      setTrue()
    }
  }, [initialValues?.totalType])

  return (
    <Form form={form} layout="vertical" initialValues={{ status: true, ...initialValues }} name="basic">
      <Form.Item label="最小单位" name="unitType" rules={[{ required: true, message: '请选择单位!' }]}>
        <Select options={skuUnitOptions} placeholder="请选择" />
      </Form.Item>
      <Form.Item label="副单位状态">
        <Switch
          checkedChildren="启用"
          unCheckedChildren="禁用"
          defaultChecked={true}
          checked={unitState}
          onChange={() => {
            toggle()
          }}
        />
      </Form.Item>
      {unitState ? (
        <>
          <Form.Item label="副单位" name="totalType" rules={[{ required: true, message: '请选择单位!' }]}>
            <Select options={totalTypeOptions} placeholder="请选择" />
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              let unitTypeValue = getFieldValue('unitType')
              const newUnitTypeValue = skuUnitOptions.filter((item) => {
                return item.value === unitTypeValue
              })
              let toNewUnitTypeValue = newUnitTypeValue[0]?.label

              let totalTypeValue = getFieldValue('totalType')
              const newTotalTypeValue = totalTypeOptions.filter((item) => {
                return item.value === totalTypeValue
              })
              let toNewTotalTypeValue = newTotalTypeValue[0]?.label
              return (
                <Form.Item
                  label="换算比率:"
                  name="unitQuantity"
                  rules={[
                    { required: true, message: '请填写换算比率!' },
                    { pattern: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/, message: '请输入正确数值' },
                  ]}>
                  <Input
                    addonBefore={toNewTotalTypeValue ? `一${toNewTotalTypeValue}=` : ''}
                    suffix={toNewUnitTypeValue ? `${toNewUnitTypeValue}` : ''}
                  />
                </Form.Item>
              )
            }}
          </Form.Item>
        </>
      ) : null}
      <Form.Item label="状态" name="status" valuePropName="checked">
        <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
      </Form.Item>
    </Form>
  )
})

export default FoodForm
