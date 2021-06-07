function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let largest: number = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let sum = inputArray[i] + inputArray[i + 1];
    if (sum > largest) largest = sum;
  }

  return largest;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
