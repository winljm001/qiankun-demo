import React from 'react'
import { Col, Row } from 'antd'
import { listSearchFromLayout } from '@/config/defaultSettings'
interface IProps {
  size?: 'large' | 'middle' | 'small'
  list?: any[]
}
const SearchFormLayout: React.FC<IProps> = ({ list, size = 'middle' }) => {
  const attrProps = listSearchFromLayout[size]
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

export default SearchFormLayout
