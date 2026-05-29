import { createBrowserRouter, Navigate } from "react-router";

import App from "../App";

import Login from "@/pages/login";
import NotFound from "@/pages/error-page/404";
import Welcome from "@/pages/welcome";
import Monitor from "@/pages/dashboard/monitor";
import Workspace from "@/pages/dashboard/workspace";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "welcome", Component: Welcome },
      {
        path: "dashboard",
        children: [
          { index: true, element: <Navigate to="monitor" replace /> },
          { path: "monitor", Component: Monitor },
          { path: "workspace", Component: Workspace },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const frontendRouter = router;
const backendRouter = router;
const mode = import.meta.env.VITE_ROUTE_SOURCE_MODE;
export default mode === "frontend" ? frontendRouter : backendRouter;
