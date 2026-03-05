function sumTotal(num1, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
}

sumTotal(4);

function userName(first, last="") {
    const name = first + " " + last;
    console.log(name);
}

userName("arman");
