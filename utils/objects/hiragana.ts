import { Guess } from "../../contexts/GameState";

export const mainKanas: Guess[] = [
  {
    character: "あ",
    answer: "a"
  },
  {
    character: "い",
    answer: "i"
  },
  {
    character: "う",
    answer: "u"
  },
  {
    character: "え",
    answer: "e"
  },
  {
    character: "お",
    answer: "o"
  }
];

export const dakutenKanas: Guess[] = [
  {
    character: "が",
    answer: "ga"
  },
  {
    character: "ざ",
    answer: "za"
  },
  {
    character: "だ",
    answer: "da"
  },
  {
    character: "ば",
    answer: "ba"
  },
  {
    character: "ぱ",
    answer: "pa"
  }
];

export const combinationKanas: Guess[] = [
  {
    character: "きゃ",
    answer: "kya"
  },
  {
    character: "きゅ",
    answer: "kyu"
  },
  {
    character: "きょ",
    answer: "kyo"
  },
  {
    character: "ぎゃ",
    answer: "gya"
  },
  {
    character: "ぎゅ",
    answer: "gyu"
  },
  {
    character: "ぎょ",
    answer: "gyo"
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
