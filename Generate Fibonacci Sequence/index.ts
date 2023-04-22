// solution
function* fibGenerator(): Generator<number, any, number> {
  let n1 = 0;
  let n2 = 1;
  yield n1; //yield initial n1 value
  yield n2; //yield initial n2 value

  /**
   * @desc: The generator method helps to generate a new fibonnaci number based on the val1 and val2 parameter passed
   * @param val1 : number
   * @param val2 : number
   * @return: void (But yields the new value when the generator method is called)
   */
  function* getNextFibonnaciNumber(val1: number, val2: number) {
    const currentFibonacciValue = val1 + val2;
    n1 = val2;
    n2 = currentFibonacciValue;
    yield currentFibonacciValue;
  }

  while (true) {
    yield* getNextFibonnaciNumber(n1, n2);
  }
}

// For managing test cases
export function executeSolution(inputValue: number) {
  const gen = fibGenerator();
  const callCount = inputValue;
  const output: number[] = [];

  let i = 0;
  while (i < callCount) {
    output.push(gen.next().value);
    i++;
  }

  return output;
}

// Example
const solutionOutput = executeSolution(5);
console.log(solutionOutput); //[ 0, 1, 1, 2, 3 ]
