import { useDebounceFn } from 'ahooks'
import { Form, FormInstance, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import BaseSelectByFetch from '@/components/CommonSelect/BaseSelectByFetch'
import { fromSingleLayoutProps } from '@/components/JsonForm/defaultConfig'
import { isSpuNameRepeat } from '@/services/commodityService/mods/subsidiary/isSpuNameRepeat'
import { listSpuCategoryOption } from '@/services/commodityService/mods/subsidiaryCategory/listSpuCategoryOption'

interface SpuFormProps {
  data?: defs.commodityService.CommoditySpuVO
}
const SpuForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm()

  useImperativeHandle(ref, () => ({
    ...form,
  }))

  // 商品名验重
  const { run } = useDebounceFn((rule, value, callback) => {
    if (value) {
      isSpuNameRepeat({ commodityName: value, commodityId: data?.commodityId }).then(({ data }) => {
        if (data) {
          callback()
        } else {
          callback('该商品名称已存在')
        }
      })
    } else {
      callback()
    }
  })
  useEffect(() => {
    form.setFieldsValue(data)
  }, [data])
  return (
    <Form form={form} layout="vertical" {...(data?.commodityId ? {} : fromSingleLayoutProps)}>
      <Form.Item name="commodityId" hidden />
      <Form.Item
        label="商品名称"
        name="commodityName"
        rules={[
          { required: true, message: '请输入商品名称' },
          {
            validator: run,
          },
        ]}>
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item label="商品分类" name="commodityCategoryId" rules={[{ required: true, message: '请选择商品分类' }]}>
        <BaseSelectByFetch
          remote={{
            fetch: listSpuCategoryOption,
          }}
        />
      </Form.Item>
    </Form>
  )
})

export default SpuForm
