export function generateNumberSequence(digits: number, repeatAmount: number): number[] {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Array.from({ length: repeatAmount }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export function generateLetterSequence(repeatAmount: number): string[] {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return Array.from({ length: repeatAmount }, () => alphabet[Math.floor(Math.random() * alphabet.length)]);
}
  