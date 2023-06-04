export function chunk(arr: any[], size: number): any[][] {
  if (!arr.length) return arr;
  const lastIndex = arr.length - 1;
  const result = [];
  let subArray = [];
  let i = 0;
  while (subArray.length !== size && i <= lastIndex) {
    subArray.push(arr[i]);
    if (subArray.length === size || i === lastIndex) {
      result.push(subArray);
      subArray = [];
    }
    i += 1;
  }
  return result;
}
