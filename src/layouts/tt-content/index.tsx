import { Layout } from 'antd'

const { Content } = Layout

export default function TtContent({
  children,
  colorBgContainer,
  borderRadiusLG
}: {
  children: React.ReactNode
  colorBgContainer: string
  borderRadiusLG: number
}) {
  return (
    <Content style={{ minWidth: 0, margin: '24px 16px 0' }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}>
        {children}
      </div>
    </Content>
  )
}
