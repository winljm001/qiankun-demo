import querystring from 'querystring'
import React, { FC, useMemo, useState, useRef } from 'react'
import { useLocation, useParams } from 'react-router'
import { Button, Tree, TreeDataNode as AntdTreeDataNode, message } from 'antd'
import classnames from 'classnames'
import DataSuspense from '@/components/data-suspense'
import BaseCard from '@/components/base-card'
import {
  useCreateOrgMutation,
  useOrgTreeQuery,
  useUpdateOrgMutation,
} from '@/graphql/operations/base-data/__generated__/organization-management'
import Space from '@/components/space'
import TreeNodeTitle from './components/tree-node-title/tree-node-title'
import OrgCreation, { Handles as CreationHandles } from './components/creation'
import OrgEdition, { Handles as EditionHandles } from './components/edition'
import styles from './index.module.less'

interface IProps {}

interface TreeNode {
  key: number
  name: string
  parentId: number
  children: TreeNode[]
}

export type TreeDataNode = Omit<AntdTreeDataNode, 'children'> & {
  parentId: number
  children: TreeDataNode[]
}
/**
 * 格式化后端数据，使其符合Tree组件数据格式
 * @param treeData 后端树源数据
 */
const treeTraverse = (treeData: TreeNode[]): TreeDataNode[] => {
  return treeData.map((treeNode) => ({
    title: treeNode.name,
    key: treeNode.key,
    parentId: treeNode.parentId,
    children: treeTraverse(treeNode.children),
  }))
}

/**
 * 企业组织架构树
 */
const OrganizationTree: FC<IProps> = () => {
  const { id: orgGroupId } = useParams<{ id: string }>()
  const [expandedKeys, setExpandedKeys] = useState<number[]>([])
  const creationRef = useRef<CreationHandles>(null)
  const editionRef = useRef<EditionHandles>(null)
  const location = useLocation()
  const searchParams = querystring.parse(location.search.substr(1)) as { name: string }
  const parentOrgName = searchParams.name

  // 获取树源数据
  const { loading, data, refetch } = useOrgTreeQuery({
    variables: {
      id: +orgGroupId,
    },
    nextFetchPolicy: 'no-cache',
  })
  let treeData = useMemo(() => {
    try {
      return treeTraverse(JSON.parse(data?.orgTree?.treeJson || '[]'))
    } catch {
      return []
    }
  }, [data])

  // 新增组织
  const [createOrgMutation] = useCreateOrgMutation()
  const createOrg = (parentId: number, parentName: string) => {
    if (editionRef.current!.hide()) {
      const { show, hide, startOkLoading, stopOkLoading } = creationRef.current!
      show({
        parentId,
        parentName,
        onOk(data) {
          startOkLoading()
          createOrgMutation({
            variables: {
              input: {
                ...data,
                country: data.country!,
                orgGroupId: +orgGroupId,
                orgName: data.nameLocale['zh-CN'],
                nameLocale: JSON.stringify(data.nameLocale),
              },
            },
          })
            .then(() => {
              message.success('新增成功')
              hide()
              refetch()
            })
            .catch(() => {})
            .finally(stopOkLoading)
        },
      })
    }
  }

  // 修改组织
  const [updateOrgMutation] = useUpdateOrgMutation()
  const updateOrg = (id: number) => {
    if (creationRef.current!.hide()) {
      const { show, hide, startOkLoading, stopOkLoading } = editionRef.current!
      show({
        id,
        onOk(data) {
          startOkLoading()
          updateOrgMutation({
            variables: {
              input: {
                ...data,
                country: data.country!,
                orgGroupId: +orgGroupId,
                orgName: data.nameLocale['zh-CN'],
                nameLocale: JSON.stringify(data.nameLocale),
              },
            },
          })
            .then(() => {
              message.success('修改成功')
              hide()
              refetch()
            })
            .catch(() => {})
            .finally(stopOkLoading)
        },
      })
    }
  }

  /**
   * 自定义渲染节点title
   */
  const titleRender = (nodeData) => {
    return (
      <TreeNodeTitle
        nodeData={nodeData}
        onAdd={(treeNode) => {
          createOrg(treeNode.key as number, treeNode.title as string)
        }}
        onEdit={(treeNode) => {
          updateOrg(treeNode.key as number)
        }}
      />
    )
  }

  /**
   * 获取所有展开的key集合
   */
  const getExpandedKeys = (treeData: TreeDataNode[]) => {
    const result: number[] = []
    treeData.forEach((treeNode) => {
      result.push(treeNode.key as number)
      Array.prototype.push.apply(result, getExpandedKeys(treeNode.children!))
    })
    return result
  }
  return (
    <div className={classnames('pageWrap', styles.full)}>
      <BaseCard className={styles.full} bodyStyle={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Button
          type="primary"
          className={styles.creationBtn}
          ghost
          onClick={() => {
            createOrg(+orgGroupId, parentOrgName)
          }}>
          新增
        </Button>
        <DataSuspense loading={loading}>
          <div className={styles.content}>
            <div className={styles.treeArea}>
              {treeData.length > 0 ? (
                <div className={styles.treeHeader}>
                  <Space size={20}>
                    <a
                      type="link"
                      onClick={() => {
                        setExpandedKeys([])
                      }}>
                      全部收起
                    </a>
                    <a
                      type="link"
                      onClick={() => {
                        setExpandedKeys(getExpandedKeys(treeData!))
                      }}>
                      全部展开
                    </a>
                  </Space>
                </div>
              ) : (
                <DataSuspense error />
              )}
              <Tree
                selectable={false}
                expandedKeys={expandedKeys}
                onExpand={(expandedKeys) => {
                  setExpandedKeys(expandedKeys as number[])
                }}
                treeData={treeData}
                titleRender={titleRender}
                showLine
              />
            </div>
            <OrgEdition ref={editionRef} />
            <OrgCreation ref={creationRef} />
          </div>
        </DataSuspense>
      </BaseCard>
    </div>
  )
}

export default OrganizationTree
