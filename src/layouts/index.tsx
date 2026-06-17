import React from 'react'
import { Layout, theme } from 'antd'
import TtSider from './tt-sider'
import TtHeader from './tt-header'
import TtContent from './tt-content'

const { Footer } = Layout

const Page = ({ children }: { children?: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const currentYear = new Date().getFullYear()



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TtSider />
      <Layout>
        <TtHeader colorBgContainer={colorBgContainer} />
        <TtContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG}>
          {children}
        </TtContent>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©{currentYear} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Page
