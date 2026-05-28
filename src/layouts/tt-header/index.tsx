import { Layout } from 'antd'

const { Header } = Layout

export default function TtHeader({ colorBgContainer }: { colorBgContainer: string }) {
  return <Header style={{ padding: 0, background: colorBgContainer }}>header</Header>
}
