import { generateNumberSequence } from "../utils";
import { CustomSettings } from "./CustomSettings";

export type AllowedSequenceItem = number | string | HTMLImageElement;

export type SelectionMenuProps<T> = {
  setGameState: () => void;
  setSequence: React.Dispatch<React.SetStateAction<T[] | null>>;
};


export const SelectionMenu = <T,>({setGameState, setSequence}: SelectionMenuProps<T>) => {
  return (
    <div className="text-center">
        <h1 className="text-2xl">Selection Menu</h1>
        <CustomSettings />
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => setSequence(generateNumberSequence(2, 3) as T[])}
        >10 tm 99
        </button>
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => setSequence(generateNumberSequence(3, 3) as T[])}
        >100 tm 999
        </button>
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => setSequence(generateNumberSequence(4, 3) as T[])}
        >1000 tm 9999
        </button>
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => setGameState()}
        >Start
        </button>
    </div>
  );
}