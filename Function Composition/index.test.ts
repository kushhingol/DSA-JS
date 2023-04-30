import { compose } from ".";

describe("Test compose method", () => {
  test("should return 65 as an output for below input", () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    const x = 4;
    const fn = compose(functions);
    const value = fn(x);
    expect(value).toBe(65);
  });

  test("should return 1000 as an output for below input", () => {
    const functions = [
      (x: number) => 10 * x,
      (x: number) => 10 * x,
      (x: number) => 10 * x,
    ];
    const x = 1;
    const fn = compose(functions);
    const value = fn(x);
    expect(value).toBe(1000);
  });

  test("should return 42 as an output for below input", () => {
    const functions: ((x: number) => number)[] = [];
    const x = 42;
    const fn = compose(functions);
    const value = fn(x);
    expect(value).toBe(42);
  });
});
