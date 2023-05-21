import { areDeeplyEqual } from ".";

describe("Test Deeply Equal", () => {
  test.each`
    o1                              | o2                                    | result
    ${[]}                           | ${[]}                                 | ${true}
    ${{ a: 1, b: 2 }}               | ${{ a: 1, b: 2 }}                     | ${true}
    ${{ a: 1, b: 2, L: [1, 2, 3] }} | ${{ a: 1, b: 2, L: ["1", "2", "3"] }} | ${false}
    ${{ a: 1, b: 2, L: { a: 1 } }}  | ${{ a: 1, b: 2, L: { a: 1 } }}        | ${true}
    ${{ "0": 1 }}                   | ${[1]}                                | ${false}
    ${{}}                           | ${[]}                                 | ${false}
    ${[]}                           | ${{}}                                 | ${false}
    ${[1, 2]}                       | ${[1, 2]}                             | ${true}
  `("Should return $result when o1=$o1 and o2=$o2", ({ o1, o2, result }) => {
    expect(areDeeplyEqual(o1, o2)).toBe(result);
  });
});
