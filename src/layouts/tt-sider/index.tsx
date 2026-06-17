// import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router";
import { Layout, Menu } from "antd";

import { menuRoutes } from "@/router";
import { routesToMenuItems } from "./helper";
import { useState } from "react";

const { Sider } = Layout;


export default function TtSider() {
  const items = routesToMenuItems(menuRoutes);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false)


  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  return (
    <Sider
      collapsible collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        selectedKeys={[pathname]} // 当前路由高亮
        onClick={({ key }) => navigate(key)} // 点击菜单跳转
        items={items}
        mode="inline"
        inlineCollapsed={collapsed}
      />
    </Sider>
  );
}
