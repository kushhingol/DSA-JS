export const isHappyNumber = (n: number) => {
  if (n === 1 || n === 7) return true;
  if (n <= 9) return false;

  let sum = 0;
  const numberStringArr = n.toString().split("");

  for (let i = 0; i < numberStringArr.length; i++) {
    sum += Number(numberStringArr[i]) ** 2;
  }

  if (sum === 1) return true;

  return isHappyNumber(sum);
};
