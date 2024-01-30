import { isIsomorphic } from ".";

describe("Test isomorphicString", () => {
  test.each`
    s                 | t                 | expected
    ${"egg"}          | ${"add"}          | ${true}
    ${"foo"}          | ${"bar"}          | ${false}
    ${"paper"}        | ${"title"}        | ${true}
    ${"ab"}           | ${"aa"}           | ${false}
    ${"aa"}           | ${"ab"}           | ${false}
    ${"ab"}           | ${"ca"}           | ${true}
    ${"ab"}           | ${"aa"}           | ${false}
    ${"ab"}           | ${"cb"}           | ${true}
    ${"ab"}           | ${"cc"}           | ${false}
    ${"sdsdsdsds"}    | ${"sdsdsdsds"}    | ${true}
    ${"sdsdsdsds"}    | ${"sdsdsdsdd"}    | ${false}
    ${"absdbsfdqwhd"} | ${"zxcvzxcvzxcv"} | ${false}
  `(
    "should test isomorphicString with s: $s, t: $t and expected: $expected",
    ({ s, t, expected }) => {
      expect(isIsomorphic(s, t)).toBe(expected);
    }
  );
});
