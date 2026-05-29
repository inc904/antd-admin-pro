// import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router";
import { Layout, Menu } from "antd";

import { menuRoutes } from "@/router";
import { routesToMenuItems } from "./helper";

const { Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`
// }))

// const items = [
//   { key: "/welcome", icon: "UserOutlined", label: "欢迎" },
//   { key: "/dashboard", icon: "VideoCameraOutlined", label: "仪表盘" },
//   { key: "/dashboard/workspace", icon: "UploadOutlined", label: "工作台" },
//   { key: "/monitor", icon: "UserOutlined", label: "监控" },
// ];

export default function TtSider() {
  const items = routesToMenuItems(menuRoutes);
  console.log("items", items);
  // const [theme, setTheme] = useState<"light" | "dark">("dark");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      // onBreakpoint={(broken) => {
      //   console.info(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.info(collapsed, type);
      // }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]} // 当前路由高亮
        onClick={({ key }) => navigate(key)} // 点击菜单跳转
        items={items}
      />
    </Sider>
  );
}
