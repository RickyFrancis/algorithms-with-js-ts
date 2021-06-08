function arrayPreviousLess(inputArray: number[]): number[] {
  let lessThanList: number[] = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    let smallest = inputArray[i];

    for (let j = i; j >= 0; j--) {
      if (inputArray[i] > inputArray[j]) {
        smallest = smallest < inputArray[j] ? smallest : inputArray[j];
        console.log(smallest);
      } else if (j === 0) {
        smallest = -1;
      }
    }
    lessThanList.unshift(smallest);
  }

  return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
