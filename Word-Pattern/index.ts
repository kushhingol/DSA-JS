export const wordPattern = (pattern: string, str: string): boolean => {
  const stringArray = str.split(" ");

  const wordMap = new Map<string, string>();
  const patternMap = new Map<string, string>();

  for (let i = 0; i < stringArray.length; i++) {
    if (!wordMap.has(stringArray[i]) && !patternMap.has(pattern[i])) {
      wordMap.set(stringArray[i], pattern[i]);
      patternMap.set(pattern[i], stringArray[i]);
    }
  }

  for (let j = 0; j < stringArray.length; j++) {
    if (wordMap.get(stringArray[j]) !== pattern[j]) return false;
  }

  return true;
};
