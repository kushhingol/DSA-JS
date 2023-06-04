type F = () => Promise<any>;

export function promisePool(functions: F[], n: number): Promise<any> {
  let i = 0;
  let currentPool = 0;
  return new Promise((resolve, _) => {
    function addPromiseForExecution() {
      if (i >= functions.length && currentPool === 0) {
        resolve("");
      }
      while (i < functions.length && currentPool < n) {
        currentPool += 1;
        const promise = functions[i]();
        i += 1;
        promise.then(() => {
          currentPool -= 1;
          addPromiseForExecution();
        });
      }
    }

    addPromiseForExecution();
  });
}
