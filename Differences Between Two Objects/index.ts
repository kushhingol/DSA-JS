export function objDiff(obj1: any, obj2: any) {
  let result = {};

  function setNestedObjectValue(obj: any, properties: string, value: any) {
    const keys = properties ? properties.trim().split(".") : [];
    keys.reduce((prevObj, key, index) => {
      if (!prevObj.hasOwnProperty(key)) {
        prevObj[key] = {};
      }

      if (index === keys.length - 1) {
        prevObj[key] = value;
      }

      return prevObj[key];
    }, obj);
  }

  function parseObject(obj1: any, obj2: any, previousKey: string) {
    const keys = Object.keys(obj1);
    for (let key of keys) {
      if (obj2.hasOwnProperty(key)) {
        const obj1Value = obj1[key];
        const obj2Value = obj2[key];
        const isObject =
          obj1Value !== "undefined" &&
          obj2Value !== "undefined" &&
          typeof obj1Value === "object" &&
          typeof obj2Value === "object" &&
          Array.isArray(obj1Value) === Array.isArray(obj2Value);

        if (isObject) {
          const nextPreviousKey = previousKey ? `${previousKey}.${key}` : key;
          parseObject(obj1Value, obj2Value, nextPreviousKey);
        } else {
          if (
            obj1Value !== undefined &&
            obj2Value !== undefined &&
            obj1Value !== obj2Value
          ) {
            const nestedKey = previousKey ? `${previousKey}.${key}` : key;
            setNestedObjectValue(result, nestedKey, [obj1Value, obj2Value]);
          }
        }
      }
    }
  }

  parseObject(obj1, obj2, "");
  return result;
}

const obj1 = {
  a: { b: 1, c: [] },
};
const obj2 = {
  a: { b: 3, c: [2] },
};

objDiff(obj1, obj2);
