# Problem statement

Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2. For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys. The end result should be a deeply nested object where each leaf value is a difference array.

You may assume that both objects are the output of JSON.parse.

# Example 1

```JS
Input:
obj1 = {}
obj2 = {
  "a": 1,
  "b": 2
}
Output: {}
Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2, but keys that are added or removed should be ignored.

```

# Example 2

```JS
Input:
obj1 = {
  "a": 1,
  "v": 3,
  "x": [],
  "z": {
    "a": null
  }
}
obj2 = {
  "a": 2,
  "v": 4,
  "x": [],
  "z": {
    "a": 2
  }
}
Output:
{
  "a": [1, 2],
  "v": [3, 4],
  "z": {
    "a": [null, 2]
  }
}
Explanation: The keys "a", "v", and "z" all had changes applied. "a" was chnaged from 1 to 2. "v" was changed from 3 to 4. "z" had a change applied to a child object. "z.a" was changed from null to 2.

```

```JS
Input:
obj1 = {
  "a": {"b": 1},
}
obj2 = {
  "a": [5],
}
Output:
{
  "a": [{"b": 1}, [5]]
}
Explanation: The key "a" exists in both objects. Since the two associated values have different types, they are placed in the difference array.
```
