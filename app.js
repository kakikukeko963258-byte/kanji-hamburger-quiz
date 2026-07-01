const els = {
  totalCount: document.querySelector("#totalCount"),
  accuracy: document.querySelector("#accuracy"),
  masteredCount: document.querySelector("#masteredCount"),
  modeButtons: [...document.querySelectorAll("[data-mode]")],
  sourceSelect: document.querySelector("#sourceSelect"),
  scopeSelect: document.querySelector("#scopeSelect"),
  restartBtn: document.querySelector("#restartBtn"),
  resetStatsBtn: document.querySelector("#resetStatsBtn"),
  sourceTag: document.querySelector("#sourceTag"),
  cardCounter: document.querySelector("#cardCounter"),
  promptText: document.querySelector("#promptText"),
  choiceArea: document.querySelector("#choiceArea"),
  typingArea: document.querySelector("#typingArea"),
  answerInput: document.querySelector("#answerInput"),
  checkBtn: document.querySelector("#checkBtn"),
  revealBtn: document.querySelector("#revealBtn"),
  starBtn: document.querySelector("#starBtn"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  answerLine: document.querySelector("#answerLine"),
  targetLine: document.querySelector("#targetLine"),
  noteLine: document.querySelector("#noteLine"),
  searchInput: document.querySelector("#searchInput"),
  wordList: document.querySelector("#wordList")
};

const STORAGE_KEY = "kanji-hamburger-quiz-v1";
const DEFAULT_SETTINGS = {
  mode: "choice",
  source: "all",
  scope: "all"
};

const sourceById = new Map(KANJI_SOURCES.map((source) => [source.id, source]));

let saved = loadSavedState();
let settings = { ...DEFAULT_SETTINGS, ...saved.settings };
let records = saved.records || {};
let starred = new Set(saved.starred || []);
let deck = [];
let deckIndex = 0;
let answered = false;
let selectedChoice = null;

init();

function init() {
  populateSources();
  applySettingsToControls();
  bindEvents();
  rebuildDeck();
  renderWordList();
  renderStats();
}

function populateSources() {
  for (const source of KANJI_SOURCES) {
    const option = document.createElement("option");
    option.value = source.id;
    option.textContent = source.label;
    els.sourceSelect.append(option);
  }
}

function bindEvents() {
  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      settings.mode = button.dataset.mode;
      saveState();
      applySettingsToControls();
      renderQuestion();
    });
  });

  els.sourceSelect.addEventListener("change", () => {
    settings.source = els.sourceSelect.value;
    saveState();
    rebuildDeck();
    renderWordList();
  });

  els.scopeSelect.addEventListener("change", () => {
    settings.scope = els.scopeSelect.value;
    saveState();
    rebuildDeck();
    renderWordList();
  });

  els.restartBtn.addEventListener("click", rebuildDeck);

  els.resetStatsBtn.addEventListener("click", () => {
    records = {};
    starred = new Set();
    saveState();
    rebuildDeck();
    renderWordList();
    renderStats();
  });

  els.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCheckOrNext();
    }
  });

  els.checkBtn.addEventListener("click", handleCheckOrNext);
  els.revealBtn.addEventListener("click", () => revealAnswer({ countAsWrong: true }));

  els.starBtn.addEventListener("click", () => {
    const item = currentItem();
    if (!item) return;
    if (starred.has(item.id)) {
      starred.delete(item.id);
    } else {
      starred.add(item.id);
    }
    saveState();
    renderStar();
    renderWordList();
  });

  els.searchInput.addEventListener("input", renderWordList);
}

function applySettingsToControls() {
  els.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === settings.mode);
  });
  els.sourceSelect.value = settings.source;
  els.scopeSelect.value = settings.scope;
}

function rebuildDeck() {
  deck = shuffle(KANJI_ITEMS.filter(inCurrentScope));
  deckIndex = 0;
  renderQuestion();
  renderStats();
}

