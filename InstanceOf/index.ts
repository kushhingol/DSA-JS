export function checkInstanceOf(obj: any, classFunction: any) {
  // valid obj and classFunction
  const isValidObjAndClassFn =
    obj === null || obj === undefined || typeof classFunction !== "function";

  if (isValidObjAndClassFn) {
    return false;
  }

  let inputObj = obj;
  //wraps up primitive data types in object
  // that will help to identify the instance of Object
  // e.g Object(5) => Number, Object(5) instanceof Number => true
  if (typeof inputObj !== "object") {
    inputObj = Object(inputObj);
  }
  return inputObj instanceof classFunction;
}
