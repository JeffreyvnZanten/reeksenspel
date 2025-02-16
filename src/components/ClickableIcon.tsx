type ClickableIconProps = {
    name: string;
    onClick: () => void;
    isSelected: boolean;
}

export const ClickableIcon = ({name, onClick, isSelected}: ClickableIconProps) => {
  return (
    <img 
        onClick={onClick} 
        src={`./${name}.png`} 
        alt={name} 
        className={`w-32 h-32 cursor-pointer p-2 ${isSelected ? ' border-4 border-red-500' : ''}`}
    />
  )
}
