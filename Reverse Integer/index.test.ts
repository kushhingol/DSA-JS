import { reverseInteger } from ".";

describe("Test Reverse Integer Method", () => {
  test.each`
    input         | expected
    ${123}        | ${321}
    ${-123}       | ${-321}
    ${120}        | ${21}
    ${0}          | ${0}
    ${1534236469} | ${0}
    ${1009000}    | ${9001}
    ${-900100100} | ${-1001009}
  `("returns $expected when $input is passed", ({ input, expected }) => {
    expect(reverseInteger(input)).toEqual(expected);
  });
});
