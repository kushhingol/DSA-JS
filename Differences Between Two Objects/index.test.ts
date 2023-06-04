import { objDiff } from ".";

describe("Test difference between 2 objects", () => {
  test.each`
    obj1                                       | obj2                                  | result
    ${{}}                                      | ${{ a: 1, b: 2 }}                     | ${{}}
    ${{ a: 1, v: 3, x: [], z: { a: null } }}   | ${{ a: 2, v: 4, x: [], z: { a: 2 } }} | ${{ a: [1, 2], v: [3, 4], z: { a: [null, 2] } }}
    ${{ a: 5, v: 6, z: [1, 2, 4, [2, 5, 7]] }} | ${{ a: 5, v: 7, z: [1, 2, 3, [1]] }}  | ${{ v: [6, 7], z: { "2": [4, 3], "3": { "0": [2, 1] } } }}
    ${{ a: { b: 1 } }}                         | ${{ a: [5] }}                         | ${{ a: [{ b: 1 }, [5]] }}
    ${{ a: [1, 2, {}], b: false }}             | ${{ b: false, a: [1, 2, {}] }}        | ${{}}
  `(
    "objDiff method when obj1=$obj1 & obj2=$obj1 and should have result=$result",
    ({ obj1, obj2, result }) => {
      const output = objDiff(
        JSON.parse(JSON.stringify(obj1)),
        JSON.parse(JSON.stringify(obj2))
      );
      expect(JSON.stringify(output)).toBe(JSON.stringify(result));
    }
  );
});
