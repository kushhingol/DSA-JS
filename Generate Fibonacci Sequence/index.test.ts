import { executeSolution } from ".";

describe("Test Generate Fibonacci Sequence Solution", () => {
  test("Testcase 1: Input Value: 5", () => {
    const inputValue = 5;
    const output = executeSolution(inputValue);
    expect(output).toStrictEqual([0, 1, 1, 2, 3]);
  });

  test("Testcase 2: Input Value: 0", () => {
    const inputValue = 0;
    const output = executeSolution(inputValue);
    expect(output).toStrictEqual([]);
  });

  test("Testcase 2: Input Value: 10", () => {
    const inputValue = 10;
    const output = executeSolution(inputValue);
    expect(output).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
