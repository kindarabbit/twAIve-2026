# VALIDATION: twAIve AI 윤리 스토리 학습 게임

## Required Checks

골 완료로 표시하기 전 반드시 실행한다. 프로젝트 스택이 정해진 뒤 해당 명령을 실제 명령으로 교체한다.

```powershell
git status --short
```

구현 스택이 추가된 뒤에는 아래 검증도 반드시 실행한다.

```powershell
npm run build
npm test
```

## Targeted Checks

각 마일스톤 종료 시 실행한다.

```powershell
git status --short
rg "Acceptance Criteria|AI 윤리|선택|피드백" PRD
```

## Manual Verification

- 시작 화면만 보고도 대상이 중·고등학생용 AI 윤리 스토리 게임임을 이해할 수 있는지 확인한다.
- 첫 에피소드를 처음부터 끝까지 플레이한다.
- 각 선택지의 피드백이 정답 암기가 아니라 판단 이유를 설명하는지 확인한다.
- 퀴즈/미니게임이 핵심 MVP 구현을 방해하지 않도록 후순위로 남아 있는지 확인한다.
- 문체가 너무 유아적이지 않고 중·고등학생에게 맞는지 검토한다.

## Visual Verification

- [ ] Desktop viewport checked
- [ ] Mobile viewport checked
- [ ] Text does not overlap
- [ ] 선택지 버튼이 좁은 화면에서도 읽히고 클릭 가능하다.
- [ ] Screenshot saved at: `artifacts/screenshots/`

## Acceptance Criteria Mapping

| PRD criterion | Validation method | Status |
| --- | --- | --- |
| 첫 화면에서 중·고등학생 대상 AI 윤리 스토리 게임이라는 목적이 명확히 드러난다. | 시작 화면 수동 검토 및 스크린샷 확인 | Pending |
| 최소 1개의 완결된 에피소드가 시작, 전개, 선택, 결과, 학습 요약 구조를 가진다. | 전체 플레이스루 확인 | Pending |
| 에피소드에는 최소 3개 이상의 의미 있는 선택 지점이 있다. | 시나리오 데이터 또는 화면 흐름 확인 | Pending |
| 각 선택 지점은 윤리적 판단 이유를 설명하는 피드백을 제공한다. | 선택지별 피드백 문구 검토 | Pending |
| 최소 1개 이상의 AI 윤리 개념을 다룬다. | 에피소드 주제와 학습 요약 검토 | Pending |
| 퀴즈와 미니게임은 후순위 확장으로 분리된다. | PLAN.md 범위 및 UI 메뉴 확인 | Pending |
| 중·고등학생에게 맞는 톤을 유지한다. | 대사와 설명 문체 리뷰 | Pending |
| 데스크톱과 모바일 폭에서 주요 UI가 겹치지 않는다. | 브라우저 viewport 검증 | Pending |

## Not Done If

- Any required check fails
- Scope changed outside PLAN.md
- Public API changed without explicit approval
- Manual playthrough still fails
- Artifact is generated but not inspected
- Test was deleted or skipped to pass the check
- Error was silenced without diagnosis
- Story choices are decorative and do not change feedback or consequence
- UI text overlaps or becomes unreadable on mobile
- The MVP becomes quiz-only and loses the story-choice learning loop
