import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, Table, Space, TableColumnProps, message, Modal } from 'antd'
import { useHistory } from 'react-router-dom'
import withSubRoutes from '@/components/hoc/withSubRoutes'
import { COMMODITY_VARIETY_MANAGEMENT } from '@/router/config/base-data/path'
import ActionGroup from '@/components/action-group'
import BaseCard from '@/components/base-card'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  PageCategoryDetailsDocument,
  useCategoryDetailLazyQuery,
  useCountCategoryQuery,
  useDeleteCategoryMutation,
} from '@/graphql/operations/base-data/__generated__/classification-management'
import Filter from './components/filter/index'
import EditModal from './components/edit-modal/index'
import { EditMode, InitialValues } from './components/edit-modal/components/new-or-edit-form'

interface IProps {}

const CommodityManagement: FC<IProps> = () => {
  const editMode = useRef<EditMode>(null)
  const [initialValues, setInitialValues] = useState<any>()
  const [showEditModal, setShowEditModal] = useState(false)

  const history = useHistory()
  const commodityTypeId = useRef<number>(0)
  const categoryName = useRef<string>('')

  /* Filter取值函数 */
  const getFilterValues = (values) => {
    commodityTypeId.current = values.commodityTypeId
    categoryName.current = values.categoryName
  }

  const { tableProps, form, submit, reset, refresh } = useAsyncTable({
    gql: PageCategoryDetailsDocument,
    gqlKey: 'pageCategoryDetails',
    isSingleParams: true,
    gqlParamKey: 'pageCategoryInput',
  })

  /* 删除商品接口 */
  const [deleteCategory] = useDeleteCategoryMutation()
  const [queryCategoryDetail, { data: categoryDetail }] = useCategoryDetailLazyQuery()
  const { data: countCategory, refetch: refetchCountCategory } = useCountCategoryQuery()
  /* 跳转到管理品种页面 */
  const handleJump = useCallback(
    (Id: number) => {
      history.push(`${COMMODITY_VARIETY_MANAGEMENT}/${Id}`)
    },
    [history],
  )

  /* 点击编辑，打开模态框 */
  const handleEditModal = (mode: EditMode, id?: number) => {
    editMode.current = mode
    if (mode === 'editMode' && id) {
      /* 获取详情数据 */
      queryCategoryDetail({ variables: { categoryId: id } })
    } else {
      setInitialValues({ categorySort: countCategory?.countCategory })
    }
    setShowEditModal(true)
  }
  useEffect(() => {
    if (categoryDetail?.categoryDetail) {
      setInitialValues(categoryDetail?.categoryDetail)
      setShowEditModal(true)
    }
  }, [categoryDetail])
  useEffect(() => {
    if (countCategory?.countCategory) {
      setInitialValues({ categorySort: countCategory?.countCategory })
    }
  }, [countCategory])

  /* 编辑or新增改动数据成功 */
  const onEditSuccess = () => {
    refresh()
    refetchCountCategory()
  }

  /* table头部标题数据 */
  const columns: TableColumnProps<any>[] = [
    {
      title: '商品类型',
      dataIndex: 'commodityTypeName',
    },
    {
      title: '商品分类',
      dataIndex: 'categoryName',
    },
    {
      title: '排序',
      dataIndex: 'categorySort',
    },
    {
      width: 600,
      title: '操作',
      dataIndex: '_',
      render(_, record) {
        /* 商品类型Id */
        let commodityTypeId = record.commodityTypeId
        /* 商品分类Id */
        let categoryId: number = record.categoryId
        return commodityTypeId === 1 ? (
          <ActionGroup
            actions={[
              {
                children: '编辑',
                onClick: () => {
                  handleEditModal('editMode', categoryId)
                },
              },
              {
                children: ' 管理品种/产地',
                onClick: () => {
                  handleJump(categoryId)
                },
              },
              {
                children: '删除',
                onClick: () => {
                  warning(categoryId)
                },
              },
            ]}
          />
        ) : (
          <ActionGroup
            actions={[
              {
                children: '编辑',
                onClick: () => {
                  handleEditModal('editMode', categoryId)
                },
              },
              {
                children: '删除',
                onClick: () => {
                  warning(categoryId)
                },
              },
            ]}
          />
        )
      },
    },
  ]

  /* 点击删除时弹窗，且判断你是否删除 */
  const warning = (Id) => {
    Modal.confirm({
      title: '是否确定删除',
      onOk: () => {
        sureToDelete(Id)
      },
    })
  }

  /* 确定删除时的回调 */
  const sureToDelete = (Id) => {
    deleteCategory({
      variables: {
        categoryId: Id,
      },
    })
      .then(() => {
        message.success('删除成功')
        onEditSuccess()
      })
      .catch(() => {
        message.error('删除失败')
      })
  }

  const editModalInitialValues = useMemo(() => {
    const nameLocale: InitialValues['nameLocale'] = []
    const locale = ['zh-CN', 'en-US', 'th-TH', 'vi-VN']
    locale.forEach((v) => {
      const localeItem = initialValues?.nameLocale?.find((item) => item.locale === v)
      if (localeItem) {
        nameLocale.push(localeItem)
      } else {
        nameLocale.push({
          locale: v,
          name: '',
        })
      }
    })
    return { ...initialValues, nameLocale }
  }, [initialValues])
  return (
    <div style={{ padding: '20px' }}>
      <BaseCard>
        <Filter submit={submit} reset={reset} form={form} getFilterValues={getFilterValues} />
        <Space size={24}>
          <Button
            type="primary"
            ghost
            onClick={() => {
              handleEditModal('addMode')
            }}>
            新增分类
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table rowKey="categoryId" bordered columns={columns} {...tableProps} />
      </BaseCard>
      <EditModal
        visible={showEditModal}
        setVisible={setShowEditModal}
        mode={editMode.current}
        initialValues={editModalInitialValues}
        onSuccess={onEditSuccess}
      />
    </div>
  )
}

export default withSubRoutes(CommodityManagement)
