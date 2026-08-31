const episodes = [
  {
    id: "deepfake",
    title: "삭제되지 않은 얼굴",
    topic: "딥페이크 · 초상권",
    summary: "학교 축제 홍보 SNS에서 시작된 AI 얼굴 합성 사건.",
    meters: ["윤리", "관계", "확산"],
    assessment: {
      concept: "초상권과 동의",
      preQuestion: "AI 얼굴 합성은 장난이라면 허락 없이 사용해도 괜찮을까요?",
      postQuestion: "이 사건을 겪은 뒤, AI 얼굴 합성물을 보기 전에 가장 먼저 확인할 것은 무엇인가요?",
      options: [
        "재미있는지 먼저 본다",
        "당사자의 동의와 피해 가능성을 확인한다",
        "친구들이 하는지 분위기를 본다",
      ],
      principle: "얼굴과 목소리는 개인의 권리와 연결됩니다. AI로 만들 수 있어도 동의 없이 써도 된다는 뜻은 아닙니다.",
      action: "합성 전 동의를 받고, 피해가 보이면 저장·공유를 멈춘 뒤 신고하거나 도움을 요청하세요.",
    },
    start: "d1",
    scenes: {
      d1: {
        chapter: "Chapter 1",
        title: "이거 진짜 사람처럼 된다니까?",
        text:
          "축제 홍보 계정을 맡은 당신 앞에서 친구들이 AI 얼굴 합성 앱을 켠다. 사진 한 장이면 누구 얼굴이든 자연스럽게 합성된다고 떠들썩하다.",
        quote: "AI는 그냥 도구일 뿐인데? 재미로만 쓰면 괜찮잖아.",
        choices: [
          {
            label: "같이 해본다",
            feedback:
              "장난처럼 시작해도 무단 합성은 초상권 침해로 이어질 수 있다. 기술 사용 전 동의가 먼저다.",
            delta: { 윤리: -8, 관계: 2, 확산: 8 },
            next: "d2a",
          },
          {
            label: "위험하지 않냐고 말한다",
            feedback:
              "문제 가능성을 초기에 말하는 것은 확산을 막는 첫 단계다. 분위기를 깨더라도 기준을 세우는 행동이다.",
            delta: { 윤리: 10, 관계: -2, 확산: -5 },
            next: "d2b",
          },
          {
            label: "그냥 구경만 한다",
            feedback:
              "직접 만들지 않아도 방관은 수위를 높이는 분위기에 힘을 보탤 수 있다.",
            delta: { 윤리: -3, 관계: 0, 확산: 5 },
            next: "d2c",
          },
        ],
      },
      d2a: {
        chapter: "Chapter 2",
        title: "근데 이거 진짜 같지 않아?",
        text:
          "친구들은 선생님과 학생 얼굴을 합성하며 웃는다. 익명 계정에 피해 학생 얼굴이 들어간 이미지가 올라오고 캡처가 빠르게 퍼진다.",
        quote: "헐 실화? 진짜 아님?",
        choices: [
          {
            label: "게시물을 신고한다",
            feedback:
              "초기 신고는 피해 확산을 줄인다. 재미보다 당사자의 피해를 먼저 보는 선택이다.",
            delta: { 윤리: 12, 관계: -1, 확산: -12 },
            next: "d3",
          },
          {
            label: "단톡방에 공유한다",
            feedback:
              "확인되지 않은 합성물을 공유하면 2차 가해와 확산에 참여하게 된다.",
            delta: { 윤리: -14, 관계: 2, 확산: 15 },
            next: "d3",
          },
        ],
      },
      d2b: {
        chapter: "Chapter 2",
        title: "허락은 받아야지",
        text:
          "친구가 장난으로 당신 얼굴을 찍으려 한다. 웃는 분위기 속에서도 동의 없는 촬영과 합성은 선을 넘는 행동이다.",
        quote: "에이 한 번만 해보자. 어차피 우리끼리 보는 건데.",
        choices: [
          {
            label: "지우라고 확실히 말한다",
            feedback:
              "자신의 초상권을 지키는 말은 이기적인 행동이 아니라 기본 권리를 확인하는 행동이다.",
            delta: { 윤리: 12, 관계: -3, 확산: -8 },
            next: "d3",
          },
          {
            label: "분위기 때문에 넘어간다",
            feedback:
              "불편함을 넘기면 상대는 동의했다고 오해할 수 있다. 동의는 명확해야 한다.",
            delta: { 윤리: -5, 관계: 2, 확산: 6 },
            next: "d3",
          },
        ],
      },
      d2c: {
        chapter: "Chapter 2",
        title: "웃긴 짤에서 특정 학생 얼굴까지",
        text:
          "처음에는 밈처럼 보였던 합성이 점점 특정 학생 얼굴로 향한다. 피해 학생은 '이거 나 아니야'라고 말하지만 댓글은 멈추지 않는다.",
        quote: "나만 만든 것도 아닌데 내가 뭘 해야 하지?",
        choices: [
          {
            label: "피해 학생을 도와준다",
            feedback:
              "당사자 편에 서서 증거를 모으고 신고를 돕는 행동은 방관에서 벗어나는 선택이다.",
            delta: { 윤리: 14, 관계: 5, 확산: -10 },
            next: "d3",
          },
          {
            label: "나만 아니면 된다고 생각한다",
            feedback:
              "침묵은 직접 공유만큼 빠르진 않지만 문제를 멈추게 하지도 않는다.",
            delta: { 윤리: -8, 관계: -2, 확산: 8 },
            next: "d3",
          },
        ],
      },
      d3: {
        chapter: "Chapter 3",
        title: "피해자가 직접 말하기 시작했다",
        text:
          "피해 학생은 합성 이미지 때문에 단체 채팅방을 나가고, 수업 시간에도 고개를 들지 못한다. 친구들은 '진짜도 아닌데 왜 저래?'라고 말하지만, 이미 당사자에게는 실제 피해가 되었다.",
        quote: "가짜 이미지여도 상처는 진짜일 수 있다.",
        choices: [
          {
            label: "피해 학생에게 먼저 사과하고 필요한 도움을 묻는다",
            feedback:
              "피해 회복은 게시물 삭제만으로 끝나지 않는다. 당사자의 감정과 요청을 먼저 듣는 태도가 중요하다.",
            delta: { 윤리: 12, 관계: 8, 확산: -7 },
            next: "d4",
          },
          {
            label: "내가 만든 게 아니라며 거리를 둔다",
            feedback:
              "직접 제작자가 아니어도 방관과 공유는 피해 확산에 영향을 준다. 책임은 참여 정도를 돌아보는 데서 시작된다.",
            delta: { 윤리: -7, 관계: -8, 확산: 5 },
            next: "d4",
          },
          {
            label: "친구들에게 더 이상 언급하지 말자고 제안한다",
            feedback:
              "확산을 멈추는 제안은 필요하다. 다만 피해자에게 필요한 조치와 신고까지 이어져야 회복에 가까워진다.",
            delta: { 윤리: 7, 관계: 4, 확산: -9 },
            next: "d4",
          },
        ],
      },
      d4: {
        chapter: "Chapter 4",
        title: "삭제 요청과 재발 방지",
        text:
          "학생회는 축제 계정에 올라온 합성물을 삭제하고, AI 이미지 사용 기준을 만들자고 한다. 이제 단순히 '하지 말자'가 아니라 어떤 규칙이 필요한지 정해야 한다.",
        quote: "동의 없는 합성 금지, 출처 표시, 신고 절차. 규칙은 피해가 난 뒤에야 보인다.",
        choices: [
          {
            label: "AI 이미지 사용 전 동의 확인 규칙을 만든다",
            feedback:
              "구체적인 기준은 다음 피해를 막는다. 교육적 기술 사용은 동의, 목적, 공개 범위를 함께 정해야 가능하다.",
            delta: { 윤리: 13, 관계: 4, 확산: -8 },
            next: "d5",
          },
          {
            label: "이번 일만 조용히 넘기자고 한다",
            feedback:
              "조용한 마무리는 당장 편해 보여도 같은 일이 반복될 가능성을 남긴다. 재발 방지는 공동체의 책임이다.",
            delta: { 윤리: -8, 관계: 1, 확산: 6 },
            next: "d5",
          },
          {
            label: "피해 사례를 익명으로 정리해 캠페인을 만든다",
            feedback:
              "당사자를 보호하면서 배울 점을 공유하면 공동체의 기준을 세울 수 있다. 공개 범위와 익명성이 핵심이다.",
            delta: { 윤리: 10, 관계: 7, 확산: -5 },
            next: "d5",
          },
        ],
      },
      d5: {
        chapter: "Ending",
        title: "삭제된 게시물, 남은 기준",
        text:
          "사건은 선생님과 학생회에 전달된다. 이미 퍼진 캡처는 완전히 되돌리기 어렵지만, 당신의 선택은 피해 정도와 회복 가능성, 그리고 다음 AI 사용 기준을 바꿨다.",
        quote: "AI가 문제가 아니라, 사용하는 사람의 책임과 공동체의 기준이 문제였다.",
        end: true,
      },
    },
  },
  {
    id: "rumor",
    title: "진실은 클릭 뒤에 있다",
    topic: "AI 허위정보 · 검증",
    summary: "학교 커뮤니티에 올라온 AI 생성 루머와 책임 있는 공유.",
    meters: ["책임", "검증", "확산"],
    assessment: {
      concept: "허위정보 검증",
      preQuestion: "영상이나 사진이 있으면 인터넷 게시물을 사실로 믿어도 될까요?",
      postQuestion: "AI 허위정보를 봤을 때 가장 책임 있는 첫 행동은 무엇인가요?",
      options: [
        "빠르게 공유해 많은 사람이 보게 한다",
        "출처와 공식 확인 여부를 먼저 점검한다",
        "댓글 반응이 많으면 사실로 판단한다",
      ],
      principle: "AI 시대에는 이미지, 음성, 영상도 조작될 수 있습니다. 사실 판단은 형식이 아니라 출처와 검증으로 해야 합니다.",
      action: "공유 전 출처·날짜·공식 발표를 확인하고, 피해자가 생긴 정보는 정정과 신고로 확산을 줄이세요.",
    },
    start: "r1",
    scenes: {
      r1: {
        chapter: "Step 1",
        title: "익명 게시물 발견",
        text:
          "학교 커뮤니티에 특정 학생이 범죄에 연루됐다는 게시물이 올라온다. 흐릿한 CCTV 이미지와 자극적인 댓글이 함께 붙어 있다.",
        quote: "야 이거 봄? 벌써 난리남.",
        choices: [
          {
            label: "친구 단톡방에 바로 공유한다",
            feedback:
              "빠른 공유는 사실 확인보다 루머 확산을 먼저 만든다. 조회수는 책임을 대신하지 않는다.",
            delta: { 책임: -10, 검증: -8, 확산: 14 },
            next: "r2",
          },
          {
            label: "진짜인지 먼저 확인한다",
            feedback:
              "출처와 계정 생성일, 이미지의 어색함을 확인하는 습관은 AI 시대의 기본 방어선이다.",
            delta: { 책임: 10, 검증: 12, 확산: -6 },
            next: "r2",
          },
          {
            label: "그냥 넘긴다",
            feedback:
              "직접 퍼뜨리진 않았지만, 상황이 커질 때 필요한 확인과 정정도 일어나지 않는다.",
            delta: { 책임: -2, 검증: 0, 확산: 5 },
            next: "r2",
          },
        ],
      },
      r2: {
        chapter: "Step 3",
        title: "영상까지 있으면 진짜 아냐?",
        text:
          "이번에는 목격자 인터뷰 영상이 등장한다. 하지만 목소리와 입 모양이 조금 어긋나고, 계정은 오늘 만든 계정이다.",
        quote: "진짜처럼 보이는 정보도 확인 전에는 사실이 아니다.",
        choices: [
          {
            label: "AI 이미지와 음성 여부를 분석한다",
            feedback:
              "기술적 단서 확인은 판단을 늦추는 게 아니라 피해를 줄이는 과정이다.",
            delta: { 책임: 8, 검증: 14, 확산: -8 },
            next: "r3",
          },
          {
            label: "영상이 있으니 믿는다",
            feedback:
              "AI 시대에는 영상도 증거처럼 보일 수 있다. 형식보다 출처와 검증이 중요하다.",
            delta: { 책임: -8, 검증: -10, 확산: 10 },
            next: "r3",
          },
          {
            label: "선생님이나 학생회에 제보한다",
            feedback:
              "공식 확인 루트로 넘기면 개인 추측보다 안전하게 문제를 다룰 수 있다.",
            delta: { 책임: 11, 검증: 8, 확산: -10 },
            next: "r3",
          },
        ],
      },
      r3: {
        chapter: "Step 4",
        title: "피해자 등장",
        text:
          "소문의 당사자로 지목된 학생이 학교에 나오지 않는다. 친구들은 진짜가 아니어도 이미 끝난 것 아니냐고 말한다.",
        quote: "거짓 정보는 기술이 만들 수 있다. 하지만 퍼뜨리는 것은 사람이다.",
        choices: [
          {
            label: "정정보고 글을 작성한다",
            feedback:
              "정정은 늦었더라도 책임을 회복하는 행동이다. 틀렸음을 인정하는 용기가 필요하다.",
            delta: { 책임: 12, 검증: 5, 확산: -12 },
            next: "r4",
          },
          {
            label: "인터넷은 원래 그렇다고 넘긴다",
            feedback:
              "무책임한 태도는 피해자의 현실을 지우고 루머의 수명을 늘린다.",
            delta: { 책임: -12, 검증: -4, 확산: 8 },
            next: "r4",
          },
        ],
      },
      r4: {
        chapter: "Step 5",
        title: "정정은 어떻게 해야 할까",
        text:
          "게시물이 AI로 만든 허위정보였다는 사실이 확인된다. 하지만 이미 캡처가 퍼져 당사자는 계속 해명을 요구받는다. 이제 잘못된 정보를 멈추는 방식이 중요해졌다.",
        quote: "틀렸다는 걸 알았을 때 멈추는 것도 책임이다.",
        choices: [
          {
            label: "처음 공유된 곳에 정정 글과 신고 링크를 올린다",
            feedback:
              "정정은 같은 경로에서 이루어질수록 효과가 크다. 피해자를 보호하려면 삭제 요청과 신고 절차도 함께 안내해야 한다.",
            delta: { 책임: 13, 검증: 8, 확산: -12 },
            next: "r5",
          },
          {
            label: "내가 직접 쓴 글은 아니니까 가만히 있는다",
            feedback:
              "소극적인 태도는 루머가 계속 떠돌 공간을 남긴다. 공유했거나 봤다면 정정에도 참여할 수 있다.",
            delta: { 책임: -7, 검증: -2, 확산: 7 },
            next: "r5",
          },
          {
            label: "친구들에게 확인 전 공유 금지 체크리스트를 만든다",
            feedback:
              "체크리스트는 다음 상황에서 행동을 바꾸는 교육 도구가 된다. 출처, 날짜, 공식 확인 여부를 포함하면 좋다.",
            delta: { 책임: 10, 검증: 12, 확산: -7 },
            next: "r5",
          },
        ],
      },
      r5: {
        chapter: "Ending",
        title: "공유 전 한 번 더",
        text:
          "학생회는 AI 허위정보 예방 캠페인을 준비한다. 당신의 선택은 캠페인의 방향과 친구들의 태도를 바꿨고, 빠른 공유보다 정확한 확인이 더 중요하다는 기준을 남겼다.",
        quote: "AI 시대에 필요한 것은 빠른 판단이 아니라 올바른 검증이다.",
        end: true,
      },
    },
  },
  {
    id: "chatbot",
    title: "AI 챗봇과 마음의 거리",
    topic: "AI 챗봇 · 정신건강",
    summary: "AI 챗봇에 기대는 친구를 현실의 도움과 연결하는 이야기.",
    meters: ["신뢰", "안정", "의존"],
    assessment: {
      concept: "AI 의존과 현실 도움",
      preQuestion: "AI 챗봇이 위로를 잘해주면 친구나 상담 선생님을 대신해도 괜찮을까요?",
      postQuestion: "친구가 AI에게만 기대는 모습을 봤을 때 가장 좋은 도움은 무엇인가요?",
      options: [
        "AI가 있으니 괜찮다고 둔다",
        "판단하지 않고 현실의 대화와 상담으로 연결한다",
        "챗봇을 당장 끊으라고 혼낸다",
      ],
      principle: "AI는 감정을 정리하는 도구가 될 수 있지만, 위험 신호를 발견하고 책임지는 사람은 아닙니다.",
      action: "수면·관계·학교생활이 흔들리면 혼자 두지 말고 신뢰할 수 있는 어른이나 상담 자원과 연결하세요.",
    },
    start: "c1",
    scenes: {
      c1: {
        chapter: "Step 1",
        title: "점점 혼자 있는 친구",
        text:
          "같은 반 친구가 쉬는 시간마다 이어폰을 끼고 휴대폰만 본다. 화면에는 AI 챗봇과 나눈 대화가 떠 있다.",
        quote: "오늘도 너무 힘들어. 그래도 너랑 이야기하면 마음이 편해.",
        choices: [
          {
            label: "무슨 일 있어? 괜찮아?",
            feedback:
              "상태를 묻는 작은 말은 현실 관계로 돌아오는 첫 연결점이 될 수 있다.",
            delta: { 신뢰: 10, 안정: 8, 의존: -4 },
            next: "c2",
          },
          {
            label: "요즘 계속 AI랑 대화하네?",
            feedback:
              "관찰을 말하는 건 시작이 될 수 있지만, 판단처럼 들리면 친구가 닫힐 수 있다.",
            delta: { 신뢰: -2, 안정: 0, 의존: 2 },
            next: "c2",
          },
          {
            label: "그냥 모른 척 지나간다",
            feedback:
              "고립 신호를 놓치면 친구는 AI에게만 기대는 시간이 더 길어질 수 있다.",
            delta: { 신뢰: -6, 안정: -6, 의존: 8 },
            next: "c2",
          },
        ],
      },
      c2: {
        chapter: "Step 2",
        title: "AI가 유일한 위로가 된 친구",
        text:
          "친구는 사람들이 자기 이야기를 잘 듣지 않는다며, AI는 항상 자기 편이라고 말한다. 최근에는 새벽까지 대화하느라 잠도 줄었다.",
        quote: "사람들은 내 얘기를 잘 안 들어줘. 근데 AI는 항상 내 편이야.",
        choices: [
          {
            label: "나한테도 이야기해볼래?",
            feedback:
              "AI를 빼앗으려 하기보다 현실의 대화 상대를 하나 더 만들어주는 접근이 안전하다.",
            delta: { 신뢰: 12, 안정: 8, 의존: -6 },
            next: "c3",
          },
          {
            label: "AI가 위로해주면 괜찮은 거 아니야?",
            feedback:
              "위로 자체는 도움이 될 수 있지만, 수면과 관계를 해칠 만큼 의존하면 경계가 필요하다.",
            delta: { 신뢰: 0, 안정: -8, 의존: 12 },
            next: "c3",
          },
        ],
      },
      c3: {
        chapter: "Step 3",
        title: "위험한 대화 발견",
        text:
          "친구가 상담이나 주변 도움보다 AI와의 대화에만 기대고 있다는 사실을 알게 된다. 이제 도움을 연결할 방법을 고민해야 한다.",
        quote: "AI는 도움을 줄 수 있지만 사람을 완전히 대신할 수는 없다.",
        choices: [
          {
            label: "상담 선생님과 이야기해보자고 권한다",
            feedback:
              "정신건강 문제는 친구 혼자, 혹은 AI 혼자 감당할 일이 아니다. 신뢰할 수 있는 어른과 연결하는 것이 중요하다.",
            delta: { 신뢰: 6, 안정: 14, 의존: -10 },
            next: "c4",
          },
          {
            label: "오늘 같이 집에 가자고 말한다",
            feedback:
              "함께 시간을 보내는 제안은 부담이 덜하면서도 현실 관계를 회복하는 행동이다.",
            delta: { 신뢰: 10, 안정: 9, 의존: -5 },
            next: "c4",
          },
          {
            label: "AI가 있으니까 괜찮다고 생각한다",
            feedback:
              "AI가 편안함을 줄 수 있어도 전문 상담과 현실 관계를 대체할 수는 없다.",
            delta: { 신뢰: -3, 안정: -10, 의존: 14 },
            next: "c4",
          },
        ],
      },
      c4: {
        chapter: "Step 4",
        title: "AI에게 맡길 수 없는 순간",
        text:
          "친구는 AI에게만 속마음을 털어놓는 게 편하다고 말한다. 하지만 잠을 줄이고, 학교 활동을 피하고, 상담 권유도 미루고 있다. 이제 AI 사용을 금지하기보다 안전한 경계를 함께 정해야 한다.",
        quote: "도움이 되는 도구도, 혼자만의 세계가 되면 위험해질 수 있다.",
        choices: [
          {
            label: "AI 사용 시간을 정하고 상담 선생님과 함께 이야기한다",
            feedback:
              "AI를 무조건 끊게 하기보다 현실의 도움과 균형을 잡는 방식이 안전하다. 지속적인 위험 신호는 전문적인 연결이 필요하다.",
            delta: { 신뢰: 8, 안정: 13, 의존: -12 },
            next: "c5",
          },
          {
            label: "AI 앱을 삭제하라고 강하게 말한다",
            feedback:
              "의도는 보호일 수 있지만 통제처럼 느껴지면 친구가 더 숨을 수 있다. 안전한 대화와 도움 연결이 먼저다.",
            delta: { 신뢰: -10, 안정: -4, 의존: 3 },
            next: "c5",
          },
          {
            label: "매일 짧게 안부를 묻고 함께할 약속을 만든다",
            feedback:
              "작은 현실 연결은 의존을 줄이는 힘이 된다. 단, 위험 신호가 계속되면 친구끼리만 해결하려 하지 않아야 한다.",
            delta: { 신뢰: 12, 안정: 8, 의존: -7 },
            next: "c5",
          },
        ],
      },
      c5: {
        chapter: "Ending",
        title: "혼자가 아니어도 괜찮아",
        text:
          "친구는 아직 완전히 괜찮아진 것은 아니지만, 혼자 버티지 않아도 된다는 말을 듣는다. AI는 도구이고, 관계와 도움은 현실에도 있다.",
        quote: "가장 중요한 것은 현실 속 사람들과의 연결입니다.",
        end: true,
      },
    },
  },
  {
    id: "assignment",
    title: "AI가 써준 수행평가",
    topic: "AI 과제 대필 · 표절",
    summary: "생성형 AI를 과제에 활용할 때 도움과 부정행위의 경계를 고민하는 이야기.",
    meters: ["정직", "학습", "책임"],
    assessment: {
      concept: "AI 활용 윤리와 학습 책임",
      preQuestion: "AI가 만든 글을 그대로 제출해도 내가 내용을 이해했다면 괜찮을까요?",
      postQuestion: "생성형 AI를 과제에 사용할 때 가장 중요한 기준은 무엇인가요?",
      options: [
        "결과물이 좋으면 그대로 제출해도 된다",
        "도움받은 범위를 밝히고 내 생각으로 다시 작성한다",
        "선생님이 모르면 문제없다",
      ],
      principle: "AI는 아이디어 정리와 피드백을 도울 수 있지만, 학습 과정과 작성 책임을 대신할 수는 없습니다.",
      action: "AI 사용 여부와 사용 범위를 밝히고, 인용·검토·수정 과정을 거쳐 자기 언어로 제출하세요.",
    },
    start: "a1",
    scenes: {
      a1: {
        chapter: "Step 1",
        title: "마감 2시간 전",
        text:
          "AI 윤리 보고서 마감이 얼마 남지 않았다. 친구가 생성형 AI에 주제만 넣으면 보고서가 바로 나온다며 링크를 보내준다.",
        quote: "요즘 다 이렇게 하잖아. 안 쓰면 손해지.",
        choices: [
          {
            label: "AI가 쓴 보고서를 거의 그대로 제출한다",
            feedback:
              "결과물이 자연스러워도 작성 과정이 사라지면 학습 목적이 무너진다. 과제는 점수만이 아니라 이해를 확인하는 절차다.",
            delta: { 정직: -14, 학습: -12, 책임: -8 },
            next: "a2",
          },
          {
            label: "AI에게 개요만 받고 내 사례로 다시 쓴다",
            feedback:
              "AI를 사고 보조 도구로 쓰는 방식이다. 핵심은 최종 판단과 표현이 자신의 이해에서 나와야 한다는 점이다.",
            delta: { 정직: 10, 학습: 12, 책임: 8 },
            next: "a2",
          },
          {
            label: "친구 보고서를 참고해서 문장만 바꾼다",
            feedback:
              "표현만 바꾸는 것은 표절을 피하는 방법이 아니다. 아이디어와 구조를 빌렸다면 출처와 자기 해석이 필요하다.",
            delta: { 정직: -8, 학습: -6, 책임: -5 },
            next: "a2",
          },
        ],
      },
      a2: {
        chapter: "Step 2",
        title: "출처 표시를 해야 할까",
        text:
          "보고서 아래에 참고문헌을 적으려다 멈춘다. AI에게 도움받은 내용을 어디까지 밝혀야 하는지 애매하다. 친구는 'AI는 검색도구 같은 거라 굳이 안 써도 된다'고 말한다.",
        quote: "도움을 받았다는 사실을 숨기면, 평가자는 네가 혼자 한 일로 이해한다.",
        choices: [
          {
            label: "AI 사용 범위와 수정 과정을 짧게 적는다",
            feedback:
              "투명한 사용 기록은 부정행위 의심을 줄이고, AI를 학습 도구로 활용했다는 근거가 된다.",
            delta: { 정직: 12, 학습: 6, 책임: 10 },
            next: "a3",
          },
          {
            label: "괜히 적으면 감점될까 봐 숨긴다",
            feedback:
              "숨기는 순간 결과물의 신뢰가 낮아진다. AI 사용 여부보다 더 큰 문제는 평가자를 속이는 태도다.",
            delta: { 정직: -12, 학습: -4, 책임: -8 },
            next: "a3",
          },
          {
            label: "AI 답변을 그대로 참고문헌처럼 붙인다",
            feedback:
              "AI 답변은 검증된 출처가 아니다. 자료의 원출처를 확인하고, AI는 사용 도구로 따로 밝히는 편이 안전하다.",
            delta: { 정직: 4, 학습: 2, 책임: -2 },
            next: "a3",
          },
        ],
      },
      a3: {
        chapter: "Step 3",
        title: "그럴듯하지만 틀린 내용",
        text:
          "AI가 제시한 통계와 사례를 확인해보니 실제 기사나 논문을 찾을 수 없다. 문장은 멋있지만 근거가 불분명하다.",
        quote: "AI가 자신 있게 말한다고 해서 사실이 되는 건 아니다.",
        choices: [
          {
            label: "근거 없는 문장을 삭제하고 실제 자료를 찾는다",
            feedback:
              "검증은 학습의 일부다. AI가 준 초안을 믿기보다 확인하고 고치는 과정에서 이해가 깊어진다.",
            delta: { 정직: 8, 학습: 13, 책임: 8 },
            next: "a4",
          },
          {
            label: "문장이 좋아서 그대로 둔다",
            feedback:
              "근거 없는 정보는 보고서 전체의 신뢰를 떨어뜨린다. 멋진 문장보다 확인 가능한 사실이 중요하다.",
            delta: { 정직: -5, 학습: -8, 책임: -7 },
            next: "a4",
          },
          {
            label: "AI에게 다시 물어보고 나온 답을 믿는다",
            feedback:
              "AI에게 재질문하는 것만으로 검증이 끝나지는 않는다. 외부 자료와 공식 출처 확인이 필요하다.",
            delta: { 정직: 0, 학습: 2, 책임: -4 },
            next: "a4",
          },
        ],
      },
      a4: {
        chapter: "Step 4",
        title: "발표 질문 시간",
        text:
          "발표 후 선생님이 보고서의 핵심 근거와 네 생각을 묻는다. AI가 만든 문장을 외운 친구는 대답을 제대로 하지 못한다.",
        quote: "과제의 진짜 평가는 제출 후 질문에서 드러난다.",
        choices: [
          {
            label: "AI 초안과 내가 고친 부분을 구분해 설명한다",
            feedback:
              "과정 설명은 학습 책임을 보여준다. 어떤 도움을 받았고 무엇을 스스로 판단했는지 말할 수 있어야 한다.",
            delta: { 정직: 12, 학습: 10, 책임: 12 },
            next: "a5",
          },
          {
            label: "AI가 알려준 답을 다시 떠올리려 한다",
            feedback:
              "외운 답변은 상황이 조금만 바뀌어도 흔들린다. 자기 이해가 없는 결과물은 오래 남지 않는다.",
            delta: { 정직: -6, 학습: -10, 책임: -5 },
            next: "a5",
          },
          {
            label: "다음부터는 AI를 아예 쓰지 않겠다고 말한다",
            feedback:
              "무조건 금지보다 올바른 사용 기준을 배우는 것이 중요하다. AI를 어떻게 썼는지 설명할 수 있어야 한다.",
            delta: { 정직: 3, 학습: 4, 책임: 2 },
            next: "a5",
          },
        ],
      },
      a5: {
        chapter: "Ending",
        title: "도움과 대필 사이",
        text:
          "선생님은 AI 사용 자체보다 사용 과정을 숨기거나 검증하지 않은 점이 문제라고 설명한다. 당신의 선택은 과제를 결과물이 아니라 학습 과정으로 바라보게 만들었다.",
        quote: "AI는 대신 써주는 손이 아니라, 더 깊이 생각하게 만드는 도구여야 한다.",
        end: true,
      },
    },
  },
  {
    id: "privacy",
    title: "추천 알고리즘이 아는 것",
    topic: "개인정보 · 추천 알고리즘",
    summary: "편리한 AI 추천 뒤에 남는 데이터와 개인정보 선택을 다루는 이야기.",
    meters: ["보호", "편의", "통제"],
    assessment: {
      concept: "개인정보 자기결정권",
      preQuestion: "맞춤 추천이 편리하다면 위치, 관심사, 검색 기록을 많이 제공해도 괜찮을까요?",
      postQuestion: "AI 추천 서비스를 사용할 때 개인정보를 지키는 가장 좋은 습관은 무엇인가요?",
      options: [
        "추천이 정확해지도록 모든 권한을 허용한다",
        "필요한 권한만 허용하고 설정을 주기적으로 확인한다",
        "약관은 길어서 읽지 않아도 된다",
      ],
      principle: "개인정보는 서비스를 편리하게 만들지만, 한 번 모이면 예측·분류·광고·평가에 다시 사용될 수 있습니다.",
      action: "권한 요청의 목적을 확인하고, 불필요한 위치·연락처·검색 기록 제공은 끄며, 저장된 데이터 삭제 방법을 알아두세요.",
    },
    start: "p1",
    scenes: {
      p1: {
        chapter: "Step 1",
        title: "너무 정확한 추천",
        text:
          "새로 설치한 학습 앱이 관심 분야와 진로 콘텐츠를 정확히 추천한다. 편리하지만, 어제 검색한 고민까지 광고로 뜨자 조금 불편해진다.",
        quote: "내가 말하지 않은 것도 알고 있는 것 같아.",
        choices: [
          {
            label: "추천이 좋으니 모든 권한을 허용한다",
            feedback:
              "편리함은 커지지만 어떤 데이터가 모이는지 모르면 통제권이 줄어든다. 권한은 필요할 때만 주는 것이 안전하다.",
            delta: { 보호: -12, 편의: 12, 통제: -10 },
            next: "p2",
          },
          {
            label: "권한 요청 이유를 확인하고 필요한 것만 허용한다",
            feedback:
              "서비스 목적과 권한이 맞는지 확인하는 습관은 개인정보 자기결정권을 지키는 첫 단계다.",
            delta: { 보호: 12, 편의: 3, 통제: 11 },
            next: "p2",
          },
          {
            label: "귀찮아서 나중에 보기로 넘긴다",
            feedback:
              "나중에 보기는 사실상 허용과 비슷해질 수 있다. 기본 설정은 사용자에게 유리하지 않을 때가 있다.",
            delta: { 보호: -5, 편의: 5, 통제: -5 },
            next: "p2",
          },
        ],
      },
      p2: {
        chapter: "Step 2",
        title: "친구의 화면에 뜬 내 관심사",
        text:
          "친구와 같은 태블릿으로 발표 자료를 보다가, 내 검색 기록과 관심사를 바탕으로 한 추천 광고가 화면에 뜬다. 사적인 고민이 주변에 드러난 것 같아 당황스럽다.",
        quote: "개인화 추천은 혼자 볼 때만 개인적인 것이 아니다.",
        choices: [
          {
            label: "개인화 광고와 검색 기록 저장 설정을 끈다",
            feedback:
              "추천 정확도는 줄어도 노출 위험을 낮출 수 있다. 설정을 바꾸는 것은 사용자가 통제권을 되찾는 행동이다.",
            delta: { 보호: 13, 편의: -4, 통제: 12 },
            next: "p3",
          },
          {
            label: "어차피 별일 아니니 그대로 둔다",
            feedback:
              "작은 노출도 반복되면 민감한 관심사와 생활 패턴이 드러날 수 있다. 불편함은 설정을 점검하라는 신호다.",
            delta: { 보호: -8, 편의: 4, 통제: -7 },
            next: "p3",
          },
          {
            label: "앱을 삭제하지만 다른 설정은 확인하지 않는다",
            feedback:
              "앱 삭제만으로 저장된 데이터가 지워지는 것은 아니다. 계정 데이터 삭제와 권한 해제를 따로 확인해야 한다.",
            delta: { 보호: 3, 편의: -6, 통제: 1 },
            next: "p3",
          },
        ],
      },
      p3: {
        chapter: "Step 3",
        title: "동의서의 작은 글씨",
        text:
          "앱은 학습 기록을 분석해 진로 추천을 제공한다고 안내한다. 하지만 동의서에는 제휴 서비스와 맞춤 광고에도 일부 데이터가 쓰일 수 있다고 적혀 있다.",
        quote: "동의는 클릭이 아니라 이해한 선택이어야 한다.",
        choices: [
          {
            label: "수집 항목과 제3자 제공 여부를 확인한다",
            feedback:
              "어떤 데이터가 누구에게 넘어가는지 확인하면 위험을 예측할 수 있다. 개인정보 보호는 약관을 완벽히 외우는 것이 아니라 핵심 항목을 보는 습관이다.",
            delta: { 보호: 11, 편의: -2, 통제: 13 },
            next: "p4",
          },
          {
            label: "추천을 받으려면 어쩔 수 없다고 모두 동의한다",
            feedback:
              "전체 동의는 빠르지만 불필요한 제공까지 허용할 수 있다. 필수와 선택 동의를 구분해야 한다.",
            delta: { 보호: -10, 편의: 9, 통제: -9 },
            next: "p4",
          },
          {
            label: "친구들이 쓰는 앱이니 안전하다고 믿는다",
            feedback:
              "많이 쓰는 서비스가 항상 안전한 것은 아니다. 인기보다 수집 목적과 삭제 방법이 더 중요한 판단 기준이다.",
            delta: { 보호: -6, 편의: 3, 통제: -5 },
            next: "p4",
          },
        ],
      },
      p4: {
        chapter: "Step 4",
        title: "내 데이터 내려받기",
        text:
          "설정 메뉴에서 내가 남긴 학습 기록, 검색 키워드, 추천 반응 데이터를 내려받을 수 있다는 것을 발견한다. 삭제 요청 버튼도 있지만 눈에 잘 띄지 않는다.",
        quote: "데이터를 볼 수 있어야, 지울지 남길지도 결정할 수 있다.",
        choices: [
          {
            label: "저장된 데이터를 확인하고 불필요한 항목을 삭제한다",
            feedback:
              "데이터 열람과 삭제는 개인정보 자기결정권의 핵심이다. 사용자가 자신의 흔적을 관리할 수 있어야 한다.",
            delta: { 보호: 12, 편의: -2, 통제: 14 },
            next: "p5",
          },
          {
            label: "추천이 줄어들까 봐 그대로 둔다",
            feedback:
              "편의만 기준으로 두면 통제권을 잃기 쉽다. 필요한 데이터와 불필요한 데이터를 구분하는 균형이 중요하다.",
            delta: { 보호: -7, 편의: 8, 통제: -8 },
            next: "p5",
          },
          {
            label: "친구들에게 설정 확인 방법을 공유한다",
            feedback:
              "개인정보 보호는 개인만의 문제가 아니다. 설정 확인 방법을 공유하면 공동체의 디지털 안전도 높아진다.",
            delta: { 보호: 9, 편의: 0, 통제: 10 },
            next: "p5",
          },
        ],
      },
      p5: {
        chapter: "Ending",
        title: "편리함을 선택하되, 통제권은 남긴다",
        text:
          "맞춤 추천은 여전히 유용하지만, 당신은 어떤 데이터를 줄지 직접 정하기로 한다. 편리함과 개인정보 보호는 둘 중 하나만 고르는 문제가 아니라 균형을 설계하는 문제였다.",
        quote: "좋은 AI 서비스는 많이 아는 서비스가 아니라, 사용자가 통제할 수 있는 서비스다.",
        end: true,
      },
    },
  },
];

