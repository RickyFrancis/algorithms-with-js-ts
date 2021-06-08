function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff: number = 0;

  for (let i = 0; i < inputArray.length; i++) {
    maxDiff =
      Math.abs(inputArray[i] - inputArray[i + 1]) >= maxDiff
        ? Math.abs(inputArray[i] - inputArray[i + 1])
        : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
