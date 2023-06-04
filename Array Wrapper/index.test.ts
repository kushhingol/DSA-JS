import { ArrayWrapper } from ".";

describe("Test Array Wrapper", () => {
  test.each`
    inputs              | operation   | result
    ${[[1, 2], [3, 4]]} | ${"Add"}    | ${10}
    ${[[1, 2]]}         | ${"String"} | ${"[1,2]"}
    ${[[], []]}         | ${"Add"}    | ${0}
  `(
    "should return result=$result when input=$input and operation=$operation",
    ({ inputs, operation, result }) => {
      let finalResult = [];
      inputs.forEach((element) => {
        finalResult.push(new ArrayWrapper(element));
      });

      if (operation === "Add") {
        const sum = finalResult.reduce((p, c) => p + c, 0);
        expect(sum).toBe(result);
      } else if (operation === "String") {
        expect(finalResult[0].toString()).toBe(result);
      }
    }
  );
});
