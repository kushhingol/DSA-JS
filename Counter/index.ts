type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter(init: number): ReturnObj {
  const initialValue = init;
  let counter = init;

  const increment = (): number => {
    return ++counter;
  };

  const decrement = (): number => {
    return --counter;
  };

  const reset = () => {
    counter = initialValue;
    return initialValue;
  };

  return {
    increment,
    decrement,
    reset,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
