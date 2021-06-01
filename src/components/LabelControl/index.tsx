import React from 'react'
import styles from './index.module.less'

interface IProps {
  children?: React.ReactNode
  colon?: boolean
  label?: React.ReactNode
}

const LabelControl: React.FC<IProps> = ({ children, label, colon = true }) => {
  return (
    <div className={styles.wrap}>
      {label && (
        <label className={styles.label}>
          {label}
          {colon && '：'}
        </label>
      )}
      <div className={styles.control}>{children}</div>
    </div>
  )
}

export default LabelControl
