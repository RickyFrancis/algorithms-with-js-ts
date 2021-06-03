const alternatingSums = (inputArray: number[]): number[] => {
  let sum: number[] = [0, 0];

  if (inputArray.length < 1) {
    return [];
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 == 0) {
      sum[0] += inputArray[i];
    } else sum[1] += inputArray[i];
  }

  return sum;
};

console.log(alternatingSums([50, 60, 60, 45, 70]));
