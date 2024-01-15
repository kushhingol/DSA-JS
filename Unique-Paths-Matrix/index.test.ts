import { UniquePathsMatrix } from ".";

describe("Test Unique Paths Matrix", () => {
  test.each`
    m     | n     | expected
    ${3}  | ${7}  | ${28}
    ${3}  | ${2}  | ${3}
    ${10} | ${10} | ${48620}
    ${12} | ${10} | ${167960}
    ${17} | ${6}  | ${20349}
  `(
    "UniquePathsMatrix($m, $n) should return $expected",
    ({ m, n, expected }) => {
      expect(UniquePathsMatrix(m, n)).toBe(expected);
    }
  );
});
