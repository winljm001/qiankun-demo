import qs from 'querystring'
import { Form, FormInstance, FormItemProps, Input, Select, SelectProps } from 'antd'
import { debounce, isNil } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'

/**
 * 代码源于物流项目
 * @author 昌举
 */
export interface AddressDataInfo {
  /**
   * 地址名字
   */
  name: string
  /**
   * 位置编码
   */
  adcode: string
  /**
   * 省市
   */
  district: string

  address: string

  id: string
  /**
   * 经纬度坐标用逗号分割
   */
  location: string
  typecode: string
}

interface IProps extends SelectProps<any> {
  noDisable?: any
  form: FormInstance
  formProps?: FormItemProps
}

const { Option } = Select

const DEBOUNCE_TIME = 800

const Index: React.FC<IProps> = ({ value, form, formProps, ...props }) => {
  const [addressData, setAddressData] = useState<AddressDataInfo[]>([])
  const InitRef = useRef(true)
  const FormItem = Form.Item
  const [loading, setLoading] = useState(true)
  const addressSearch = debounce((searchText: string, callback?: (data: AddressDataInfo[]) => void) => {
    setLoading(true)
    InitRef.current = false
    const url = 'https://restapi.amap.com/v3/assistant/inputtips?'
    const params = {
      key: 'c0d9fa01c472e926a11852682e97bb38',
      keywords: searchText,
      output: 'json',
    }
    fetch(`${url}${qs.stringify(params)}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if (result.status === '1') {
          setAddressData(result.tips)
          callback?.(result.tips)
          setLoading(false)
        }
      })
  }, DEBOUNCE_TIME)

  const getAddrValue = (info: AddressDataInfo) => {
    const keyArr = [info.name, info.district, info.address]
    return keyArr.filter((ele) => !isNil(ele)).join(' - ')
  }

  const handleAddressChange = (addressValue: string, addressData) => {
    if (!addressValue) {
      form.setFieldsValue({
        lng: null,
        lat: null,
      })
      return null
    }
    const addressItem = addressData.find((ele) => {
      const [name, district, address] = addressValue.split(' - ')
      if (name === ele.name && district === ele.district && address === ele.address) {
        return true
      } else {
        return false
      }
    })
    if (!addressItem) return
    const [lng, lat] = addressItem.location.split(',')
    form.setFieldsValue({
      lng,
      lat,
      address: addressValue,
    })
  }
  useEffect(() => {
    const value = form.getFieldValue('address')
    if (value && InitRef.current) {
      addressSearch(value, (addressData: AddressDataInfo[]) => {
        handleAddressChange(value, addressData)
      })
    } else {
      setLoading(false)
    }
  }, [form.getFieldValue('address')])

  return (
    <>
      <FormItem name="address" {...formProps}>
        <Select
          loading={loading}
          showSearch
          allowClear
          filterOption={false}
          value={value}
          onSearch={(value) => addressSearch(value)}
          onChange={(value) => handleAddressChange(value, addressData)}
          optionLabelProp="label"
          {...props}>
          {addressData.map((item, index) => {
            return (
              <Option key={item.id + index} value={getAddrValue(item)} label={getAddrValue(item)}>
                {getAddrValue(item)}
              </Option>
            )
          })}
        </Select>
      </FormItem>
      <FormItem name="lng" hidden>
        <Input />
      </FormItem>
      <FormItem name="lat" hidden>
        <Input />
      </FormItem>
    </>
  )
}

export default Index
