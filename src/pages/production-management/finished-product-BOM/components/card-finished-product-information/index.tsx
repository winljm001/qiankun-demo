import React, { memo } from 'react'
import { Form, Skeleton } from 'antd'
import BaseCard from '@/components/base-card'
import type { PitayaCommoditySkuDetailOnBomQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

interface CardFinishedProductInformationProps {
  /**
   * 成品资料
   */
  data: PitayaCommoditySkuDetailOnBomQuery['pitayaCommoditySkuDetail']

  /**
   * 是否加载中
   */
  loading?: boolean
}

const CardFinishedProductInformation: React.FC<CardFinishedProductInformationProps> = ({ data, loading = false }) => {
  return (
    <BaseCard title="成品资料">
      <Skeleton active loading={loading}>
        <Form.Item label="商品名称">{data.commodityName}</Form.Item>
        <Form.Item label="商品规格">{data.commoditySpecOptionName?.join('、')}</Form.Item>
        <Form.Item label="商品类型">{data.commodityTypeName}</Form.Item>
        <Form.Item label="商品分类">{data.categoryName}</Form.Item>
        {data.varietyName ? <Form.Item label="商品品种">{data.varietyName}</Form.Item> : null}
        {data.placeOriginName ? <Form.Item label="商品产地">{data.placeOriginName}</Form.Item> : null}
      </Skeleton>
    </BaseCard>
  )
}

export default memo(CardFinishedProductInformation)