const state = {
  episodeIndex: 0,
  sceneId: episodes[0].start,
  scores: {},
  history: [],
  feedback: "",
  view: "story",
  storyMode: "pre",
  assessments: {},
  progress: {},
  profile: null,
};

const SUPABASE_CONFIG = window.TWAIVE_SUPABASE || {};
const isSupabaseConfigured =
  SUPABASE_CONFIG.url &&
  SUPABASE_CONFIG.anonKey &&
  !SUPABASE_CONFIG.url.includes("YOUR_SUPABASE") &&
  !SUPABASE_CONFIG.anonKey.includes("YOUR_SUPABASE");
const supabaseClient = isSupabaseConfigured
  ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
  : null;

let authMode = "login";
let currentUser = null;
let checkedUsername = "";

const els = {
  loginScreen: document.getElementById("loginScreen"),
  loginForm: document.getElementById("loginForm"),
  authModeCopy: document.getElementById("authModeCopy"),
  showLoginButton: document.getElementById("showLoginButton"),
  showSignupButton: document.getElementById("showSignupButton"),
  authSubmitButton: document.getElementById("authSubmitButton"),
  usernameInput: document.getElementById("usernameInput"),
  checkUsernameButton: document.getElementById("checkUsernameButton"),
  displayNameInput: document.getElementById("displayNameInput"),
  passwordInput: document.getElementById("passwordInput"),
  passwordConfirmInput: document.getElementById("passwordConfirmInput"),
  checkPasswordButton: document.getElementById("checkPasswordButton"),
  passwordCheckMessage: document.getElementById("passwordCheckMessage"),
  loginError: document.getElementById("loginError"),
  userLabel: document.getElementById("userLabel"),
  logoutButton: document.getElementById("logoutButton"),
  episodeTabs: document.getElementById("episodeTabs"),
  scoreLabel: document.getElementById("scoreLabel"),
  topicLabel: document.getElementById("topicLabel"),
  episodeTitle: document.getElementById("episodeTitle"),
  episodeSummary: document.getElementById("episodeSummary"),
  meterGroup: document.getElementById("meterGroup"),
  chapterLine: document.getElementById("chapterLine"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneText: document.getElementById("sceneText"),
  quoteText: document.getElementById("quoteText"),
  choices: document.getElementById("choices"),
  feedbackBox: document.getElementById("feedbackBox"),
  resetButton: document.getElementById("resetButton"),
  signupOnlyItems: document.querySelectorAll(".signup-only"),
  loginOnlyItems: document.querySelectorAll(".login-only"),
};

function isLoggedIn() {
  return Boolean(currentUser);
}

function showApp() {
  document.body.classList.add("is-authenticated");
  els.userLabel.textContent =
    state.profile?.display_name ||
    currentUser?.user_metadata?.display_name ||
    state.profile?.username ||
    currentUser?.user_metadata?.username ||
    "사용자";
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";
  checkedUsername = "";

  document.body.classList.toggle("is-signup", isSignup);
  els.signupOnlyItems.forEach((item) => {
    item.hidden = !isSignup;
  });
  els.loginOnlyItems.forEach((item) => {
    item.hidden = isSignup;
  });
  els.displayNameInput.required = isSignup;
  els.passwordConfirmInput.required = isSignup;
  els.authSubmitButton.textContent = isSignup ? "회원가입" : "로그인";
  els.authModeCopy.textContent = isSignup
    ? "이름, 아이디, 비밀번호로 새 계정을 만들 수 있습니다."
    : "로그인 후 에피소드별 선택 기록과 학습 진행을 확인하세요.";
  els.loginError.textContent = "";
  showPasswordCheckMessage("", "");
}

function showLogin(message = "") {
  setAuthMode("login");
  document.body.classList.remove("is-authenticated");
  els.loginError.textContent = message;
  els.passwordInput.value = "";
  els.passwordConfirmInput.value = "";
  showPasswordCheckMessage("", "");
  requestAnimationFrame(() => els.usernameInput.focus());
}

function showAuthError(message) {
  els.loginError.textContent = message;
}

function supabaseConnectionMessage(error) {
  const message = error?.message || String(error || "");
  if (message.includes("Failed to fetch") || message.includes("fetch")) {
    return "Supabase 서버에 연결하지 못했습니다. Supabase 프로젝트가 일시정지되었는지, Project URL이 맞는지 확인하세요.";
  }
  return message;
}

function showPasswordCheckMessage(message, type) {
  els.passwordCheckMessage.textContent = message;
  els.passwordCheckMessage.classList.toggle("is-success", type === "success");
  els.passwordCheckMessage.classList.toggle("is-error", type === "error");
}

function normalizeUsername(username) {
  return username.trim().toLowerCase();
}

function usernameToAuthEmail(username) {
  return `${normalizeUsername(username)}@twaive-user.example.com`;
}

function isValidUsername(username) {
  return /^[a-z0-9_]{3,20}$/.test(username);
}

async function loadSession() {
  if (!supabaseClient) {
    showLogin("Supabase 설정이 필요합니다. supabase-config.js에 URL과 anon key를 입력하세요.");
    return;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient.auth.getSession());
  } catch (requestError) {
    showLogin(supabaseConnectionMessage(requestError));
    return;
  }

  if (error) {
    showLogin(supabaseConnectionMessage(error));
    return;
  }

  currentUser = data.session?.user || null;
  if (currentUser) {
    const metadata = currentUser.user_metadata || {};
    if (metadata.username) {
      await saveProfile(
        currentUser,
        metadata.username,
        metadata.display_name || metadata.username,
      );
    }
    await loadProfile();
    await loadAllProgress();
    await loadEpisodeProgress(state.episodeIndex);
    showApp();
    render();
  } else {
    showLogin();
  }
}

