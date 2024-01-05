import { matrixSpiralFromLeftToRight, matrixSpiralFromTopToBottom } from ".";

describe("Test Spiral Matrix from Left to Right", () => {
  test.each`
    matrix                                             | expected
    ${[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]}   | ${[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]}
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}               | ${[1, 2, 3, 6, 9, 8, 7, 4, 5]}
    ${[[1, 2, 3], [4, 5, 6]]}                          | ${[1, 2, 3, 6, 5, 4]}
    ${[[1, 2], [3, 4], [5, 6]]}                        | ${[1, 2, 4, 6, 5, 3]}
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]} | ${[1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]}
  `("returns $expected when $matrix", ({ matrix, expected }) => {
    expect(matrixSpiralFromLeftToRight(matrix)).toEqual(expected);
  });
});

describe("Test Spiral Matrix from Top to Bottom", () => {
  test.each`
    matrix                                             | expected
    ${[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]}   | ${[1, 5, 9, 10, 11, 12, 8, 4, 3, 2, 6, 7]}
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}               | ${[1, 4, 7, 8, 9, 6, 3, 2, 5]}
    ${[[1, 2, 3], [4, 5, 6]]}                          | ${[1, 4, 5, 6, 3, 2]}
    ${[[1, 2], [3, 4], [5, 6]]}                        | ${[1, 3, 5, 6, 4, 2]}
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]} | ${[1, 4, 7, 10, 11, 12, 9, 6, 3, 2, 5, 8]}
  `("returns $expected when $matrix", ({ matrix, expected }) => {
    expect(matrixSpiralFromTopToBottom(matrix)).toEqual(expected);
  });
});
