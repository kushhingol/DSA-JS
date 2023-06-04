function jsonToMatrix(arr: any[]): (string | number | boolean | null)[] {
  const result = {};
  const resultArray = [];

  function getKey(currentParentKey: string, key: string) {
    return currentParentKey ? `${currentParentKey}.${key}` : key;
  }

  // recursive method to manage object parsing and to manage an object structure
  function manageObjectParsing(object: any, index, currentParentKey = "") {
    const keys = Object.keys(object);
    for (let key of keys) {
      const value = object[key];
      const isObjectType = value !== null && typeof value === "object";
      if (isObjectType) {
        const parentKey = getKey(currentParentKey, key);
        manageObjectParsing(value, index, parentKey);
      } else {
        const columnKey = currentParentKey ? `${currentParentKey}.${key}` : key;
        const row = result[columnKey] ?? [];
        row[index] = value;
        result[columnKey] = row;
      }
    }
  }

  // will call the recursive method for each object or array of the input
  function jsonToMatrixParser() {
    for (let i = 0; i < arr.length; i++) {
      manageObjectParsing(arr[i], i);
    }
  }

  // used to prepare output structure
  function structureOutput() {
    const colKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));
    //inserting first row with column in resultArray
    resultArray.push(colKeys);
    for (let i = 0; i < arr.length; i++) {
      const row = [];
      for (let columnKey of colKeys) {
        const isValue = result?.[columnKey]?.[i] !== undefined;
        const value = isValue ? result?.[columnKey]?.[i] : "";
        row.push(value);
      }
      resultArray.push(row);
    }
  }

  jsonToMatrixParser();
  structureOutput();
  return resultArray;
}

const arr = [
  {
    _id: "64265e18f4596ed5b53673c1",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: "$1,216.03",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: null,
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "robertswest@geeky.com",
    phone: "+1 (918) 600-2564",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "2022-12-24T06:42:37 +06:00",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: ["et", true, "velit", "velit", "ullamco", "qui", "nostrud"],
    friends: [
      { id: 0, name: "Manuela Hart" },
      { id: 1, name: "Janice Sykes" },
      { id: 2, name: "Beasley Bonner" },
    ],
    greeting: "Hello, Roberts West! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "64265e18f4596ed5b53673c1",
    index: 0,
    guid: "0.6447751424717756",
    isActive: "0.8087219208814307",
    balance: "0.23019597472349096",
    picture: "http://placehold.it/32x32",
    age: "0.16869023093807578",
    eyeColor: null,
    name: "Roberts West",
    gender: "0.5100291689060403",
    company: "GEEKY",
    email: "robertswest@geeky.com",
    phone: "+1 (918) 600-2564",
    address: { x: true },
    registered: "2022-12-24T06:42:37 +06:00",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: [{ x: true }, true, "velit", "velit", "ullamco", "qui", "nostrud"],
    friends: [
      { id: 0, name: "Manuela Hart" },
      { id: "0.5323551231335333", name: "0.55352125545771" },
      { id: 2, name: "Beasley Bonner" },
    ],
    greeting: "Hello, Roberts West! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
];

[
  "_id",
  "address",
  "address.x",
  "age",
  "balance",
  "company",
  "email",
  "eyeColor",
  "favoriteFruit",
  "friends.0.id",
  "friends.0.name",
  "friends.1.id",
  "friends.1.name",
  "friends.2.id",
  "friends.2.name",
  "gender",
  "greeting",
  "guid",
  "index",
  "isActive",
  "latitude",
  "longitude",
  "name",
  "phone",
  "picture",
  "registered",
  "tags.0",
  "tags.0.x",
  "tags.1",
  "tags.2",
  "tags.3",
  "tags.4",
  "tags.5",
  "tags.6",
];

console.log(jsonToMatrix(arr));
