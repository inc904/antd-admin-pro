type RouteSourceMode = 'frontend' | 'backend'

export const routeSourceMode: RouteSourceMode = import.meta.env.VITE_ROUTE_SOURCE_MODE as RouteSourceMode
