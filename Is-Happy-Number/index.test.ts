import { isHappyNumber } from ".";

describe("Test isHappy Method", () => {
  test.each`
    number     | result
    ${19}      | ${true}
    ${2}       | ${false}
    ${7}       | ${true}
    ${1}       | ${true}
    ${0}       | ${false}
    ${-1}      | ${false}
    ${23232}   | ${false}
    ${222}     | ${false}
    ${11111}   | ${false}
    ${23223}   | ${false}
    ${3264325} | ${true}
  `("isHappyNumber($number) should return $result", ({ number, result }) => {
    expect(isHappyNumber(number)).toBe(result);
  });
});
