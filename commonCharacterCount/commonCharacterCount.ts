function commonCharacterCount(s1: string, s2: string): number {
   const s1Chars: string[] = s1.split('')
   const s2Chars: string[] = s2.split('')
   const s1CharCount = getCharList(s1Chars);
   console.log(s1CharCount)
   const s2CharCount = getCharList(s2Chars);
   console.log(s2CharCount)
   let total = 0;

   for(const prop in s1CharCount){
        if(s2CharCount.hasOwnProperty(prop)){
            if(s2CharCount[prop] < s1CharCount[prop]){
                total += s2CharCount[prop];
            } else {
                total += s1CharCount[prop];
            }
        }
   }

   return total;
}

const getCharList = (chars: string[]): object => {
    const wordCount = {}

    for(let i = 0; i < chars.length; i++) {
        if(wordCount.hasOwnProperty(chars[i])){
            wordCount[chars[i]]++
        } else {
            wordCount[chars[i]] = 1;
        }
    }
    return wordCount
}

console.log(commonCharacterCount('aabcc', 'adcaa'));