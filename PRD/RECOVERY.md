# RECOVERY

## Core Rule

If validation fails, do not immediately make a broad change. Diagnose first.

## Failure Loop

When a validation step fails:

1. Read the full failure output.
2. Identify failure category: implementation bug / content mismatch / UI layout / missing dependency / unclear requirement / scope conflict.
3. Compare against PRD.md, PLAN.md, and VALIDATION.md.
4. Make the smallest reversible fix.
5. Re-run the smallest relevant validation first.
6. Update PROGRESS.md.

## Retry Limit

If the same validation fails after 3 distinct attempts:

골이 진단·검토에 진입하고 자체 수정을 멈춘다. `/goal pause`는 Claude Code가 지원하지 않으므로 사람 결정을 기다린다. 필요 시 `/goal clear` 후 재설정.

Report:

- failing command or criterion
- three attempted fixes
- why each failed
- safest next options
- whether user/product guidance is needed

## Scope Control

Do not:

- rewrite unrelated modules
- change public APIs unless PLAN.md says so
- change database schema unless SDD.md says so
- remove or skip tests to make checks pass
- silence errors without understanding them
- introduce broad refactors while fixing a narrow issue
- replace the validation command itself
- add login, server persistence, dashboard, multiple minigames, or AI API integration unless PLAN.md is updated and approved
- change the target audience back to early elementary users

## Reorientation Rule

Before changing approach:

1. Reread the goal statement.
2. Reread Non-goals in PRD.md.
3. Reread current milestone in PLAN.md.
4. Confirm the next edit directly serves the current milestone.

## Revert Rule

Only revert your own last failed change if:

- it made validation worse,
- it introduced unrelated changes,
- or it conflicts with PRD / PLAN.

Do not revert user changes unless explicitly instructed.
