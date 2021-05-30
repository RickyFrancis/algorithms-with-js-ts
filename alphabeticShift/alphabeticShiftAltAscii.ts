function alphabeticShift(inputString: string): string {
  let inputShifted = '';

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') {
      inputShifted += 'a';
    } else inputShifted += String.fromCharCode(inputString.charCodeAt(i) + 1);
  }

  return inputShifted;
}

console.log(alphabeticShift('crazy'));
