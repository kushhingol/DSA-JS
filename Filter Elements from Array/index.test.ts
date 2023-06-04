import { filter } from ".";

describe("test filter method", () => {
  test.each`
    array | fn | result
    ${[0, 10, 20, 30]} | ${function greaterThan10(n) {
  return n > 10;
}} | ${[20, 30]}
    ${[-2, -1, 0, 1, 2]} | ${function plusOne(n) {
  return n + 1;
}} | ${[-2, 0, 1, 2]}
  `(
    "filter method should return result=$result when array=$array and fn=$fn",
    ({ array, fn, result }) => {
      const testResult = filter(array, fn);
      expect(JSON.stringify(testResult)).toBe(JSON.stringify(result));
    }
  );
});
