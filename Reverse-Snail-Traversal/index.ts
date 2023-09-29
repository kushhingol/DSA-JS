export const reverseSnailTraversal = function (
  array: number[],
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== array.length) return [];

  const result = [...Array(rowsCount)].map(() => []);

  let row = 0;
  let col = 0;

  for (let i = 0; i < rowsCount * colsCount; i++) {
    const isSameRowCount = row === rowsCount;
    const isRowCountZero = row === 0 && i;

    // if the row reaches bottom or top then increment col by 1
    if (isSameRowCount || isRowCountZero) {
      col++;
    }

    // if even col then we always need to add it from top to bottom so incrementing row
    if (col % 2 === 0 && row < rowsCount) {
      result[row].push(array[i]);
      row++;
    }

    // if odd col then we always need to add it from bottom to top so decrementing row
    // since in the previous increment our row value would be row + 1 here we need to decrement by 1
    if (col % 2 !== 0 && row > 0) {
      result[row - 1].push(array[i]);
      row--;
    }
  }

  return result;
};
