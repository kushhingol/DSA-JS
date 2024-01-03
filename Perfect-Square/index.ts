export const isPerfectSquare = (num: number): boolean => {
  const sqrtNum = num ** 0.5;
  return Number.isInteger(sqrtNum);
};

export const isPerfectSquare2 = (num: number): boolean => {
  let left = 0;
  let right = num;

  while (left < right) {
    const mid = left + right / 2;
    const square = mid ** 2;
    if (square === num) return true;
    if (square > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
