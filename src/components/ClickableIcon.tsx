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
        className={`size-32 cursor-pointer p-1 ${isSelected ? 'border-3 border-dashed border-white' : ''}`}
    />
  )
}
