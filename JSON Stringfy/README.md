# Problem statement

Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.

# Editorial

[Editorial](https://leetcode.com/problems/convert-object-to-json-string/editorial/?utm_campaign=DailyD18&utm_medium=Email&utm_source=Daily&gio_link_id=woVyOn5P)

# Example 1

```JS
Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation:
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
```

# Example 2

```JS
Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.
```
