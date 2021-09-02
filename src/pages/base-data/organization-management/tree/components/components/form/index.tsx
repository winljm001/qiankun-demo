import React, { forwardRef, useImperativeHandle } from 'react'
import { Form as AntdForm, FormInstance, Input, Select, Typography } from 'antd'
import { UpdateOrgInput } from '@/pages/base-data/organization-management/typing'
import LabelValue from '@/components/label-value'
import FileUpload from '@/components/file-upload'
import Address from '@/components/address'
import styles from './index.module.less'

const FormItem = AntdForm.Item

export type Values = Pick<
  UpdateOrgInput,
  | 'leadingCadre'
  | 'phone'
  | 'address'
  | 'remark'
  | 'businessName'
  | 'legalRep'
  | 'socialCreditCode'
  | 'lat'
  | 'lng'
  | 'accountCert'
  | 'bizLicense'
  | 'businessAddress'
> & {
  country: number | null
  nameLocale: {
    /** 中文 */
    'zh-CN': string
    /** 英文 */
    'en-US': string
    /** 泰文 */
    'th-TH': string
    /** 越南文 */
    'vi-VN': string
  }
}
export interface InitialValues extends Values {
  parentName: string
}
interface IProps {
  initialValues: InitialValues
}
export interface Handles {
  form: FormInstance<Values>
}

const Form = forwardRef<Handles, IProps>(({ initialValues }, ref) => {
  const [form] = AntdForm.useForm<Values>()

  useImperativeHandle(ref, () => ({
    form,
  }))
  return (
    <AntdForm className={styles.form} form={form} layout="vertical" initialValues={initialValues}>
      <Typography.Title level={5}>基础信息</Typography.Title>
      <div className="pageWrap">
        <LabelValue label="上级组织" marginBottom={24}>
          {initialValues.parentName}
        </LabelValue>
        <FormItem
          label="组织名称(中文)"
          name={['nameLocale', 'zh-CN']}
          rules={[{ required: true, message: '请输入组织名称' }]}>
          <Input maxLength={20} placeholder="请输入中文名称(不超过20个字符)" />
        </FormItem>
        <FormItem label="组织名称(英文)" name={['nameLocale', 'en-US']}>
          <Input maxLength={20} placeholder="请输入英文名称(不超过20个字符)" />
        </FormItem>
        <FormItem label="组织名称(泰文)" name={['nameLocale', 'th-TH']}>
          <Input maxLength={20} placeholder="请输入泰文名称(不超过20个字符)" />
        </FormItem>
        <FormItem label="组织名称(越南文)" name={['nameLocale', 'vi-VN']}>
          <Input maxLength={20} placeholder="请输入越南文名称(不超过20个字符)" />
        </FormItem>
        <FormItem label="所处国家" name="country" rules={[{ required: true, message: '请选择所处国家' }]}>
          <Select
            placeholder="请选择所处国家"
            options={[
              { label: '中国', value: 1 },
              { label: '泰国', value: 2 },
              { label: '越南', value: 3 },
            ]}
          />
        </FormItem>
        <FormItem label="负责人名称" name="leadingCadre">
          <Input maxLength={10} placeholder="请输入负责人名称(不超过10个字) " />
        </FormItem>
        <FormItem
          label="负责人联系电话"
          name="phone"
          rules={[
            {
              validator(rule, value) {
                if (!value || /^\d{11}$/.test(value)) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('联系电话格式错误'))
              },
              message: '联系电话格式错误',
            },
          ]}>
          <Input maxLength={11} placeholder="请输入11位负责人手机号" />
        </FormItem>
        <Address form={form} formProps={{ label: '地址' }} maxLength={50} placeholder="请输入地址(不超过50个字)" />
        <FormItem label="备注" name="remark">
          <Input.TextArea maxLength={50} placeholder="请输入备注(不超过50个字)" />
        </FormItem>
      </div>
      <Typography.Title level={5}>工商信息</Typography.Title>
      <div className="pageWrap" style={{ paddingBottom: 0 }}>
        <FormItem label="企业名" name="businessName">
          <Input maxLength={20} placeholder="请输入企业名(不超过20个字)" />
        </FormItem>
        <FormItem label="法定代表人" name="legalRep">
          <Input maxLength={10} placeholder="请输入法定代表人(不超过10个字)" />
        </FormItem>
        <FormItem label="统一社会信用代码" name="socialCreditCode">
          <Input maxLength={18} placeholder="请输入18位信用代码" />
        </FormItem>
        <FormItem label="企业地址" name="businessAddress">
          <Input maxLength={50} placeholder="请输入企业地址(不超过50个字)  )" />
        </FormItem>
        <FormItem label="营业执照" name="bizLicense">
          <FileUpload multiple />
        </FormItem>
        <FormItem label="开户证明" name="accountCert">
          <FileUpload multiple />
        </FormItem>
      </div>
    </AntdForm>
  )
})

export default Form
