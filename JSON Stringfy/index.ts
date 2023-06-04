export function jsonStringify(object: any): string {
  if (typeof object === "string") {
    return `"${object.replace(/"/g, '\\"')}"`;
  }
  if (
    typeof object === "number" ||
    typeof object === "boolean" ||
    typeof object === "undefined" ||
    object === null
  ) {
    return String(object);
  }

  if (Array.isArray(object)) {
    const objArr = [];
    for (let i = 0; i < object.length; i++) {
      objArr.push(jsonStringify(object[i]));
    }
    return `[${objArr.join(",")}]`;
  }

  if (!Array.isArray(object) && typeof object === "object" && object !== null) {
    const objArr = [];
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const value = jsonStringify(object[keys[i]]);
      objArr.push(`"${keys[i]}":${value}`);
    }
    return `{${objArr.join(",")}}`;
  }
}

const json = { keys: { a: 1, b: [{ d: 1 }, null, "Hello"] } };
console.log(jsonStringify(json));
