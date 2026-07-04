const STORAGE_KEY = "flipset.cardSets.v1";

const zodiacGlyphs = {
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓"
};

function createFourElementsSet() {
  return {
    id: crypto.randomUUID(),
    title: "Four Elements",
    description: "Classical element symbols, Latin and Greek names, and qualities.",
    cards: [
      {
        id: crypto.randomUUID(),
        front: "🜂 Fire",
        back: "Latin: Ignis\nGreek: Πῦρ (Pyr)\nConditions: heat and dryness"
      },
      {
        id: crypto.randomUUID(),
        front: "🜄 Water",
        back: "Latin: Aqua\nGreek: Ὕδωρ (Hydor)\nConditions: cold and moisture"
      },
      {
        id: crypto.randomUUID(),
        front: "🜁 Air",
        back: "Latin: Aer\nGreek: Ἀήρ (Aer)\nConditions: heat and moisture"
      },
      {
        id: crypto.randomUUID(),
        front: "🜃 Earth",
        back: "Latin: Terra\nGreek: Γῆ (Ge)\nConditions: cold and dryness"
      }
    ]
  };
}

function createPlanetarySymbolsSet() {
  return {
    id: crypto.randomUUID(),
    title: "Planetary Symbols",
    description: "Astrological planet symbols plus Caput and Cauda Draconis.",
    cards: [
      { id: crypto.randomUUID(), front: "☉", back: "Sun" },
      { id: crypto.randomUUID(), front: "☽", back: "Moon" },
      { id: crypto.randomUUID(), front: "☿", back: "Mercury" },
      { id: crypto.randomUUID(), front: "♀", back: "Venus" },
      { id: crypto.randomUUID(), front: "♂", back: "Mars" },
      { id: crypto.randomUUID(), front: "♃", back: "Jupiter" },
      { id: crypto.randomUUID(), front: "♄", back: "Saturn" },
      { id: crypto.randomUUID(), front: "♅", back: "Uranus" },
      { id: crypto.randomUUID(), front: "♆", back: "Neptune" },
      { id: crypto.randomUUID(), front: "♇", back: "Pluto" },
      { id: crypto.randomUUID(), front: "☊", back: "Caput Draconis" },
      { id: crypto.randomUUID(), front: "☋", back: "Cauda Draconis" }
    ]
  };
}

function createKabbalahSephirothSet() {
  return {
    id: crypto.randomUUID(),
    title: "Kabbalah Sephiroth",
    description: "The ten Sephiroth with number, English meaning, Hebrew, and transliteration.",
    cards: [
      {
        id: crypto.randomUUID(),
        front: "1. Keter",
        back: "Number: 1\nEnglish: Crown\nHebrew: כתר\nTransliteration: Keter (K-T-R)"
      },
      {
        id: crypto.randomUUID(),
        front: "2. Chokmah",
        back: "Number: 2\nEnglish: Wisdom\nHebrew: חכמה\nTransliteration: Chokmah (Ch-K-M-H)"
      },
      {
        id: crypto.randomUUID(),
        front: "3. Binah",
        back: "Number: 3\nEnglish: Understanding\nHebrew: בינה\nTransliteration: Binah (B-Y-N-H)"
      },
      {
        id: crypto.randomUUID(),
        front: "4. Chesed",
        back: "Number: 4\nEnglish: Mercy\nHebrew: חסד\nTransliteration: Chesed (Ch-S-D)"
      },
      {
        id: crypto.randomUUID(),
        front: "5. Gevurah",
        back: "Number: 5\nEnglish: Severity\nHebrew: גבורה\nTransliteration: Gevurah (G-B-V-R-H)"
      },
      {
        id: crypto.randomUUID(),
        front: "6. Tiferet",
        back: "Number: 6\nEnglish: Beauty\nHebrew: תפארת\nTransliteration: Tiferet (T-P-A-R-T)"
      },
      {
        id: crypto.randomUUID(),
        front: "7. Netzach",
        back: "Number: 7\nEnglish: Victory\nHebrew: נצח\nTransliteration: Netzach (N-Tz-Ch)"
      },
      {
        id: crypto.randomUUID(),
        front: "8. Hod",
        back: "Number: 8\nEnglish: Splendor\nHebrew: הוד\nTransliteration: Hod (H-V-D)"
      },
      {
        id: crypto.randomUUID(),
        front: "9. Yesod",
        back: "Number: 9\nEnglish: Foundation\nHebrew: יסוד\nTransliteration: Yesod (Y-S-V-D)"
      },
      {
        id: crypto.randomUUID(),
        front: "10. Malkuth",
        back: "Number: 10\nEnglish: Kingdom\nHebrew: מלכות\nTransliteration: Malkuth (M-L-K-V-T)"
      }
    ]
  };
}

