export const canJump = (nums: number[]): boolean => {
  if (nums.length === 1) return true;

  // set the lastJumpIndex as last index because it will be index where the jump will be landed
  let lastJumpIndex = nums.length - 1;

  // start a for loop from lastJumpIndex - 1 since we need to check the previous jumps
  // and check whether nums[i] + i >= lastJumpIndex if yes that means a jump is possible from the point
  // so update the index
  for (let i = lastJumpIndex - 1; i >= 0; i--) {
    if (i + nums[i] >= lastJumpIndex) {
      lastJumpIndex = i;
    }
  }

  return lastJumpIndex === 0;
};
