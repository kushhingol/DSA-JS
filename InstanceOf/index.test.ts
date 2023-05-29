import { checkInstanceOf } from ".";

describe("Test checkInstanceof Method", () => {
  test.each`
    obj           | classFunction | result
    ${new Date()} | ${Date}       | ${true}
    ${5}          | ${Number}     | ${true}
    ${Date}       | ${Date}       | ${false}
    ${[]}         | ${Array}      | ${true}
    ${undefined}  | ${undefined}  | ${false}
  `(
    "should return $result if obj=$obj and classFunction=$classFunction",
    ({ obj, classFunction, result }) => {
      expect(checkInstanceOf(obj, classFunction)).toBe(result);
    }
  );
});
