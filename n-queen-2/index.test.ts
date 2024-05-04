import { solveNQueenProblem } from ".";

describe("Test NQueen2 method", () => {
  test.each`
    n    | expected
    ${0} | ${1}
    ${1} | ${1}
    ${2} | ${0}
    ${3} | ${0}
    ${4} | ${2}
    ${5} | ${10}
    ${6} | ${4}
    ${7} | ${40}
    ${8} | ${92}
    ${9} | ${352}
  `(
    "test Nqueen2 method when n=$n and its expected to give outpur $expected",
    ({ n, expected }) => {
      expect(solveNQueenProblem(n)).toBe(expected);
    }
  );
});
