const numbers = [1, 5, 77, 44, 3];
const max2 = Math.max(1, 5, 77, 44, 3);
console.log(max2)
const max = Math.max(...numbers);
console.log(max);

const params = [45, 65, 2];
function sum(x, y, z) {
    console.log(x, y, z);
    return x + y + z
}

const result = sum(...params);
// console.log(params);
console.log(result);

const arr1 = [1, 2, 3];
const arr2 = [22,...arr1,22,33,33];
arr2.push(4);
console.log(arr1);
console.log(arr2);


const person = { name: "alice", age: 30 };
const person2 = {...person, degignation: "devolper"};
person.salary = 3600;
console.log(person);
console.log(person2);

