import { useState } from "react";

type CardProps = {
    url: string;
    onClick?: () => void;
}

export const Card = ({url, onClick} : CardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
        {isSelected && <div>
          <img
              src={url}
              className="w-22 h-28 sm:w-32 sm:h-48"
              onClick={onClick}
          />
          </div>
        }
        {
          <div className="w-22 h-28 border bg-white"></div>
        }
    </>
  )
}
