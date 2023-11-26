export const convert = (s: string, numRows: number): string => {
  if (s.length <= 1 || numRows === 1 || s.length === numRows) return s;

  let result = "";
  const step = numRows * 2 - 2;

  for (let i = 0; i <= numRows - 1; i++) {
    for (let j = i; j < s.length; j += step) {
      result += s[j];
      if (i === 0 || i === numRows - 1) continue;

      const zigzagIndex = j + step - 2 * i;
      if (zigzagIndex < s.length) result += s[zigzagIndex];
      else continue;
    }
  }

  return result;
};
