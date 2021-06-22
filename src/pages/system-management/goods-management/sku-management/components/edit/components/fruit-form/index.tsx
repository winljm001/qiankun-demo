import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { Switch, Form, Input, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions'
import BaseCheckboxByFetch from '@/components/BaseCheckboxByFetch'
import { listPropertyOptions } from '@/services/commodityService/mods/commoditySku/listPropertyOptions'
import { FormRef } from '../../index'
import styles from './style.module.less'

type IProps = {
  initialValues: defs.commodityService.SkuDetailVO
}

const { Option } = Select

const FruitForm = forwardRef<FormRef, IProps>(({ initialValues }, ref) => {
  const [skuUnitOptions, setSkuUnitOptions] = useState([])
  const [weightArr, setWeightArr] = useState([])
  const [form] = useForm()
  useImperativeHandle(ref, () => ({
    form,
  }))
  // 生命周期请求数据
  useEffect(() => {
    listUnitOptions({ commodityTypeId: 5 })
      .then((res) => {
        const data = res.data
        setWeightArr(data)
      })
      .catch((err) => {
        console.log(err)
      })
    listUnitOptions({ commodityTypeId: 1 })
      .then((res) => {
        const data = res.data
        setSkuUnitOptions(data)
      })
      .catch((err) => {})
  }, [])

  const selectAfter = (
    <Form.Item
      name="unitType"
      className={styles.select_after}
      rules={[{ required: true, message: '请选择sku净重单位!' }]}>
      <Select placeholder="单位" style={{ width: 80 }}>
        {weightArr.map((item) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          )
        })}
      </Select>
    </Form.Item>
  )
  console.log({
    status: true,
    ...initialValues,
    commodityTypeIds: initialValues?.commodityTypes?.map((v) => v?.commodityTypeId),
  })
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{
        status: true,
        ...initialValues,
        commodityTypeIds: initialValues?.commodityTypes?.map((v) => v?.commodityTypeId),
      }}
      className={styles.formBox}>
      <Form.Item
        label="sku净重"
        name="unitQuantity"
        rules={[
          { required: true, message: '请输入净重!' },
          { pattern: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/, message: '请输入正确数值' },
        ]}
        className={styles.weight}>
        <Input addonAfter={selectAfter} />
      </Form.Item>
      <Form.Item label="sku单位" name="totalType" rules={[{ required: true, message: '请选择单位!' }]}>
        <Select options={skuUnitOptions} placeholder="请选择" />
      </Form.Item>
      <Form.Item label="SKU属性" name="commodityTypeIds">
        <BaseCheckboxByFetch
          remote={{
            fetch: listPropertyOptions,
            params: {
              commodityTypeId: 1,
            },
          }}
        />
      </Form.Item>
      <Form.Item label="状态" name="status" valuePropName="checked" className={styles.switch}>
        <Switch checkedChildren="开启" unCheckedChildren="关闭" />
      </Form.Item>
    </Form>
  )
})

export default FruitForm
