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
    <div className="flex flex-col relative min-h-screen">
        <header className="bg-blue-900 py-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-serif text-slate-100 shadow-xl">
            Kies een reeks
          </h1>
        </header>
        <div className="flex w-full justify-evenly py-8 flex-row">
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
            className="fixed bottom-4 left-1/2 -translate-x-1/2 md:mx-auto md:static md:translate-x-0 bg-blue-900 cursor-pointer hover:bg-slate-900 mx-auto text-xl text-white font-bold py-3 px-36 rounded-lg"
            onClick={() => handleStartGame()}
        >Start
        </button>
    </div>
  );
}