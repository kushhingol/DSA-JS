export const canConstructNote = (note: string, magazine: string): boolean => {
  if (note === magazine) return true;
  const magazineMap = getMapOfStringOccurrence(magazine);

  for (let j = 0; j < note.length; j++) {
    if (magazineMap.has(note[j]) && magazineMap.get(note[j]) > 0) {
      magazineMap.set(note[j], magazineMap.get(note[j]) - 1);
    } else {
      return false;
    }
  }
  return true;
};

const getMapOfStringOccurrence = (str: string): Map<string, number> => {
  const map = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  return map;
};
