export const myAtoi = (s: string): number => {
  const number = parseInt(s.trim());

  if (isNaN(number)) return 0;

  if (number < 0) {
    return Math.max(number, Math.pow(-2, 31));
  }

  if (number > 0) {
    return Math.min(number, Math.pow(2, 31) - 1);
  }

  return number;
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
