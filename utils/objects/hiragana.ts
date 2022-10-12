import { Guess } from "../../contexts/GameState";
import { shuffleArray } from "../funcs";

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
  },
  {
    character: "か",
    answer: "ka",
    state: "untouched"
  },
  {
    character: "き",
    answer: "ki",
    state: "untouched"
  },
  {
    character: "く",
    answer: "ku",
    state: "untouched"
  },
  {
    character: "け",
    answer: "ke",
    state: "untouched"
  },
  {
    character: "こ",
    answer: "ko",
    state: "untouched"
  },
  {
    character: "さ",
    answer: "sa",
    state: "untouched"
  },
  {
    character: "し",
    answer: "shi",
    state: "untouched"
  },
  {
    character: "す",
    answer: "su",
    state: "untouched"
  },
  {
    character: "せ",
    answer: "se",
    state: "untouched"
  },
  {
    character: "そ",
    answer: "so",
    state: "untouched"
  },
  {
    character: "た",
    answer: "ta",
    state: "untouched"
  },
  {
    character: "ち",
    answer: "chi",
    state: "untouched"
  },
  {
    character: "つ",
    answer: "tsu",
    state: "untouched"
  },
  {
    character: "て",
    answer: "te",
    state: "untouched"
  },
  {
    character: "と",
    answer: "to",
    state: "untouched"
  },
  {
    character: "な",
    answer: "na",
    state: "untouched"
  },
  {
    character: "に",
    answer: "ni",
    state: "untouched"
  },
  {
    character: "ぬ",
    answer: "nu",
    state: "untouched"
  },
  {
    character: "ね",
    answer: "ne",
    state: "untouched"
  },
  {
    character: "の",
    answer: "no",
    state: "untouched"
  },
  {
    character: "は",
    answer: "ha",
    state: "untouched"
  },
  {
    character: "ひ",
    answer: "hi",
    state: "untouched"
  },
  {
    character: "ふ",
    answer: "fu",
    state: "untouched"
  },
  {
    character: "へ",
    answer: "he",
    state: "untouched"
  },
  {
    character: "ほ",
    answer: "ho",
    state: "untouched"
  },
  {
    character: "ま",
    answer: "ma",
    state: "untouched"
  },
  {
    character: "み",
    answer: "mi",
    state: "untouched"
  },
  {
    character: "む",
    answer: "mu",
    state: "untouched"
  },
  {
    character: "め",
    answer: "me",
    state: "untouched"
  },
  {
    character: "も",
    answer: "mo",
    state: "untouched"
  },
  {
    character: "や",
    answer: "ya",
    state: "untouched"
  },
  {
    character: "ゆ",
    answer: "yu",
    state: "untouched"
  },
  {
    character: "よ",
    answer: "yo",
    state: "untouched"
  },
  {
    character: "ら",
    answer: "ra",
    state: "untouched"
  },
  {
    character: "り",
    answer: "ri",
    state: "untouched"
  },
  {
    character: "る",
    answer: "ru",
    state: "untouched"
  },
  {
    character: "れ",
    answer: "re",
    state: "untouched"
  },
  {
    character: "ろ",
    answer: "ro",
    state: "untouched"
  },
  {
    character: "わ",
    answer: "wa",
    state: "untouched"
  },
  {
    character: "を",
    answer: "wo",
    state: "untouched"
  },
  {
    character: "ん",
    answer: "n",
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
    character: "ぎ",
    answer: "gi",
    state: "untouched"
  },
  {
    character: "ぐ",
    answer: "gu",
    state: "untouched"
  },
  {
    character: "げ",
    answer: "ge",
    state: "untouched"
  },
  {
    character: "ご",
    answer: "go",
    state: "untouched"
  },
  {
    character: "ざ",
    answer: "za",
    state: "untouched"
  },
  {
    character: "じ",
    answer: "ji",
    state: "untouched"
  },
  {
    character: "ず",
    answer: "zu",
    state: "untouched"
  },
  {
    character: "ぜ",
    answer: "ze",
    state: "untouched"
  },
  {
    character: "ぞ",
    answer: "zo",
    state: "untouched"
  },
  {
    character: "だ",
    answer: "da",
    state: "untouched"
  },
  {
    character: "ぢ",
    answer: "zi",
    state: "untouched"
  },
  {
    character: "づ",
    answer: "zu",
    state: "untouched"
  },
  {
    character: "で",
    answer: "de",
    state: "untouched"
  },
  {
    character: "ど",
    answer: "do",
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
  },
  {
    character: "び",
    answer: "bi",
    state: "untouched"
  },
  {
    character: "ぴ",
    answer: "pi",
    state: "untouched"
  },
  {
    character: "ぶ",
    answer: "bu",
    state: "untouched"
  },
  {
    character: "ぷ",
    answer: "pu",
    state: "untouched"
  },
  {
    character: "べ",
    answer: "be",
    state: "untouched"
  },
  {
    character: "ぺ",
    answer: "pe",
    state: "untouched"
  },
  {
    character: "ぼ",
    answer: "bo",
    state: "untouched"
  },
  {
    character: "ぽ",
    answer: "po",
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
  },
  {
    character: "しゃ",
    answer: "sha",
    state: "untouched"
  },
  {
    character: "しゅ",
    answer: "shu",
    state: "untouched"
  },
  {
    character: "しょ",
    answer: "sho",
    state: "untouched"
  },
  {
    character: "じゃ",
    answer: "jya",
    state: "untouched"
  },
  {
    character: "じゅ",
    answer: "jyu",
    state: "untouched"
  },
  {
    character: "じょ",
    answer: "jyo",
    state: "untouched"
  },
  {
    character: "ちゃ",
    answer: "cha",
    state: "untouched"
  },
  {
    character: "ちゅ",
    answer: "chu",
    state: "untouched"
  },
  {
    character: "ちょ",
    answer: "cho",
    state: "untouched"
  },
  {
    character: "ぢゃ",
    answer: "dya",
    state: "untouched"
  },
  {
    character: "ぢゅ",
    answer: "dyu",
    state: "untouched"
  },
  {
    character: "ぢょ",
    answer: "dyo",
    state: "untouched"
  },
  {
    character: "にゃ",
    answer: "nya",
    state: "untouched"
  },
  {
    character: "にゅ",
    answer: "nyu",
    state: "untouched"
  },
  {
    character: "にょ",
    answer: "nyo",
    state: "untouched"
  },
  {
    character: "ひゃ",
    answer: "hya",
    state: "untouched"
  },
  {
    character: "ひゅ",
    answer: "hyu",
    state: "untouched"
  },
  {
    character: "ひょ",
    answer: "hyo",
    state: "untouched"
  },
  {
    character: "びゃ",
    answer: "bya",
    state: "untouched"
  },
  {
    character: "びゅ",
    answer: "byu",
    state: "untouched"
  },
  {
    character: "びょ",
    answer: "byo",
    state: "untouched"
  },
  {
    character: "ぴゃ",
    answer: "pya",
    state: "untouched"
  },
  {
    character: "ぴゅ",
    answer: "pyu",
    state: "untouched"
  },
  {
    character: "ぴょ",
    answer: "pyo",
    state: "untouched"
  },
  {
    character: "みゃ",
    answer: "mya",
    state: "untouched"
  },
  {
    character: "みゅ",
    answer: "myu",
    state: "untouched"
  },
  {
    character: "みょ",
    answer: "myo",
    state: "untouched"
  },
  {
    character: "りゃ",
    answer: "rya",
    state: "untouched"
  },
  {
    character: "りゅ",
    answer: "ryu",
    state: "untouched"
  },
  {
    character: "りょ",
    answer: "ryo",
    state: "untouched"
  }
];

export function GetKanas(type: string): Guess[] {
  switch (type) {
    case "main":
      return shuffleArray(mainKanas);
    case "dakuten":
      return shuffleArray(dakutenKanas);
    case "combination":
      return shuffleArray(combinationKanas);
    case "all":
      return shuffleArray([...mainKanas, ...dakutenKanas, ...combinationKanas]);
  }
  return [];
}
