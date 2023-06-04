# Problem Statement

Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's \_.isEqual() function.

## Editorial

[Editorial](https://leetcode.com/problems/json-deep-equal/editorial/?utm_campaign=DailyD17&utm_medium=Email&utm_source=Daily&gio_link_id=nP2127dR)

## Example 1

```JS
Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.
```

## Example 2

```JS
Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.
```

## Example 3

```JS
Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.
```

## Example 4

```JS
Input: o1 = true, o2 = false
Output: false
Explanation: true !== false
```