function createHebrewAlphabetSet() {
  return {
    id: crypto.randomUUID(),
    title: "Hebrew Alphabet",
    description: "Twenty-seven cards for Hebrew letters, names, transliterations, and values.",
    cards: [
      { id: crypto.randomUUID(), front: "א", back: "Hebrew: א\nName: Aleph\nTransliteration: Aleph\nNumerical value: 1" },
      { id: crypto.randomUUID(), front: "ב", back: "Hebrew: ב\nName: Bet\nTransliteration: Bet\nNumerical value: 2" },
      { id: crypto.randomUUID(), front: "ג", back: "Hebrew: ג\nName: Gimel\nTransliteration: Gimel\nNumerical value: 3" },
      { id: crypto.randomUUID(), front: "ד", back: "Hebrew: ד\nName: Dalet\nTransliteration: Dalet\nNumerical value: 4" },
      { id: crypto.randomUUID(), front: "ה", back: "Hebrew: ה\nName: He\nTransliteration: He\nNumerical value: 5" },
      { id: crypto.randomUUID(), front: "ו", back: "Hebrew: ו\nName: Vav\nTransliteration: Vav\nNumerical value: 6" },
      { id: crypto.randomUUID(), front: "ז", back: "Hebrew: ז\nName: Zayin\nTransliteration: Zayin\nNumerical value: 7" },
      { id: crypto.randomUUID(), front: "ח", back: "Hebrew: ח\nName: Chet\nTransliteration: Chet\nNumerical value: 8" },
      { id: crypto.randomUUID(), front: "ט", back: "Hebrew: ט\nName: Tet\nTransliteration: Tet\nNumerical value: 9" },
      { id: crypto.randomUUID(), front: "י", back: "Hebrew: י\nName: Yod\nTransliteration: Yod\nNumerical value: 10" },
      { id: crypto.randomUUID(), front: "כ", back: "Hebrew: כ\nName: Kaf\nTransliteration: Kaf\nNumerical value: 20" },
      { id: crypto.randomUUID(), front: "ל", back: "Hebrew: ל\nName: Lamed\nTransliteration: Lamed\nNumerical value: 30" },
      { id: crypto.randomUUID(), front: "מ", back: "Hebrew: מ\nName: Mem\nTransliteration: Mem\nNumerical value: 40" },
      { id: crypto.randomUUID(), front: "נ", back: "Hebrew: נ\nName: Nun\nTransliteration: Nun\nNumerical value: 50" },
      { id: crypto.randomUUID(), front: "ס", back: "Hebrew: ס\nName: Samekh\nTransliteration: Samekh\nNumerical value: 60" },
      { id: crypto.randomUUID(), front: "ע", back: "Hebrew: ע\nName: Ayin\nTransliteration: Ayin\nNumerical value: 70" },
      { id: crypto.randomUUID(), front: "פ", back: "Hebrew: פ\nName: Pe\nTransliteration: Pe\nNumerical value: 80" },
      { id: crypto.randomUUID(), front: "צ", back: "Hebrew: צ\nName: Tsadi\nTransliteration: Tsadi\nNumerical value: 90" },
      { id: crypto.randomUUID(), front: "ק", back: "Hebrew: ק\nName: Qof\nTransliteration: Qof\nNumerical value: 100" },
      { id: crypto.randomUUID(), front: "ר", back: "Hebrew: ר\nName: Resh\nTransliteration: Resh\nNumerical value: 200" },
      { id: crypto.randomUUID(), front: "ש", back: "Hebrew: ש\nName: Shin\nTransliteration: Shin\nNumerical value: 300" },
      { id: crypto.randomUUID(), front: "ת", back: "Hebrew: ת\nName: Tav\nTransliteration: Tav\nNumerical value: 400" },
      { id: crypto.randomUUID(), front: "ך", back: "Hebrew: ך\nName: Final Kaf\nTransliteration: Kaf Sofit\nNumerical value: 20; final value 500" },
      { id: crypto.randomUUID(), front: "ם", back: "Hebrew: ם\nName: Final Mem\nTransliteration: Mem Sofit\nNumerical value: 40; final value 600" },
      { id: crypto.randomUUID(), front: "ן", back: "Hebrew: ן\nName: Final Nun\nTransliteration: Nun Sofit\nNumerical value: 50; final value 700" },
      { id: crypto.randomUUID(), front: "ף", back: "Hebrew: ף\nName: Final Pe\nTransliteration: Pe Sofit\nNumerical value: 80; final value 800" },
      { id: crypto.randomUUID(), front: "ץ", back: "Hebrew: ץ\nName: Final Tsadi\nTransliteration: Tsadi Sofit\nNumerical value: 90; final value 900" }
    ]
  };
}

