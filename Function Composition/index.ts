type F = (x: number) => number;

export function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) return x;
    let value = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      const fn = functions[i];
      value = fn(value);
    }
    return value;
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
