function alphabeticShift(inputString: string): string {
  const alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let inputShifted = inputString.split('');

  let alphabeticallyShifted = '';

  console.log(inputShifted);

  for (let i = 0; i < inputShifted.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (inputShifted[i] === 'z') {
        alphabeticallyShifted += 'a';
        break;
      } else if (inputShifted[i] === alphabet[j]) {
        alphabeticallyShifted += alphabet[j + 1];
      }
    }
  }

  return alphabeticallyShifted;
}

console.log(alphabeticShift('crazy'));
