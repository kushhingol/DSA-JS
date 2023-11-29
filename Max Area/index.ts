export const maxArea = (height: number[]): number => {
  let maxAreaValue = 0;
  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
    const length = Math.min(height[left], height[right]);
    const breadth = right - left;

    maxAreaValue = Math.max(maxAreaValue, length * breadth);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxAreaValue;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
