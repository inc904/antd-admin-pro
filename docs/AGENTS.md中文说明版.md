# AGENTS.md 中文说明版（供项目所有者阅读）

## 项目目标（Goal）

* 将本仓库建设为一个符合企业级实践的 React 后台管理系统学习项目。
* 通过“边做边学”的方式掌握企业级前端开发。
* 优先关注教学质量、阶段性里程碑以及文档同步。

---

## 核心能力（Primary Skill）

项目默认使用以下本地学习技能：

```text
skills/antd-admin-learning-coach/SKILL.md
```

当进行项目规划、任务调整或学习路线设计时，需要参考：

```text
skills/antd-admin-learning-coach/references/quick-reference.md
```

该技能是整个项目学习体系的核心指导。

---

## 文档同步要求（Mandatory Documentation Sync）

项目开发过程中，需要保持以下文档与实际进度同步：

* docs/TASKS.md
* docs/KNOWLEDGE.md
* docs/INDUSTRY-PRACTICES.md
* docs/NITRO-KNOWLEDGE.md
* docs/ADMIN-SYSTEM-ELEMENTS.md
* docs/GIT-WORKFLOW-LOG.md
* docs/API-CONTRACT.md
* docs/ADR.md
* docs/ENV-RELEASE.md

文档不应长期滞后于代码实现。

每当项目产生有意义的进展时，都应该同步更新相关文档。

---

## 文档维护职责（Documentation Ownership Rule）

默认职责分工如下：

### 助手负责

* 更新项目文档
* 整理知识沉淀
* 记录设计决策
* 维护开发日志
* 同步学习成果

### 用户负责

* 阅读文档
* 审核文档
* 确认文档内容

原则上：

除非用户明确要求，否则不要把文档维护工作交给用户手动完成。

---

## 架构约束（Architecture Guardrails）

项目必须长期保持以下架构原则。

---

### 路由来源双模式支持

必须同时支持：

```text
frontend
backend
```

两种路由来源模式。

即：

* 前端本地路由配置模式
* 后端动态返回路由模式

后续开发不得破坏这种双模式设计。

---

### 状态管理职责边界

客户端全局状态统一使用：

```text
Zustand
```

例如：

* 用户信息
* 权限信息
* 主题配置
* 全局设置

---

服务端状态统一使用：

```text
React Query
```

例如：

* API 请求结果
* 列表数据
* 详情数据
* 缓存数据

---

本地 Mock 与 BFF 统一使用：

```text
Nitro
```

例如：

* Mock API
* 本地数据模拟
* BFF 转发层
* 接口适配层

---

原则：

不要混淆这些工具的职责边界。

每个工具只负责自己擅长的问题。

---

## 提交指导（Commit Coaching）

当项目达到一个可以验证的阶段成果时：

应该主动建议进行一次 Git 提交。

提交规范：

### Commit Message

遵循：

```text
Conventional Commit
```

规范。

例如：

```text
feat(user): implement user list page

fix(auth): handle token expiration

docs(knowledge): add react-query notes
```

---

### 提交时机

一个好的提交应该代表：

* 一个完整功能
* 一个可测试功能
* 一个明确阶段成果

而不是大量零散修改的堆积。

---

### 提交记录同步

每次重要提交后：

应同步更新：

```text
docs/GIT-WORKFLOW-LOG.md
```

记录：

* 本次目标
* 关键变更
* 学习收获
* 后续计划

形成完整的项目成长记录。

---

## 总体设计思想

这个项目不仅仅是在开发一个后台系统。

更是在模拟企业真实项目的完整开发过程。

因此项目中需要同时关注：

### 技术实现

例如：

* React
* TypeScript
* Ant Design
* Zustand
* React Query
* Nitro

---

### 工程实践

例如：

* Git 工作流
* 文档管理
* API 契约
* 架构设计
* ADR 决策记录
* 环境配置管理

---

### 知识沉淀

不仅要实现功能。

还要持续记录：

* 为什么这样设计
* 学到了什么
* 哪些经验值得复用

让项目逐步形成自己的知识库。

---

## 一句话总结

这个项目不仅是在写代码。

而是在按照企业级项目标准：

一边开发后台系统，

一边建立工程能力、架构思维和知识体系。
