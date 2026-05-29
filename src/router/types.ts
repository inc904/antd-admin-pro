// src/router/types.ts
import type { RouteObject } from "react-router";

export type RouteMeta = {
  title: string;
  icon?: string;
  hideInMenu?: boolean;
};

export type AppRouteObject = Omit<RouteObject, "children"> & {
  meta?: RouteMeta;
  children?: AppRouteObject[];
};
