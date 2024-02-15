export const rotateArray = (nums: number[], k: number) => {
  k = k % nums.length;
  if (k > 0) {
    nums.unshift(...nums.splice(-k));
  }
};
