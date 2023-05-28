export {};
declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  let result = {};
  for (let listItem of this) {
    const key = fn(listItem);
    if (result[key]) {
      result[key].push(listItem);
    } else {
      result[key] = [listItem];
    }
  }
  return result;
};
