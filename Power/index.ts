export const myPow = (x: number, n: number): number => {
  if (n === 0) return 1;

  if (x === -1) return n % 2 === 0 ? 1 : -1;

  if (n <= -1075 && x >= 2) return 0;

  const result = Math.exp(n * Math.log(Math.abs(x)));

  return x < 0 && n % 2 !== 0 ? -result : result;
};

console.log(myPow(2, -10)); // 0.00098
console.log(myPow(2, -2)); // 0.25
