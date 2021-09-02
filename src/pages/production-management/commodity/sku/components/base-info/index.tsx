import type { FC } from 'react'
import React from 'react'
import { Descriptions } from 'antd'
import { GetCommodity } from '../../type'

const { Item } = Descriptions

interface IProps {
  data: GetCommodity | undefined
}

const BaseInfo: FC<IProps> = ({ data }) => {
  return (
    <div>
      <Descriptions title="商品信息" column={4}>
        <Item label="商品名称">{data?.commodityName}</Item>
        <Item label="商品类型">{data?.commodityTypeName}</Item>
        <Item label="商品品类">{data?.commodityCategoryName}</Item>
        {data?.commodityVarietyName && <Item label="商品品种">{data.commodityVarietyName}</Item>}
        {data?.commodityPlaceOriginName && <Item label="商品产地">{data.commodityPlaceOriginName}</Item>}
      </Descriptions>
    </div>
  )
}

export default BaseInfo
