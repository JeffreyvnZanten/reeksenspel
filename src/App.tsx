import { useState } from 'react';
import { SequenceDisplay } from './components/SequenceDisplay';
import { generateNumberSequence } from './utils';
import { SelectionMenu } from './components/SelectionMenu';
import './App.css';

export enum GameState {
  SelectionMenu,
  SequenceDisplay,
  EnterInput
}

export const App = () => {
  const [gameState, setGameState] = useState(GameState.SelectionMenu);

  return (
    <div className="container">
      {gameState === GameState.SelectionMenu && (
        <SelectionMenu handleOnClick={() => setGameState(GameState.SequenceDisplay)} />
      )}
      
      {gameState === GameState.SequenceDisplay && (
        <SequenceDisplay 
          sequence={generateNumberSequence(2, 3)} 
          handleOnComplete={() => setGameState(GameState.SelectionMenu)}
        />
      )}
    </div>
  );
}