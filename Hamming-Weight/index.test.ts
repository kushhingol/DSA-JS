import { hammingWeight } from ".";

describe("Test Hamming Weight", () => {
  test.each`
    n                                   | expected
    ${0}                                | ${0}
    ${1}                                | ${1}
    ${2}                                | ${1}
    ${3}                                | ${2}
    ${4}                                | ${1}
    ${5}                                | ${2}
    ${6}                                | ${2}
    ${7}                                | ${3}
    ${8}                                | ${1}
    ${100}                              | ${3}
    ${1000}                             | ${6}
    ${10000}                            | ${5}
    ${10000000000000000000000000000000} | ${24}
    ${11112212121212}                   | ${22}
  `(
    "hamming weight method should return number of ones as $expected when n is $n",
    ({ n, expected }) => {
      expect(hammingWeight(n)).toBe(expected);
    }
  );
});