const sampleSets = [
  {
    id: crypto.randomUUID(),
    title: "Astrology Basics",
    description: "A compact set for checking zodiac, planet, and house meanings.",
    cards: [
      { id: crypto.randomUUID(), front: "♈ Aries", back: "Cardinal fire; initiative, courage, direct action." },
      { id: crypto.randomUUID(), front: "♉ Taurus", back: "Fixed earth; stability, patience, sensuality." },
      { id: crypto.randomUUID(), front: "♊ Gemini", back: "Mutable air; curiosity, speech, flexible thinking." },
      { id: crypto.randomUUID(), front: "♋ Cancer", back: "Cardinal water; care, memory, emotional protection." },
      { id: crypto.randomUUID(), front: "♌ Leo", back: "Fixed fire; confidence, creativity, self-expression." },
      { id: crypto.randomUUID(), front: "♍ Virgo", back: "Mutable earth; craft, service, practical refinement." },
      { id: crypto.randomUUID(), front: "♎ Libra", back: "Cardinal air; balance, partnership, diplomacy." },
      { id: crypto.randomUUID(), front: "♏ Scorpio", back: "Fixed water; depth, transformation, focused intensity." },
      { id: crypto.randomUUID(), front: "♐ Sagittarius", back: "Mutable fire; exploration, belief, widening horizons." },
      { id: crypto.randomUUID(), front: "♑ Capricorn", back: "Cardinal earth; discipline, structure, long-term ambition." },
      { id: crypto.randomUUID(), front: "♒ Aquarius", back: "Fixed air; systems, originality, collective ideals." },
      { id: crypto.randomUUID(), front: "♓ Pisces", back: "Mutable water; imagination, compassion, permeability." }
    ]
  },
  createHebrewAlphabetSet(),
  createFourElementsSet(),
  createPlanetarySymbolsSet(),
  createKabbalahSephirothSet()
];

const state = {
  sets: loadSets(),
  activeScreen: "home",
  activeSetId: null,
  editingSetId: null,
  editingCardId: null,
  setupSelection: new Set(),
  quiz: {
    cards: [],
    index: 0,
    flipped: false,
    correct: 0,
    missed: []
  }
};

