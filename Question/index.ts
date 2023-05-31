const findLowestEnergyLevelOfAnimalForTransport = (
  numberOfAnimals: number,
  availableCapacity: number,
  energyLevels: number[]
) => {
  const animalsToBeTransported = [];
  let left = 0;
  let right = numberOfAnimals - 1;

  const decrementRight = () => (right -= 1);
  const incrementLeft = () => (left += 1);
  const popAndPush = (energyValue) => {
    animalsToBeTransported.pop();
    animalsToBeTransported.push(energyValue);
  };

  const findMinOfEnergies = (array) =>
    array.reduce((prev, curr) => {
      if (prev < curr) {
        return prev;
      }
      return curr;
    }, animalsToBeTransported[0]);

  while (left <= right) {
    const animalsToBeTransportedLength = animalsToBeTransported.length;
    const hasCapacity = animalsToBeTransportedLength < availableCapacity;

    if (energyLevels[left] < energyLevels[right] && hasCapacity) {
      animalsToBeTransported.push(energyLevels[right]);
      decrementRight();
    } else if (energyLevels[left] > energyLevels[right] && hasCapacity) {
      animalsToBeTransported.push(energyLevels[left]);
      incrementLeft();
    } else if (hasCapacity) {
      animalsToBeTransported.push(energyLevels[left]);
      incrementLeft();
      decrementRight();
    } else {
      const lastInserted = animalsToBeTransported[availableCapacity - 1];
      if (energyLevels[left] > lastInserted) popAndPush(energyLevels[left]);
      else incrementLeft();

      if (energyLevels[right] > lastInserted) popAndPush(energyLevels[right]);
      else decrementRight();
    }
  }
};

findLowestEnergyLevelOfAnimalForTransport(5, 4, [1, 3, 2, 4, 5]);
