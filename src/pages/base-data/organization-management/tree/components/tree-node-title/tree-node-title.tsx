import React, { FC } from 'react'
import { Space } from 'antd'
import { FileAddOutlined, EditOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { TreeDataNode } from '../../index'
import styles from './index.module.less'

type Action = (nodeData: TreeDataNode) => void

interface IProps {
  nodeData: TreeDataNode
  onAdd: Action
  onEdit: Action
}
// 树节点
const TreeNodeTitle: FC<IProps> = ({ nodeData, onAdd, onEdit }) => {
  return (
    <div className={styles.wrap}>
      <Space>
        <span>{nodeData.title}</span>
        <div className={classnames(styles.actionGroup)}>
          <Space>
            <span title="新增子节点">
              <FileAddOutlined
                className={styles.action}
                onClick={() => {
                  onAdd(nodeData)
                }}
              />
            </span>
            <span title="编辑节点">
              <EditOutlined
                className={styles.action}
                onClick={() => {
                  onEdit(nodeData)
                }}
              />
            </span>
          </Space>
        </div>
      </Space>
    </div>
  )
}

export default TreeNodeTitle
