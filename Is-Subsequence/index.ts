export const isSubsequence = (s: string, t: string): boolean => {
  if (s === "") return true;
  if (s === "" && t === "") return true;
  if (s && t === "") return false;

  let i = 0,
    j = 0,
    isSubSeq = false;

  while (j < t.length) {
    if (s[i] === t[j]) {
      isSubSeq = true;
      i++;
    }
    j++;
  }

  if (i !== s.length) return false;
  return isSubSeq;
};
