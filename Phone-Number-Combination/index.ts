const numbersToLetters: { [key: string]: string } = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

export const letterCombinations = (digits: string): string[] => {
  if (digits.length < 1) return [];

  const result: string[] = [];

  const dfs = (index: number, currentCombination: string) => {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const letters = numbersToLetters[digits[index]];
    for (const letter of letters) {
      dfs(index + 1, currentCombination + letter);
    }
  };

  dfs(0, "");
  return result;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
