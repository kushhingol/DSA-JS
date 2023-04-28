/**
 * @desc: Solution
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
export const timeLimit = function (fn, t) {
  return async function (...args) {
    const fnPromise = fn(...args);
    const executionPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    return Promise.race([fnPromise, executionPromise]);
  };
};

// Solution execution with example
const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 150);
limited(150).then(console.log).catch(console.log); // "Time Limit Exceeded" at t=100ms
