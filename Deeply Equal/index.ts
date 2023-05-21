export function areDeeplyEqual(o1: any, o2: any): boolean {
  let isDeeplyEqual;

  function isObject(o1: any, o2: any) {
    return (
      o1 &&
      o2 &&
      typeof o1 === "object" &&
      typeof o2 === "object" &&
      Array.isArray(o1) === Array.isArray(o2)
    );
  }

  function isEmptyObject(o1, o2) {
    return (
      isObject(o1, o2) &&
      Object.keys(o1).length === 0 &&
      Object.keys(o2).length === 0
    );
  }

  function getMaxKeysList(o1Keys, o2Keys) {
    return o1Keys.length > o2Keys.length ? o1Keys : o2Keys;
  }

  // edge case for o1 = {} & o2 = {} <=> o1 = [] & o2 = []
  if (isEmptyObject(o1, o2)) {
    return true;
  }

  // recursive method
  function deeplyEqual(o1: any, o2: any) {
    const isObjectPresent = isObject(o1, o2);
    if (isObjectPresent) {
      // extracting keys of o1 and o2
      const o1Keys = Object.keys(o1);
      const o2Keys = Object.keys(o2);

      // getting the max keys list for running a loop
      const objWithMaxKeys = getMaxKeysList(o1Keys, o2Keys);

      for (let key of objWithMaxKeys) {
        const o1KeyValue = o1[key];
        const o2KeyValue = o2[key];

        //this indicates that the same keys are present
        const isKeyPresent =
          o1KeyValue !== undefined &&
          o2KeyValue !== undefined &&
          isDeeplyEqual !== false;

        if (isKeyPresent) {
          isDeeplyEqual = true;
          deeplyEqual(o1KeyValue, o2KeyValue);
        } else isDeeplyEqual = false;
      }
    } else isDeeplyEqual = o1 === o2 ?? false;
  }

  deeplyEqual(o1, o2);
  return isDeeplyEqual;
}
