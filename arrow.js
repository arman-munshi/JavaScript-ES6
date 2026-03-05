// normal way to function writing
function addNumber(num1, num2) {
    const result = num1 + num2;
    return result;
}
console.log(addNumber(4, 6));

// second way to write function
const add = function (num1, num2) {
    return num1 + num2;
}
console.log(add(3, 6));


// arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(2, 9));

// more example
const tenTimes = x => x * 10;
console.log(tenTimes(10));

const tenTimes2 = x => (x) * 10;
console.log(tenTimes2(10));

// multiline arrow function code
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(doMath(7, 4));

const division = (a, b) => a - b;
console.log(division(7, 4));

// document



