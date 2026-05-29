import type { ItemType } from "antd/es/menu/interface";
import type { AppRouteObject } from "@/router/types";

const joinPath = (parent: string, child: string) =>
  child.startsWith("/") ? child : `${parent}/${child}`.replace(/\/+/g, "/");

export function routesToMenuItems(routes: AppRouteObject[], parent = ""): ItemType[] {
  console.log("routes", routes);
  console.log(
    "routesFlatMap",
    routes.flatMap((r) => r),
  );
  return routes.flatMap((r) => {
    if (!r.path || r.index || r.path === "*") return [];
    const fullPath = joinPath(parent || "/", r.path);
    if (r.meta?.hideInMenu) return [];

    const children = r.children ? routesToMenuItems(r.children, fullPath) : [];
    return [
      {
        key: fullPath,
        label: r.meta?.title ?? r.path,
        children: children.length ? children : undefined,
      },
    ];
  });
}
