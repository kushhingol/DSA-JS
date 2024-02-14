import { reverseWords } from ".";

describe("Test reverseWords method", () => {
  test.each`
    s                                 | expected
    ${"the sky is blue"}              | ${"blue is sky the"}
    ${"  hello world  "}              | ${"world hello"}
    ${"a good   example"}             | ${"example good a"}
    ${"  Bob    Loves  Alice   "}     | ${"Alice Loves Bob"}
    ${"Alice does not even like bob"} | ${"bob like even not does Alice"}
  `(
    "should return $expected when $s is passed in reverseWords method",
    ({ s, expected }) => {
      expect(reverseWords(s)).toBe(expected);
    }
  );
});
