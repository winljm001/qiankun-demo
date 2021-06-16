# JsonFilter

配置式筛选组件，基于 antd Form 组件二次封装。

## 何时使用

页面包含控件式筛选时。

## 代码演示

[异步数据 - 字段联动](https://durian-test.hjgpscm.com/international_delivery/license_verification)

**代码**

```tsx
import React, { useRef, memo } from 'react'
import { FormInstance } from 'antd'
import JsonFilter, { defineConfig } from '@/components/JsonFilter'
import { selectList as queryProductSelect } from '@/services/mods/product/selectList'
import { selectList as queryProductPlaceSelect } from '@/services/mods/productPlace/selectList'

interface FilterParams {
  productId: number
  productPlaceId: number
}
interface IProps<Values> {}

const Filter: React.FC<IProps<FilterParams>> = () => {
  const filter = useRef<FormInstance<FilterParams>>()

  const config = defineConfig<FilterParams>({
    fieldsData: {
      productId: null,
      productPlaceId: null,
    },
    onCreated(filterIns) {
      filter.current = filterIns
    },
    formItems: [
      {
        label: '商品',
        name: 'productId',
        key: 'productId',
        initialValue: null,
        control: {
          controlType: 'REMOTE_SELECT',
          fetch: queryProductSelect,
          enableDisabled: false,
          normalize: (data) => [{ label: '全部', value: null }].concat(data),
        },
      },
      {
        label: '产地',
        name: 'productPlaceId',
        key: 'productPlaceId',
        shouldUpdate: true,
        initialValue: null,
        control: {
          controlType: 'REMOTE_SELECT',
          fetch: queryProductPlaceSelect,
          fetchable() {
            return !!filter.current?.getFieldValue('productId')
          },
          params() {
            return {
              queryParams: {
                productId: filter.current?.getFieldValue('productId'),
              },
            }
          },
          enableDisabled: false,
          normalize: (data) => [{ label: '全部', value: null }].concat(data),
          onOptionsChange(options) {
            filter.current?.setFieldsValue({ productPlaceId: options[0]?.value })
          },
        },
      },
    ],
    onFilter(params) {
      console.log(params)
    },
  })
  return <JsonFilter {...config} />
}

export default memo(Filter)
```

## API

#### defineConfig

```ts
const config = defineConfig(options)
```

生成配置工厂函数（为了支持 TS 类型推断）

### options

继承自 antd FormProps（不支持 form，initialValues 属性），并包含部分自定义属性

#### options.formItems

控件列表

```ts
(FormItemObjectConfig | () => FormItemObjectConfig)[]
```

_FormItemObjectConfig_

继承自 antd FormItemProps，并包含部分自定义属性

```ts
interface FormItemObjectConfig extends FormItemProps {
  // 组件key
  key: React.Key
  // 为true时不会渲染和收集（hidden会收集字段值）
  excluded?: boolean
  // 控件配置
  control?: ControlConfig
  // 自定义渲染函数-未内置的控件可以通过customRender实现（注意：该控件不会受配置影响）
  customRender?: (form: FormInstance) => React.ReactNode
}
```

_ControlConfig_

控件配置，各控件详细配置见各控件类型定义

```ts
type ControlConfig =
  | InputControlConfig
  | SelectControlConfig
  | RemoteSelectControlConfig
  | TreeSelectConfig
  | DatePickerConfig
  | CustomControlConfig
// 输入框
type InputControlConfig = {
  controlType: 'INPUT'
} & InputControlProps
// 下拉框
type SelectControlConfig = {
  controlType: 'SELECT'
} & SelectControlProps
// 异步数据下拉框
type RemoteSelectControlConfig = {
  controlType: 'REMOTE_SELECT'
} & RemoteSelectControlProps
// 树形下拉选项控件
type TreeSelectConfig = {
  controlType: 'TREE_SELECT'
} & TreeSelectControlProps
// 时间选择控件
type DatePickerConfig = {
  controlType: 'DATE'
} & DatePickerControlConfig
// 自定义控件
type CustomControlConfig = {
  controlType: 'CUSTOM'
  render: () => React.ReactElement
}
```

#### options.actions

筛选操作项，可选，默认为查询和重置按钮

```ts
ButtonProps[]
```

#### options.fieldsData

筛选值，必填，键值对格式

```
Partial<Values>
```

#### options.onCreated

用于暴露 FormInstance

```ts
(filter: FormInstance) => void
```

#### options.onFilter

筛选事件

```ts
(values: Values) => void
```

## Tips

- JsonFilter 只支持受控模式，fieldsData 必传
- 若控件之间有依赖关系可用 shouldUpdate 实现

## 待实现功能

- 支持数据自动转换
- 适配 useList hook
