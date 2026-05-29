# Project Agent Guide

## Goal
- Build this repository as a learn-by-doing React admin system aligned with enterprise practices.
- Prioritize coaching quality, structured milestones, and documentation sync.

## Primary Skill
- Use local skill: `skills/antd-admin-learning-coach/SKILL.md`.
- Load `skills/antd-admin-learning-coach/references/quick-reference.md` when planning or revising workflow.

## Mandatory Documentation Sync
- Keep these files synchronized with meaningful project progress:
  - `docs/TASKS.md`
  - `docs/KNOWLEDGE.md`
  - `docs/INDUSTRY-PRACTICES.md`
  - `docs/NITRO-KNOWLEDGE.md`
  - `docs/ADMIN-SYSTEM-ELEMENTS.md`
  - `docs/GIT-WORKFLOW-LOG.md`
  - `docs/API-CONTRACT.md`
  - `docs/ADR.md`
  - `docs/ENV-RELEASE.md`
- Documentation ownership rule:
  - Assistant updates docs by default.
  - User reviews and confirms.
  - Do not ask user to manually edit docs unless explicitly requested.

## Architecture Guardrails
- Keep dual route-source support: `frontend` and `backend`.
- Keep state boundaries:
  - `Zustand` for client global state.
  - `React Query` for server state.
  - `Nitro` for local mock/BFF.

## Commit Coaching
- Suggest commit when a milestone is testable.
- Follow Conventional Commit style and record key updates in `docs/GIT-WORKFLOW-LOG.md`.
