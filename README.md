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

## Supabase Auth Setup

The site is deployed on GitHub Pages, so user accounts need an external auth/database service.
This project uses Supabase Auth.

1. Create a Supabase project.
2. Open `supabase-config.js` and replace:
   - `YOUR_SUPABASE_PROJECT_URL`
   - `YOUR_SUPABASE_ANON_KEY`
3. In Supabase, open the SQL editor and run `supabase-schema.sql`.
4. In Authentication settings, add this GitHub Pages URL to allowed redirect/site URLs:
   - `https://kindarabbit.github.io/twAIve-2026/`

User email/password accounts are stored in Supabase Auth. Display names are stored in the `profiles` table.
