import { isSubsequence } from ".";

describe("Test Is-Subsequence", () => {
  test.each`
    s        | t           | expected
    ${"abc"} | ${"ahbgdc"} | ${true}
    ${"axc"} | ${"ahbgdc"} | ${false}
    ${"abc"} | ${"abc"}    | ${true}
    ${""}    | ${"abc"}    | ${true}
    ${"abc"} | ${""}       | ${false}
    ${""}    | ${""}       | ${true}
    ${"abc"} | ${"ab"}     | ${false}
    ${"ab"}  | ${"abc"}    | ${true}
  `(
    "test isSequence method when s=$s and t=$t and expected result=$expected",
    ({ s, t, expected }) => expect(isSubsequence(s, t)).toEqual(expected)
  );
});
