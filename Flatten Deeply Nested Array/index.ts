type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;
  const output = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      output.push(...flat(ele, n - 1));
    } else {
      output.push(ele);
    }
  }

  return output;
};
