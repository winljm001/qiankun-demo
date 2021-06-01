# DataSuspense

处理异步数据渲染逻辑。

## 何时使用

当你需要处理异步数据加载中，加载异常，加载成功等状态渲染逻辑时。

## 代码演示

[效果](https://durian-test.hjgpscm.com/setting/organization)

**代码**

```tsx
import React, { useCallback } from 'react'
import DataSuspense from '@/components/DataSuspense'

interface OrgDetail {
  id: number
  name: string
}
interface IProps {
  id: number
}

const DataSuspenseDemo: React.FC<IProps> = ({ id }) => {
  const load = useCallback(() => {
    return new Promise<OrgDetail>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({
            id,
            name: `I am test${id}`,
          })
        } else {
          reject()
        }
      }, 3000)
    })
  }, [id])
  return (
    <DataSuspense load={load}>
      {({ data }) => {
        return <>{JSON.stringify(data)}</>
      }}
    </DataSuspense>
  )
}

export default DataSuspenseDemo
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

| 参数     | 说明                                 | 类型                                        | 默认值 |
| -------- | ------------------------------------ | ------------------------------------------- | ------ |
| load     | 获取异步数据请求，需返回一个 Promise | () => Promise\<DataT>                       | -      |
| children | 渲染函数                             | (props: { data: DataT }) => React.ReactNode | -      |

**_DataT_**

异步数据的数据类型
