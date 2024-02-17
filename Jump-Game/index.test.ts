import { canJump } from ".";

describe("Test jump method", () => {
  test.each`
    nums                     | expected
    ${[2, 3, 1, 1, 4]}       | ${true}
    ${[3, 2, 1, 0, 4]}       | ${false}
    ${[0]}                   | ${true}
    ${[2, 5, 0, 0]}          | ${true}
    ${[3, 2, 2, 0, 4]}       | ${true}
    ${[3, 0, 8, 2, 0, 0, 1]} | ${true}
    ${[1, 1, 2, 2, 0, 1, 1]} | ${true}
  `(
    "should return $expcted when $nums is passed in jump method",
    ({ nums, expected }) => {
      expect(canJump(nums)).toBe(expected);
    }
  );
});
