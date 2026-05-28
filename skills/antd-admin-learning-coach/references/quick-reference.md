# Quick Reference

## Trigger Use Cases
- Plan next phase tasks and milestones.
- Explain React concepts with Vue comparison.
- Decide between frontend/backend route-source implementations.
- Introduce or evolve Nitro mock/BFF architecture.
- Prepare commit checkpoints and documentation updates.

## Mandatory Doc Sync
- Always sync these docs when relevant:
  - `TASKS.md`: task states, new milestones
  - `KNOWLEDGE.md`: learned concepts and migration notes
  - `INDUSTRY-PRACTICES.md`: generalized practices and rationale
  - `NITRO-KNOWLEDGE.md`: Nitro-specific learnings
  - `ADMIN-SYSTEM-ELEMENTS.md`: capability coverage
  - `GIT-WORKFLOW-LOG.md`: commit habits and change history
  - `API-CONTRACT.md`: request/response schema changes
  - `ADR.md`: architecture decisions
  - `ENV-RELEASE.md`: environment/release changes

## Architecture Guardrails
- Routing: keep a single normalized route meta shape.
- State: no server data in Zustand unless there is a strong reason.
- Services: pages call services/hooks, not raw request clients.
- Contracts: mock responses must match contract before UI usage.

## Commit Prompt Heuristics
- Suggest commit when one milestone is testable end-to-end.
- Keep commit scope focused: one concern per commit where practical.
- Use Conventional Commit style.

