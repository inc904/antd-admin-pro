import { createBrowserRouter, Navigate } from "react-router";

import App from "../App";
import { routeSourceMode } from "@/config/app";
import type { AppRouteObject } from "./types";
import type { RouteObject } from "react-router";

import Login from "@/pages/login";
import AuthGuard from "./auth-guard";
import NotFound from "@/pages/error-page/404";
import Error403 from "@/pages/error-page/403";

import Home from "@/pages/home";
import Monitor from "@/pages/dashboard/monitor";
import Workspace from "@/pages/dashboard/workspace";
import About from "@/pages/about";
import UserManagement from "@/pages/system/user";
import DeptManagement from "@/pages/system/dept";

export const menuRoutes: AppRouteObject[] = [
  {
    path: "home",
    Component: Home,
    meta: { title: "首页", icon: "HomeOutlined", hideInMenu: false },
  },
  {
    path: "dashboard",
    meta: { title: "仪表盘", icon: "FundOutlined", hideInMenu: false },
    children: [
      {
        index: true,
        Component: Monitor,
      },
      {
        path: "monitor",
        Component: Monitor,
        meta: { title: "监控", icon: "", hideInMenu: false },
      },
      {
        path: "workspace",
        Component: Workspace,
        meta: { title: "工作台", icon: "", hideInMenu: false },
      },
    ],
  },
  {
    path: "system",
    meta: { title: "系统管理", icon: "SettingOutlined", hideInMenu: false },
    children: [
      {
        path: "user",
        Component: UserManagement,
        meta: { title: "用户管理", icon: "UserOutlined", hideInMenu: false },
      },
      {
        path: "dept",
        Component: DeptManagement,
        meta: { title: "部门管理", hideInMenu: false },
      },
    ],
  },
  {
    path: "about",
    Component: About,
    meta: { title: "关于", icon: "ExclamationCircleOutlined", hideInMenu: false },
  },
];

export const appRoutes: AppRouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    meta: { title: "登录", hideInMenu: true },
  },
  {
    path: "/",
    // element: <App />,
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      ...menuRoutes,
      {
        path: "403",
        Component: Error403,
        meta: { title: "403", hideInMenu: true },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
const router = createBrowserRouter(appRoutes as RouteObject[]);

const frontendRouter = router;
const backendRouter = router;

export default routeSourceMode === "frontend" ? frontendRouter : backendRouter;