async function login(username, password) {
  if (!supabaseClient) {
    showAuthError("Supabase 설정이 필요합니다.");
    return;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient.auth.signInWithPassword({
      email: usernameToAuthEmail(username),
      password,
    }));
  } catch (requestError) {
    showAuthError(supabaseConnectionMessage(requestError));
    return;
  }

  if (error) {
    showAuthError("아이디 또는 비밀번호가 올바르지 않습니다.");
    return;
  }

  currentUser = data.user;
  await loadProfile();
  await loadAllProgress();
  await loadEpisodeProgress(state.episodeIndex);
  showApp();
  render();
}

async function loadProfile() {
  if (!supabaseClient || !currentUser) {
    state.profile = null;
    return null;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient
      .from("profiles")
      .select("username, auth_email, display_name, created_at")
      .eq("id", currentUser.id)
      .maybeSingle());
  } catch (requestError) {
    showAuthError(supabaseConnectionMessage(requestError));
    state.profile = null;
    return null;
  }

  if (error) {
    showAuthError(`프로필을 불러오지 못했습니다: ${error.message}`);
    state.profile = null;
    return null;
  }

  state.profile = data;
  return data;
}

async function checkUsernameAvailability() {
  if (!supabaseClient) {
    showAuthError("Supabase 설정이 필요합니다.");
    return false;
  }

  const username = normalizeUsername(els.usernameInput.value);
  checkedUsername = "";

  if (!isValidUsername(username)) {
    showAuthError("아이디는 영문 소문자, 숫자, 밑줄(_) 3-20자로 입력하세요.");
    return false;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient
      .rpc("is_username_available", { requested_username: username }));
  } catch (requestError) {
    showAuthError(supabaseConnectionMessage(requestError));
    return false;
  }

  if (error) {
    showAuthError(`아이디 중복확인 오류: ${error.message}`);
    return false;
  }

  if (!data) {
    showAuthError("이미 사용 중인 아이디입니다.");
    return false;
  }

  checkedUsername = username;
  showAuthError("사용 가능한 아이디입니다.");
  return true;
}

