// import { useState } from 'react'
import {
  ConfigProvider
  // theme as antdTheme
} from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Layout from '@/layouts/index'
import { Outlet } from 'react-router'
function App() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  // theme={{
  //       // 🔑 根据状态动态决定切换哪种算法
  //       algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm

  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Outlet />
      </Layout>
    </ConfigProvider>
  )
}

export default App
