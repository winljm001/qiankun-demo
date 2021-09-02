import React, { FC, useMemo, useEffect } from 'react'
import type { FormInstance, TreeDataNode } from 'antd'
import { Form, Row, Col, Input, Button, Select, Space, TreeSelect } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import { isDef } from '@/utils/typeof'
import { useListOrgGroupOptionQuery } from '@/graphql/operations/base-data/__generated__/staff-management'
import { useOrgTreeLazyQuery } from '@/graphql/operations/base-data/__generated__/organization-management'

interface IProps {
  form: FormInstance
  submit: () => void
  reset: () => void
}

export const baseOptions: { label: string; value: string }[] = [
  {
    label: '全部',
    value: null as unknown as string,
  },
]
export interface TreeNode {
  key: string | number
  name: string
  parentId: string | number
  children: TreeNode[]
}

export const treeTraverse = (
  treeData: TreeNode[],
  /**
   * 值转换，分页表单，URL 上的数字是字符串
   */
  valueConvert?: (t: string | number) => string | number,
): TreeDataNode[] => {
  return treeData.map((treeNode) => ({
    title: treeNode.name,
    key: valueConvert ? valueConvert(treeNode.key) : treeNode.key,
    parentId: valueConvert ? valueConvert(treeNode.parentId) : treeNode.parentId,
    children: treeTraverse(treeNode.children, valueConvert),
  }))
}

/**
 * 员工管理头部搜索组件
 */
const Filter: FC<IProps> = ({ form, submit, reset }) => {
  // 组织架构名称下拉框请求数据
  const { data: dataListOrgGroupOption } = useListOrgGroupOptionQuery()
  const listOrgGroupOption = useMemo(() => {
    return baseOptions.concat(
      (dataListOrgGroupOption?.listOrgGroupOption || []).map((item) => ({
        ...item,
        value: `${item.value}`,
      })),
    )
  }, [dataListOrgGroupOption?.listOrgGroupOption])
  // 获取组织名称树
  const [refetch, treeDataResponse] = useOrgTreeLazyQuery({})

  // 生成树状结构数据
  const treeData = useMemo(() => {
    try {
      return treeTraverse(JSON.parse(treeDataResponse?.data?.orgTree?.treeJson || '[]'), (i) => `${i}`)
    } catch {
      return []
    }
  }, [treeDataResponse])

  useEffect(() => {
    // TODO 优化 form 已经初始化好
    setTimeout(() => {
      const value = form.getFieldValue('orgGroupId')
      if (isDef(value)) {
        refetch({
          variables: {
            id: value,
          },
        })
      }
    }, 0)
  }, [form, refetch])

  // 组织架构名称变化回调函数
  const onChange = (value) => {
    // 每次改变组织架构名称，组织名称重置
    form.setFieldsValue({ orgId: undefined })

    if (isDef(value)) {
      refetch({
        variables: {
          id: value,
        },
      })
    }
  }

  return (
    <Form form={form}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="orgGroupId" label="组织架构名称">
            <Select onChange={onChange} options={listOrgGroupOption} />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const orgGroupId = getFieldValue(['orgGroupId'])
              return (
                <Form.Item name="orgId" label="组织名称">
                  <TreeSelect
                    disabled={!orgGroupId}
                    dropdownMatchSelectWidth={false}
                    allowClear
                    dropdownStyle={{ width: 10 + 'px', maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="请选择组织名称"
                  />
                </Form.Item>
              )
            }}
          </Form.Item>
        </Col>

        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="name" label="姓名">
            <Input placeholder="请输入查询" />
          </Form.Item>
        </Col>

        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item>
            <Space size={24}>
              <Button type="primary" htmlType="submit" onClick={submit}>
                查询
              </Button>
              <Button type="default" htmlType="reset" onClick={reset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Filter