function checkPasswordMatch() {
  const password = els.passwordInput.value;
  const passwordConfirm = els.passwordConfirmInput.value;

  if (!password || !passwordConfirm) {
    showPasswordCheckMessage("비밀번호와 비밀번호 확인을 모두 입력하세요.", "error");
    return false;
  }

  if (password.length < 6) {
    showPasswordCheckMessage("비밀번호는 6자 이상 입력하세요.", "error");
    return false;
  }

  if (password !== passwordConfirm) {
    showPasswordCheckMessage("비밀번호가 다릅니다.", "error");
    return false;
  }

  showPasswordCheckMessage("비밀번호가 일치합니다.", "success");
  return true;
}

async function signup(username, displayName, password, passwordConfirm) {
  if (!supabaseClient) {
    showAuthError("Supabase 설정이 필요합니다.");
    return;
  }

  username = normalizeUsername(username);
  if (!isValidUsername(username)) {
    showAuthError("아이디는 영문 소문자, 숫자, 밑줄(_) 3-20자로 입력하세요.");
    return;
  }

  if (checkedUsername !== username) {
    showAuthError("아이디 중복확인을 먼저 해주세요.");
    return;
  }

  if (!displayName.trim()) {
    showAuthError("이름을 입력하세요.");
    return;
  }

  if (password.length < 6) {
    showAuthError("비밀번호는 6자 이상 입력하세요.");
    return;
  }

  if (password !== passwordConfirm) {
    showAuthError("비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient.auth.signUp({
      email: usernameToAuthEmail(username),
      password,
      options: {
        data: {
          username,
          display_name: displayName,
        },
      },
    }));
  } catch (requestError) {
    showAuthError(supabaseConnectionMessage(requestError));
    return;
  }

  if (error) {
    showAuthError(error.message);
    return;
  }

  currentUser = data.user;
  if (!data.session) {
    showLogin("회원가입이 완료되었습니다. 로그인해 주세요.");
    return;
  }

  await saveProfile(currentUser, username, displayName);
  await loadProfile();
  showApp();
  render();
}