const screens = document.querySelectorAll(".screen");
const setList = document.querySelector("#set-list");
const cardList = document.querySelector("#card-list");
const setupSetList = document.querySelector("#setup-set-list");
const selectedCardCount = document.querySelector("#selected-card-count");
const shuffleToggle = document.querySelector("#shuffle-toggle");
const setDialog = document.querySelector("#set-dialog");
const setForm = document.querySelector("#set-form");
const cardDialog = document.querySelector("#card-dialog");
const cardForm = document.querySelector("#card-form");

function loadSets() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return sampleSets;

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) return sampleSets;

    const normalized = normalizeStoredSets(parsed);
    if (normalized.changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized.sets));
    return normalized.sets;
  } catch {
    return sampleSets;
  }
}

function normalizeStoredSets(sets) {
  const astrology = addAstrologyGlyphs(sets);
  const hebrew = updateHebrewAlphabetSet(astrology.sets);
  const elements = addFourElementsSet(hebrew.sets);
  const planets = addPlanetarySymbolsSet(elements.sets);
  const sephiroth = addKabbalahSephirothSet(planets.sets);

  return {
    sets: sephiroth.sets,
    changed: astrology.changed || hebrew.changed || elements.changed || planets.changed || sephiroth.changed
  };
}

function addFourElementsSet(sets) {
  if (sets.some((set) => set.title === "Four Elements")) {
    return { sets, changed: false };
  }

  sets.push(createFourElementsSet());
  return { sets, changed: true };
}

function addPlanetarySymbolsSet(sets) {
  if (sets.some((set) => set.title === "Planetary Symbols")) {
    return { sets, changed: false };
  }

  sets.push(createPlanetarySymbolsSet());
  return { sets, changed: true };
}

function addKabbalahSephirothSet(sets) {
  if (sets.some((set) => set.title === "Kabbalah Sephiroth")) {
    return { sets, changed: false };
  }

  sets.push(createKabbalahSephirothSet());
  return { sets, changed: true };
}

function updateHebrewAlphabetSet(sets) {
  const hebrewSet = sets.find((set) => set.title === "Hebrew Alphabet");
  if (!hebrewSet) {
    sets.push(createHebrewAlphabetSet());
    return { sets, changed: true };
  }

  const hasFinalForms = hebrewSet.cards.some((card) => card.front === "ך");
  const hasDetailedBacks = hebrewSet.cards.some((card) => card.back.includes("Hebrew:"));
  if (hasFinalForms && hasDetailedBacks) {
    return { sets, changed: false };
  }

  const updated = createHebrewAlphabetSet();
  hebrewSet.description = updated.description;
  hebrewSet.cards = updated.cards;
  return { sets, changed: true };
}

function addAstrologyGlyphs(sets) {
  let changed = false;
  const astrologySet = sets.find((set) => set.title === "Astrology Basics");
  if (!astrologySet) return { sets, changed };

  astrologySet.cards.forEach((card) => {
    const glyph = zodiacGlyphs[card.front];
    if (!glyph) return;

    card.front = `${glyph} ${card.front}`;
    changed = true;
  });

  return { sets, changed };
}

function saveSets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.sets));
}

