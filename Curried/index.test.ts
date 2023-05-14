import { curry } from ".";

describe("Test Curried Method", () => {
  test("curried method when inputs = [[1],[2],[3]], fn = function sum(a, b, c) { return a + b + c; }", () => {
    const fn = function sum(a, b, c) {
      return a + b + c;
    };
    const curriedSum = curry(fn);
    expect(curriedSum(1)(2)(3)).toBe(6);
  });

  test("curried method when inputs = [[1,2],[3]], fn = function sum(a, b, c) { return a + b + c; }", () => {
    const fn = function sum(a, b, c) {
      return a + b + c;
    };
    const curriedSum = curry(fn);
    expect(curriedSum(1, 2)(3)).toBe(6);
  });

  test("curried method when inputs = [[],[],[1,2,3]], fn = function sum(a, b, c) { return a + b + c; }", () => {
    const fn = function sum(a, b, c) {
      return a + b + c;
    };
    const curriedSum = curry(fn);
    expect(curriedSum()()(1, 2, 3)).toBe(6);
  });
});
