import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

export type GuessState = "untouched" | "failed" | "solved";

export type Guess = {
  answer: string;
  character: string;
  state: GuessState;
};

type U = {
  F: number;
  S: number;
};

type Result = {
  failed: number;
  successful: number;
  total: number;
};

interface IGameState {
  guesses: Guess[];
  playing: boolean;
  over: boolean;
  results?: Result;
  changeGuesses: (guesses: Guess[]) => void;
  changeState: (state: boolean) => void;
  setGuessState: (char: string, gs: GuessState) => void;
}

interface IGameStateProvider {
  children: JSX.Element;
}

const GameStateContext = createContext<IGameState>({
  playing: false,
  guesses: [],
  over: false,
  results: undefined,
  changeGuesses: () => {},
  changeState: () => {},
  setGuessState: () => {}
});

export const GameStateProvider: FunctionComponent<IGameStateProvider> = ({
  children
}) => {
  const [playing, setPlaying] = useState(false);
  const [over, setOver] = useState(false);
  const [results, setResults] = useState<Result | undefined>(undefined);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const changeState = useCallback((state: boolean) => {
    setPlaying(state);
  }, []);

  const changeGuesses = (guesses: Guess[]) => {
    setOver(false);
    setResults(undefined);
    setGuesses(guesses);
  };

  useEffect(() => {
    const done = guesses.every((g) => g.state !== "untouched");
    if (guesses.length > 0 && done) {
      console.log("here");
      let f = 0;
      let s = 0;
      guesses.forEach((g) => {
        f += g.state === "failed" ? 1 : 0;
        s += g.state === "solved" ? 1 : 0;
      });
      setResults({
        failed: f,
        successful: s,
        total: guesses.length
      });
    }
  }, [guesses]);

  const setGuessState = useCallback(
    (char: string, gs: GuessState) => {
      const newGuesses = guesses.map((g) => {
        if (g.character === char) {
          return { ...g, state: gs };
        }
        return g;
      });

      setGuesses(newGuesses);
    },
    [guesses]
  );

  return (
    <GameStateContext.Provider
      value={{
        playing,
        guesses,
        over,
        results,
        changeGuesses,
        changeState,
        setGuessState
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState() {
  return useContext(GameStateContext);
}
