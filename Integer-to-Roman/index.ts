const romanNumberMap: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const integerToRoman = (num: number): string => {
  if (num === 0) return "";

  for (const key in romanNumberMap) {
    if (num >= romanNumberMap[key]) {
      return key + integerToRoman(num - romanNumberMap[key]);
    }
  }
};

export const integerToRoman2 = (num: number): string => {
  if (num === 0) return "";

  let result = "";
  for (const key in romanNumberMap) {
    const count = Math.floor(num / romanNumberMap[key]);
    if (count > 0) {
      result += key.repeat(count);
      num = num % romanNumberMap[key];
    }
  }

  return result;
};

console.log(integerToRoman(3));
console.log(integerToRoman2(889));
