const episodes = [
  {
    id: "deepfake",
    title: "삭제되지 않은 얼굴",
    topic: "딥페이크 · 초상권",
    summary: "학교 축제 홍보 SNS에서 시작된 AI 얼굴 합성 사건.",
    meters: ["윤리", "관계", "확산"],
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
        chapter: "Ending",
        title: "삭제된 게시물, 남은 캡처",
        text:
          "사건은 선생님과 학생회에 전달된다. 이미 퍼진 캡처는 완전히 되돌리기 어렵지만, 당신의 선택은 피해 정도와 회복 가능성을 바꿨다.",
        quote: "AI가 문제가 아니라, 사용하는 사람의 책임이 문제였다.",
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
        chapter: "Ending",
        title: "공유 전 한 번 더",
        text:
          "학생회는 AI 허위정보 예방 캠페인을 준비한다. 당신의 선택은 캠페인의 방향과 친구들의 태도를 바꿨다.",
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
        chapter: "Ending",
        title: "혼자가 아니어도 괜찮아",
        text:
          "친구는 아직 완전히 괜찮아진 것은 아니지만, 혼자 버티지 않아도 된다는 말을 듣는다. AI는 도구이고, 관계와 도움은 현실에도 있다.",
        quote: "가장 중요한 것은 현실 속 사람들과의 연결입니다.",
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
};

const els = {
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
};

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

function startEpisode(index) {
  state.episodeIndex = index;
  state.sceneId = episodes[index].start;
  state.history = [];
  state.feedback = "";
  state.view = "story";
  resetScores(episodes[index]);
  syncNav();
  render();
}

function applyChoice(choice) {
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
    replay.addEventListener("click", () => startEpisode(state.episodeIndex));
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
  };
  return texts[id];
}

els.resetButton.addEventListener("click", () => startEpisode(state.episodeIndex));
document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    syncNav();
    render();
  });
});

startEpisode(0);
