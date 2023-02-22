

const numbers = [10, 16, 1, 2, 3, 0,
  1235648, 11, 12, 34, 24]
const binaryStrings = ['1010', '10000', '1', '10', '11', '0',
  '100101101101011000000', '1011', '1100', '100010', '11000']





function convertToBinary(base10: number): string {
  return "0";
}

function convertToBase10(binary: string): number {
  return 0;
}

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] === convertToBase10(binaryStrings[i])) {
    console.log(`Wrong: ${binaryStrings[i]} converts to ${numbers[i]} not ${convertToBase10(binaryStrings[i])}`)
  }
}

for (let i = 0; i < numbers.length - 1; i++) {
  if (convertToBinary(numbers[i]) !== binaryStrings[i]) {
    console.log(`Wrong: ${numbers[i]} converts to ${binaryStrings[i]} not ${convertToBinary(numbers[i])}`)
  }
}







