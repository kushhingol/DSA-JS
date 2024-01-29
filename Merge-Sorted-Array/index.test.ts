import { merge } from ".";

describe("Test Merge-Sorted-Array", () => {
  test.each`
    nums1                 | m    | nums2              | n    | expected
    ${[1, 2, 3, 0, 0, 0]} | ${3} | ${[2, 5, 6]}       | ${3} | ${[1, 2, 2, 3, 5, 6]}
    ${[1]}                | ${1} | ${[]}              | ${0} | ${[1]}
    ${[0]}                | ${0} | ${[1]}             | ${1} | ${[1]}
    ${[2, 0]}             | ${1} | ${[1]}             | ${1} | ${[1, 2]}
    ${[4, 0, 0, 0, 0, 0]} | ${1} | ${[1, 2, 3, 5, 6]} | ${5} | ${[1, 2, 3, 4, 5, 6]}
    ${[4, 5, 6, 0, 0, 0]} | ${3} | ${[1, 2, 3]}       | ${3} | ${[1, 2, 3, 4, 5, 6]}
  `(
    "nums1: $nums1, m: $m, nums2: $nums2, n: $n, expected: $expected",
    ({ nums1, m, nums2, n, expected }) => {
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    }
  );
});
