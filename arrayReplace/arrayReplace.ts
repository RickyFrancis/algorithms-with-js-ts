function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let substitutedArray: number[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    substitutedArray[i] =
      inputArray[i] === elemToReplace ? substitutionElem : inputArray[i];
  }

  return substitutedArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
