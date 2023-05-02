import { reduce } from ".";

describe("Test custom reduce method", () => {
  test("should return 10 when the nums = [1,2,3,4], init = 0, fn = function sum(accum, curr) { return accum + curr; }", () => {
    const nums = [1, 2, 3, 4];
    const init = 0;
    const fn = function sum(accum, curr) {
      return accum + curr;
    };

    expect(reduce(nums, fn, init)).toBe(10);
  });

  test("should return 130 when the nums = [1,2,3,4], init = 100, fn = function sum(accum, curr) { return accum + curr * curr; }", () => {
    const nums = [1, 2, 3, 4];
    const init = 100;
    const fn = function sum(accum, curr) {
      return accum + curr * curr;
    };

    expect(reduce(nums, fn, init)).toBe(130);
  });

  test("should return 130 when the nums = [], init = 25, fn = function sum(accum, curr) { return 0; }", () => {
    const nums = [];
    const init = 25;
    const fn = function sum(accum, curr) {
      return 0;
    };

    expect(reduce(nums, fn, init)).toBe(25);
  });
});