function exportDecks() {
  const payload = {
    app: "FlipSet",
    version: 1,
    exportedAt: new Date().toISOString(),
    sets: state.sets
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `flipset-decks-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importDecks(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedSets = Array.isArray(parsed) ? parsed : parsed.sets;
      if (!isValidSetCollection(importedSets)) {
        throw new Error("Invalid FlipSet file");
      }

      if (!confirm("Replace the decks on this device with the imported decks?")) return;

      state.sets = importedSets;
      saveSets();
      state.activeSetId = null;
      state.setupSelection.clear();
      renderHome();
      showScreen("home");
      alert("Decks imported.");
    } catch {
      alert("That file could not be imported.");
    } finally {
      document.querySelector("#import-data-input").value = "";
    }
  });
  reader.readAsText(file);
}

function isValidSetCollection(sets) {
  return Array.isArray(sets) && sets.every((set) =>
    set &&
    typeof set.id === "string" &&
    typeof set.title === "string" &&
    Array.isArray(set.cards) &&
    set.cards.every((card) =>
      card &&
      typeof card.id === "string" &&
      typeof card.front === "string" &&
      typeof card.back === "string"
    )
  );
}

function showScreen(name) {
  state.activeScreen = name;
  screens.forEach((screen) => screen.classList.toggle("active", screen.dataset.screen === name));
}

function pluralize(count, singular) {
  return `${count} ${singular}${count === 1 ? "" : "s"}`;
}

function getActiveSet() {
  return state.sets.find((set) => set.id === state.activeSetId);
}

function renderHome() {
  setList.innerHTML = "";
  if (!state.sets.length) {
    setList.append(emptyState("Create your first card set."));
    return;
  }

  state.sets.forEach((set) => {
    const card = document.createElement("button");
    card.className = "set-card";
    card.type = "button";
    card.innerHTML = `
      <span class="set-main">
        <h3>${escapeHtml(set.title)}</h3>
        <p>${escapeHtml(set.description || "No description")}</p>
      </span>
      <span class="count-badge">${pluralize(set.cards.length, "card")}</span>
    `;
    card.addEventListener("click", () => openSet(set.id));
    setList.append(card);
  });
}

function renderSet() {
  const set = getActiveSet();
  if (!set) {
    showScreen("home");
    return;
  }

  document.querySelector("#set-title-heading").textContent = set.title;
  document.querySelector("#set-count-label").textContent = pluralize(set.cards.length, "card");
  document.querySelector("#set-description").textContent = set.description || "";

  cardList.innerHTML = "";
  if (!set.cards.length) {
    cardList.append(emptyState("Add a card to build this set."));
    return;
  }

  set.cards.forEach((card, index) => {
    const row = document.createElement("div");
    row.className = "card-row";
    row.innerHTML = `
      <button class="card-edit-button" type="button">
        <strong>${index + 1}. ${escapeHtml(card.front)}</strong>
        <span>${escapeHtml(card.back)}</span>
      </button>
      <span class="card-move-controls">
        <button class="move-button" type="button" aria-label="Move card up" ${index === 0 ? "disabled" : ""}>↑</button>
        <button class="move-button" type="button" aria-label="Move card down" ${index === set.cards.length - 1 ? "disabled" : ""}>↓</button>
      </span>
    `;
    row.querySelector(".card-edit-button").addEventListener("click", () => openCardDialog(card.id));
    row.querySelector('[aria-label="Move card up"]').addEventListener("click", () => moveCard(card.id, -1));
    row.querySelector('[aria-label="Move card down"]').addEventListener("click", () => moveCard(card.id, 1));
    cardList.append(row);
  });
}

function renderSetup() {
  setupSetList.innerHTML = "";
  state.sets.forEach((set) => {
    const selected = state.setupSelection.has(set.id);
    const card = document.createElement("button");
    card.className = `set-card${selected ? " selected" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <span class="check-dot" aria-hidden="true">✓</span>
      <span class="set-main">
        <h3>${escapeHtml(set.title)}</h3>
        <p>${escapeHtml(set.description || "No description")}</p>
      </span>
      <span class="count-badge">${set.cards.length}</span>
    `;
    card.addEventListener("click", () => {
      if (state.setupSelection.has(set.id)) {
        state.setupSelection.delete(set.id);
      } else {
        state.setupSelection.add(set.id);
      }
      renderSetup();
    });
    setupSetList.append(card);
  });

  selectedCardCount.textContent = pluralize(getSelectedCards().length, "card") + " selected";
  document.querySelector("#begin-quiz-button").disabled = getSelectedCards().length === 0;
}

function renderQuizCard() {
  const current = state.quiz.cards[state.quiz.index];
  if (!current) {
    showResults();
    return;
  }

  const progress = ((state.quiz.index + 1) / state.quiz.cards.length) * 100;
  document.querySelector("#quiz-progress-label").textContent = `Card ${state.quiz.index + 1} of ${state.quiz.cards.length}`;
  document.querySelector("#quiz-progress-bar").style.width = `${progress}%`;
  document.querySelector("#score-pill").textContent = `${state.quiz.correct} ✓`;
  document.querySelector("#active-set-chip").textContent = current.setTitle;
  document.querySelector("#flashcard-text").textContent = state.quiz.flipped ? current.back : current.front;
  document.querySelector("#flashcard-button").classList.toggle("flipped", state.quiz.flipped);
  document.querySelector("#answer-actions").classList.toggle("visible", state.quiz.flipped);
}

function showResults() {
  const total = state.quiz.cards.length;
  const correct = state.quiz.correct;
  const missed = state.quiz.missed.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  document.querySelector("#result-score").textContent = `${percent}%`;
  document.querySelector("#result-correct").textContent = correct;
  document.querySelector("#result-missed").textContent = missed;
  document.querySelector("#result-total").textContent = total;
  document.querySelector("#retry-missed-button").disabled = missed === 0;

  const missedList = document.querySelector("#missed-list");
  missedList.innerHTML = "";
  if (missed) {
    state.quiz.missed.forEach((card) => {
      const row = document.createElement("div");
      row.className = "missed-row";
      row.innerHTML = `<strong>${escapeHtml(card.front)}</strong><span>${escapeHtml(card.back)}</span>`;
      missedList.append(row);
    });
  }

  showScreen("results");
}

function openSet(setId) {
  state.activeSetId = setId;
  renderSet();
  showScreen("set");
}

function openQuizSetup(selectedIds = state.sets.map((set) => set.id)) {
  state.setupSelection = new Set(selectedIds);
  renderSetup();
  showScreen("setup");
}

function getSelectedCards() {
  return state.sets
    .filter((set) => state.setupSelection.has(set.id))
    .flatMap((set) => set.cards.map((card) => ({ ...card, setId: set.id, setTitle: set.title })));
}

function startQuiz(cards) {
  const deck = shuffleToggle.checked ? shuffle(cards) : [...cards];
  state.quiz = {
    cards: deck,
    index: 0,
    flipped: false,
    correct: 0,
    missed: []
  };
  renderQuizCard();
  showScreen("quiz");
}

function scoreCard(wasCorrect) {
  const current = state.quiz.cards[state.quiz.index];
  if (wasCorrect) {
    state.quiz.correct += 1;
  } else {
    state.quiz.missed.push(current);
  }
  state.quiz.index += 1;
  state.quiz.flipped = false;
  renderQuizCard();
}

function moveCard(cardId, direction) {
  const set = getActiveSet();
  if (!set) return;
  const currentIndex = set.cards.findIndex((card) => card.id === cardId);
  const nextIndex = currentIndex + direction;
  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= set.cards.length) return;

  const [card] = set.cards.splice(currentIndex, 1);
  set.cards.splice(nextIndex, 0, card);
  saveSets();
  renderSet();
}

function openSetDialog(setId = null) {
  state.editingSetId = setId;
  const set = state.sets.find((item) => item.id === setId);
  document.querySelector("#set-dialog-title").textContent = set ? "Edit Set" : "New Set";
  document.querySelector("#set-title-input").value = set?.title || "";
  document.querySelector("#set-description-input").value = set?.description || "";
  document.querySelector("#delete-set-button").hidden = !set;
  setDialog.showModal();
}

function openCardDialog(cardId = null) {
  state.editingCardId = cardId;
  const set = getActiveSet();
  const card = set?.cards.find((item) => item.id === cardId);
  document.querySelector("#card-dialog-title").textContent = card ? "Edit Card" : "New Card";
  document.querySelector("#card-front-input").value = card?.front || "";
  document.querySelector("#card-back-input").value = card?.back || "";
  document.querySelector("#delete-card-button").hidden = !card;
  cardDialog.showModal();
}

function emptyState(text) {
  const element = document.createElement("div");
  element.className = "empty-state";
  element.textContent = text;
  return element;
}

function shuffle(cards) {
  const deck = [...cards];
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  return deck;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelector("#add-set-button").addEventListener("click", () => openSetDialog());
document.querySelector("#home-quiz-button").addEventListener("click", () => openQuizSetup());
document.querySelector("#export-data-button").addEventListener("click", exportDecks);
document.querySelector("#import-data-button").addEventListener("click", () => {
  document.querySelector("#import-data-input").click();
});
document.querySelector("#import-data-input").addEventListener("change", (event) => {
  importDecks(event.target.files[0]);
});
document.querySelector("#back-home-button").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});
document.querySelector("#edit-set-button").addEventListener("click", () => openSetDialog(state.activeSetId));
document.querySelector("#add-card-button").addEventListener("click", () => openCardDialog());
document.querySelector("#set-quiz-button").addEventListener("click", () => openQuizSetup([state.activeSetId]));
document.querySelector("#back-from-setup-button").addEventListener("click", () => {
  if (state.activeSetId) {
    renderSet();
    showScreen("set");
  } else {
    renderHome();
    showScreen("home");
  }
});
document.querySelector("#begin-quiz-button").addEventListener("click", () => startQuiz(getSelectedCards()));
document.querySelector("#exit-quiz-button").addEventListener("click", () => openQuizSetup([...state.setupSelection]));
document.querySelector("#flashcard-button").addEventListener("click", () => {
  state.quiz.flipped = !state.quiz.flipped;
  renderQuizCard();
});
document.querySelector("#mark-missed-button").addEventListener("click", () => scoreCard(false));
document.querySelector("#mark-correct-button").addEventListener("click", () => scoreCard(true));
document.querySelector("#retry-missed-button").addEventListener("click", () => startQuiz(state.quiz.missed));
document.querySelector("#new-quiz-button").addEventListener("click", () => openQuizSetup([...state.setupSelection]));
document.querySelector("#done-button").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});

setForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#set-title-input").value.trim();
  const description = document.querySelector("#set-description-input").value.trim();
  if (!title) return;

  if (state.editingSetId) {
    const set = state.sets.find((item) => item.id === state.editingSetId);
    set.title = title;
    set.description = description;
  } else {
    state.sets.unshift({ id: crypto.randomUUID(), title, description, cards: [] });
  }

  saveSets();
  setDialog.close();
  renderHome();
  if (state.activeScreen === "set") renderSet();
});

document.querySelector("#delete-set-button").addEventListener("click", () => {
  state.sets = state.sets.filter((set) => set.id !== state.editingSetId);
  state.activeSetId = null;
  saveSets();
  setDialog.close();
  renderHome();
  showScreen("home");
});

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const set = getActiveSet();
  const front = document.querySelector("#card-front-input").value.trim();
  const back = document.querySelector("#card-back-input").value.trim();
  if (!set || !front || !back) return;

  if (state.editingCardId) {
    const card = set.cards.find((item) => item.id === state.editingCardId);
    card.front = front;
    card.back = back;
  } else {
    set.cards.push({ id: crypto.randomUUID(), front, back });
  }

  saveSets();
  cardDialog.close();
  renderSet();
});

document.querySelector("#delete-card-button").addEventListener("click", () => {
  const set = getActiveSet();
  if (!set) return;
  set.cards = set.cards.filter((card) => card.id !== state.editingCardId);
  saveSets();
  cardDialog.close();
  renderSet();
});

renderHome();
