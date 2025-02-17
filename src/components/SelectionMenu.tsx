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
    <div className="items-center justify-center flex flex-col">
        <div className="bg-blue-900 w-full h-16 justify-center items-center flex">
          <h1 className="text-2xl sm:text-3xl font-serif text-slate-100 p-1 shadow-xl text-center">
            Kies een reeks
          </h1>
        </div>
        <div className="flex gap-6 sm:gap-16 py-6 md:py-10 flex-row">
          <ClickableIcon
            name="getallenreeks"
            onClick={() => setSequenceType("getallenreeks")}
            isSelected={sequenceType === "getallenreeks"}
          />
          <ClickableIcon
            name="kaartenreeks"
            onClick={() => setSequenceType("kaartenreeks")}
            isSelected={sequenceType === "kaartenreeks"}
          />
        </div>
        {/* <GameSelector /> */}
        <button 
            className="absolute bottom-4 sm:static bg-blue-900 hover:bg-slate-900 text-xl text-white font-bold py-3 px-36 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}