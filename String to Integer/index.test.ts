import { myAtoi } from ".";

describe("Test myAtoi Function", () => {
  test.each`
    string               | expected
    ${"42"}              | ${42}
    ${"   -42"}          | ${-42}
    ${"4193 with words"} | ${4193}
    ${"words and 987"}   | ${0}
    ${"-91283472332"}    | ${-2147483648}
    ${"-+12"}            | ${0}
    ${"+-12"}            | ${0}
    ${"00000-42a1234"}   | ${0}
    ${"  -0012a42"}      | ${-12}
    ${".1"}              | ${0}
    ${"0.1"}             | ${0}
    ${"3.14159"}         | ${3}
  `(
    "myAtoi method should return $expected when input string is $string",
    ({ string, expected }) => expect(myAtoi(string)).toBe(expected)
  );
});
