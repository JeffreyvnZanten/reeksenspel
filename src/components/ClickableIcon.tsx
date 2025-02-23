type ClickableIconProps = {
    name: string;
    onClick: () => void;
    isSelected: boolean;
}

export const ClickableIcon = ({name, onClick, isSelected}: ClickableIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        onClick={onClick} 
        src={`./images/${name}.png`} 
        alt={name} 
        className={`w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 cursor-pointer p-1 ${isSelected ? 'border-3 border-dashed border-white' : ''}`}
      />
      {/* <p className="text-slate-100 text-xl md:text-xl">{name}</p> */}
    </div>
  )
}
