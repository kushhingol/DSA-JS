import { integerToRoman, integerToRoman2 } from ".";

describe("Test interger to roman", () => {
  test.each`
    integer | roman
    ${1}    | ${"I"}
    ${2}    | ${"II"}
    ${3}    | ${"III"}
    ${4}    | ${"IV"}
    ${5}    | ${"V"}
    ${6}    | ${"VI"}
    ${7}    | ${"VII"}
    ${8}    | ${"VIII"}
    ${9}    | ${"IX"}
    ${1000} | ${"M"}
    ${1994} | ${"MCMXCIV"}
    ${58}   | ${"LVIII"}
    ${889}  | ${"DCCCLXXXIX"}
  `("integerToRoman($integer) should return $roman", ({ integer, roman }) => {
    expect(integerToRoman(integer)).toBe(roman);
    expect(integerToRoman2(integer)).toBe(roman);
  });
});