function inCurrentScope(item) {
  if (settings.source !== "all" && item.source !== settings.source) return false;
  const record = records[item.id] || emptyRecord();
  if (settings.scope === "weak") return record.wrong > 0 && record.streak < 2;
  if (settings.scope === "not-mastered") return record.streak < 3;
  if (settings.scope === "starred") return starred.has(item.id);
  return true;
}

function currentItem() {
  return deck[deckIndex] || null;
}

function renderQuestion() {
  answered = false;
  selectedChoice = null;
  const item = currentItem();

  els.feedback.hidden = true;
  els.feedback.className = "feedback";
  els.answerLine.textContent = "";
  els.targetLine.textContent = "";
  els.noteLine.textContent = "";
  els.choiceArea.innerHTML = "";
  els.answerInput.value = "";
  els.answerInput.placeholder = "漢字で入力";
  els.revealBtn.disabled = false;

  const isChoice = settings.mode === "choice";
  els.choiceArea.hidden = !isChoice;
  els.typingArea.hidden = isChoice;
  els.checkBtn.textContent = isChoice ? "選択してください" : "判定";
  els.checkBtn.disabled = isChoice;

  if (!item) {
    els.sourceTag.textContent = "該当なし";
    els.cardCounter.textContent = "0 / 0";
    els.promptText.textContent = "条件に合う問題がありません";
    els.revealBtn.disabled = true;
    els.starBtn.disabled = true;
    return;
  }

  els.starBtn.disabled = false;
  els.sourceTag.textContent = sourceLabel(item.source);
  els.cardCounter.textContent = `${deckIndex + 1} / ${deck.length}`;
  els.promptText.innerHTML = renderContext(item.context);
  renderStar();

  if (isChoice) {
    renderChoices(item);
  } else {
    window.setTimeout(() => els.answerInput.focus(), 0);
  }
}

function renderChoices(item) {
  const choices = shuffle(item.choices.map((label, index) => ({
    label,
    correct: index === 0
  })));

  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.dataset.correct = String(choice.correct);
    button.innerHTML = `<span>${index + 1}</span>${escapeHtml(choice.label)}`;
    button.addEventListener("click", () => checkChoice(button));
    els.choiceArea.append(button);
  });
}

function checkChoice(button) {
  if (answered) return;
  selectedChoice = button;
  const correct = button.dataset.correct === "true";
  markChoiceButtons(button);
  finishAnswer(correct);
}

function markChoiceButtons(selected) {
  [...els.choiceArea.querySelectorAll(".choice-button")].forEach((button) => {
    const correct = button.dataset.correct === "true";
    if (correct) button.classList.add("is-correct");
    if (button === selected && !correct) button.classList.add("is-wrong");
    button.disabled = true;
  });
}

function handleCheckOrNext() {
  if (answered) {
    nextQuestion();
    return;
  }

  if (settings.mode === "choice") return;

  const item = currentItem();
  if (!item) return;
  const correct = isTypedAnswerCorrect(item, els.answerInput.value);
  finishAnswer(correct);
}

function finishAnswer(correct) {
  const item = currentItem();
  if (!item || answered) return;
  updateRecord(item.id, correct);
  revealAnswer({ correct, updateRecord: false });
  renderStats();
  renderWordList();
}