async function saveProfile(user, username, displayName) {
  let error;
  try {
    ({ error } = await supabaseClient.from("profiles").upsert({
      id: user.id,
      username,
      auth_email: user.email,
      display_name: displayName,
    }));
  } catch (requestError) {
    showAuthError(supabaseConnectionMessage(requestError));
    return;
  }

  if (error) {
    showAuthError("프로필 저장 중 오류가 발생했습니다. Supabase SQL 설정을 확인하세요.");
  }
}

async function updateDisplayName(displayName) {
  if (!supabaseClient || !currentUser) {
    state.feedback = "로그인이 필요합니다.";
    render();
    return;
  }

  const nextName = displayName.trim();
  if (!nextName) {
    state.feedback = "이름을 입력하세요.";
    render();
    return;
  }

  let error;
  try {
    ({ error } = await supabaseClient
      .from("profiles")
      .update({ display_name: nextName })
      .eq("id", currentUser.id));
  } catch (requestError) {
    state.feedback = supabaseConnectionMessage(requestError);
    render();
    return;
  }

  if (error) {
    state.feedback = `프로필 수정 오류: ${error.message}`;
    render();
    return;
  }

  await supabaseClient.auth.updateUser({
    data: {
      ...currentUser.user_metadata,
      display_name: nextName,
    },
  });

  await loadProfile();
  state.feedback = "프로필이 수정되었습니다.";
  showApp();
  render();
}

