describe("arrayPartition", () => {
  test.each`
    arr                         | result
    ${[1, 2, 3, 4]}             | ${4}
    ${[1, 4, 3, 2]}             | ${4}
    ${[1, 1, 1, 1]}             | ${2}
    ${[1, 1, 1, 1, 1, 1]}       | ${3}
    ${[6, 2, 6, 5, 1, 2]}       | ${9}
    ${[]}                       | ${0}
    ${[1]}                      | ${1}
    ${[1, 2]}                   | ${1}
    ${[1, 2, 4, 1, 3, 5, 1, 6]} | ${10}
  `("returns $result when given $arr", ({ arr, result }) => {
    const { arrayPairSum } = require("./index");
    expect(arrayPairSum(arr)).toBe(result);
  });
});
