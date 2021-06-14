function characterParity(symbol: string): string {
   const digit = parseInt(symbol);

   if(isNaN(digit)) {
       return 'not a digit'
   } else if(digit % 2 === 0){
    return 'even'
   } else return 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
