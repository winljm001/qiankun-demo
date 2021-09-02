import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import gqlClient from '@/graphql/client'
import Router from './router'

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
