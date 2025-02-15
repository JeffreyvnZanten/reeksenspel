import { useState } from "react";

export function useSequenceData<T>() {
  const [sequence, setSequence] = useState<T[] | null>(null);
  return { sequence, setSequence };
}