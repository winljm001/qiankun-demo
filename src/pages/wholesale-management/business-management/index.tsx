import React, { FC, useRef, useState } from 'react'
import { Button, Table, TableColumnProps } from 'antd'
import { useUpdateLayoutEffect } from 'ahooks'
import BaseCard from '@/components/base-card'
import ActionGroup from '@/components/action-group'
import {
  usePageMerchantQuery,
  useMerchantQuery,
} from '@/graphql/operations/wholesale-management/__generated__/business-management'
import Filter from './components/filter'
import Modal from './components/modal'
import type { InitialValuesQuery } from './type'

interface IProps {}
// 新增 or 编辑模式类型
export type Mode = 'EDIT' | 'CREATE'

/**
 * 商户列表页
 */
const BusinessManagement: FC<IProps> = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<InitialValuesQuery>()
  const [modeText, setModeText] = useState<Mode>('CREATE')
  const [pageCurrent, setPageCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const name = useRef<string>('')
  const phone = useRef<string>('')
  const userName = useRef<string>('')

  // 获取Filter组件的值函数
  const setFilterValues = (values) => {
    phone.current = values!.phone
    userName.current = values!.userName
    name.current = values!.name
  }

  // 获取商户列表接口数据
  const businessListResponse = usePageMerchantQuery({
    variables: {
      input: {
        pageCurrent,
        pageSize,
        name: name.current,
        phone: phone.current,
        userName: userName.current,
      },
    },
  })

  // 编辑时默认表单数据接口
  const staffEditResponse = useMerchantQuery({
    variables: {
      input: {
        id: null!,
      },
    },
    skip: true,
  })

  // 列表页码变化事件
  const handleChangePage = (pageCurrent, pageSize) => {
    setShowLoading(true)
    businessListResponse
      .refetch({
        input: {
          pageCurrent,
          pageSize,
          name: name.current,
          phone: phone.current,
          userName: userName.current,
        },
      })
      .then(() => {
        setShowLoading(false)
      })
      .catch(() => {
        setShowLoading(false)
      })
  }

  // 头部查询事件
  const handleSubmit = () => {
    setShowLoading(true)
    // 当前列表页码数为 1 时去请求列表接口
    if (pageCurrent === 1) {
      businessListResponse
        .refetch({
          input: {
            pageCurrent,
            pageSize,
            name: name.current,
            phone: phone.current,
            userName: userName.current,
          },
        })
        .then(() => {
          setShowLoading(false)
        })
        .catch(() => {
          setShowLoading(false)
        })
    } else {
      // 当前页码数不为 1 时，点击查询时先重置页码数为1，再根据页码变化函数去请求列表接口
      setPageCurrent(1)
      handleChangePage(1, pageSize)
    }
  }

  // 头部重置事件
  const handleReset = () => {
    setShowLoading(true)
    businessListResponse
      .refetch({
        input: {
          pageCurrent,
          pageSize,
          name: name.current,
          phone: phone.current,
          userName: userName.current,
        },
      })
      .then(() => {
        setShowLoading(false)
        setPageCurrent(1)
        setPageSize(10)
      })
      .catch(() => {
        setShowLoading(false)
      })
  }

  // 编辑or新增改动数据成功
  const handleSuccess = () => {
    setShowLoading(true)
    businessListResponse
      .refetch({
        input: {
          pageCurrent,
          pageSize,
          name: name.current,
          phone: phone.current,
          userName: userName.current,
        },
      })
      .then(() => {
        setShowLoading(false)
      })
      .catch(() => {
        setShowLoading(false)
      })
  }

  // state更新时当模式是新增时重置表单默认值为undefined,这样先打开编辑再打开新增就不会有数据显示bug
  useUpdateLayoutEffect(() => {
    if (modeText === 'CREATE') {
      setInitialValues(undefined)
    }
  }, [modeText])

  // table表单头部标题
  const columns: TableColumnProps<any>[] = [
    {
      title: '商户名称',
      dataIndex: 'name',
    },
    {
      title: '负责人姓名',
      dataIndex: 'userName',
    },
    {
      title: '登录手机号',
      dataIndex: 'phone',
    },
    {
      title: '所属组织架构',
      dataIndex: 'orgGroupName',
    },
    {
      title: '所属组织',
      dataIndex: 'orgName',
    },
    {
      title: '操作',
      dataIndex: '_',
      render(_, record) {
        return (
          <ActionGroup
            actions={[
              {
                children: '编辑',
                onClick: () => {
                  staffEditResponse
                    .refetch({
                      input: {
                        id: record?.id,
                      },
                    })
                    .then((res) => {
                      setInitialValues(res?.data?.merchant)
                      setModeText('EDIT')
                      setVisible(true)
                    })
                },
              },
            ]}
          />
        )
      },
    },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <BaseCard>
        <Filter handleSubmit={handleSubmit} handleReset={handleReset} setFilterValues={setFilterValues} />
        <Button
          type="primary"
          ghost
          onClick={() => {
            setModeText('CREATE')
            setVisible(true)
          }}>
          新增
        </Button>
      </BaseCard>
      <BaseCard>
        <Table
          rowKey="id"
          loading={showLoading || businessListResponse?.loading}
          bordered
          dataSource={businessListResponse?.data?.pageMerchant?.records || []}
          columns={columns}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            total: businessListResponse?.data?.pageMerchant?.totalRecords,
            showTotal: (total) => `共 ${total} 记录`,
            current: pageCurrent,
            pageSize,
            onChange(page, pageSize) {
              setPageCurrent(page)
              setPageSize(pageSize!)
              handleChangePage(page, pageSize)
            },
          }}
        />
      </BaseCard>
      <Modal
        initialValues={initialValues!}
        handleSuccess={handleSuccess}
        visible={visible}
        setVisible={setVisible}
        mode={modeText}
      />
    </div>
  )
}

export default BusinessManagement
