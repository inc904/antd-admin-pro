# API 契约文档（前端 + Nitro Mock + 未来后端）

更新时间：2026-05-29

## 1. 目标
- 统一前后端（含 Nitro mock）接口约定，避免“能跑但不一致”。
- 保证从 mock 切到真实后端时，页面和 hooks 基本不改。

## 2. 通用约定

### 2.1 Base URL
- 本地：`/api`
- 约定：前端通过 `src/services/*` 访问，不在页面里写死 URL。

### 2.2 统一响应结构
```json
{
  "code": 200,
  "message": "ok",
  "data": {},
  "requestId": "optional-trace-id",
  "timestamp": 1716900000000
}
```

说明：
- `code = 200` 表示成功。
- `code >= 400` 表示失败，前端统一错误处理。
- `message` 给用户或日志阅读。

### 2.3 分页结构
```json
{
  "list": [],
  "page": 1,
  "pageSize": 10,
  "total": 0
}
```

### 2.4 鉴权约定
- Header：`Authorization: Bearer <token>`
- 典型错误码：
  - `401` 未登录或 token 无效
  - `403` 无权限

## 3. 错误码规范（初版）
| code | 含义 | 前端处理 |
| --- | --- | --- |
| 200 | 成功 | 正常渲染 |
| 400 | 参数错误 | 表单提示/消息提示 |
| 401 | 未登录/登录过期 | 清理登录态并跳转登录页 |
| 403 | 无权限 | 跳转 403 或提示无权限 |
| 404 | 资源不存在 | 空态/404 提示 |
| 500 | 服务器异常 | 全局错误提示 |

## 4. 核心接口清单（第 1 版）

### 4.1 认证
- `POST /api/auth/login`
  - 入参：`{ username, password }`
  - 出参：`{ token, user }`
- `POST /api/auth/logout`
  - 出参：`{ success: true }`
- `GET /api/auth/profile`
  - 出参：`{ user, roles, permissions }`

### 4.2 菜单与权限
- `GET /api/system/menus`
  - query：`routeSource=frontend|backend`
  - 出参：菜单树（含 route meta）
- `GET /api/system/permissions`
  - 出参：权限点数组

### 4.3 示例业务列表
- `GET /api/users`
  - query：`page,pageSize,keyword,status`
  - 出参：分页结构
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

## 5. 路由元信息契约（用于动态路由）
```json
{
  "path": "/dashboard",
  "name": "Dashboard",
  "component": "dashboard/index",
  "meta": {
    "title": "仪表盘",
    "icon": "DashboardOutlined",
    "roles": ["admin", "editor"],
    "hidden": false,
    "keepAlive": false
  },
  "children": []
}
```

## 6. 与 Nitro 的关系
- Nitro mock 必须遵守本契约。
- 后续真实后端如果字段差异，需要先更新契约再改代码。
- 优先保持 `services` 层稳定，避免页面层联动改动。

## 7. 变更记录
| 日期 | 版本 | 变更 |
| --- | --- | --- |
| 2026-05-28 | v0.1 | 初始化响应结构、错误码、核心接口与动态路由契约 |
| 2026-05-29 | v0.2 | 错误码统一为 HTTP 风格（含鉴权错误码） |
