export const maxSubArraySum = (nums: number[]): number => {
  let sum = nums[0];
  let max = sum;
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max);
  }

  return max;
};
