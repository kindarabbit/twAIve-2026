# PLAN: twAIve AI 윤리 스토리 학습 게임

## Goal

중·고등학생이 AI 윤리 상황을 스토리 속 선택지로 경험하고, 선택 결과와 피드백을 통해 핵심 개념을 학습하는 웹 기반 MVP를 구현한다.

## Source Documents

- PRD.md (`PRD/PRD.md`)
- VALIDATION.md
- RECOVERY.md

## Milestone 1: MVP 범위와 콘텐츠 구조 고정

- Scope: 첫 에피소드 주제, 대상 연령 톤, 후순위 기능을 명확히 정리한다.
- Completion: PRD의 In Scope, Out of Scope, Acceptance Criteria가 구현 기준으로 사용할 수 있을 만큼 구체적이다.
- Validation: PRD.md와 VALIDATION.md를 읽고 MVP가 퀴즈/미니게임이 아닌 선택 기반 스토리 게임으로 고정됐는지 확인한다.

## Milestone 2: 앱 기본 구조와 첫 화면 구현

- Scope: 프로젝트 스택을 정하고 시작 화면, 기본 레이아웃, 반응형 기준을 만든다.
- Completion: 사용자가 첫 화면에서 대상, 목적, 시작 버튼을 이해할 수 있다.
- Validation: 데스크톱/모바일 폭에서 시작 화면 텍스트와 버튼이 겹치지 않는다.

## Milestone 3: 선택 기반 스토리 엔진 구현

- Scope: 장면, 대사, 선택지, 다음 장면 또는 결과로 이어지는 최소 데이터 구조를 구현한다.
- Completion: 최소 3개 선택 지점을 포함한 1개 에피소드가 끝까지 진행된다.
- Validation: 전체 플레이스루가 막히지 않고 선택 결과가 화면에 반영된다.

## Milestone 4: AI 윤리 피드백과 학습 요약 구현

- Scope: 각 선택에 판단 이유 피드백을 붙이고, 종료 화면에 핵심 AI 윤리 개념 요약을 제공한다.
- Completion: 사용자는 자신의 선택이 왜 윤리적으로 좋은지/위험한지 설명을 읽을 수 있다.
- Validation: 피드백이 단순 정답/오답 표시가 아니라 이유 중심인지 검토한다.

## Milestone 5: 최종 검증과 발표용 데모 정리

- Scope: 빌드, 수동 플레이스루, 반응형 화면, README 또는 데모 안내를 정리한다.
- Completion: 발표자가 처음부터 끝까지 안정적으로 시연할 수 있다.
- Validation: VALIDATION.md의 Required Checks와 Manual Verification을 완료한다.

## Final Completion Criteria

- [ ] All milestones complete
- [ ] All checks in VALIDATION.md pass
- [ ] No scope violations
- [ ] PROGRESS.md updated
