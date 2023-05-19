export function debounce(fn: Function, t: number) {
  let debounceCachedTimeout = null;
  return function (...args) {
    if (debounceCachedTimeout) {
      clearTimeout(debounceCachedTimeout);
    }

    debounceCachedTimeout = setTimeout(() => {
      fn(...args);
      debounceCachedTimeout = null;
    });
  };
}

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
