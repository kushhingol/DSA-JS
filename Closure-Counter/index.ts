/**
 * @desc: Function is defined to return a method which will help to manage the counter value using closure and curring concept
 * @param n : number
 * @returns : number
 */
export const createCounter = function (n: number): () => number {
  let count = n - 1;
  return function () {
    count = count + 1;
    return count;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
