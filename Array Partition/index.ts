export const arrayPairSum = (nums: number[]): number => {
  if (nums.length === 0) return 0;
  if (nums.length === 2) return Math.min(...nums);

  nums.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};
