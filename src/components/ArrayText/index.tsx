import React from 'react'
import { Popover, PopoverProps } from 'antd'
import classnames from 'classnames'
import styles from './index.module.scss'

type IProps = {
  // 字段值
  text: string | number | (string | number)[]
  // 字段为undefined null时展示的文本
  nullText?: React.ReactNode
  // 文本最长宽度
  width?: number | string
  // popover高度
  maxHeight?: number | string
  // 文本超出后是否展示...
  ellipsis?: boolean
  // 数组文本分隔符
  split?: React.ReactNode
  // 显示个数
  limit?: number
} & Omit<PopoverProps, 'content'>

const isNull = (text: any): boolean => [undefined, null].includes(text)

const renderTextContent = (text: (string | number)[], split: React.ReactNode, tail: React.ReactNode = null): React.ReactNode => {
  return text.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        {index < text.length - 1 && split}
        {index === text.length - 1 && tail}
      </React.Fragment>
    )
  })
}

const ArrayText: React.FC<IProps> = ({ text, nullText, width, maxHeight, ellipsis, split, limit, ...popProps }) => {
  if (isNull(text)) return nullText as React.ReactElement<any, any>
  if (Array.isArray(text)) {
    if (text.length > limit) {
      return (
        <Popover {...popProps} overlayInnerStyle={{ maxHeight, overflowY: 'auto' }} content={renderTextContent(text, split)}>
          <div className={classnames({ [styles.ellipsis]: ellipsis })} style={{ maxWidth: width }}>
            {renderTextContent(text.slice(0, limit), split, <span className={styles.dots}>···</span>)}
          </div>
        </Popover>
      )
    }
    return (
      <div className={classnames({ [styles.ellipsis]: ellipsis })} style={{ maxWidth: width }}>
        {renderTextContent(text.slice(0, limit), split)}
      </div>
    )
  }
  return (
    <div className={classnames({ [styles.ellipsis]: ellipsis })} style={{ maxWidth: width }}>
      {text}
    </div>
  )
}

ArrayText.defaultProps = {
  nullText: null,
  width: 'auto',
  maxHeight: 300,
  ellipsis: true,
  split: <br />,
  limit: 1,
}

export default ArrayText
