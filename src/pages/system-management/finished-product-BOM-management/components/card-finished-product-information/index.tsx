import React, { memo } from 'react'
import { Form, Skeleton } from 'antd'
import BaseCard from '@/components/BaseCard'

interface CardFinishedProductInformationProps {
  /**
   * 成品资料
   */
  data: defs.commodityService.FinishedProductVO

  /**
   * 是否加载中
   */
  loading?: boolean
}

const CardFinishedProductInformation: React.FC<CardFinishedProductInformationProps> = ({
  data = {},
  loading = false,
}) => {
  return (
    <BaseCard title="成品资料">
      <Skeleton active loading={loading}>
        <Form.Item label="商品名称">{data.commodityName}</Form.Item>
        <Form.Item label="商品规格">{data.commoditySpecOptionName?.join('、')}</Form.Item>
        <Form.Item label="商品类型">{data.commodityTypeName}</Form.Item>
        <Form.Item label="商品分类">{data.commodityCategoryName}</Form.Item>
        {data.commodityVarietyName ? <Form.Item label="商品品种">{data.commodityVarietyName}</Form.Item> : null}
        {data.commodityPlaceOriginName ? <Form.Item label="商品产地">{data.commodityPlaceOriginName}</Form.Item> : null}
      </Skeleton>
    </BaseCard>
  )
}

export default memo(CardFinishedProductInformation)
