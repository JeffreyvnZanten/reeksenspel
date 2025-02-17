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
        src={`./${name}.png`} 
        alt={name} 
        className={`size-34 sm:size-40 cursor-pointer p-1 ${isSelected ? 'border-3 border-dashed border-white' : ''}`}
      />
      <p className="text-slate-100 text-xl md:text-xl">{name}</p>
    </div>
  )
}
