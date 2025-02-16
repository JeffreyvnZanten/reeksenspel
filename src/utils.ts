export function generateNumberSequence(baseValue : number, repeatAmount: number): number[] {
  const min = Math.pow(10, baseValue  - 1);
  const max = Math.pow(10, baseValue ) - 1;

  return Array.from({ length: repeatAmount }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export function generateLetterSequence(letterCount: number, repeatAmount: number): string[] {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  return Array.from({ length: repeatAmount }, () =>
    Array.from({ length: letterCount }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join("")
  );
}
  