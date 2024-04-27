import { generateParentheses } from ".";

describe("Test Generate Parentheses method", () => {
  test.each`
    n    | expected
    ${1} | ${["()"]}
    ${2} | ${["()()", "(())"]}
    ${4} | ${["()()()()", "()()(())", "()(())()", "()(()())", "()((()))", "(())()()", "(())(())", "(()())()", "(()()())", "(()(()))", "((()))()", "((())())", "((()()))", "(((())))"]}
    ${3} | ${["()()()", "()(())", "(())()", "(()())", "((()))"]}
  `("test generateParentheses method when input is $n", ({ n, expected }) => {
    expect(generateParentheses(n)).toEqual(expected);
  });
});
