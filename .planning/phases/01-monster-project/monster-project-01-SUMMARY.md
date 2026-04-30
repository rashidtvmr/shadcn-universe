---
phase: monster-project
plan: 01
title: Turborepo scaffold and animate-ui integration
---

## Summary of Completed Tasks

| Task | Description | Commit |
|------|-------------|--------|
| 1 | Initialize Git, PNPM, add Turbo, create `apps/` and `packages/` directories, add `turbo.json` and `pnpm-workspace.yaml`. | `27ce163` |
| 2 | Copy `animate-ui` repository into `apps/animate-ui`, rename package to `@monster/animate-ui`, add placeholder workspace packages (`@workspace/eslint-config`, `@workspace/typescript-config`), add `next` dependency, adjust scripts to use `next dev`/`next build` targeting `apps/www`. | `795bc07` |
| 3 | Create `.planning/monster-repos-todo.json` containing the full list of repository URLs. | `e3e021b` |

## Deviations
- Added placeholder workspace packages to satisfy `@workspace/*` dev dependencies (Rule 2 – auto‑added missing critical functionality).
- Modified `animate-ui` build scripts to use `next` directly and removed inner `turbo.json` to avoid configuration conflicts (Rule 1 – auto‑fixed bug).

## Next Steps
- Implement **Plan 01‑03**: clone the first ~100 repositories from the todo list, extract their UI components, and copy them into `packages/components/batch-01/` with proper import path adjustments.
- Verify the monorepo builds and the components are importable from `apps/animate-ui`.
