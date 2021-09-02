import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { AutoComplete, Button, Form, Input, message, Select, TreeDataNode, TreeSelect, Typography } from 'antd'
import { useDebounceFn } from 'ahooks'
import { useListOrgGroupOptionQuery } from '@/graphql/operations/base-data/__generated__/staff-management'
import { useSearchUserQuery } from '@/graphql/operations/wholesale-management/__generated__/business-management'
import { useOrgTreeLazyQuery } from '@/graphql/operations/base-data/__generated__/organization-management'
import { FormRef } from '../../'
import type { InitialValuesQuery, SearchValuesQuery } from '../../../../type'
const { Text } = Typography
const { Option } = AutoComplete

type Mode = 'CREATE' | 'EDIT'
interface IProps {
  // 新增 or 编辑模式
  mode: Mode
  // 表单初始值
  initialValues: InitialValuesQuery
}
const baseOptions: { label: string; value: number | null }[] = [
  {
    label: '全部',
    value: null,
  },
]
export interface TreeNode {
  key: number
  name: string
  parentId: number
  children: TreeNode[]
}
export const treeTraverse = (treeData: TreeNode[]): TreeDataNode[] => {
  return treeData.map((treeNode) => ({
    title: treeNode.name,
    key: treeNode.key,
    parentId: treeNode.parentId,
    children: treeTraverse(treeNode.children),
  }))
}
// 搜索负责人下拉框是否被使用的枚举
enum UsedType {
  NOT_USE = 0,
  USED = 1,
}
const nameUsedType = {
  [UsedType.USED]: true,
  [UsedType.NOT_USE]: false,
}
/**
 * 商户表单组件
 */
