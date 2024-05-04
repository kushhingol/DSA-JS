## Problem Statment

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

## Example

```
Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

```

## Solution Explanation

1. The total amount of gasoline at the stations must be >= the total amount of gasoline going to the stations
2. When starting at a gas station the fuel can be filled at that point should be > then fuel required to go to the next station

Psuedo code:

1. Declare 3 variable, totalTankValue, currentFuelValue and startingPoint, all with initial value of 0
2. Run a for loop from i = 0
3. On each iteration, calculate totalTankValue and currentTankValue by += gas[i] - cost[i]
   The calculation += gas[i] - cost[i] means that you can checking how much fuel will be left after you filled up the fuel at ith station by gas[i] to move to i+1 station by buring cost[i] fuel and then you are adding it to the totalTankValue and the currentTankValue
4. Now if your currentTankValue < 0 that means your car has no fuel left and you can't travel to the next station so you need to try out next station as a startingPoint by updating startingPoint = i + 1 and reseting currentTankValue = 0, we won't reset totalTankValue because its used to check whether total gas filled in >= total gas burned out
5. Once the loop is finished, just check whether totalTankValue >= 0 if yes that means there is possible solution and return the startingPoint value or else return -1 since your totalTankValue < 0 which means the gas fuel to be burn is greater that what your can fill in
