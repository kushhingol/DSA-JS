type MultidimensionalArray = (MultidimensionalArray | number)[];
export function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      yield* inorderTraversal(ele);
    } else if (typeof ele === "number") {
      yield ele;
    }
  }
}
