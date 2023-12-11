import { myPow } from ".";

describe("Test power method", () => {
  test.each`
    x                  | n              | expected
    ${2}               | ${-10}         | ${0.0009765625}
    ${2}               | ${-2}          | ${0.25}
    ${2}               | ${0}           | ${1}
    ${1.0000000000001} | ${-2147483648} | ${0.9997854462987467}
    ${2}               | ${-2147483648} | ${0}
    ${1}               | ${2147483647}  | ${1}
  `("myPow($x, $n) should return $expected", ({ x, n, expected }) => {
    expect(myPow(x, n)).toBe(expected);
  });
});
