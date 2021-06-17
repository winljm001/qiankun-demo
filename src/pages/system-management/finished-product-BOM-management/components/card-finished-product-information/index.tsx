import React, { memo } from 'react'
import { Form } from 'antd'
import BaseCard from '@/components/BaseCard'

interface CardFinishedProductInformationProps {
  // info: {}
}

const CardFinishedProductInformation: React.FC<CardFinishedProductInformationProps> = () => {
  return (
    <BaseCard title="成品资料">
      <Form.Item label="商品名称">商品名称</Form.Item>
      <Form.Item label="商品规格">商品规格</Form.Item>
      <Form.Item label="商品类型">商品类型</Form.Item>
      <Form.Item label="商品分类">商品分类</Form.Item>
      <Form.Item label="商品品种">商品品种</Form.Item>
      <Form.Item label="商品产地">商品产地</Form.Item>
    </BaseCard>
  )
}

export default memo(CardFinishedProductInformation)
