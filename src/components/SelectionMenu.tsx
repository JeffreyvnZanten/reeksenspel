import { useState } from "react";
import { generateLetterSequence, generateNumberSequence } from "../utils";
import { ClickableIcon } from "./ClickableIcon";

export type SelectionMenuProps<T> = {
  setGameState: () => void;
  setSequence: React.Dispatch<React.SetStateAction<T[] | null>>;
};

type Sequence<T> = {
  data: T[];
  type: string;
}

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
    <div className="text-center flex gap-4 flex-col">
        <h1 className="text-4xl p-1 text-white">Kies een reeks</h1>
        <div className="flex space-x-4 justify-center">
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
            className="bg-black border-2 hover:bg-slate-900 text-xl text-white font-bold py-2 px-8 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}