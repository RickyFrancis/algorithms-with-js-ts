function adjacentProduct(inputArray: number[]): number {
  let largestProduct: number = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    largestProduct = product > largestProduct ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentProduct([3, 6, -2, -5, 7, 3]));
