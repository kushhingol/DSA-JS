export function curry(fn: Function): Function {
  let params = [];
  return function curried(...args) {
    params = params.concat(args);
    while (params.length !== fn.length) {
      return (...args) => curried(...args);
    }
    return fn(...params);
  };
}

// function sum(a, b, c) {
//   return a + b + c;
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(1)()(2, 3));
