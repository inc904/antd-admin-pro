# Git 提交规范与项目更新记录

更新时间：2026-05-28

## 1. 文档目标
- 记录项目每次有效迭代的变更，形成可追溯历史。
- 训练企业常见 Git 协作习惯（分支、提交粒度、提交信息、回滚思路）。
- 作为“何时提交 commit”的执行标准，便于我在合适时机提醒你提交。

## 2. 推荐工作流（个人项目按企业习惯）

### 2.1 分支策略（简化版）
- `main`：稳定分支，只放可运行版本。
- `feat/*`：功能分支，例如 `feat/router-layout`。
- `fix/*`：缺陷修复分支，例如 `fix/menu-highlight`。
- `docs/*`：文档分支（可选）。

### 2.2 提交粒度
- 一次 commit 只做一件事，避免“功能 + 重构 + 格式化”混在一起。
- 能拆就拆：`路由改造`、`权限接入`、`文档更新` 分开提交更清晰。

### 2.3 提交信息规范（Conventional Commits）
- `feat:` 新功能
- `fix:` 缺陷修复
- `refactor:` 重构（不改行为）
- `docs:` 文档变更
- `style:` 纯样式或格式（不影响逻辑）
- `test:` 测试相关
- `chore:` 构建、脚本、依赖等杂项

示例：
- `feat(router): migrate app to route-driven layout`
- `feat(auth): add route guard for unauthenticated users`
- `docs(plan): add nitro learning and implementation track`

## 3. 提交前检查清单（每次 commit 前）
- [ ] 变更范围清晰（本次只解决一个目标）
- [ ] 本地 `pnpm lint` 通过
- [ ] 本地 `pnpm build` 通过（至少功能节点提交时）
- [ ] 删除临时 `console.log` 和无用文件
- [ ] 同步更新文档（至少 `TASKS.md` 与相关知识文档）
- [ ] 自测关键路径（本次变更涉及的页面或接口）

## 4. 何时应该提交 commit（执行规则）
- 完成一个“可验证小里程碑”就提交，不要攒太多改动。
- 推荐触发点：
  - 路由改造完成并可跑通
  - 权限闭环打通
  - 一个页面模板（列表/表单）完成
  - Nitro 新增一组 API 并联调通过
  - 一次文档体系结构性更新完成
- 我会在这些触发点主动提醒你提交，并给出建议的 commit message。

## 5. 回滚与风险控制（基础）
- 回滚优先使用“新增修复 commit”，避免粗暴重写历史。
- 未确认前不要 `push --force` 到主分支。
- 大改动前先提交一个“基线 commit”，确保随时可回退。

## 6. 提交记录（持续维护）
| 日期 | 分支 | 类型 | Commit Message | 变更摘要 | 验证 |
| --- | --- | --- | --- | --- | --- |
| 2026-05-28 | (待定) | docs | docs(workflow): add git workflow and update log guide | 新增 Git 工作流与更新记录文档 | 文档检查通过 |
| 2026-05-28 | (待定) | docs | docs(governance): add api contract, adr, env release, and skill docs | 补充企业治理文档与项目 skill 机制 | 文档检查通过 |

## 7. 每周复盘模板
```md
## Git 周复盘（Week X）
- 本周提交次数：
- 最有价值的 1 次提交：
- 最乱的 1 次提交（为什么）：
- 下周改进（提交粒度/命名/分支习惯）：
```

## 8. 你和我如何协作提交
- 你说“可以提交了”后，我会：
  - 先帮你检查改动范围是否干净；
  - 给出 1~3 条候选 commit message；
  - 提醒你是否需要拆分为多次 commit；
  - 再执行提交命令（如果你明确授权）。
- 你不说“提交”，我默认先继续开发与整理，不主动提交。
