import { generateMatrixBySpiralFromLeftToRight } from ".";

describe("Test Generate Matrix By Spiral", () => {
  test.each`
    n    | expected
    ${1} | ${[[1]]}
    ${2} | ${[[1, 2], [4, 3]]}
    ${3} | ${[[1, 2, 3], [8, 9, 4], [7, 6, 5]]}
    ${4} | ${[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]}
  `("returns $expected when $n", ({ n, expected }) => {
    expect(generateMatrixBySpiralFromLeftToRight(n)).toEqual(expected);
  });
});
