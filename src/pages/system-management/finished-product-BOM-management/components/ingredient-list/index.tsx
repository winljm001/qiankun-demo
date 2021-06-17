import React, { useState, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Button, Table, Input, Space } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import BaseCard from '@/components/BaseCard'

import type { IngredientListModalFruitInstance } from './modal-fruit'
import IngredientListModalFruit from './modal-fruit'
import IngredientListModalFoodAccessories from './modal-food-accessories'
import type { IngredientListModalFoodAccessoriesInstance } from './modal-food-accessories'

import './index.less'

type IngredientItem = defs.commodityService.CommodityBomDetailListVO

export interface IngredientListInstance {}

interface IngredientListProps {
  /**
   * 默认列表数据
   */
  defaultValue?: IngredientItem[]

  /**
   * 是否是编辑模式
   * @default false
   */
  edit?: boolean
}

/**
 * 配料清单
 */
const IngredientList = forwardRef<IngredientListInstance, IngredientListProps>(
  ({ edit = false, defaultValue = [] }, ref) => {
    const IngredientListModalFruitRef = useRef<IngredientListModalFruitInstance>(null)
    const IngredientListModalFoodAccessoriesRef = useRef<IngredientListModalFoodAccessoriesInstance>(null)
    const [ingredientList, setIngredientList] = useState<IngredientItem[]>(defaultValue)

    // 向外暴露方法
    useImperativeHandle(ref, () => ({}))

    const column: ColumnType<IngredientItem>[] = [
      {
        title: '商品类型',
      },
      {
        title: '商品分类',
      },
      {
        title: '商品名称',
      },
      {
        title: '商品数量',
        render: () => {
          return <Input />
        },
      },
      {
        title: '商品单位',
        render: () => {
          return <span>根据商品类型判断</span>
        },
      },
      edit
        ? {
            title: '操作',
            dataIndex: 'action',
            render: () => {
              return <span>删除</span>
            },
          }
        : null,
    ].filter(Boolean)

    const filterByCommodityTypeId = (typeId: 1 | 2 | 3) =>
      ingredientList.reduce((pre, cur) => {
        if (cur.commodityTypeId === typeId) {
          pre.push(cur.commodityId)
        }
        return pre
      }, [] as number[])

    const genOnClickAddBtn = (t: 2 | 3) => () => {
      IngredientListModalFoodAccessoriesRef.current.show({
        type: t,
        selected: filterByCommodityTypeId(t),
        onOk: (p) => {
          setIngredientList((il) =>
            il.concat(
              p.map<IngredientItem>((item) => ({
                commodityCategoryId: item.categoryId,
                commodityCategoryName: item.categoryName,
                commodityId: item.commodityId,
                commodityName: item.commodityName,
                commodityTypeId: item.commodityTypeId,
                quantityUnit: item.unitId,
                quantityUnitName: item.unitName,
              })),
            ),
          )
        },
      })
    }

    return (
      <>
        <BaseCard title="配料清单">
          {edit ? (
            <Space className="finished-product-BOM-management-ingredient-list-btn-group">
              <Button
                type="primary"
                onClick={() => {
                  IngredientListModalFruitRef.current.show({
                    selected: filterByCommodityTypeId(1),
                    onOk: (p) => {
                      setIngredientList((il) =>
                        il.concat(
                          p.map<IngredientItem>((item) => ({
                            commodityCategoryId: item.categoryId,
                            commodityCategoryName: item.categoryName,
                            commodityId: item.commodityId,
                            commodityName: item.commodityName,
                            commodityTypeId: item.commodityTypeId,
                            quantityUnit: item.unitId,
                            quantityUnitName: item.unitName,
                          })),
                        ),
                      )
                    },
                  })
                }}>
                添加水果
              </Button>
              <Button type="primary" onClick={genOnClickAddBtn(2)}>
                添加食品
              </Button>
              <Button type="primary" onClick={genOnClickAddBtn(3)}>
                添加辅料
              </Button>
            </Space>
          ) : null}

          <Table columns={column} dataSource={ingredientList} />
        </BaseCard>

        <IngredientListModalFruit ref={IngredientListModalFruitRef} />

        <IngredientListModalFoodAccessories ref={IngredientListModalFoodAccessoriesRef} />
      </>
    )
  },
)

export default memo(IngredientList)
