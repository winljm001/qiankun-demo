import React, { FC, useEffect, useMemo } from 'react'
import { Form, Select, FormInstance, Button } from 'antd'
import SearchFormLayout from '@/components/SearchFormLayout'
import Space from '@/components/Space'

interface IProps {
  items: defs.commodityService.ScreeningSkuList[]
  form: FormInstance
  submit: () => void
  reset: () => void
}

const baseOptions = [
  {
    label: '全部',
    value: null,
  },
]
const Filter: FC<IProps> = ({ items, form, submit, reset }) => {
  const initialValues = useMemo(() => {
    const result = {
      commoditySpecOptionConditionDTOList: [],
    }
    items.forEach((item) => {
      result.commoditySpecOptionConditionDTOList.push({
        commoditySpecOptionId: null,
        commoditySpecId: item.commoditySpecId,
      })
    })
    return result
  }, [items])
  useEffect(() => {
    form.resetFields()
  }, [initialValues])
  return (
    <Form form={form} initialValues={initialValues}>
      <SearchFormLayout
        list={[
          ...items.map((item, index) => {
            return (
              <React.Fragment key={item.commoditySpecId}>
                <Form.Item hidden name={['commoditySpecOptionConditionDTOList', index, 'commoditySpecId']} />
                <Form.Item
                  name={['commoditySpecOptionConditionDTOList', index, 'commoditySpecOptionId']}
                  label={item.commoditySpecName}>
                  <Select style={{ width: '100%' }}>
                    {baseOptions
                      .concat(
                        item.commoditySpecOptionVOList.map((optionItem) => ({
                          label: optionItem.commoditySpecOptionName,
                          value: optionItem.commoditySpecOptionId,
                        })),
                      )
                      .map((item) => {
                        return (
                          <Select.Option key={item.value} value={item.value}>
                            {item.label}
                          </Select.Option>
                        )
                      })}
                  </Select>
                </Form.Item>
              </React.Fragment>
            )
          }),
          <Form.Item key="2">
            <Space size={24}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  console.log(form.getFieldsValue())
                  submit()
                }}>
                查询
              </Button>
              <Button type="default" htmlType="reset" onClick={reset}>
                重置
              </Button>
            </Space>
          </Form.Item>,
        ]}
      />
    </Form>
  )
}

export default Filter
