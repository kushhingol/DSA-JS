import { isAnagram } from ".";

describe("Test Anagram method", () => {
  test.each`
    s             | t             | expected
    ${"anagram"}  | ${"nagaram"}  | ${true}
    ${"rat"}      | ${"car"}      | ${false}
    ${"aacc"}     | ${"ccac"}     | ${false}
    ${"sdfgdfjs"} | ${"sdfgdfjs"} | ${true}
    ${"ll"}       | ${"ll"}       | ${true}
    ${"ll"}       | ${"lll"}      | ${false}
    ${"a"}        | ${"ab"}       | ${false}
    ${"a"}        | ${"a"}        | ${true}
    ${"a"}        | ${"b"}        | ${false}
    ${"ttssdd"}   | ${"ddsttt"}   | ${false}
  `("isAnagram($s, $t) should return $expected", ({ s, t, expected }) => {
    expect(isAnagram(s, t)).toBe(expected);
  });
});
