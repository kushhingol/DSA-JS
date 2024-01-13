export const reverseBits1 = (n: number): number => {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1);
    n >>= 1;
  }
  return result >>> 0;
};

export const reverseBits2 = (n: number): number => {
  function decToBin(dec) {
    let binary;
    if (dec >= 0) {
      binary = dec.toString(2);
    } else {
      binary = (~dec).toString(2);
    }

    if (binary.length === 32) return binary;
    else return "0".repeat(32 - binary.length) + binary;
  }

  const binaryString = decToBin(n).split("").reverse().join("");
  return parseInt(binaryString, 2);
};
