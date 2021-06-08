function arrayPreviousLess(inputArray: number[]): number[] {
  let lessThanList: number[] = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (inputArray[i] > inputArray[j]) {
        lessThanList.unshift(inputArray[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }

  return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
