import { canCompleteCircuit } from ".";

describe("test canCompleteCircuit method", () => {
  test.each`
    gas                   | cost                  | expected
    ${[1, 2, 3, 4, 5]}    | ${[3, 4, 5, 1, 2]}    | ${3}
    ${[2, 3, 4]}          | ${[3, 4, 3]}          | ${-1}
    ${[2, 3, 4, 5, 1, 2]} | ${[3, 4, 3, 2, 4, 1]} | ${2}
    ${[5, 1, 2, 3, 4]}    | ${[4, 4, 1, 5, 1]}    | ${4}
  `(
    "canCompleteCircuit should return $expected when gas=$gas and cost=$cost",
    ({ gas, cost, expected }) => {
      expect(canCompleteCircuit(gas, cost)).toBe(expected);
    }
  );
});
