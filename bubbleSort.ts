

const array1 = [1, 4, 5, 9, 2, 4, 3, 4, 6, 3, 45, 8, 3, 6,];
const array1Answer = [1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 8, 9, 45,];

const array2 = [4, 2, 3, 5, 2, 1, 2, 7, 0, 5, 0, 1, 10, 10, 6, 0, 10, 10, 0, 9, 3, 1, 2, 7, 2, 1, 6, 9, 8, 1,];
const array2Answer = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 9, 10, 10, 10, 10,];

const array3 = [1, 6, 9, 3, 3, 0, 3, 4, 4, 7, 5, 5, 3, 9, 5];
const array3Answer = [0, 1, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 7, 9, 9,];

const array4 = [6, -3, -5, -9, -1, 10, -3, 9, -5, 8, 9, -10, -3, -2, -4,];
const array4Answer = [-10, -9, -5, -5, -4, -3, -3, -3, -2, -1, 6, 8, 9, 9, 10,];

const array5 = [-7, -8, 3, 2, 3, 9, -1, -9, 1, 2, -4, 0, 10, 6, -2,];
const array5Answer = [-9, -8, -7, -4, -2, -1, 0, 1, 2, 2, 3, 3, 6, 9, 10,];



function swap(array: number[], aIndex: number, bIndex: number) {
  const aValue = array[aIndex];
  const bValue = array[bIndex];
  array[aIndex] = bValue;
  array[bIndex] = aValue;
}

function bubbleSort(array: number[]) {
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      const leftValue = array[j];
      const rightValue = array[j + 1];
      if (leftValue > rightValue) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log(array);
}


bubbleSort(array1);
for (let i = 0; i < array1.length - 1; i++) {
  if (array1[i] !== array1Answer[i]) {
    console.log(`Index: ${i} was wrong`)
  }
}







