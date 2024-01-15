export const UniquePathsMatrix = (m: number, n: number): number => {
  let right = n - 1;
  let bottom = m - 1;

  function factorial(n: number) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }

  return factorial(right + bottom) / (factorial(bottom) * factorial(right));
};
