import { map } from ".";

describe("Test map method", () => {
  test("should return mapped number array when arr is arr = [1,2,3], fn = function plusone(n) { return n + 1; } ", () => {
    const array = [1, 2, 3];
    const fn = function plusone(n) {
      return n + 1;
    };

    const result = map(array, fn);
    expect(result.toString()).toBe([2, 3, 4].toString());
  });

  test("should return mapped number array when arr is arr = [1,2,3],  fn = function plusI(n, i) { return n + i; } ", () => {
    const array = [1, 2, 3];
    const fn = function plusI(n, i) {
      return n + i;
    };
    const result = map(array, fn);
    expect(result.toString()).toBe([1, 3, 5].toString());
  });
});
