type ButtonProps = {
    onClick: () => void;
    name?: string;
    icon?: string;
    className?: string;
}

export const Button = ({onClick, name, className}: ButtonProps) => {
  return (
    <button
        onClick={() => onClick}
        className={className}
    >{name}
    </button>
  )
}
