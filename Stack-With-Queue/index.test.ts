import { MyStack } from ".";

describe("Test StackWithQueue Class", () => {
  test.each`
    stackOperation                                        | stackValue                        | expected
    ${["MyStack", "push", "push", "top", "pop", "empty"]} | ${[null, 2, 1, null, null, null]} | ${[null, null, null, 1, 1, false]}
    ${["MyStack", "push", "push", "push", "pop", "top"]}  | ${[null, 1, 2, 3, null, null]}    | ${[null, null, null, null, 3, 2]}
  `(
    "stackOperation($stackValue) should return $expected",
    ({ stackOperation, stackValue, expected }) => {
      const stackOperationLength = stackOperation.length;
      let stack: MyStack = new MyStack();
      for (let i = 1; i < stackOperationLength; i++) {
        if (stackOperation[i] === "push") {
          stack.push(stackValue[i]);
          expect(expected[i]).toBe(null);
        } else if (stackOperation[i] === "pop") {
          expect(stack.pop()).toBe(expected[i]);
        } else if (stackOperation[i] === "top") {
          expect(stack.top()).toBe(expected[i]);
        } else if (stackOperation[i] === "empty") {
          expect(stack.empty()).toBe(expected[i]);
        }
      }
    }
  );
});
