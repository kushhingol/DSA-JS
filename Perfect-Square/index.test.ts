import { isPerfectSquare, isPerfectSquare2 } from ".";

describe("Test isPerfectSquare", () => {
  test.each`
    num     | expected
    ${1}    | ${true}
    ${2}    | ${false}
    ${3}    | ${false}
    ${4}    | ${true}
    ${5}    | ${false}
    ${6}    | ${false}
    ${7}    | ${false}
    ${8}    | ${false}
    ${2323} | ${false}
    ${16}   | ${true}
    ${32}   | ${false}
  `("isPerfectSquare($num) should return $expected", ({ num, expected }) => {
    expect(isPerfectSquare(num)).toBe(expected);
    expect(isPerfectSquare2(num)).toBe(expected);
  });
});