const NewForm = forwardRef<FormRef, IProps>(({ mode, initialValues }, ref) => {
  const [form] = Form.useForm()
  const [headOptions, setHeadOptions] = useState<any[]>([])
  const [showInput, setShowInput] = useState<boolean>(mode === 'CREATE' ? true : false)
  const orgIdData = useRef<number>()
  const searchUsersValues = useRef<SearchValuesQuery>()
  const allowClearShow = useRef<boolean>(true)
  // 获取组织架构名称下拉框响应数据
  const OrgGroupListResponse = useListOrgGroupOptionQuery()

  // 负责人模糊搜索响应数据
  const userNameResponse = useSearchUserQuery({
    variables: {
      input: {
        keyword: '',
        orgId: orgIdData.current!,
      },
    },
    skip: true,
  })

  // 表单实列给外层 modal 组件
  useImperativeHandle(ref, () => ({
    form,
  }))

  // 负责人搜索事件防抖函数
  const { run } = useDebounceFn(
    (value) => {
      userNameResponse
        .refetch({
          input: {
            keyword: value,
            orgId: orgIdData.current!,
          },
        })
        .then((res) => {
          // eslint-disable-next-line max-nested-callbacks
          const options = res?.data?.searchUser?.map((item) => ({
            label: `${item.userName}/${item.phone}`,
            value: `${item.userName}/${item.phone}`,
            used: item.used,
          }))
          // 当搜索负责人输入框有值时展示选项，没有值不展示
          setHeadOptions(value ? options : [])
          searchUsersValues.current = res?.data?.searchUser
        })
    },
    { wait: 500 },
  )
  // 负责人搜索变化函数
  const handleSearch = (value) => {
    run(value)
  }

  // 搜索框选中时回调函数
  const onSelect = (data: string) => {
    allowClearShow.current = false
    const newDataArr = data.split('/')
    const newData = { userName: newDataArr[0], phone: newDataArr[1] }
    const newValue = searchUsersValues.current?.filter((item) => {
      return item.userName === newData.userName
    })
    form.setFields([
      { name: 'userName', value: newData.userName },
      { name: 'phone', value: newData.phone },
      { name: 'userId', value: newValue![0]?.userId },
    ])
  }

  // 当搜索负责人失去焦点回调函数
  const onBlur = () => {
    allowClearShow.current && form.resetFields(['phoneOrUserName'])
    allowClearShow.current = true
  }

  // 搜索框获得焦点回调函数
  const onFocusCallBack = () => {
    const orgIdFormValue = form.getFieldValue(['orgId'])
    if (!orgIdFormValue) {
      message.error('请先输入所属组织名称再搜索！')
    }
  }

  // 获取组织名称树
  const [refetch, treeDataResponse] = useOrgTreeLazyQuery()
  // 当模式为编辑时刚进编辑表单就请求一次，新增模式不请求接口
  useEffect(() => {
    mode === 'EDIT' &&
      refetch({
        variables: {
          id: initialValues?.orgGroupId,
        },
      })
  }, [refetch])

  // 生成树状结构数据
  let treeData = useMemo(() => {
    try {
      return treeTraverse(JSON.parse(treeDataResponse?.data?.orgTree?.treeJson || '[]'))
    } catch {
      return []
    }
  }, [treeDataResponse])

  // 组织架构名称变化回调函数
  const onChange = (values) => {
    // 每次改变组织架构名称，组织名称重置
    form.setFieldsValue({ orgId: undefined })
    // 当组织架构为 '全部' 高亮时不发请求
    if (values === null) {
      return
    } else {
      refetch({
        variables: {
          id: values,
        },
      })
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      // 当为新增模式时显示全部高亮，编辑模式则显示默认的初始值
      initialValues={{ ...initialValues, orgGroupId: mode === 'CREATE' ? null : initialValues?.orgGroupId }}>
      <Form.Item name="id" hidden>
        <Input />
      </Form.Item>
      <Form.Item hidden name="userId">
        <Input />
      </Form.Item>
      <Form.Item hidden name="phone">
        <Input />
      </Form.Item>
      <Form.Item hidden name="userName">
        <Input />
      </Form.Item>
      <Form.Item label="商户名称" name="name" rules={[{ required: true, message: '请输入商户名称!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="所属组织架构名称"
        name="orgGroupId"
        rules={[{ required: true, message: '请选择组织架构名称!' }]}>
        <Select disabled={mode === 'EDIT' ? true : false} onChange={onChange}>
          {baseOptions.concat(OrgGroupListResponse?.data?.listOrgGroupOption || []).map((item, index) => (
            <Select.Option key={index} value={item.value as any}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate>
        {({ getFieldValue }) => {
          const newOrgIdData = getFieldValue(['orgId'])
          const orgGroupId = getFieldValue(['orgGroupId'])
          orgIdData.current = newOrgIdData
          return (
            <Form.Item label="所属组织名称" name="orgId" rules={[{ required: true, message: '请选择组织名称!' }]}>
              <TreeSelect
                // 当新增模式且有组织架构名称是才能选组织名称，当为编辑模式时全部禁止
                disabled={mode === 'CREATE' && orgGroupId ? false : mode === 'EDIT' ? true : true}
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
      {/* 新增时显示 input 框，修改时默认显示文本，点击重新选择之后显示 input 框 */}
      {showInput ? (
        <Form.Item shouldUpdate>
          {({ getFieldValue }) => {
            const orgId = getFieldValue(['orgId'])
            return (
              <Form.Item
                label="搜索负责人"
                name="phoneOrUserName"
                rules={[{ required: true, message: '请输入姓名或手机号!' }]}>
                <AutoComplete
                  placeholder="请输入姓名或手机号"
                  // 当组织名称不存在时不能搜索负责人
                  disabled={!orgId ? true : false}
                  allowClear
                  onBlur={onBlur}
                  onSearch={handleSearch}
                  onSelect={onSelect}
                  onFocus={onFocusCallBack}>
                  {headOptions?.map((item, index) => {
                    return (
                      <Option disabled={nameUsedType[item.used]} key={index} value={item?.value}>
                        {item?.label}
                      </Option>
                    )
                  })}
                </AutoComplete>
              </Form.Item>
            )
          }}
        </Form.Item>
      ) : (
        <>
          <Text>负责人：{`${initialValues?.userName}  ${initialValues?.phone}`}</Text>
          <Button
            type="link"
            onClick={() => {
              setShowInput(true)
            }}>
            重新选择
          </Button>
        </>
      )}
    </Form>
  )
})

export default NewForm
