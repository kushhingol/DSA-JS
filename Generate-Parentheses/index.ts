export const generateParentheses = (n: number) => {
  const result = [];

  const backTracking = (
    openParentheses: number,
    closedParentheses: number,
    combinationString: string
  ) => {
    if (combinationString.length === n * 2) {
      result.push(combinationString);
      return;
    }

    //open parentheses backtring
    if (openParentheses > closedParentheses) {
      backTracking(
        openParentheses,
        closedParentheses + 1,
        combinationString + ")"
      );
    }

    if (openParentheses < n) {
      backTracking(
        openParentheses + 1,
        closedParentheses,
        combinationString + "("
      );
    }
  };

  backTracking(0, 0, "");

  return result;
};

console.log(generateParentheses(3));
