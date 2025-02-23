import { useState } from 'react';
import { NumberSequenceDisplay } from './components/NumberSequenceDisplay';
import { SelectionMenu } from './components/SelectionMenu';
import { NumberInputScreen } from './components/InputScreen';
import './App.css';
import { ScoreDisplay } from './components/ScoreDisplay';
import { CardSelectionScreen } from './components/CardSelectionScreen';

export enum GameState {
  SelectionMenu,
  NumberSequenceDisplay,
  NumberInputScreen,
  CardSequenceDisplay,
  CardSelectionScreen,
  ScoreDisplay
}

export const App = <T,>() => {
  const [gameState, setGameState] = useState(GameState.SelectionMenu);
  const [sequence, setSequence] = useState<T[] | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const screens = {
    [GameState.SelectionMenu]: (
      <SelectionMenu
        setGameState={() => setGameState(GameState.NumberSequenceDisplay)}
        setSequence={setSequence}
      />
    ),
    [GameState.NumberSequenceDisplay]: (
      <NumberSequenceDisplay
        sequence={sequence as T[]}
        handleOnComplete={() => setGameState(GameState.NumberInputScreen)}
      />
    ),
    [GameState.NumberInputScreen]: (
      <NumberInputScreen 
        handleOnSubmit={() => setGameState(GameState.ScoreDisplay)} 
        handleReset={() => setGameState(GameState.NumberSequenceDisplay)}
        setIsSuccess={setIsSuccess}
        sequence={sequence as T[]}
      />
    ),
    [GameState.CardSequenceDisplay]: (
      <></>
    ),
    [GameState.CardSelectionScreen]: (
      <CardSelectionScreen />
    ),
    [GameState.ScoreDisplay]: (
      <ScoreDisplay isSuccess={isSuccess} setGameState={() => setGameState(GameState.SelectionMenu)}/>
    )
  };

  console.log("App");
  return (screens[gameState]);  
};