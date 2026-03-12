let pi = 3.1416;
function add(a, b) {
    const factor = 0.5;
    const result = (a + b) * factor;
    const total = dubleIt(result);

    function addTow(num) {
        return num + 2;
    }

    return result;
    
}

function dubleIt(num) {
    return num * 2;
    
}
console.log(add(5, 6));