type F = (...args: any[]) => void;

export function throttle(fn: F, t: number): F {
  let lastTimeOfExecution = 0;
  let timeout = null;
  return (...args) => {
    const currentTime = Date.now();
    if (currentTime - lastTimeOfExecution < t) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      lastTimeOfExecution = currentTime + t;
      fn(...args);
    }, currentTime - lastTimeOfExecution);
  };
}
