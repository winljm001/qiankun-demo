import React from 'react'
import { Col, Row } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
interface IProps {
  size?: 'large' | 'middle' | 'small'
  list?: any[]
}
const Index: React.FC<IProps> = ({ list, size = 'middle' }) => {
  const attrProps = listSearchFromItemProps[size]
  return (
    <Row {...attrProps.rowProps}>
      {list?.map((v, i) => {
        return (
          <Col {...attrProps.colProps} key={i}>
            {v}
          </Col>
        )
      })}
    </Row>
  )
}

export default Index
