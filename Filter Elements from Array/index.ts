export function filter(
  arr: number[],
  fn: (n: number, i: number) => any
): number[] {
  const output = [];
  arr.forEach((num, index) => {
    const filterValue = fn(num, index);
    if (filterValue) output.push(num);
  });

  return output;
}
