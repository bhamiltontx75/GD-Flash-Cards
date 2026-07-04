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
    "id": "ce37e3ad-e9ab-464d-8282-1dc3f3cab4a9",
    "title": "Astrology Basics",
    "description": "A compact set for checking zodiac, planet, and house meanings.",
    "cards": [
      {
        "id": "aacbdf17-8bc4-4da5-a1df-620e00fd786b",
        "front": "♈ Aries",
        "back": "Cardinal fire; initiative, courage, direct action."
      },
      {
        "id": "18ee0a47-300b-4065-bfc1-e9da88a06fec",
        "front": "♉ Taurus",
        "back": "Fixed earth; stability, patience, sensuality."
      },
      {
        "id": "d3b0c9e1-a21b-45ff-84d0-bede8643e08d",
        "front": "♊ Gemini",
        "back": "Mutable air; curiosity, speech, flexible thinking."
      },
      {
        "id": "4be75adf-6fcb-48dc-9715-22e87297e635",
        "front": "♋ Cancer",
        "back": "Cardinal water; care, memory, emotional protection."
      },
      {
        "id": "588348d2-00c2-4a96-8788-bba34e2144e6",
        "front": "♌ Leo",
        "back": "Fixed fire; confidence, creativity, self-expression."
      },
      {
        "id": "cf33b32c-34ea-4f8f-be0d-5aae77f8d13b",
        "front": "♍ Virgo",
        "back": "Mutable earth; craft, service, practical refinement."
      },
      {
        "id": "2adae5e2-78d3-46ba-8531-96461a564302",
        "front": "♎ Libra",
        "back": "Cardinal air; balance, partnership, diplomacy."
      },
      {
        "id": "50bd4021-ab1a-4cdf-8831-3a6eefae456e",
        "front": "♏ Scorpio",
        "back": "Fixed water; depth, transformation, focused intensity."
      },
      {
        "id": "5b3a4cef-2f9c-457d-9ef5-b3546ad63b2b",
        "front": "♐ Sagittarius",
        "back": "Mutable fire; exploration, belief, widening horizons."
      },
      {
        "id": "61cac2bb-8423-4091-8373-d8231673d2be",
        "front": "♑ Capricorn",
        "back": "Cardinal earth; discipline, structure, long-term ambition."
      },
      {
        "id": "334a3daa-b9f4-4302-851f-49b7e7b17c90",
        "front": "♒ Aquarius",
        "back": "Fixed air; systems, originality, collective ideals."
      },
      {
        "id": "07fbe1e9-1da5-44f8-a2e8-0fc3e54be899",
        "front": "♓ Pisces",
        "back": "Mutable water; imagination, compassion, permeability."
      }
    ]
  },
  {
    "id": "f4b36ff4-259d-426b-ac1b-5eb2dc8cd553",
    "title": "Hebrew Alphabet",
    "description": "Twenty-seven cards for Hebrew letters, names, transliterations, and values.",
    "cards": [
      {
        "id": "66052068-a633-4920-8056-40a9745f7b36",
        "front": "א",
        "back": "Hebrew: א\nName: Aleph\nTransliteration: Aleph\nNumerical value: 1"
      },
      {
        "id": "64a95770-25cf-42cf-9baf-164713f3f0dc",
        "front": "ב",
        "back": "Hebrew: ב\nName: Bet\nTransliteration: Bet\nNumerical value: 2"
      },
      {
        "id": "30797b48-f33c-4bc9-849c-8ce3c2b62eba",
        "front": "ג",
        "back": "Hebrew: ג\nName: Gimel\nTransliteration: Gimel\nNumerical value: 3"
      },
      {
        "id": "2cabab80-ae2e-4c12-b8f1-526d2b19332d",
        "front": "ד",
        "back": "Hebrew: ד\nName: Dalet\nTransliteration: Dalet\nNumerical value: 4"
      },
      {
        "id": "d669ffd8-b9b1-49d4-bdbd-73eed4af0474",
        "front": "ה",
        "back": "Hebrew: ה\nName: He\nTransliteration: He\nNumerical value: 5"
      },
      {
        "id": "06d3ee27-4fb0-4832-9ce1-c501486df2d5",
        "front": "ו",
        "back": "Hebrew: ו\nName: Vav\nTransliteration: Vav\nNumerical value: 6"
      },
      {
        "id": "ddf6a352-c874-48bc-a362-b1e58cfe5a73",
        "front": "ז",
        "back": "Hebrew: ז\nName: Zayin\nTransliteration: Zayin\nNumerical value: 7"
      },
      {
        "id": "4d6c7bae-2c7c-4b82-8782-8faa3f27139d",
        "front": "ח",
        "back": "Hebrew: ח\nName: Chet\nTransliteration: Chet\nNumerical value: 8"
      },
      {
        "id": "a4357a62-b14b-4766-958d-615d4da95167",
        "front": "ט",
        "back": "Hebrew: ט\nName: Tet\nTransliteration: Tet\nNumerical value: 9"
      },
      {
        "id": "23fe4bc3-c9da-460d-89b5-8739a7a3cb11",
        "front": "י",
        "back": "Hebrew: י\nName: Yod\nTransliteration: Yod\nNumerical value: 10"
      },
      {
        "id": "f9372e4e-c7e3-45b8-b150-dc773bb82e3e",
        "front": "כ",
        "back": "Hebrew: כ\nName: Kaf\nTransliteration: Kaf\nNumerical value: 20"
      },
      {
        "id": "8c5f7c06-9e9a-4567-9773-1dc0b1bcd1ab",
        "front": "ל",
        "back": "Hebrew: ל\nName: Lamed\nTransliteration: Lamed\nNumerical value: 30"
      },
      {
        "id": "b7a94f5e-ec86-49ad-b7a9-d05ddba9f28a",
        "front": "מ",
        "back": "Hebrew: מ\nName: Mem\nTransliteration: Mem\nNumerical value: 40"
      },
      {
        "id": "667555aa-4487-46b6-bfef-7284a2adf649",
        "front": "נ",
        "back": "Hebrew: נ\nName: Nun\nTransliteration: Nun\nNumerical value: 50"
      },
      {
        "id": "b98c8549-be3e-4002-a35b-e6e25a190294",
        "front": "ס",
        "back": "Hebrew: ס\nName: Samekh\nTransliteration: Samekh\nNumerical value: 60"
      },
      {
        "id": "c76378b7-4d2e-45de-a335-e3d796265650",
        "front": "ע",
        "back": "Hebrew: ע\nName: Ayin\nTransliteration: Ayin\nNumerical value: 70"
      },
      {
        "id": "8cdf956c-f876-4646-9be9-7fd3c73c4cf5",
        "front": "פ",
        "back": "Hebrew: פ\nName: Pe\nTransliteration: Pe\nNumerical value: 80"
      },
      {
        "id": "8fd8131e-0be4-41aa-a2c7-0ef367ee0b60",
        "front": "צ",
        "back": "Hebrew: צ\nName: Tsadi\nTransliteration: Tsadi\nNumerical value: 90"
      },
      {
        "id": "106993a8-2e12-45e5-880d-efa1889f605b",
        "front": "ק",
        "back": "Hebrew: ק\nName: Qof\nTransliteration: Qof\nNumerical value: 100"
      },
      {
        "id": "0c2dfb40-37b4-443e-9975-c8685ac88b5d",
        "front": "ר",
        "back": "Hebrew: ר\nName: Resh\nTransliteration: Resh\nNumerical value: 200"
      },
      {
        "id": "2197b283-c1e8-4fad-8f99-c632dadf5bd1",
        "front": "ש",
        "back": "Hebrew: ש\nName: Shin\nTransliteration: Shin\nNumerical value: 300"
      },
      {
        "id": "db59d963-0490-4089-ba39-fa5a977101e3",
        "front": "ת",
        "back": "Hebrew: ת\nName: Tav\nTransliteration: Tav\nNumerical value: 400"
      },
      {
        "id": "9cf752c5-7355-4925-8345-24d7b73a2013",
        "front": "ך",
        "back": "Hebrew: ך\nName: Final Kaf\nTransliteration: Kaf Sofit\nNumerical value: 20; final value 500"
      },
      {
        "id": "58126f6d-7118-49eb-8466-f8d5b0919a92",
        "front": "ם",
        "back": "Hebrew: ם\nName: Final Mem\nTransliteration: Mem Sofit\nNumerical value: 40; final value 600"
      },
      {
        "id": "cca5510f-0cba-4927-b39c-cc7877706491",
        "front": "ן",
        "back": "Hebrew: ן\nName: Final Nun\nTransliteration: Nun Sofit\nNumerical value: 50; final value 700"
      },
      {
        "id": "174dab51-811e-4184-b880-920eeb8f15fd",
        "front": "ף",
        "back": "Hebrew: ף\nName: Final Pe\nTransliteration: Pe Sofit\nNumerical value: 80; final value 800"
      },
      {
        "id": "b6bc0cba-be12-4f54-826f-8019de9fa984",
        "front": "ץ",
        "back": "Hebrew: ץ\nName: Final Tsadi\nTransliteration: Tsadi Sofit\nNumerical value: 90; final value 900"
      }
    ]
  },
  {
    "id": "d3a864d3-ef57-49b9-8ecf-6dc2ee8ab32c",
    "title": "Four Elements",
    "description": "Classical element symbols, Latin and Greek names, and qualities.",
    "cards": [
      {
        "id": "51e9bc55-5a7c-41d0-9fe4-068e5b5519d7",
        "front": "🜂 Fire",
        "back": "Latin: Ignis\nGreek: Πῦρ (Pyr)\nConditions: heat and dryness"
      },
      {
        "id": "74f7d759-9900-42ff-8f1b-327eff12102f",
        "front": "🜄 Water",
        "back": "Latin: Aqua\nGreek: Ὕδωρ (Hydor)\nConditions: cold and moisture"
      },
      {
        "id": "c1afd3bb-b270-4a31-a47e-067aafb76a63",
        "front": "🜁 Air",
        "back": "Latin: Aer\nGreek: Ἀήρ (Aer)\nConditions: heat and moisture"
      },
      {
        "id": "5ad95c39-ef07-4972-9078-c0d0eb962544",
        "front": "🜃 Earth",
        "back": "Latin: Terra\nGreek: Γῆ (Ge)\nConditions: cold and dryness"
      }
    ]
  },
  {
    "id": "e3d7c273-8543-4cb0-981e-186a397f21c7",
    "title": "Planetary Symbols",
    "description": "Astrological planet symbols plus Caput and Cauda Draconis.",
    "cards": [
      {
        "id": "da9886cd-269d-4cac-8fe5-5a3ee5bf2ff4",
        "front": "☉",
        "back": "Sun"
      },
      {
        "id": "9fb35152-1752-4d13-b0c7-6c57caca6869",
        "front": "☽",
        "back": "Moon"
      },
      {
        "id": "a2695eeb-09a1-4f79-8cc1-d473ccde480f",
        "front": "☿",
        "back": "Mercury"
      },
      {
        "id": "1cadc2a2-9c64-4f3f-9cf8-a9e8877e64b6",
        "front": "♀",
        "back": "Venus"
      },
      {
        "id": "cbce86ea-8a74-4b44-9005-491139783e46",
        "front": "♂",
        "back": "Mars"
      },
      {
        "id": "74f83b1b-c599-4f81-9834-de18ad2f68af",
        "front": "♃",
        "back": "Jupiter"
      },
      {
        "id": "016444f4-55ad-4018-a7b8-5490e70a5649",
        "front": "♄",
        "back": "Saturn"
      },
      {
        "id": "484a3579-d1da-4984-9841-dad0404f5490",
        "front": "♅",
        "back": "Uranus"
      },
      {
        "id": "a102470e-9c10-4afd-91fe-7e3da2b2e2b8",
        "front": "♆",
        "back": "Neptune"
      },
      {
        "id": "330f0be5-246f-4b6c-b78a-42e7c035b7a9",
        "front": "♇",
        "back": "Pluto"
      },
      {
        "id": "2e224b18-70f6-4ca0-a0ea-f0e87eeedd7e",
        "front": "☊",
        "back": "Caput Draconis"
      },
      {
        "id": "7eda020a-e653-47b9-ac37-8be2a20cc081",
        "front": "☋",
        "back": "Cauda Draconis"
      }
    ]
  },
  {
    "id": "bdf80a21-dbd4-49ea-beeb-114266938f26",
    "title": "Kabbalah Sephiroth",
    "description": "The ten Sephiroth with number, English meaning, Hebrew, and transliteration.",
    "cards": [
      {
        "id": "df789f5f-5647-4b50-96c1-4ff4e52548a1",
        "front": "1. Keter",
        "back": "Number: 1\nEnglish: Crown\nHebrew: כתר\nTransliteration: Keter (K-T-R)"
      },
      {
        "id": "b964207b-2fcc-4bfa-bcdb-f7b269f556c4",
        "front": "2. Chokmah",
        "back": "Number: 2\nEnglish: Wisdom\nHebrew: חכמה\nTransliteration: Chokmah (Ch-K-M-H)"
      },
      {
        "id": "9751f1f4-aeda-4b12-ae11-2aeacf8ff891",
        "front": "3. Binah",
        "back": "Number: 3\nEnglish: Understanding\nHebrew: בינה\nTransliteration: Binah (B-Y-N-H)"
      },
      {
        "id": "ea54d074-e73e-4279-ac7e-7d312e5ed6d7",
        "front": "4. Chesed",
        "back": "Number: 4\nEnglish: Mercy\nHebrew: חסד\nTransliteration: Chesed (Ch-S-D)"
      },
      {
        "id": "54387189-ed66-48aa-a403-57e0def353f6",
        "front": "5. Gevurah",
        "back": "Number: 5\nEnglish: Severity\nHebrew: גבורה\nTransliteration: Gevurah (G-B-V-R-H)"
      },
      {
        "id": "3b974746-3050-4753-b7bb-521b21ee98b2",
        "front": "6. Tiferet",
        "back": "Number: 6\nEnglish: Beauty\nHebrew: תפארת\nTransliteration: Tiferet (T-P-A-R-T)"
      },
      {
        "id": "0071cd2a-a983-41e0-8d29-15159c33e536",
        "front": "7. Netzach",
        "back": "Number: 7\nEnglish: Victory\nHebrew: נצח\nTransliteration: Netzach (N-Tz-Ch)"
      },
      {
        "id": "c27cda67-919b-4484-83bc-9273b3803689",
        "front": "8. Hod",
        "back": "Number: 8\nEnglish: Splendor\nHebrew: הוד\nTransliteration: Hod (H-V-D)"
      },
      {
        "id": "283f813a-6713-43e8-8cdb-51de1c754199",
        "front": "9. Yesod",
        "back": "Number: 9\nEnglish: Foundation\nHebrew: יסוד\nTransliteration: Yesod (Y-S-V-D)"
      },
      {
        "id": "e7da57b1-b230-4066-9698-ea13d8356232",
        "front": "10. Malkuth",
        "back": "Number: 10\nEnglish: Kingdom\nHebrew: מלכות\nTransliteration: Malkuth (M-L-K-V-T)"
      }
    ]
  }
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
