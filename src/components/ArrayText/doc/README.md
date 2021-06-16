# ArrayText

展示数组值。

## 何时使用

当字段为数组型，初始只显示部分值，鼠标移入时显示全部值时。

## 代码演示

[效果](https://durian-test.hjgpscm.com/setting/user)

**代码**

```tsx
import React from 'react'
import ArrayText from '@/components/ArrayText'

const Demo: React.FC<{}> = () => {
  const text = ['testEDit', 'testEDit', 'test——mapping', 'test1']
  return <ArrayText text={text} />
}
```

## API

<style>
table {
  table-layout: fixed;
  width: 100%;
}
table th {
  text-align: left
}
table th:first-of-type {
  width: 20%;
}
table th:nth-of-type(2) {
  width: 40%;
}
table th:nth-of-type(3) {
  width: 20%;
}
table th:nth-of-type(4) {
  width: 40%;
}
</style>

| 参数      | 说明                                 | 类型            | 默认值  |
| --------- | ------------------------------------ | --------------- | ------- |
| text      | 字段值                               | string[]        | -       |
| limit     | 字段值初始显示个数                   | number          | 1       |
| nullText  | 字段值为 null undefined 时显示的内容 | React.ReactNode | null    |
| width     | 文本最大宽度                         | number\|string  | auto    |
| maxHeight | 全部内容展示最大高度                 | number\|string  | 300px   |
| ellipsis  | 文本超出 maxWidth 后是否显示...      | bool            | true    |
| split     | 值分割符                             | React.ReactNode | \<br /> |
