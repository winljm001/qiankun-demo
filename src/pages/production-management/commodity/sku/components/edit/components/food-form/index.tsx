import React, { useImperativeHandle, forwardRef, useEffect } from 'react'
import { Checkbox, Form, FormInstance, Input, Select, Switch } from 'antd'
import { useBoolean } from 'ahooks'
import {
  PitayaCommoditySkuDetailQuery,
  useListUnitOptionsQuery,
} from '@/graphql/operations/production-management/__generated__/commodity'
import { commodityTypeKey } from '@/pages/production-management/const'
import { boxPropertyList, propertyList } from '../../const'

type IProps = {
  commodityTypeId?: number
  data?: PitayaCommoditySkuDetailQuery['pitayaCommoditySkuDetail']
}

const FoodForm = forwardRef<FormInstance, IProps>(({ commodityTypeId, data }, ref) => {
  const [form] = Form.useForm()
  const [hasTotalType, { toggle: toggleHasTotalType }] = useBoolean(false)
  useImperativeHandle(ref, () => ({
    ...form,
  }))
  const { data: listUnitOptionsData } = useListUnitOptionsQuery({ variables: { commodityTypeId } })
  useEffect(() => {
    if (data?.totalType && data?.totalType !== -1) {
      toggleHasTotalType(true)
    } else {
      toggleHasTotalType(false)
    }
  }, [data])
  return (
    <Form form={form} layout="vertical" initialValues={{ status: true }}>
      <Form.Item label="最小单位" name="unitType" rules={[{ required: true, message: '请选择单位!' }]}>
        <Select options={listUnitOptionsData?.listUnitOptions} />
      </Form.Item>
      {commodityTypeId !== commodityTypeKey.BOX ? (
        <Form.Item label="启用副单位">
          <Switch
            checkedChildren="启用"
            unCheckedChildren="禁用"
            checked={hasTotalType}
            onChange={toggleHasTotalType}
          />
        </Form.Item>
      ) : null}
      {hasTotalType ? (
        <>
          <Form.Item label="副单位" name="totalType" rules={[{ required: true, message: '请选择单位!' }]}>
            <Select options={listUnitOptionsData?.listUnitOptions} />
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              let unitTypeValue = getFieldValue('unitType')
              const newUnitTypeValue = listUnitOptionsData?.listUnitOptions.filter((item) => {
                return item.value === unitTypeValue
              })
              let toNewUnitTypeValue = newUnitTypeValue?.[0]?.label || ''

              let totalTypeValue = getFieldValue('totalType')
              const newTotalTypeValue = listUnitOptionsData?.listUnitOptions.filter((item) => {
                return item.value === totalTypeValue
              })
              let toNewTotalTypeValue = newTotalTypeValue?.[0]?.label || ''
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
      {commodityTypeId === commodityTypeKey.ASSIST ? null : (
        <Form.Item label="sku属性" name="property" rules={[{ required: true, message: '请选择sku属性!' }]}>
          <Checkbox.Group options={commodityTypeId === commodityTypeKey.BOX ? boxPropertyList : propertyList} />
        </Form.Item>
      )}
      <Form.Item label="状态" name="status" valuePropName="checked">
        <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
      </Form.Item>
    </Form>
  )
})

export default FoodForm
