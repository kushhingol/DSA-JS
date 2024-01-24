export const hammingWeight = (n: number): number => {
  if (!n || n === 0) return 0;

  const binaryString = n.toString(2);
  let numberOfOnes = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") numberOfOnes += 1;
  }
  return numberOfOnes;
};
