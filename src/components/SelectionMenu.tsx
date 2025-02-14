type SelectionMenuProps = {
    handleOnClick: () => void;
}

export const SelectionMenu = ({handleOnClick}: SelectionMenuProps) => {
  return (
    <div>
        <h1>Selection Menu</h1>
        <button onClick={() => handleOnClick()}>
        Start
        </button>
    </div>
  );
}