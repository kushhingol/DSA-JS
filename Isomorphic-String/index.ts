export const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  if (s.length === 1 && t.length === 1) return true;

  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i]) !== tMap.get(t[i])) return false;
    sMap.set(s[i], i);
    tMap.set(t[i], i);
  }

  return true;
};
