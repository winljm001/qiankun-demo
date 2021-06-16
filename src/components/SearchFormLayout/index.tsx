import React from 'react'
import { Col, Row } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
interface IProps {
  list?: any[]
}
const Index: React.FC<IProps> = ({ list }) => {
  return (
    <Row {...listSearchFromItemProps.rowProps}>
      {list?.map((v, i) => {
        return (
          <Col {...listSearchFromItemProps.colProps} key={i}>
            {v}
          </Col>
        )
      })}
    </Row>
  )
}

export default Index
