let a: string = 'hello';

// can't run this because a is of type string
//a = 5;
console.log(a);

function fun(one: number, two: number, ...params: number[]): number {
  return one + two;
}

let result: number;
result = fun(5, 10, 25);
console.log(result);

class Animal {
  species: string;
  constructor(){ }
}



const test = new Animal();
console.log(Animal);
test.species = 'Test'
console.log(Animal);


interface Chatter {
  name: string;
  talkList: string[];
}
function addChatterToMap(map:Map<string, Chatter>, newPerson: Chatter){
  map.set(newPerson.name, newPerson)
}

const people = new Map<string, Chatter>();
addChatterToMap(people, {name: 'Bob', talkList:['Fred','Susan', 'Polly']});
addChatterToMap(people, {name: 'Fred', talkList:['Bob','Sally', 'Polly']});
addChatterToMap(people, {name: 'Susan', talkList:['Sally','Polly', 'Mandy', 'Shelly']});
addChatterToMap(people, {name: 'Sally', talkList:['Polly','Mandy', 'Fred']});
addChatterToMap(people, {name: 'Polly', talkList:['Cat','Dog', 'Tiger']});
addChatterToMap(people, {name: 'Mandy', talkList:['Bob','Dog', 'Polly']});
addChatterToMap(people, {name: 'Shelly', talkList:['Susan', 'Mandy']});
addChatterToMap(people, {name: 'Tiger', talkList:['Gorilla','Monkey', 'Parot', 'Fred']});
addChatterToMap(people, {name: 'Cat', talkList:['Dog','Parot', 'Fred']});
addChatterToMap(people, {name: 'Dog', talkList:['Tiger']});
addChatterToMap(people, {name: 'Parot', talkList:['Dog','Sally']});

console.log(people);
