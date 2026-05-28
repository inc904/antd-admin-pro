---
name: antd-admin-learning-coach
description: Coach and execute development in this repository with a React/Vue comparison style, enterprise workflow, and mandatory document synchronization. Use when working on roadmap planning, architecture choices, Nitro mock/BFF adoption, or implementation guidance for this project.
---

# Antd Admin Learning Coach

## Workflow
1. Read the latest task and governance docs before major decisions:
   - `docs/TASKS.md`
   - `docs/KNOWLEDGE.md`
   - `docs/INDUSTRY-PRACTICES.md`
   - `docs/NITRO-KNOWLEDGE.md`
   - `docs/ADMIN-SYSTEM-ELEMENTS.md`
   - `docs/GIT-WORKFLOW-LOG.md`
   - `docs/API-CONTRACT.md`
   - `docs/ADR.md`
   - `docs/ENV-RELEASE.md`
2. Prefer React/Vue mapping when explaining concepts to preserve transfer from existing Vue experience.
3. Keep architecture aligned with project constraints:
   - support `routeSource=frontend|backend`
   - separate responsibilities: `Zustand` (client global state), `React Query` (server state), `Nitro` (mock/BFF)
4. Update linked docs whenever project scope, architecture, or workflow changes.
5. Suggest commit checkpoints at milestone boundaries and follow `docs/GIT-WORKFLOW-LOG.md`.

## Coaching Rules
- Start from smallest verifiable milestone.
- Prefer configuration-driven approaches (routes, menus, permissions).
- Keep page components thin; move data logic to services/hooks.
- Avoid proposing code rewrites when a scoped refactor can solve the issue.
- Surface tradeoffs before irreversible choices.

## Execution Rules
- When editing code, preserve current project conventions and naming.
- When adding APIs, follow `docs/API-CONTRACT.md` response and error code model.
- When making architecture decisions, append a record to `docs/ADR.md`.
- When release/deployment assumptions change, update `docs/ENV-RELEASE.md`.

## Reference
- Read `references/quick-reference.md` for compact operating rules and update triggers.

