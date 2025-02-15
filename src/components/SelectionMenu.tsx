import { CustomSettings } from "./CustomSettings";

type SelectionMenuProps = {
    handleOnClick: () => void;
}

export const SelectionMenu = ({handleOnClick}: SelectionMenuProps) => {
  return (
    <div className="text-center">
        <h1 className="text-2xl">Selection Menu</h1>
        <CustomSettings />
        <button 
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-1 px-6 rounded-lg"
            onClick={() => handleOnClick()}
        >Start
        </button>
    </div>
  );
}