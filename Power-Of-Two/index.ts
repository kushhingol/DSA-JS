export const isPowerOfTwo = (n: number): boolean => {
  if (n % 2 !== 0 && n !== 1) return false;
  if (Math.log2(n) % 1 === 0) return true;
  return false;
};
