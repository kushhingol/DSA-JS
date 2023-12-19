export const isAnagram = (s: string, t: string): boolean => {
  if (t.length !== s.length) return false;

  // Create 2 maps for both strings
  const sMap = new Map();
  const tMap = new Map();

  // Update s string Map values by calculating the frequency of each character
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  // Update t string Map values by calculating the frequency of each character
  for (let j = 0; j < t.length; j++) {
    if (tMap.has(t[j])) {
      tMap.set(t[j], tMap.get(t[j]) + 1);
    } else {
      tMap.set(t[j], 1);
    }
  }

  for (let [key, value] of sMap) {
    if (!tMap.has(key) || (tMap.has(key) && tMap.get(key) !== value)) {
      return false;
    }
  }

  return true;
};

isAnagram("anagram", "nagaram"); // true
