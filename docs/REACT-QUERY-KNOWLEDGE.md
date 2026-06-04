# React Query 学习笔记（项目专用）

更新时间：2026-06-04

## 1. 目标
- 在本项目中正确使用 React Query 管理服务端状态。
- 形成可复用模式：`query 读取` + `mutation 提交` + `invalidate 刷新`。

## 2. 核心心智模型
- `useQuery`：读数据，会经历 `pending -> success/error`。
- `useMutation`：改数据，改完通常触发 `invalidateQueries`。
- `QueryClient`：全局缓存管理器。

## 3. 常见坑（本项目已踩）
- 初次渲染时 `data` 可能是 `undefined`，不能直接 `data.map(...)`。
- `queryFn` 返回类型不稳定，页面推导会变成 `any/unknown`。
- 同时保留旧 `useEffect/useState` 导入，导致 lint 失败。
- 声明了 `error/queryClient` 但未使用，导致 lint 失败。
- `Form.validateFields()` 的返回值类型不要硬塞泛型，优先把类型挂到 `useForm<T>()`。
- 列配置抽到单独文件后，不要直接依赖组件内 state，改用回调注入。

## 4. 最小可用写法（推荐）
```tsx
const { data = [], isLoading, isError, error } = useQuery<Api.User.UserItem[]>({
  queryKey: ["userList"],
  queryFn: reqGetUserList,
});

const tableData = data.map((item) => ({ ...item, key: String(item.id) }));
```

## 5. 与当前项目的对齐
- Provider 入口：`src/main.tsx`
- Query 页面：`src/pages/system/user/index.tsx`
- 请求层：`src/services/request.ts`
- 业务 API：`src/services/user.ts`

## 6. Day3 目标拆分（React Query部分）
- [x] D3-RQ-1 用户列表改为 `useQuery` 读取并稳定渲染
- [x] D3-RQ-2 新增用户改为 `useMutation`
- [x] D3-RQ-3 提交成功后 `invalidateQueries(["userList"])`
- [x] D3-RQ-4 编辑用户复用同一弹窗并刷新列表
- [x] D3-RQ-5 无后端时通过 service 层本地 mock 降级维持流程可用

## 7. 本项目当前模式（已落地）
- 列表读取：`useQuery(["userList"], reqGetUserList)`
- 表单提交：
  - `create` -> `reqCreateUser`
  - `edit` -> `reqUpdateUser`
- 成功后：`invalidateQueries({ queryKey: ["userList"] })`
- 无服务端时：service 层回退到 `mockUserList`

## 8. 复盘模板
```md
## React Query 复盘
- 我今天接入了：
- 我踩到的坑：
- 我是怎么修复的：
- 下次我会直接怎么做：
```
