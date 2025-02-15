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
        await delay(1400);
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
  return <div className="text-4xl">{JSON.stringify(itemDisplay)}</div>
};