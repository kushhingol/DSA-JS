/**
 *
 * @param arr : Number Array
 * @param fn : callback function with 2 params (n,i)
 * @returns : number array
 */
export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const resultArray = [];
  arr.forEach((num, index) => {
    const result = fn(num, index);
    resultArray.push(result);
  });

  return resultArray;
}
