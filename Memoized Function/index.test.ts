import { memoize } from ".";

describe("Test memoize method", () => {
  test('should return memoized value when fn = sum, inputs = [[2,2],[2,2],[],[1,2],[]] and callStack = ["call","call","getCallCount","call","getCallCount"]', () => {
    let callCount = 0;
    const fn = (a, b) => {
      callCount += 1;
      return a + b;
    };

    const inputs = [
      { params: [2, 2], result: 4 },
      { params: [2, 2], result: 4 },
      { params: [], result: 1 },
      { params: [1, 2], result: 3 },
      { params: [], result: 2 },
    ];
    const callStack = ["call", "call", "getCallCount", "call", "getCallCount"];

    const memoizedMethod = memoize(fn);
    callStack.forEach((callStackCommand, i) => {
      if (callStackCommand === "call") {
        const [a, b] = inputs[i].params;
        expect(memoizedMethod(a, b)).toBe(inputs[i].result);
      } else {
        expect(callCount).toBe(inputs[i].result);
      }
    });
  });
});
