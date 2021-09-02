import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import 'dayjs/locale/zh-cn'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
