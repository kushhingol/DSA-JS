import { sortedArrayToBST } from "./index";

describe("Test SortedArrayToBST", () => {
  test.each`
    nums                     | expected
    ${[]}                    | ${null}
    ${[1]}                   | ${[1]}
    ${[1, 2]}                | ${[2, 1]}
    ${[1, 2, 3]}             | ${[2, 1, 3]}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${[4, 2, 6, 1, 3, 5, 7]}
  `("SortedArrayToBST($nums) should return $expected", ({ nums, expected }) => {
    const tree = sortedArrayToBST(nums);
    const result = nums.length ? [] : null;
    const queue = [tree];
    while (queue.length && tree) {
      const node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }

    expect(
      Array.isArray(result) ? result.filter((val) => val) : result
    ).toEqual(expected);
  });
});
