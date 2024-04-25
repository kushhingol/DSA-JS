import { letterCombinations } from ".";

describe("Test Phone-Number-Combination", () => {
  test.each`
    input    | expected
    ${""}    | ${[]}
    ${"23"}  | ${["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]}
    ${"2"}   | ${["a", "b", "c"]}
    ${"234"} | ${["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]}
    ${"459"} | ${["gjw", "gjx", "gjy", "gjz", "gkw", "gkx", "gky", "gkz", "glw", "glx", "gly", "glz", "hjw", "hjx", "hjy", "hjz", "hkw", "hkx", "hky", "hkz", "hlw", "hlx", "hly", "hlz", "ijw", "ijx", "ijy", "ijz", "ikw", "ikx", "iky", "ikz", "ilw", "ilx", "ily", "ilz"]}
  `(
    "letterCombination($input) is expected to return $expected",
    ({ input, expected }) => {
      expect(letterCombinations(input)).toEqual(expected);
    }
  );
});
