import { Descriptions, Form, FormInstance, Input, Select } from 'antd'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { fromSingleLayoutProps } from '@/config/defaultSettings'
import AsyncSelect from '@/components/async-select'
import {
  useListSpuCategoryOptionLazyQuery,
  TypeOptionDocument,
  GetCommodityQuery,
  useSelectPlaceByCategoryIdLazyQuery,
  useSelectVarietyByCategoryIdLazyQuery,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
const FormItem = Form.Item
interface BaseFormProps {
  data?: GetCommodityQuery['getCommodity']
}
const CommodityManagement = forwardRef<Partial<FormInstance>, BaseFormProps>(({ data }, ref) => {
  const [form] = Form.useForm()
  const [selectVarietyByCategoryId, { data: varietyList }] = useSelectVarietyByCategoryIdLazyQuery()
  const [selectPlaceByCategoryId, { data: placeList }] = useSelectPlaceByCategoryIdLazyQuery()

  useImperativeHandle(ref, () => ({
    ...form,
  }))
  // 获取商品品类
  const [refetch, commodityOptions] = useListSpuCategoryOptionLazyQuery()
  // 编辑的逻辑开始
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        commodityId: data.commodityId,
        commodityName: data.commodityName,
        nameLocale: {
          chineseName: data.commodityName,
          englishName: data.englishName,
          thailandName: data.thailandName,
          vietnamName: data.vietnamName,
        },
      })
    }
  }, [data])

  const infoJSX = () => {
    return data ? (
      <Descriptions>
        <Descriptions.Item label="商品类型" span={24}>
          {data?.commodityTypeName}
        </Descriptions.Item>
        <Descriptions.Item label="商品品类" span={24}>
          {data?.commodityCategoryName}
        </Descriptions.Item>
        {data?.commodityVarietyName ? (
          <Descriptions.Item label="商品品种" span={24}>
            {data?.commodityVarietyName}
          </Descriptions.Item>
        ) : null}
        {data?.commodityPlaceOriginName ? (
          <Descriptions.Item label="商品产地" span={24}>
            {data?.commodityPlaceOriginName}
          </Descriptions.Item>
        ) : null}
      </Descriptions>
    ) : null
  }
  // 编辑的逻辑结束

  // 商品类型改变回调函数
  const onChange = () => {
    form.setFields([
      {
        name: 'commodityCategoryId',
        value: null,
      },
    ])
    const commodityTypeId = form.getFieldValue(['commodityTypeId'])
    refetch({
      variables: {
        commodityTypeId,
      },
    })
  }
  return (
    <Form layout="vertical" {...(data ? {} : fromSingleLayoutProps)} form={form}>
      {infoJSX()}
      <FormItem name="commodityId" hidden>
        <Input />
      </FormItem>
      <FormItem
        label="商品名称（中文）"
        name={['nameLocale', 'chineseName']}
        rules={[{ required: true, message: '请填写商品名' }]}>
        <Input />
      </FormItem>
      <FormItem label="商品名称（英文）" name={['nameLocale', 'englishName']}>
        <Input />
      </FormItem>
      <FormItem label="商品名称（泰文）" name={['nameLocale', 'thailandName']}>
        <Input />
      </FormItem>
      <FormItem label="商品名称（越南文）" name={['nameLocale', 'vietnamName']}>
        <Input />
      </FormItem>
      {data ? null : (
        <>
          <FormItem label="商品类型" name="commodityTypeId" rules={[{ required: true, message: '请选择商品类型' }]}>
            <AsyncSelect remote={{ gql: TypeOptionDocument, gqlKey: 'typeOption' }} onChange={onChange} />
          </FormItem>
          <FormItem noStyle shouldUpdate>
            {({ getFieldValue }) => {
              const commodityTypeId = getFieldValue(['commodityTypeId'])
              return (
                <FormItem
                  label="商品品类"
                  name="commodityCategoryId"
                  rules={[{ required: true, message: '请选择商品品类' }]}>
                  <Select
                    showSearch
                    disabled={!commodityTypeId ? true : false}
                    options={commodityOptions?.data?.listSpuCategoryOption}
                    onChange={(val) => {
                      selectVarietyByCategoryId({ variables: { categoryId: val as number } })
                      selectPlaceByCategoryId({ variables: { categoryId: val as number } })
                      form.setFieldsValue({ commodityVarietyId: '', commodityPlaceOriginId: '' })
                    }}
                  />
                </FormItem>
              )
            }}
          </FormItem>
          <FormItem shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const id = getFieldValue('commodityCategoryId')
              return id && varietyList && varietyList?.selectVarietyByCategoryId?.length > 0 ? (
                <FormItem
                  label="商品品种"
                  name="commodityVarietyId"
                  rules={[{ required: true, message: '请选择商品品种' }]}>
                  <Select>
                    {varietyList?.selectVarietyByCategoryId?.map((v, i) => {
                      return (
                        <Select.Option key={i} value={v?.value}>
                          {v?.label}
                        </Select.Option>
                      )
                    })}
                  </Select>
                </FormItem>
              ) : null
            }}
          </FormItem>
          <FormItem shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const id = getFieldValue('commodityCategoryId')
              return id && placeList && placeList?.selectPlaceByCategoryId?.length > 0 ? (
                <FormItem
                  label="商品产地"
                  name="commodityPlaceOriginId"
                  rules={[{ required: true, message: '请选择商品产地' }]}>
                  <Select>
                    {placeList?.selectPlaceByCategoryId?.map((v, i) => {
                      return (
                        <Select.Option key={i} value={v?.value}>
                          {v?.label}
                        </Select.Option>
                      )
                    })}
                  </Select>
                </FormItem>
              ) : null
            }}
          </FormItem>
        </>
      )}
    </Form>
  )
})

export default CommodityManagement
