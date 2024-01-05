export const generateMatrixBySpiralFromLeftToRight = (
  n: number
): number[][] => {
  if (n < 0) return [];
  if (n === 1) return [[1]];

  const result: number[][] = Array.from({ length: n }, () => Array(n));

  let top, left;
  top = left = 0;
  let right, bottom;
  right = bottom = n - 1;
  let matrixValue = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result[top][i] = matrixValue++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = matrixValue++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = matrixValue++;
      }
    }
    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = matrixValue++;
      }
    }
    left++;
  }
  return result;
};
