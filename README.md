# twAIve-2026

Graduation project workspace configured with:

- GitHub Spec Kit for spec-driven development
- goaljaby for PRD-to-goal validation/recovery scaffolding

## Installed Tooling

### Spec Kit

Spec Kit files live under `.specify/`, with Codex skills under `.agents/skills/speckit-*`.

Suggested flow:

1. `$speckit-constitution`
2. `$speckit-specify`
3. `$speckit-plan`
4. `$speckit-tasks`
5. `$speckit-implement`

### goaljaby

The goaljaby Claude Code plugin structure is included at:

- `.claude-plugin/plugin.json`
- `commands/goaljaby.md`
- `skills/goaljaby/`
- `.agents/skills/goaljaby/`
- `docs/goaljaby/`

Use goaljaby when a PRD should become operational goal documents:

- `VALIDATION.md`
- `RECOVERY.md`
- `PLAN.md`
- `PROGRESS.md`
- `goal-command.md`
