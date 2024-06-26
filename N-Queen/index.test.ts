import { solveNQueen } from ".";

describe("Test N-Queen Method", () => {
  test.each`
    n    | expected
    ${1} | ${[["Q"]]}
    ${2} | ${[]}
    ${3} | ${[]}
    ${4} | ${[["..Q.", "Q...", "...Q", ".Q.."], [".Q..", "...Q", "Q...", "..Q."]]}
    ${5} | ${[["Q....", "...Q.", ".Q...", "....Q", "..Q.."], ["Q....", "..Q..", "....Q", ".Q...", "...Q."], ["..Q..", "Q....", "...Q.", ".Q...", "....Q"], ["...Q.", "Q....", "..Q..", "....Q", ".Q..."], [".Q...", "...Q.", "Q....", "..Q..", "....Q"], ["....Q", "..Q..", "Q....", "...Q.", ".Q..."], [".Q...", "....Q", "..Q..", "Q....", "...Q."], ["....Q", ".Q...", "...Q.", "Q....", "..Q.."], ["...Q.", ".Q...", "....Q", "..Q..", "Q...."], ["..Q..", "....Q", ".Q...", "...Q.", "Q...."]]}
  `("Test N-Queen when input is $n", ({ n, expected }) => {
    expect(solveNQueen(n)).toEqual(expected);
  });
});
