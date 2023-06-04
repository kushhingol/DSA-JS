# Problem statement

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's \_.chunk function.

# Editorial

[Editorial](https://leetcode.com/problems/chunk-array/editorial/?utm_campaign=DailyD21&utm_medium=Email&utm_source=Daily&gio_link_id=xogkVnzo)

# Example 1

```JS
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
```
