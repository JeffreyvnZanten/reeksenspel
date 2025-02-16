import { useEffect, useState } from "react";

type SequenceDisplayProps<T> = {
  sequence: T[];
  handleOnComplete: () => void;
};

export const SequenceDisplay = <T,>({ sequence, handleOnComplete }: SequenceDisplayProps<T>) => {
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

  return (
    <div className="flex mx-auto justify-center items-center w-64 h-64 p-4">
      {itemDisplay &&<p className="text-8xl text-white">{itemDisplay as string | number}</p>}
    </div>
  );
};