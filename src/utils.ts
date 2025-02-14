export function generateNumberSequence(digits: number, repeatAmount: number): number[] {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    return Array.from({ length: repeatAmount }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  