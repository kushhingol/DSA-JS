import { convert } from ".";

describe("Zigzag Conversion", function () {
  test.each`
    s                   | numRows | expected
    ${"PAYPALISHIRING"} | ${3}    | ${"PAHNAPLSIIGYIR"}
    ${"PAYPALISHIRING"} | ${4}    | ${"PINALSIGYAHRPI"}
    ${"A"}              | ${1}    | ${"A"}
    ${"AB"}             | ${1}    | ${"AB"}
    ${"AB"}             | ${2}    | ${"AB"}
    ${"ABC"}            | ${1}    | ${"ABC"}
    ${"ABC"}            | ${2}    | ${"ACB"}
    ${"ABC"}            | ${3}    | ${"ABC"}
  `('convert("$s", $numRows) -> "$expected"', ({ s, numRows, expected }) => {
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });
});
