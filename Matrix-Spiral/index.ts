/**
 * 1 2 3 4
 * 5 6 7 8
 * 9 10 11 12
 *
 * Output: 1 2 3 4 8 12 11 10 9 5 6 7
 */

export const matrixSpiralFromLeftToRight = (matrix: number[][]): number[] => {
  if (!matrix?.length) return [];

  const result: number[] = [];
  const n = matrix.length;
  const m = matrix[0].length;

  //pointers
  let top = 0;
  let left = 0;
  let right = m - 1;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }
    bottom--;

    // bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
    }
    left++;
  }

  return result;
};

/**
 * 1 2 3 4
 * 5 6 7 8
 * 9 10 11 12
 *
 *
 * Expected output : 1 5 9 10 11 12 8 4 3 2 6 7
 */

export const matrixSpiralFromTopToBottom = (matrix: number[][]): number[] => {
  if (!matrix?.length) return [];

  const result: number[] = [];

  const n = matrix.length;
  const m = matrix[0].length;

  let top = 0;
  let left = 0;
  let right = m - 1;
  let bottom = n - 1;

  while (left <= right && top <= left) {
    // top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][left]);
    }
    left++;

    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][right]);
      }
    }
    right--;

    //right to left;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[top][i]);
      }
    }
    top++;
  }

  return result;
};