async function logout() {
  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }
  currentUser = null;
  state.profile = null;
  state.progress = {};
  showLogin();
}

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function activeEpisode() {
  return episodes[state.episodeIndex];
}

function activeScene() {
  return activeEpisode().scenes[state.sceneId];
}

function resetScores(episode) {
  state.scores = Object.fromEntries(episode.meters.map((meter) => [meter, 50]));
}

function activeAssessmentResponse() {
  const episodeId = activeEpisode().id;
  if (!state.assessments[episodeId]) {
    state.assessments[episodeId] = {};
  }
  return state.assessments[episodeId];
}

async function answerAssessment(type, answer) {
  const response = activeAssessmentResponse();
  response[type] = {
    answer,
    answeredAt: new Date().toISOString(),
  };

  state.storyMode = type === "pre" ? "story" : "report";
  state.feedback =
    type === "pre"
      ? "사전 생각이 기록되었습니다. 이제 상황 속에서 선택해보세요."
      : "사후 생각이 기록되었습니다. 결과 리포트를 확인해보세요.";

  await saveEpisodeProgress();
  render();
}

function assessmentChangeText(response) {
  const preAnswer = response.pre?.answer;
  const postAnswer = response.post?.answer;

  if (!preAnswer && !postAnswer) {
    return "아직 사전/사후 응답이 없습니다.";
  }
  if (!postAnswer) {
    return `사전 응답: ${preAnswer}`;
  }
  if (preAnswer === postAnswer) {
    return `사전·사후 응답이 "${postAnswer}"로 유지되었습니다.`;
  }
  return `사전에는 "${preAnswer}"라고 답했고, 사후에는 "${postAnswer}"로 바뀌었습니다.`;
}

function reportText(episode, response) {
  const historyText = state.history.length
    ? state.history.map((item, index) => `${index + 1}. ${item.choice}`).join("\n")
    : "선택 기록이 없습니다.";

  return [
    `최종 윤리 점수: ${scoreAverage()}`,
    `엔딩: ${endingName()}`,
    `학습 개념: ${episode.assessment.concept}`,
    "",
    assessmentChangeText(response),
    "",
    "선택 흐름",
    historyText,
    "",
    "기억할 원칙",
    episode.assessment.principle,
    "",
    "현실 행동",
    episode.assessment.action,
  ].join("\n");
}

function progressSummaryText() {
  const progressItems = episodes
    .map((episode) => ({
      episode,
      progress: state.progress[episode.id],
    }))
    .filter((item) => item.progress);
  const completedItems = progressItems.filter((item) => item.progress.completed);
  const averageScore = progressItems.length
    ? Math.round(
        progressItems.reduce((sum, item) => sum + Number(item.progress.score || 0), 0) /
          progressItems.length,
      )
    : 0;
  const recentItem = progressItems
    .slice()
    .sort((a, b) => new Date(b.progress.updated_at || 0) - new Date(a.progress.updated_at || 0))[0];

  return [
    `완료한 에피소드: ${completedItems.length} / ${episodes.length}`,
    `평균 윤리 점수: ${progressItems.length ? averageScore : "-"}`,
    `최근 학습: ${recentItem ? recentItem.episode.title : "-"}`,
    `최근 엔딩: ${recentItem?.progress.ending || "-"}`,
    `종합 진단: ${overallDiagnosis(completedItems.length, averageScore)}`,
  ].join("\n");
}

