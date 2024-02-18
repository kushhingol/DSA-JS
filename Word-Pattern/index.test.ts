import { wordPattern } from ".";

describe("Test Word Pattern method", () => {
  test.each`
    pattern   | str                   | expected
    ${"abba"} | ${"dog cat cat dog"}  | ${true}
    ${"abba"} | ${"dog cat cat fish"} | ${false}
    ${"aaaa"} | ${"dog cat cat dog"}  | ${false}
    ${"abba"} | ${"dog dog dog dog"}  | ${false}
  `(
    "expect $expected when pattern is $pattern and str is $str passed into wordPattern method",
    ({ pattern, str, expected }) => {
      expect(wordPattern(pattern, str)).toBe(expected);
    }
  );
});
