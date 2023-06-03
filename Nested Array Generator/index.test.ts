import { inorderTraversal } from ".";

describe("Nested Array Generator", () => {
  test.each`
    multiDimensionArray                      | result
    ${[1, 2, [3, [4, [5, 6]]]]}              | ${[1, 2, 3, 4, 5, 6]}
    ${[1, [2, 3, [4, 5, [6, 7]], [8, [9]]]]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    ${[]}                                    | ${[]}
  `(
    "should test inorderTraversal of array when multiDimenstionArray=$multiDimensionArray and should return result as $result",
    ({ multiDimensionArray, result }) => {
      const flatArray = [];
      const gen = inorderTraversal(multiDimensionArray);
      for (let ele of gen) {
        flatArray.push(ele);
      }

      expect(`[${flatArray}]`).toBe(`[${result}]`);
    }
  );
});
