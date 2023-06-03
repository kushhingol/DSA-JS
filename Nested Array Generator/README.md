# Problem Statement

Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

# Editorial

[Nested Array Generator](https://leetcode.com/problems/nested-array-generator/editorial/?utm_campaign=DailyD30&utm_medium=Email&utm_source=Daily&gio_link_id=woVyOjeP) (A must read article)

# Example

```JS
Input: arr = [[[6]],[1,3],[]]
Output: [6,1,3]
Explanation:
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
```
