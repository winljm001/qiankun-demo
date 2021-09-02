import React from 'react'
import './App.less'
import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Router from './router'
import gqlClient from '@/graphql/client'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={gqlClient}>
        <ConfigProvider locale={zhCN}>
          <Router />
        </ConfigProvider>
      </ApolloProvider>
    </div>
  )
}

export default App
