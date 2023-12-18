import { isPowerOfTwo } from ".";

describe("Power-Of-Two", () => {
  test.each`
    n             | expected
    ${1}          | ${true}
    ${16}         | ${true}
    ${218}        | ${false}
    ${1212}       | ${false}
    ${512}        | ${true}
    ${-112}       | ${false}
    ${-512}       | ${false}
    ${2147483646} | ${false}
  `("returns $expected when $n is given", ({ n, expected }) => {
    expect(isPowerOfTwo(n)).toEqual(expected);
  });
});