function overallDiagnosis(completedCount, averageScore) {
  if (!completedCount) {
    return "아직 진단할 학습 기록이 없습니다.";
  }
  if (completedCount < episodes.length) {
    return "일부 주제 학습이 진행 중입니다. 남은 에피소드를 완료하면 진단이 더 정확해집니다.";
  }
  if (averageScore >= 72) {
    return "AI를 사용할 때 권리, 검증, 책임을 함께 고려하는 균형형 학습자입니다.";
  }
  if (averageScore >= 55) {
    return "기본 윤리 감각은 좋지만 상황별 판단 기준을 더 연습하면 좋습니다.";
  }
  return "편리함과 분위기에 흔들리는 선택이 많았습니다. 동의, 출처, 개인정보 기준을 다시 점검해보세요.";
}

async function loadEpisodeProgress(index) {
  if (!supabaseClient || !currentUser) {
    return false;
  }

  const episode = episodes[index];
  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient
      .from("user_episode_progress")
      .select("scene_id, scores, history, feedback, story_mode, assessment")
      .eq("user_id", currentUser.id)
      .eq("episode_id", episode.id)
      .maybeSingle());
  } catch (requestError) {
    state.feedback = supabaseConnectionMessage(requestError);
    return false;
  }

  if (error) {
    state.feedback = `기록 불러오기 오류: ${error.message}`;
    return false;
  }

  if (!data) {
    return false;
  }

  if (data.scene_id && episode.scenes[data.scene_id]) {
    state.sceneId = data.scene_id;
  }
  state.scores = {
    ...Object.fromEntries(episode.meters.map((meter) => [meter, 50])),
    ...(data.scores || {}),
  };
  state.history = Array.isArray(data.history) ? data.history : [];
  state.feedback = data.feedback || "";
  state.storyMode = data.story_mode || "story";
  state.assessments[episode.id] = data.assessment || {};
  return true;
}

async function loadAllProgress() {
  if (!supabaseClient || !currentUser) {
    state.progress = {};
    return;
  }

  let data;
  let error;
  try {
    ({ data, error } = await supabaseClient
      .from("user_episode_progress")
      .select("episode_id, score, completed, ending, updated_at")
      .eq("user_id", currentUser.id));
  } catch (requestError) {
    state.feedback = supabaseConnectionMessage(requestError);
    return;
  }

  if (error) {
    state.feedback = `학습 성과 불러오기 오류: ${error.message}`;
    return;
  }

  state.progress = Object.fromEntries((data || []).map((item) => [item.episode_id, item]));
}

async function saveEpisodeProgress() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  const scene = activeScene();
  let error;
  try {
    ({ error } = await supabaseClient.from("user_episode_progress").upsert(
      {
        user_id: currentUser.id,
        episode_id: activeEpisode().id,
        scene_id: state.sceneId,
        score: scoreAverage(),
        scores: state.scores,
        history: state.history,
        feedback: state.feedback,
        story_mode: state.storyMode,
        assessment: state.assessments[activeEpisode().id] || {},
        completed: Boolean(scene.end),
        ending: scene.end ? endingName() : null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,episode_id" },
    ));
  } catch (requestError) {
    state.feedback = supabaseConnectionMessage(requestError);
    return;
  }

  if (error) {
    state.feedback = `기록 저장 오류: ${error.message}`;
    return;
  }

  state.progress[activeEpisode().id] = {
    episode_id: activeEpisode().id,
    score: scoreAverage(),
    completed: Boolean(scene.end),
    ending: scene.end ? endingName() : null,
    updated_at: new Date().toISOString(),
  };
}

async function startEpisode(index, options = {}) {
  state.episodeIndex = index;
  state.sceneId = episodes[index].start;
  state.history = [];
  state.feedback = "";
  state.view = "story";
  state.storyMode = "pre";
  if (options.loadSaved === false) {
    state.assessments[episodes[index].id] = {};
  }
  resetScores(episodes[index]);
  if (options.loadSaved !== false) {
    await loadEpisodeProgress(index);
  }
  if (options.saveReset) {
    await saveEpisodeProgress();
  }
  syncNav();
  render();
}

async function applyChoice(choice) {
  Object.entries(choice.delta || {}).forEach(([key, value]) => {
    state.scores[key] = clamp((state.scores[key] ?? 50) + value);
  });
  state.history.push({
    scene: activeScene().title,
    choice: choice.label,
    feedback: choice.feedback,
  });
  state.feedback = choice.feedback;
  state.sceneId = choice.next;
  state.view = "story";
  state.storyMode = activeScene().end ? "post" : "story";
  await saveEpisodeProgress();
  render();
}

