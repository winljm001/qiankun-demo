import React, { useImperativeHandle, forwardRef } from 'react'
import { Switch, Form, Input, Checkbox, FormInstance } from 'antd'
// import { useBoolean } from 'ahooks'
import { ListUnitOptionsDocument } from '@/graphql/operations/production-management/__generated__/commodity'
import AsyncSelect from '@/components/async-select'
import { commodityTypeKey } from '@/pages/production-management/const'
import { propertyList } from '../../const'
import styles from './style.module.less'

type IProps = {}

const FruitForm = forwardRef<FormInstance, IProps>((_, ref) => {
  const [form] = Form.useForm()
  // const [defective, { toggle: setDefective }] = useBoolean()
  useImperativeHandle(ref, () => ({
    ...form,
  }))
  // 请求单位

  const selectAfter = (
    <Form.Item
      name="unitType"
      className={styles.select_after}
      rules={[{ required: true, message: '请选择sku净重单位!' }]}>
      <AsyncSelect
        remote={{
          gql: ListUnitOptionsDocument,
          gqlKey: 'listUnitOptions',
          extraParams: { commodityTypeId: 5 },
        }}
      />
    </Form.Item>
  )
  return (
    <Form
      form={form}
      layout="vertical"
      className={styles.formBox}
      initialValues={{
        status: true,
      }}>
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
      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => {
          const isDefective = getFieldValue('isDefective')
          return isDefective ? null : (
            <Form.Item name="totalType" label="sku单位" rules={[{ required: true, message: '请选择sku单位!' }]}>
              <AsyncSelect
                remote={{
                  gql: ListUnitOptionsDocument,
                  gqlKey: 'listUnitOptions',
                  extraParams: { commodityTypeId: commodityTypeKey.FRUIT },
                }}
              />
            </Form.Item>
          )
        }}
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => {
          const isDefective = getFieldValue('isDefective')
          return isDefective ? null : (
            <Form.Item label="sku属性" name="property" rules={[{ required: true, message: '请选择sku属性!' }]}>
              <Checkbox.Group options={propertyList} />
            </Form.Item>
          )
        }}
      </Form.Item>

      <Form.Item label="是否是次品" name="isDefective">
        <Switch checkedChildren="是" unCheckedChildren="否" />
      </Form.Item>
      <Form.Item label="状态" name="status" valuePropName="checked">
        <Switch checkedChildren="开启" unCheckedChildren="关闭" />
      </Form.Item>
    </Form>
  )
})

export default FruitForm
