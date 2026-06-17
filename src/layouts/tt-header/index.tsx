import { Layout } from 'antd'
import UserMenu from '../components/user-menu'
import TtBreadcrumb from '../components/tt-breadcrumb'
import { MenuUnfoldOutlined } from '@ant-design/icons'

const { Header } = Layout

export default function TtHeader({ colorBgContainer }: { colorBgContainer: string }) {
  return <Header style={{
    padding: 0,
    background: colorBgContainer,

    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }}
  >
    <div className="w-full flex justify-between items-center mx-4 ">

      <div className="left flex items-center gap-3">
        <MenuUnfoldOutlined style={{ fontSize: '20px', color: '#08c' }} />
        <TtBreadcrumb />
      </div>
      <div className="right">
        <UserMenu />
      </div>
    </div>

  </Header>
}