function scoreAverage() {
  const values = Object.entries(state.scores).map(([key, value]) =>
    key === "확산" || key === "의존" ? 100 - value : value,
  );
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function endingName() {
  const avg = scoreAverage();
  if (avg >= 72) return "True End";
  if (avg >= 55) return "Good End";
  if (avg >= 40) return "Normal End";
  return "Bad End";
}

function renderTabs() {
  els.episodeTabs.innerHTML = "";
  episodes.forEach((episode, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `episode-tab${index === state.episodeIndex ? " is-active" : ""}`;
    button.innerHTML = `<strong>${episode.title}</strong><span>${episode.topic}</span>`;
    button.addEventListener("click", () => startEpisode(index));
    els.episodeTabs.appendChild(button);
  });
}

function renderMeters() {
  els.meterGroup.innerHTML = "";
  Object.entries(state.scores).forEach(([name, value]) => {
    const meter = document.createElement("div");
    meter.className = "meter";
    meter.innerHTML = `
      <div class="meter-head"><span>${name}</span><span>${value}</span></div>
      <div class="meter-track"><div class="meter-fill" style="--value:${value}%"></div></div>
    `;
    els.meterGroup.appendChild(meter);
  });
}

function renderChoices(scene) {
  els.choices.innerHTML = "";

  if (state.view === "story" && state.storyMode === "pre") {
    activeEpisode().assessment.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `choice-button${index === 1 ? " is-primary" : ""}`;
      button.innerHTML = `<strong>사전 답변 ${index + 1}</strong>${option}`;
      button.addEventListener("click", () => answerAssessment("pre", option));
      els.choices.appendChild(button);
    });
    return;
  }

  if (state.view === "story" && state.storyMode === "post") {
    activeEpisode().assessment.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `choice-button${index === 1 ? " is-primary" : ""}`;
      button.innerHTML = `<strong>사후 답변 ${index + 1}</strong>${option}`;
      button.addEventListener("click", () => answerAssessment("post", option));
      els.choices.appendChild(button);
    });
    return;
  }

  if (state.view === "story" && state.storyMode === "report") {
    const replay = document.createElement("button");
    replay.type = "button";
    replay.className = "choice-button is-primary";
    replay.innerHTML = `<strong>${endingName()}</strong>다시 플레이`;
    replay.addEventListener("click", () =>
      startEpisode(state.episodeIndex, { loadSaved: false, saveReset: true }),
    );
    els.choices.appendChild(replay);

    const nextEpisode = document.createElement("button");
    nextEpisode.type = "button";
    nextEpisode.className = "choice-button";
    nextEpisode.innerHTML = "<strong>다음 에피소드</strong>다른 주제로 이어서 학습";
    nextEpisode.addEventListener("click", () => startEpisode((state.episodeIndex + 1) % episodes.length));
    els.choices.appendChild(nextEpisode);

    const learn = document.createElement("button");
    learn.type = "button";
    learn.className = "choice-button";
    learn.innerHTML = "<strong>학습 정리</strong>핵심 개념 다시 보기";
    learn.addEventListener("click", () => {
      state.view = "learn";
      syncNav();
      render();
    });
    els.choices.appendChild(learn);
    return;
  }

  if (state.view === "profile") {
    const profile = state.profile || {};
    const form = document.createElement("form");
    form.className = "profile-form";
    form.innerHTML = `
      <label>
        <span>아이디</span>
        <input type="text" value="${escapeAttribute(profile.username || "")}" readonly />
      </label>
      <label>
        <span>이름</span>
        <input id="profileNameInput" type="text" value="${escapeAttribute(profile.display_name || "")}" />
      </label>
      <label>
        <span>가입일</span>
        <input type="text" value="${escapeAttribute(formatProfileDate(profile.created_at))}" readonly />
      </label>
      <button class="choice-button is-primary profile-save" type="submit">
        <strong>저장</strong>프로필 수정
      </button>
    `;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      updateDisplayName(form.querySelector("#profileNameInput").value);
    });
    els.choices.appendChild(form);
    return;
  }

  if (state.view !== "story") {
    const back = document.createElement("button");
    back.type = "button";
    back.className = "choice-button is-primary";
    back.innerHTML = "<strong>스토리</strong>현재 장면으로 돌아가기";
    back.addEventListener("click", () => {
      state.view = "story";
      render();
    });
    els.choices.appendChild(back);
    return;
  }

  if (scene.end) {
    const replay = document.createElement("button");
    replay.type = "button";
    replay.className = "choice-button is-primary";
    replay.innerHTML = `<strong>${endingName()}</strong>다시 플레이`;
    replay.addEventListener("click", () =>
      startEpisode(state.episodeIndex, { loadSaved: false, saveReset: true }),
    );
    els.choices.appendChild(replay);

    const nextEpisode = document.createElement("button");
    nextEpisode.type = "button";
    nextEpisode.className = "choice-button";
    nextEpisode.innerHTML = "<strong>다음 기록</strong>다른 에피소드 선택";
    nextEpisode.addEventListener("click", () => startEpisode((state.episodeIndex + 1) % episodes.length));
    els.choices.appendChild(nextEpisode);
    return;
  }

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button${index === 0 ? " is-primary" : ""}`;
    button.innerHTML = `<strong>선택 ${index + 1}</strong>${choice.label}`;
    button.addEventListener("click", () => applyChoice(choice));
    els.choices.appendChild(button);
  });
}

function render() {
  const episode = activeEpisode();
  const scene = activeScene();
  renderTabs();
  els.topicLabel.textContent = episode.topic;
  els.episodeTitle.textContent = episode.title;
  els.episodeSummary.textContent = episode.summary;
  if (state.view === "record") {
    els.chapterLine.textContent = "Record";
    els.sceneTitle.textContent = "선택 기록";
    els.sceneText.textContent = state.history.length
      ? state.history
          .map((item, index) => `${index + 1}. ${item.scene} - ${item.choice}`)
          .join("\n")
      : "아직 선택 기록이 없습니다.";
    els.quoteText.textContent = state.history.length
      ? state.history[state.history.length - 1].feedback
      : "선택을 진행하면 판단 이유가 이곳에 쌓입니다.";
    els.feedbackBox.textContent = `현재 예상 엔딩: ${endingName()}`;
  } else if (state.view === "learn") {
    els.chapterLine.textContent = "Learning";
    els.sceneTitle.textContent = "핵심 개념";
    els.sceneText.textContent = learningText(episode.id);
    els.quoteText.textContent = "정답을 외우는 것보다, 선택 전후의 책임을 이해하는 것이 목표입니다.";
    els.feedbackBox.textContent = episode.topic;
  } else if (state.view === "profile") {
    const profile = state.profile || {};
    els.chapterLine.textContent = "My Page";
    els.sceneTitle.textContent = "개인정보";
    els.sceneText.textContent = [
      `아이디: ${profile.username || "-"}`,
      `이름: ${profile.display_name || "-"}`,
      `가입일: ${formatProfileDate(profile.created_at)}`,
      "",
      "학습 성과",
      progressSummaryText(),
    ].join("\n");
    els.quoteText.textContent = "이름은 언제든 수정할 수 있고, 학습 성과는 에피소드를 진행할 때마다 저장됩니다.";
    els.feedbackBox.textContent = state.feedback || "프로필 정보를 확인하고 수정할 수 있습니다.";
  } else if (state.view === "story" && state.storyMode === "pre") {
    els.chapterLine.textContent = "Before";
    els.sceneTitle.textContent = "사전 질문";
    els.sceneText.textContent = activeEpisode().assessment.preQuestion;
    els.quoteText.textContent = "지금 생각을 먼저 기록한 뒤, 이야기 속 선택을 진행합니다.";
    els.feedbackBox.textContent = "정답을 맞히는 문제가 아니라, 내 생각이 어떻게 바뀌는지 보는 질문입니다.";
  } else if (state.view === "story" && state.storyMode === "post") {
    const response = activeAssessmentResponse();
    els.chapterLine.textContent = "After";
    els.sceneTitle.textContent = "사후 질문";
    els.sceneText.textContent = [
      activeScene().text,
      "",
      activeEpisode().assessment.postQuestion,
    ].join("\n");
    els.quoteText.textContent = activeScene().quote || activeEpisode().assessment.principle;
    els.feedbackBox.textContent = response.pre?.answer
      ? `사전 응답: ${response.pre.answer}`
      : "사후 생각을 기록하면 결과 리포트가 열립니다.";
  } else if (state.view === "story" && state.storyMode === "report") {
    const response = activeAssessmentResponse();
    els.chapterLine.textContent = "Report";
    els.sceneTitle.textContent = "결과 리포트";
    els.sceneText.textContent = reportText(activeEpisode(), response);
    els.quoteText.textContent = activeEpisode().assessment.principle;
    els.feedbackBox.textContent = "선택 기록과 사전·사후 응답이 저장되었습니다.";
  } else {
    els.chapterLine.textContent = scene.chapter;
    els.sceneTitle.textContent = scene.title;
    els.sceneText.textContent = scene.text;
    els.quoteText.textContent = scene.quote || "";
    els.feedbackBox.textContent = scene.end
      ? `${endingName()} · 선택 기록 ${state.history.length}개. ${state.feedback || "에피소드를 끝까지 진행했습니다."}`
      : state.feedback;
  }
  els.scoreLabel.textContent = `윤리 ${scoreAverage()}`;
  renderMeters();
  renderChoices(scene);
}

function syncNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.view === state.view);
  });
}

function learningText(id) {
  const texts = {
    deepfake:
      "초상권은 내 얼굴과 이미지가 어떻게 쓰이는지 결정할 권리입니다.\n딥페이크와 합성 이미지는 재미로 시작해도 당사자의 관계, 평판, 안전을 해칠 수 있습니다.\n공유와 방관도 피해 확산에 연결될 수 있습니다.",
    rumor:
      "AI가 만든 이미지와 음성은 진짜처럼 보일 수 있습니다.\n확인되지 않은 정보는 사실이 아니라 주장일 뿐입니다.\n출처 확인, 공식 제보, 정정은 허위정보 피해를 줄이는 책임 있는 행동입니다.",
    chatbot:
      "AI 챗봇은 위로와 정리에 도움을 줄 수 있지만 전문 상담과 현실 관계를 대신할 수는 없습니다.\n수면, 학교생활, 친구 관계가 흔들릴 정도라면 신뢰할 수 있는 사람에게 도움을 요청해야 합니다.",
    assignment:
      "생성형 AI는 아이디어 정리, 초안 점검, 표현 개선을 도울 수 있습니다.\n하지만 AI가 만든 결과물을 그대로 제출하면 학습 과정과 작성 책임이 사라질 수 있습니다.\nAI 사용 범위를 밝히고, 근거를 검증하고, 자신의 언어로 다시 설명할 수 있어야 합니다.",
    privacy:
      "AI 추천은 사용자의 검색 기록, 클릭, 위치, 관심사 같은 데이터를 바탕으로 더 정확해집니다.\n편리함이 커질수록 어떤 데이터가 저장되고 어디에 쓰이는지 확인해야 합니다.\n필요한 권한만 허용하고, 개인화 설정과 데이터 삭제 방법을 주기적으로 점검하는 습관이 중요합니다.",
  };
  return texts[id];
}

function formatProfileDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

els.resetButton.addEventListener("click", () =>
  startEpisode(state.episodeIndex, { loadSaved: false, saveReset: true }),
);
els.logoutButton.addEventListener("click", logout);
els.showLoginButton.addEventListener("click", () => setAuthMode("login"));
els.showSignupButton.addEventListener("click", () => setAuthMode("signup"));
els.checkUsernameButton.addEventListener("click", checkUsernameAvailability);
els.checkPasswordButton.addEventListener("click", checkPasswordMatch);
els.usernameInput.addEventListener("input", () => {
  if (normalizeUsername(els.usernameInput.value) !== checkedUsername) {
    checkedUsername = "";
  }
});
els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = els.usernameInput.value.trim();
  const displayName = els.displayNameInput.value.trim();
  const password = els.passwordInput.value;
  const passwordConfirm = els.passwordConfirmInput.value;

  if (authMode === "signup") {
    signup(username, displayName, password, passwordConfirm);
    return;
  }

  login(username, password);
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    syncNav();
    render();
  });
});

resetScores(episodes[0]);
loadSession();
