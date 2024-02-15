export const reverseWords = (s: string): string => {
  const stringArray = s.split(" ");
  let output = "";
  for (let i = stringArray.length; i >= 0; i--) {
    if (stringArray[i]) {
      output += stringArray[i] + " ";
    }
  }
  return output.trim();
};
