import { once } from ".";

describe("test once method", () => {
  test("once method when fn = (a, b, c) => a + b + c and calls = [[1,2,3],[2,3,6]]", () => {
    const calls = [
      { args: [1, 2, 3], result: 6 },
      { args: [2, 3, 6], result: undefined },
    ];
    const fn = (a, b, c) => a + b + c;

    const hocFunc = once(fn);
    calls.forEach((callObj) => {
      const [a, b, c] = callObj.args;
      expect(hocFunc(a, b, c)).toBe(callObj.result);
    });
  });

  test("once method when fn = (a, b, c) => a * b * c and calls = [[3,4,5],[2,3,6]]", () => {
    const calls = [
      { args: [3, 4, 5], result: 60 },
      { args: [2, 3, 6], result: undefined },
    ];
    const fn = (a, b, c) => a * b * c;

    const hocFunc = once(fn);
    calls.forEach((callObj) => {
      const [a, b, c] = callObj.args;
      expect(hocFunc(a, b, c)).toBe(callObj.result);
    });
  });
});
