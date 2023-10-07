import { compactObject } from ".";

describe("Test compact object", () => {
  test.each`
    obj                                            | result
    ${null}                                        | ${null}
    ${{ a: null, b: { a: null, b: [1, 0] } }}      | ${{ b: { b: [1] } }}
    ${[null, 0, 5, [0], [false, 16, [1, 0], [0]]]} | ${[5, [], [16, [1], []]]}
  `("should return result=$result when input=$obj", ({ obj, result }) => {
    const computedResult = compactObject(obj);
    expect(JSON.stringify(computedResult)).toEqual(JSON.stringify(result));
  });
});
