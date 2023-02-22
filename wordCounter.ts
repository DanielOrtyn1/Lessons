const text: string = `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`;


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const dictionary = new Map<string, number>();

let index = 0;
while (index < text.length) {
  const start = index;
  let end = text.indexOf(' ', index + 1);
  if (end < 0) {
    end = text.length
  }
  const word = text.substring(start, end);
  let count = dictionary.get(word);
  if (!count) {
    count = 0;
  }
  dictionary.set(word, count + 1);
  index = end;
}

// console.log(dictionary);

let i = 0;

let counter = -1;

let map = new Map<String, number>();

// while (counter < text.length && i < 10){
while (counter < text.length) {

  let lengthOne = text.indexOf(' ', counter + 1);

  if (lengthOne === -1) {
    lengthOne = text.length;
  }

  let fristWord = text.substring(counter + 1, lengthOne);



  let num = map.get(fristWord)

  if (num === undefined) {
    num = 0;
  }

  map.set(fristWord, num + 1);

  // console.log(fristWord)

  counter = lengthOne
  i++
}

let keys = map.keys();
let newMap = new Map<String, number>();
let regEx = new RegExp(/[^a-z]/)

for (let word of keys) {
  let test = new String(word)
  test = test.toLowerCase()
  let checker = regEx.test(test.toString());
  if (!checker) {
    const oldMapCount = map.get(word);
    let num = newMap.get(test)
    if (num === undefined) {
      num = 0;
    }
    newMap.set(test, num + oldMapCount);
  } else {
    const wordSplit = word.split(regEx).filter(ele => ele);
    for (let newWord of wordSplit) {
      const oldMapCount = map.get(word);
      let num = newMap.get(newWord)
      if (num === undefined) {
        num = 0;
      }
      newMap.set(newWord, num + oldMapCount);
    }
  }
}

map = newMap;


console.log(map)