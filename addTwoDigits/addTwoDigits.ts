function addTwoDigits(n: any): number {
  let digits = n.toString().split('');

  console.log(digits);

  return digits.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));
