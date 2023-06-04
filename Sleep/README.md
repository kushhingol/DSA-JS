## Problem Statement

Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

## Editorial

[Editorial](https://leetcode.com/problems/sleep/editorial/?utm_campaign=DailyD11&utm_medium=Email&utm_source=Daily&gio_link_id=Y9Jw7b6R)

## Example 1

```
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```
