import { useState } from "react";
import { generateLetterSequence, generateNumberSequence } from "../utils";
import { ClickableIcon } from "./ClickableIcon";
// import { GameSelector } from "./GameSelector";

export type SelectionMenuProps<T> = {
  setGameState: () => void;
  setSequence: React.Dispatch<React.SetStateAction<T[] | null>>;
};

export const SelectionMenu = <T,>({setGameState, setSequence}: SelectionMenuProps<T>) => {
  const [sequenceType, setSequenceType] = useState<string | null>(null);

  function handleStartGame() {
    if (sequenceType === "getallenreeks") {
      setSequence(generateNumberSequence(2, 3) as T[]);
    } else if (sequenceType === "letterreeks") {
      setSequence(generateLetterSequence(1, 3) as T[]);
    } else {
      alert("Kies een reeks");
      return;
    }

    setGameState();
  }

  return (
    <div className="items-center flex gap-2 flex-col">
        <div className="bg-blue-900 w-full h-20 justify-center items-center flex">
          <h1 className="text-4xl font-serif text-white p-1 text-center">Kies een breinspel</h1>
        </div>
        <div className="flex gap-6 md:gap-16 py-6 md:py-10 flex-row justify-center">
          <ClickableIcon
            name="getallenreeks"
            onClick={() => setSequenceType("getallenreeks")}
            isSelected={sequenceType === "getallenreeks"}
          />
          <ClickableIcon
            name="playing-cards"
            onClick={() => setSequenceType("playing-cards")}
            isSelected={sequenceType === "playing-cards"}
          />
        </div>
        {/* <GameSelector /> */}
        <button 
            className="bg-black border-2 hover:bg-slate-900 text-xl text-white font-bold py-2 px-8 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}