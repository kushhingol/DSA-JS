# Editorial

[Editorial](https://leetcode.com/problems/generate-fibonacci-sequence/editorial/?utm_campaign=DailyD29&utm_medium=Email&utm_source=Daily&gio_link_id=QRekxgno)

# Problem statement

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

# Example 1

```JS
Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
```
