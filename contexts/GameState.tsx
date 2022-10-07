import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useState
} from "react";

export type GuessState = "untouched" | "failed" | "solved";

export type Guess = {
  character: string;
  answer: string;
  state: GuessState;
};

interface IGameState {
  playing: boolean;
  guesses: Guess[];
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
  changeGuesses: () => {},
  changeState: () => {},
  setGuessState: () => {}
});

export const GameStateProvider: FunctionComponent<IGameStateProvider> = ({
  children
}) => {
  const [playing, setPlaying] = useState(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const changeState = useCallback((state: boolean) => {
    setPlaying(state);
  }, []);

  const changeGuesses = (guesses: Guess[]) => {
    setGuesses(guesses);
  };

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
