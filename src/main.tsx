import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import './index.css'
import App from './App.tsx'

dayjs.locale('zh-cn')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
