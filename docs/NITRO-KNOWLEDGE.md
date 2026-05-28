# Nitro 知识点笔记（学习 + 项目实战）

更新时间：2026-05-28

## 1. 文档目标
- 目标 1：系统学习 Nitro，而不是只把它当临时 mock 工具。
- 目标 2：在本项目中把 Nitro 用成可演进的本地 BFF/mock 层。
- 目标 3：未来接入真实后端时，前端页面代码尽量不改。

## 2. 当前项目中的 Nitro 定位
- 当前定位：本地 mock/BFF。
- 服务范围：菜单、权限、用户、列表查询、表单提交等 API。
- 协作边界：
  - 前端页面通过 `services` 调接口。
  - React Query 管接口数据缓存与同步。
  - Zustand 管本地全局状态。
  - Nitro 提供接口来源与服务端规则模拟。

## 3. 学习路线（分阶段）

### 阶段 A：基础入门
- [ ] N-A1 理解 Nitro 是什么（全栈 server toolkit）
- [ ] N-A2 接入 Vite 项目（`nitro/vite` 插件）
- [ ] N-A3 理解 `serverDir` 与目录约定
- [ ] N-A4 创建最小 API 路由并联调前端

### 阶段 B：路由与请求处理
- [ ] N-B1 文件系统路由（`server/api/*.ts`）
- [ ] N-B2 动态路由参数与 query 处理
- [ ] N-B3 请求方法区分（GET/POST/PUT/DELETE）
- [ ] N-B4 统一响应结构与错误结构

### 阶段 C：鉴权与权限模拟
- [ ] N-C1 鉴权中间件（token 校验）
- [ ] N-C2 用户角色信息返回
- [ ] N-C3 动态菜单接口（匹配 routeSource=backend）
- [ ] N-C4 按角色返回权限点

### 阶段 D：进阶能力
- [ ] N-D1 route rules 基础（缓存规则）
- [ ] N-D2 KV storage 基础概念
- [ ] N-D3 插件机制（runtime hooks）
- [ ] N-D4 server entry 概念（可选）

### 阶段 E：工程化与演进
- [ ] N-E1 为 Nitro 路由补最小测试
- [ ] N-E2 明确 mock -> 真实后端替换策略
- [ ] N-E3 记录版本策略与升级注意事项

## 4. 必会知识点清单
- [ ] K-N1 `vite.config.ts` 中 Nitro 插件接入方式
- [ ] K-N2 `nitro.config.ts` 核心配置项（`serverDir`、`routeRules`）
- [ ] K-N3 `defineHandler` 的输入输出语义
- [ ] K-N4 文件路径与 URL 的映射关系
- [ ] K-N5 中间件执行顺序与用途
- [ ] K-N6 统一错误码与错误响应
- [ ] K-N7 缓存策略基础（SWR/缓存命中认知）
- [ ] K-N8 部署目标概念（Node/Serverless/Edge）

## 5. 代码落点（持续更新）
- 预期目录：
  - `server/api/auth/*`
  - `server/api/system/*`
  - `server/api/user/*`
  - `server/api/list/*`
  - `server/middleware/*`
- 前端对接：
  - `src/services/*` 统一请求 Nitro API
  - `src/features/*` 通过 React Query 消费数据

## 6. 知识卡片模板（复制使用）
```md
### 主题（例如：Nitro 文件路由）
- 任务关联：
- 概念：
- 在项目中的落点：
- 最小示例：
- 常见坑：
- 自测方式：
- 我的理解：
```

## 7. 与 Vue 经验对照
| 你已有经验 | Nitro 对应理解 |
| --- | --- |
| Vue 项目里本地 mock 服务 | Nitro 可作为更标准的本地 BFF/mock |
| Nuxt 服务端路由观念 | Nitro 路由是更底层、可独立使用的服务能力 |
| 前后端联调前接口占位 | Nitro 能让占位接口更贴近真实后端协作 |

## 8. 迭代日志
| 日期 | 变更 | 备注 |
| --- | --- | --- |
| 2026-05-28 | 文档初始化 | 建立 Nitro 学习与项目落地主线 |

