import React, { useState, useCallback, useRef, useMemo, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Form, Input, Select, TreeSelect, Spin, Space, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useQueryDataUpdate from '@/hooks/useQueryDataUpdate'
import { isDef } from '@/utils/typeof'
import {
  useUserManageQuery,
  useListOrgGroupOptionQuery,
  useCreateUserMangeMutation,
  useUpdateUserManageMutation,
  useOrgAllTreeLazyQuery,
} from '@/graphql/operations/base-data/__generated__/staff-management'
import { useOrgTreeLazyQuery } from '@/graphql/operations/base-data/__generated__/organization-management'
import { treeTraverse } from '../filter'

export interface ModalUserFormInstance {
  show: (p: { id?: number; callback: () => void }) => void
}

const dropdownStyle = { width: 10, maxHeight: 400, overflow: 'auto' }

/**
 * 用户表单弹窗
 * @description 通过组件实例方法 show 传入 id 加载已存在的用户信息，若没有 id 就是新增
 */
const ModalUserForm = forwardRef<ModalUserFormInstance>((_, ref) => {
  const [state, setState] = useState({
    visible: false,
    edit: false,
  })
  const CallbackRef = useRef<() => void>(() => {})
  const [form] = Form.useForm()
  const { loading: loadingUserManage, refetch: refetchUserManage } = useUserManageQuery({
    skip: true,
  })
  const { data: dataListOrgGroupOption, loading: loadingListOrgGroupOption } = useListOrgGroupOptionQuery()
  const [fetchOrgTree, { data: dataOrgTree, loading: loadingOrgTreeLazy }] = useOrgTreeLazyQuery()
  const [fetchOrgAllTree, { data: dataOrgAllTree, loading: loadingOrgAllTree }] = useOrgAllTreeLazyQuery()
  const [fetchCreateUserMange, { loading: loadingCreateUserMange }] = useCreateUserMangeMutation()
  const [fetchUpdateUserManage, { loading: loadingUpdateUserManage }] = useUpdateUserManageMutation()

  // 这里嵌套有点厉害，为了解决一下问题
  // 1. useQueryDataUpdate 可以实现异步请求回来的数据可以手动更改，在每次打开弹窗的时候，如果是新增，需要清空已加载的组织数据
  // 2. 监听 loadingOrgTreeLazy 是为了解决「第一次新增选了一个有组织的数据，关闭弹窗，第二次打开再次选择已组织的数据，由于 dataOrgTree?.orgTree.treeJson 没有变动无法触发 useQueryDataUpdate 数据更新，就一直是空数组」
  const orgTreeDataSource = useMemo(() => {
    if (loadingOrgTreeLazy) {
      return []
    }
    return treeTraverse(JSON.parse(dataOrgTree?.orgTree?.treeJson || '[]'))
  }, [dataOrgTree?.orgTree.treeJson, loadingOrgTreeLazy])
  const [orgTreeData, setOrgTreeData] = useQueryDataUpdate(orgTreeDataSource, false)
  const orgAllTree = useMemo(() => {
    return treeTraverse(JSON.parse(dataOrgAllTree?.orgAllTree?.treeJson || '[]'))
  }, [dataOrgAllTree?.orgAllTree?.treeJson])

  useImperativeHandle(ref, () => ({
    show: ({ id, callback }) => {
      setState({
        visible: true,
        edit: isDef(id),
      })
      CallbackRef.current = callback

      fetchOrgAllTree()

      if (id) {
        refetchUserManage({
          id,
        }).then(({ data: { userManage } }) => {
          fetchOrgTree({
            variables: {
              id: userManage.orgGroupId,
            },
          })

          form.setFieldsValue({
            id: userManage.id,
            phone: userManage.phone,
            userAccount: userManage.userAccount,
            name: userManage.name,
            orgGroupId: userManage.orgGroupId,
            orgId: userManage.orgId,
            relOrgIds: userManage.relOrgIds || [],
          })
        })
      } else {
        setOrgTreeData([])
        form.resetFields()
      }
    },
  }))

  const onCancel = useCallback(() => {
    setState((s) => ({
      ...s,
      visible: false,
    }))
  }, [])

  const onOk = () => {
    form.validateFields().then((values) => {
      const doFetch = () => {
        const baseParams = {
          input: {
            ...values,
          },
        }

        if (values.id) {
          return fetchUpdateUserManage({
            variables: baseParams,
          })
        }

        return fetchCreateUserMange({
          variables: baseParams,
        }).then(({ data }) => {
          Modal.success({
            title: '添加用户成功，首次登陆需修改初始密码',
            content: (
              <>
                <p>账号：{values.phone}</p>
                <p>密码：{data?.createUserMange}</p>
                <p>
                  <CopyToClipboard
                    text={`添加用户成功，首次登陆需修改初始密码\n账号：${values.phone}\n密码：${data?.createUserMange}`}
                    onCopy={(_, result) => {
                      if (result) {
                        message.success('已复制到粘贴板')
                      }
                    }}>
                    <a>
                      <Space>
                        <CopyOutlined />
                        复制
                      </Space>
                    </a>
                  </CopyToClipboard>
                </p>
              </>
            ),
          })
        })
      }

      doFetch().then(() => {
        CallbackRef.current()

        setState((s) => ({
          ...s,
          visible: false,
        }))
      })
    })
  }

  const onChangeSelect = useCallback(
    (v: number) => {
      form.resetFields(['orgId'])
      fetchOrgTree({
        variables: {
          id: v,
        },
      })
    },
    [fetchOrgTree, form],
  )

  return (
    <Modal
      maskClosable={false}
      title={`${state.edit ? '编辑' : '新增'}员工`}
      visible={state.visible}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loadingUserManage || loadingCreateUserMange || loadingUpdateUserManage}>
      <Spin spinning={loadingUserManage}>
        <Form form={form} layout="vertical">
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>

          <Form.Item label="组织架构名称" name="orgGroupId" rules={[{ required: true, message: '请选择组织架构' }]}>
            <Select
              placeholder="请选择组织架构"
              disabled={state.edit || loadingListOrgGroupOption}
              onChange={onChangeSelect}
              options={dataListOrgGroupOption?.listOrgGroupOption || []}
            />
          </Form.Item>

          <Form.Item name="orgId" label="组织名称" rules={[{ required: true, message: '请选择组织' }]}>
            <TreeSelect
              allowClear
              disabled={state.edit || orgTreeData.length === 0 || loadingOrgTreeLazy}
              dropdownMatchSelectWidth={false}
              dropdownStyle={dropdownStyle}
              treeData={orgTreeData}
              placeholder="请选择组织名称"
            />
          </Form.Item>

          <Form.Item
            label="联系电话"
            name="phone"
            rules={[
              { required: true, message: '请填写手机号码' },
              { pattern: /^1(3|4|5|7|8|9)\d{9}$/, message: '请填写正确的手机号码' },
            ]}>
            <Input placeholder="请填写手机号码" />
          </Form.Item>

          <Form.Item label="用户账号" name="userAccount" rules={[{ required: true, message: '请填写用户账号' }]}>
            <Input disabled={state.edit} placeholder="请填写用户账号" />
          </Form.Item>

          <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请填写姓名' }]}>
            <Input maxLength={15} disabled={state.edit} placeholder="请填写姓名" />
          </Form.Item>

          <Form.Item label="关联组织" name="relOrgIds">
            <TreeSelect
              allowClear
              treeCheckable
              showCheckedStrategy={TreeSelect.SHOW_ALL}
              disabled={orgAllTree.length === 0 || loadingOrgAllTree}
              dropdownMatchSelectWidth={false}
              dropdownStyle={dropdownStyle}
              treeData={orgAllTree}
              placeholder="请选择关联组织"
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  )
})

export default memo(ModalUserForm)
