export const reverseInteger = (num: number): number => {
  const reverseNumberString = `${num}`.split("").reverse().join("");

  const reverseNumber =
    num < 0
      ? Number(reverseNumberString.slice(0, -1)) * -1
      : Number(reverseNumberString);

  if (reverseNumber > 2 ** 31 - 1 || reverseNumber < -1 * 2 ** 31) return 0;

  return reverseNumber;
};

console.log(reverseInteger(-1009000));
