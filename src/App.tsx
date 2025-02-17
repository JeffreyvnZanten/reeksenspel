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
    <div className="mx-auto sm:w-m md:w-200 border-1 bg-[#F7D3B9] min-h-screen border-white">
      <img className="w-full" src="./header2.jpeg" />
      {screens[gameState]()}
    </div>
  );
};