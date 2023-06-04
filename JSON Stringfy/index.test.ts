import { jsonStringify } from ".";

describe("test json stringify method", () => {
  test.each`
    obj1
    ${{}}
    ${{ a: 1, v: 3, x: [], z: { a: null } }}
    ${{ a: 5, v: 6, z: [1, 2, 4, [2, 5, 7]] }}
    ${{ a: { b: 1 } }}
    ${{ a: [1, 2, {}], b: false }}
  `("test  json stringify method when obj1=$obj1", ({ obj1 }) => {
    const output = jsonStringify(JSON.parse(JSON.stringify(obj1)));
    expect(output).toBe(JSON.stringify(obj1));
  });
});
