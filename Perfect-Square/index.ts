export const isPerfectSquare = (num: number): boolean => {
  const sqrtNum = num ** 0.5;
  return Number.isInteger(sqrtNum);
};

export const isPerfectSquare2 = (num: number): boolean => {
  let start = 0;
  let end = num;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (middle * middle === num) {
      return true;
    }

    if (middle * middle > num) {
      end = middle - 1;
      continue;
    }

    start = middle + 1;
  }

  return false;
};
