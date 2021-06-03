const alphabetSubSequence = (inputString: string): boolean => {
  let inputShifted: boolean;

  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString.charCodeAt(i + 1) - inputString.charCodeAt(i) < 2) {
      inputShifted = false;
      break;
    } else inputShifted = true;
  }
  console.log(inputShifted);
  return inputShifted;
};

console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));
