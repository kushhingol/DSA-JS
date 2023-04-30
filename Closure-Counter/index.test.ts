import { createCounter } from "./index";

describe("Test createCounter method", () => {
  test("should test output array to be [10,11,12] when n = 10", () => {
    const outputResult = [];
    const counter = createCounter(10);
    const numberOfCalls = ["call", "call", "call"];
    numberOfCalls.forEach(() => {
      outputResult.push(counter());
    });

    expect(outputResult.toString()).toBe([10, 11, 12].toString());
  });

  test("should test output array to be [-2,-1,0,1,2] when n = -2", () => {
    const outputResult = [];
    const counter = createCounter(-2);
    const numberOfCalls = ["call", "call", "call", "call", "call"];
    numberOfCalls.forEach(() => {
      outputResult.push(counter());
    });

    expect(outputResult.toString()).toBe([-2, -1, 0, 1, 2].toString());
  });
});
