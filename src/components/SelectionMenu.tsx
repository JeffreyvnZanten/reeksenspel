import { generateLetterSequence, generateNumberSequence } from "../utils";

export type AllowedSequenceItem = number | string | HTMLImageElement;

export type SelectionMenuProps<T> = {
  setGameState: () => void;
  sequence: T[];
  setSequence: React.Dispatch<React.SetStateAction<T[] | null>>;
};

export const SelectionMenu = <T,>({setGameState, sequence, setSequence}: SelectionMenuProps<T>) => {

  function handleSequenceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    
    switch (value) {
      case "nummers":
        setSequence(generateNumberSequence(2, 3) as T[]);
        break;
      case "letters":
        setSequence(generateLetterSequence(4) as T[]);
        break;
      default:
        break;
    }
  }

  function handleStartGame() {
    if(sequence !== null) setGameState();
    else alert("Selecteer een reeks");
  }

  return (
    <div className="text-center">
        <h1 className="text-2xl">Selection Menu</h1>
        <fieldset>
          <legend>Type Reeksen</legend>
          <input 
            type="radio" 
            id="nummers" 
            name="reeksen" 
            value="nummers" 
            onChange={handleSequenceChange} 
          />
          <label htmlFor ="nummers">Nummers</label>
          <input 
            type="radio" 
            id="letters" 
            name="reeksen" 
            value="letters" 
            onChange={handleSequenceChange} 
          />
          <label htmlFor ="letters">Letters</label>
        </fieldset>
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}