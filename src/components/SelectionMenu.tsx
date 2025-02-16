import { useState } from "react";
import { generateLetterSequence, generateNumberSequence } from "../utils";
import { ClickableIcon } from "./ClickableIcon";

export type AllowedSequenceItem = number | string | HTMLImageElement;

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
      setSequence(generateLetterSequence(2) as T[]);
    } else {
      alert("Kies een reeks");
      return;
    }

    setGameState();
  }

  return (
    <div className="text-center">
        <h1 className="text-4xl p-2">Kies een reeks</h1>
        <div className="flex space-x-4 justify-center p-2">
          <ClickableIcon
            name="getallenreeks"
            onClick={() => setSequenceType("getallenreeks")}
            isSelected={sequenceType === "getallenreeks"}
          />
          <ClickableIcon
            name="letterreeks"
            onClick={() => setSequenceType("letterreeks")}
            isSelected={sequenceType === "letterreeks"}
          />
        </div>
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}