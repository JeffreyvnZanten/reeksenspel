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
      <InputScreen 
        handleOnSubmit={() => setGameState(GameState.ScoreDisplay)} 
        sequence={sequence as T[]}
      />
    ),
    () => (
      <ScoreDisplay setGameState={() => setGameState(GameState.SelectionMenu)}/>
    )
  ];

  return (
    <div className="mx-auto w-sm border-1 p-10 bg-gray-100">
      {screens[gameState]()}
    </div>
  );
};