function revealAnswer({ countAsWrong = false, correct = null, updateRecord: shouldUpdateRecord = true } = {}) {
  const item = currentItem();
  if (!item) return;

  if (!answered && countAsWrong && shouldUpdateRecord) {
    updateRecord(item.id, false);
    renderStats();
    renderWordList();
  }

  answered = true;
  const resultIsCorrect = correct === null ? !countAsWrong : correct;
  els.checkBtn.disabled = false;
  els.checkBtn.textContent = "次へ";
  els.revealBtn.disabled = true;
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${resultIsCorrect ? "is-correct" : "is-wrong"}`;
  els.feedbackTitle.textContent = resultIsCorrect ? "正解" : "確認";
  els.answerLine.textContent = `答え: ${item.context.replace(/[{}]/g, "")} = ${item.answerWord}`;
  els.targetLine.textContent = `目標漢字: ${item.targetKanji} / 出典: ${sourceLabel(item.source)}`;
  els.noteLine.textContent = item.note;

  if (settings.mode === "choice" && !selectedChoice) {
    [...els.choiceArea.querySelectorAll(".choice-button")].forEach((button) => {
      if (button.dataset.correct === "true") button.classList.add("is-correct");
      button.disabled = true;
    });
  }
}

function nextQuestion() {
  deckIndex += 1;
  if (deckIndex >= deck.length) {
    deck = shuffle(deck);
    deckIndex = 0;
  }
  renderQuestion();
}

function isTypedAnswerCorrect(item, answer) {
  const expected = [item.answerWord, ...(item.accepts || [])].map(normalizeAnswer);
  return expected.includes(normalizeAnswer(answer));
}

function updateRecord(id, correct) {
  const record = records[id] || emptyRecord();
  if (correct) {
    record.correct += 1;
    record.streak += 1;
  } else {
    record.wrong += 1;
    record.streak = 0;
  }
  record.last = new Date().toISOString();
  records[id] = record;
  saveState();
}

function renderStats() {
  const totals = Object.values(records).reduce((acc, record) => {
    acc.correct += record.correct;
    acc.wrong += record.wrong;
    return acc;
  }, { correct: 0, wrong: 0 });
  const answeredCount = totals.correct + totals.wrong;
  const mastered = KANJI_ITEMS.filter((item) => (records[item.id] || emptyRecord()).streak >= 3).length;
  els.totalCount.textContent = KANJI_ITEMS.length;
  els.accuracy.textContent = answeredCount ? `${Math.round((totals.correct / answeredCount) * 100)}%` : "0%";
  els.masteredCount.textContent = mastered;
}

function renderStar() {
  const item = currentItem();
  const active = item && starred.has(item.id);
  els.starBtn.classList.toggle("is-starred", active);
  els.starBtn.textContent = active ? "★" : "☆";
}

function renderWordList() {
  const query = normalizeSearch(els.searchInput.value);
  const items = KANJI_ITEMS.filter(inCurrentScope).filter((item) => {
    if (!query) return true;
    return normalizeSearch(`${item.context} ${item.answerWord} ${item.targetKanji} ${sourceLabel(item.source)}`).includes(query);
  });

  els.wordList.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "表示できる問題がありません";
    els.wordList.append(empty);
    return;
  }

  for (const item of items) {
    const record = records[item.id] || emptyRecord();
    const row = document.createElement("button");
    row.type = "button";
    row.className = "word-row";
    row.innerHTML = `
      <strong>${escapeHtml(item.answerWord)}</strong>
      <span class="mini-stat">${record.correct}/${record.wrong}</span>
      <small>${escapeHtml(item.context.replace(/[{}]/g, ""))}</small>
      <small>${escapeHtml(sourceLabel(item.source))}</small>
    `;
    row.addEventListener("click", () => jumpToItem(item.id));
    els.wordList.append(row);
  }
}

function jumpToItem(id) {
  const found = deck.findIndex((item) => item.id === id);
  if (found === -1) {
    const item = KANJI_ITEMS.find((entry) => entry.id === id);
    deck = item ? [item] : [];
    deckIndex = 0;
  } else {
    deckIndex = found;
  }
  renderQuestion();
}

function renderContext(context) {
  const escaped = escapeHtml(context);
  return escaped
    .replace("{", '<span class="underlined">')
    .replace("}", "</span>");
}

function sourceLabel(id) {
  return sourceById.get(id)?.label || id;
}

function normalizeAnswer(value) {
  return String(value)
    .trim()
    .replace(/\s+/g, "")
    .replace(/[、。，．・･]/g, "")
    .replace(/[０-９Ａ-Ｚａ-ｚ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0));
}

function normalizeSearch(value) {
  return normalizeAnswer(value).toLowerCase();
}

function emptyRecord() {
  return { correct: 0, wrong: 0, streak: 0, last: null };
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    settings,
    records,
    starred: [...starred]
  }));
}

function loadSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
