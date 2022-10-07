import { Guess } from "../../contexts/GameState";

export const mainKanas: Guess[] = [
  {
    character: "あ",
    answer: "a",
    state: "untouched"
  },
  {
    character: "い",
    answer: "i",
    state: "untouched"
  },
  {
    character: "う",
    answer: "u",
    state: "untouched"
  },
  {
    character: "え",
    answer: "e",
    state: "untouched"
  },
  {
    character: "お",
    answer: "o",
    state: "untouched"
  }
];

export const dakutenKanas: Guess[] = [
  {
    character: "が",
    answer: "ga",
    state: "untouched"
  },
  {
    character: "ざ",
    answer: "za",
    state: "untouched"
  },
  {
    character: "だ",
    answer: "da",
    state: "untouched"
  },
  {
    character: "ば",
    answer: "ba",
    state: "untouched"
  },
  {
    character: "ぱ",
    answer: "pa",
    state: "untouched"
  }
];

export const combinationKanas: Guess[] = [
  {
    character: "きゃ",
    answer: "kya",
    state: "untouched"
  },
  {
    character: "きゅ",
    answer: "kyu",
    state: "untouched"
  },
  {
    character: "きょ",
    answer: "kyo",
    state: "untouched"
  },
  {
    character: "ぎゃ",
    answer: "gya",
    state: "untouched"
  },
  {
    character: "ぎゅ",
    answer: "gyu",
    state: "untouched"
  },
  {
    character: "ぎょ",
    answer: "gyo",
    state: "untouched"
  }
];

export function GetKanas(type: string): Guess[] {
  switch (type) {
    case "main":
      return mainKanas;
    case "dakuten":
      return dakutenKanas;
    case "combination":
      return combinationKanas;
    case "all":
      return [...mainKanas, ...dakutenKanas, ...combinationKanas];
  }
  return [];
}
