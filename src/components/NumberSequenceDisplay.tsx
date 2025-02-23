import { useEffect, useState } from "react";

type SequenceDisplayProps<T> = {
  sequence: T[];
  handleOnComplete: () => void;
};

export const NumberSequenceDisplay = <T,>({ sequence, handleOnComplete }: SequenceDisplayProps<T>) => {
  const [itemDisplay, setItemDisplay] = useState<T | null>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let isMounted = true;
  
    async function showSequence() {
      for (const item of sequence) {
        if (!isMounted) break;
        setItemDisplay(item);
        await delay(1200);
        setItemDisplay(null);
        await delay(300);
      }
      if (isMounted) {
        handleOnComplete();
      }
    }
  
    showSequence();
  
    return () => {
      isMounted = false;
    };
  }, [sequence, handleOnComplete]);

  console.log("NumberSequenceDisplay");
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      {itemDisplay &&<p className="titanone-text text-8xl text-white py-40 px-4">{itemDisplay as string | number}</p>}
    </div>
  );
};