function allLongestStrings(inputArray: string[]): string[] {
  let largestLength: number = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    largestLength =
      inputArray[i].length > largestLength
        ? inputArray[i].length
        : largestLength;
  }

  let newArray: string[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].length === largestLength && newArray.push(inputArray[i]);
  }

  return newArray;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
