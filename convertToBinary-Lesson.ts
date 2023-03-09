import { getTokenSourceMapRange } from "typescript"


const numbers = [15, 16, 1, 2, 3, 0,
  1235648, 11, 12, 34, 24]
const binaryStrings = ['1111', '10000', '1', '10', '11', '0',
  '100101101101011000000', '1011', '1100', '100010', '11000']



function convertToBinary(base10: number): string {
  let largestBinaryDigit = 1
  while(!(largestBinaryDigit > base10)){
    largestBinaryDigit*=2
  }
  largestBinaryDigit/=2
  let record = []
  while (base10 > 0) {
    if (base10 > largestBinaryDigit) {
      base10 = base10-largestBinaryDigit
      record.push("1")
    }
     else{
      record.push("0")
    }
    largestBinaryDigit/=2
  }
  let string1 = ''
  
  for(let i = 0; record.length > i; i++){
    let thing = record[i]
    string1+=thing
  }

  
  return string1;
}

function convertToBase10(binary: string): number {
  let num = 0;
  let place = 1
  for(let i = binary.length-1; i > -1; i--){
    let digit = new Number(binary[i])
    if (digit == 1) {
       num += place
    }
    place = place*2
  }
  return num;
}
convertToBinary(numbers[0])
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] !== convertToBase10(binaryStrings[i])) {
    console.log(`Wrong: ${binaryStrings[i]} converts to ${numbers[i]} not ${convertToBase10(binaryStrings[i])}`)
  }
}

for (let i = 0; i < numbers.length - 1; i++) {
  if (convertToBinary(numbers[i]) !== binaryStrings[i]) {
    console.log(`Wrong: ${numbers[i]} converts to ${binaryStrings[i]} not ${convertToBinary(numbers[i])}`)
  }
}

//// Start by taking the number 15 and take the number 2 and do 2^0. The answer, which is one, you should keep in your mind.
// Then, you must do 2^1 and write the answer down. (2 is the answer)
// Continue the process of increasing the exponents by 1 every time you finish solving the last equation. Do this until you get the exponent which is right before it gets bigger than 15(2^3)
// Solve 2^3 to get 8. 6 6^5 ½ 







