import { rotateArray } from ".";

describe("Test Rotate Array method", () => {
  test.each`
    nums                     | k     | expected
    ${[1, 2, 3, 4, 5, 6, 7]} | ${3}  | ${[5, 6, 7, 1, 2, 3, 4]}
    ${[-1, -100, 3, 99]}     | ${2}  | ${[3, 99, -1, -100]}
    ${[1, 2, 3, 4, 5, 6]}    | ${11} | ${[2, 3, 4, 5, 6, 1]}
    ${[1, 2]}                | ${3}  | ${[2, 1]}
    ${[1, 2, 3]}             | ${4}  | ${[3, 1, 2]}
  `(
    "should return $expected when $nums and $k is passed in rotateArrayMethod",
    ({ nums, k, expected }) => {
      rotateArray(nums, k);
      expect(nums).toEqual(expected);
    }
  );
});
