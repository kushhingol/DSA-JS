export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalTankValue = 0;
  let currentTankValue = 0;
  let startingPoint = 0;

  for (let i = 0; i < gas.length; i++) {
    totalTankValue += gas[i] - cost[i];
    currentTankValue += gas[i] - cost[i];
    if (currentTankValue < 0) {
      startingPoint = i + 1;
      currentTankValue = 0;
    }
  }

  return totalTankValue >= 0 ? startingPoint : -1;
}
