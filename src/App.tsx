import { useState } from 'react';
import { SequenceDisplay } from './components/SequenceDisplay';
import { generateNumberSequence } from './utils';
import { SelectionMenu } from './components/SelectionMenu';
import { InputScreen } from './components/InputScreen';
import './App.css';

export enum GameState {
  SelectionMenu,
  SequenceDisplay,
  EnterInput
}

export const App = () => {
  const [gameState, setGameState] = useState(GameState.SelectionMenu);

  const screens = [
    () => (
      <SelectionMenu
        handleOnClick={() => setGameState(GameState.SequenceDisplay)}
      />
    ),
    () => (
      <SequenceDisplay
        sequence={generateNumberSequence(2, 3)}
        handleOnComplete={() => setGameState(GameState.EnterInput)}
      />
    ),
    () => (
      <InputScreen handleOnSubmit={(input) => console.log(input)} />
    ),
  ];

  return (
    <div className="mx-auto max-w-2xl">
      {screens[gameState]()}
    </div>
  );
};
