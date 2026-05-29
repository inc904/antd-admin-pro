import { createBrowserRouter, Navigate } from "react-router";

import App from "../App";
import { routeSourceMode } from "@/config/app";
import type { AppRouteObject } from "./types";
import type { RouteObject } from "react-router";

import Login from "@/pages/login";
import AuthGuard from "./auth-guard";
import NotFound from "@/pages/error-page/404";
import Error403 from "@/pages/error-page/403";

import Welcome from "@/pages/welcome";
import Monitor from "@/pages/dashboard/monitor";
import Workspace from "@/pages/dashboard/workspace";
import About from "@/pages/about";
import UserManagement from "@/pages/system/user";

export const menuRoutes: AppRouteObject[] = [
  {
    path: "welcome",
    Component: Welcome,
    meta: { title: "欢迎", icon: "UserOutlined", hideInMenu: false },
  },
  {
    path: "dashboard",
    meta: { title: "仪表盘", icon: "UserOutlined", hideInMenu: false },
    children: [
      {
        index: true,
        Component: Monitor,
      },
      {
        path: "monitor",
        Component: Monitor,
        meta: { title: "监控", icon: "UserOutlined", hideInMenu: false },
      },
      {
        path: "workspace",
        Component: Workspace,
        meta: { title: "工作台", icon: "UserOutlined", hideInMenu: false },
      },
    ],
  },
  {
    path: "system",
    meta: { title: "系统管理", icon: "UserOutlined", hideInMenu: false },
    children: [
      {
        path: "user",
        Component: UserManagement,
        meta: { title: "用户管理", icon: "UserOutlined", hideInMenu: false },
      },
    ],
  },
  {
    path: "about",
    Component: About,
    meta: { title: "关于", icon: "UserOutlined", hideInMenu: false },
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
      { index: true, element: <Navigate to="welcome" replace /> },
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
