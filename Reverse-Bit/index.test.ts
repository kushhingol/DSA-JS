import { reverseBits1, reverseBits2 } from ".";

describe("Test Reverse-Bit", () => {
  test.each`
    n             | expected
    ${43261596}   | ${964176192}
    ${4294967293} | ${3221225471}
  `("reverseBits1($n) should return $expected", ({ n, expected }) => {
    expect(reverseBits2(n)).toBe(expected);
  });
});
