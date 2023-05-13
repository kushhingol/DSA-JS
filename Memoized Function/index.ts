type F = (...params: any) => any;

export function memoize(fn: F): F {
  const memoizedStore = new Map();
  return function (...args) {
    const params = `${args}`;
    const memoizedValue = memoizedStore.get(params);
    if (!memoizedStore.get(params)?.toString()) {
      const result = fn(...args);
      memoizedStore.set(params, result);
      return result;
    }
    return memoizedValue;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
