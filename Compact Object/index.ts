export const compactObject = (obj) => {
  if (!obj) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  const result = {};
  for (const key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) result[key] = value;
  }

  return result;
};
