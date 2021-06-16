import React from 'react';
import './App.css';
import Router from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

// import Login from './pages/login/index'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <QueryClientProvider client={client}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        {/* <Login /> */}
      </ConfigProvider>
    </div>
  );
}

export default App;
