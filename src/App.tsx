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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
        handleReset={() => setGameState(GameState.SequenceDisplay)}
        setIsSuccess={setIsSuccess}
        sequence={sequence as T[]}
      />
    ),
    () => (
      <ScoreDisplay isSuccess={isSuccess} setGameState={() => setGameState(GameState.SelectionMenu)}/>
    )
  ];

  return (
    <div className="mx-auto w-full max-w-sm min-h-screen sm:max-w-2xl bg-[#EB6E24]">
      <img className="w-full object-contain" src="./Rectangle 6.png" />
      {screens[gameState]()}
    </div>
  );  
};