import { createCounter } from "./index";

describe("Test createCounter Method", () => {
  const resultsValue = (
    operations: string[],
    { increment, decrement, reset }
  ) => {
    const result = [];
    operations.forEach((ops) => {
      switch (ops) {
        case "increment":
          result.push(increment());
          break;
        case "decrement":
          result.push(decrement());
          break;
        case "reset":
          result.push(reset());
          break;
      }
    });
    return result;
  };

  test('should return counter values when initial value is 5 and operations is ["increment","reset","decrement"]', () => {
    const initialValue = 5;
    const operations = ["increment", "reset", "decrement"];
    const { increment, decrement, reset } = createCounter(initialValue);
    const result = resultsValue(operations, { increment, decrement, reset });

    expect(result.toString()).toBe([6, 5, 4].toString());
  });

  test('should return counter values when initial value is 5 and operations is ["increment","reset","decrement"]', () => {
    const initialValue = 0;
    const operations = [
      "increment",
      "increment",
      "decrement",
      "reset",
      "reset",
    ];
    const { increment, decrement, reset } = createCounter(initialValue);
    const result = resultsValue(operations, { increment, decrement, reset });

    expect(result.toString()).toBe([1, 2, 1, 0, 0].toString());
  });
});
