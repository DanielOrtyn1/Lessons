

const numbers = [10, 16, 1, 2, 3, 0,
  1235648, 11, 12, 34, 24]
const binaryStrings = ['1010', '10000', '1', '10', '11', '0',
  '100101101101011000000', '1011', '1100', '100010', '11000']





function convertToBinary(base10: number): string {
  if (base10 === 0) {
    return '0';
  }
  let binary = '';
  while (base10 >= 1) {
    const remainder = base10 % 2 ? '1' : '0';
    base10 = Math.floor(base10 / 2);
    binary = `${remainder}${binary}`;
  }
  let firstOne = binary.indexOf('1');
  binary = binary.substring(firstOne, binary.length);

  return binary;
}

function convertToBase10(binary: string): number {
  let base10 = 0;
  let currentDecimal = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    const digit = binary.charAt(i);
    if (digit === '1') {
      base10 += currentDecimal;
    }
    currentDecimal *= 2;
  }
  return base10;
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







