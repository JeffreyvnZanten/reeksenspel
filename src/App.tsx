import { useState } from 'react';
import { SequenceDisplay } from './components/SequenceDisplay';
import { SelectionMenu } from './components/SelectionMenu';
import { InputScreen } from './components/InputScreen';
import './App.css';
import { ScoreDisplay } from './components/ScoreDisplay';

export enum GameState {
  SelectionMenu,
  SequenceDisplay,
  InputScreen,
  ScoreDisplay
}

export const App = <T,>() => {
  const [gameState, setGameState] = useState(GameState.SelectionMenu);
  const [sequence, setSequence] = useState<T[] | null>(null);

  const screens = [
    () => (
      <SelectionMenu
        setGameState={() => setGameState(GameState.SequenceDisplay)}
        setSequence={setSequence}
      />
    ),
    () => (
      <SequenceDisplay
        sequence={sequence as T[]}
        handleOnComplete={() => setGameState(GameState.InputScreen)}
      />
    ),
    () => (
      <InputScreen handleOnSubmit={(input) => console.log(input)} />
    ),
    () => (
      <ScoreDisplay />
    )
  ];

  return (
    <div className="mx-auto max-w-2xl">
      {screens[gameState]()}
    </div>
  );
};