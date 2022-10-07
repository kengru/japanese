import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useState
} from "react";

export type Guess = {
  character: string;
  answer: string;
};

interface IGameState {
  playing: boolean;
  guesses: Guess[];
  changeGuesses: (guesses: Guess[]) => void;
  changeState: (state: boolean) => void;
}

interface IGameStateProvider {
  children: JSX.Element;
}

const GameStateContext = createContext<IGameState>({
  playing: false,
  guesses: [],
  changeGuesses: () => {},
  changeState: () => {}
});

export const GameStateProvider: FunctionComponent<IGameStateProvider> = ({
  children
}) => {
  const [playing, setPlaying] = useState(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const changeState = useCallback((state: boolean) => {
    setPlaying(state);
  }, []);

  const changeGuesses = useCallback((guesses: Guess[]) => {
    setGuesses(guesses);
  }, []);

  return (
    <GameStateContext.Provider
      value={{
        playing,
        guesses,
        changeGuesses,
        changeState
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState() {
  return useContext(GameStateContext);
}
