// function outerFunction() {
//     function innerFunction() {
//         console.log("This is the inner function");

//     }
//     return innerFunction;
// }

// // console.log(outerFunction());
// // result();

// function counter(owner) {
//     let count = 0;
//     function increment() {
//         count = count + 1;
//         console.log("value of count", owner, count);

//     }
//     return increment;
// }

// const rohimCounter = counter("Rahim");
// rohimCounter();
// rohimCounter();
// rohimCounter();
// rohimCounter();

// const koimCounter = counter("karim");
// koimCounter();
// koimCounter();
// koimCounter();

// rohimCounter();
// rohimCounter();
// rohimCounter();

// koimCounter();
// koimCounter();




// const count1 = counter();
// // console.log(count1);
// count1();
// count1();
// count1();
// count1();
// count1();

// ---------------------------------------
// closure learn with shumit

var num1 = 2;
var sum = function () {
    num2 = 3;
    return function () {
        return num1 + num2;
    }
}

var myFunc = sum();
console.dir(myFunc);