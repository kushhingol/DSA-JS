import { reverseSnailTraversal } from ".";

describe("Nested Array Generator", () => {
  test.each`
    array                                                                      | rowsCount | colsCount | result
    ${[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]} | ${5}      | ${4}      | ${[[19, 17, 16, 15], [10, 1, 14, 4], [3, 2, 12, 20], [7, 5, 18, 11], [9, 8, 6, 13]]}
    ${[1, 2, 3, 4]}                                                            | ${1}      | ${4}      | ${[[1, 2, 3, 4]]}
    ${[1, 2, 3, 4]}                                                            | ${2}      | ${2}      | ${[[1, 4], [2, 3]]}
  `(
    "should test reverseSnailTraversal of array when rowsCount=$rowsCount and colsCount=$colsCount should return result as $result",
    ({ array, rowsCount, colsCount, result }) => {
      const output = reverseSnailTraversal(array, rowsCount, colsCount);

      expect(`[${output}]`).toBe(`[${result}]`);
    }
  );
});
