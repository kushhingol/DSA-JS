export const isPowerOfThree = (n: number) => {
  if (n === 0 || n < 0) return false;
  if (n === 1) return true;

  return n > 0 && (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
