import { useState } from 'react'
import { ConfigProvider, theme as antdTheme, Button } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import TestPage from '@/pages/test'
import Layout from '@/layouts/index'
function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        // 🔑 根据状态动态决定切换哪种算法
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
      }}>
      <Layout>
        <TestPage />
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>切换主题</Button>
      </Layout>
    </ConfigProvider>
  )
}

export default App
