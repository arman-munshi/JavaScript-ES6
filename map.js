const numbers = [1, 2, 3, 4, 5];

// const dubbleIt = [];
// for (const num of numbers) {
//     dubbleIt.push(num * 2);
// }


const dubbelIt = num => num * 2;
const dubble = numbers.map(dubbelIt);
// console.log(dubble);

const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);
// console.log(squared);

const friends = ["zaved", "khaled", "malek", "jalek"];
const fristLetters = friends.map(frd => frd[0]);
// console.log(fristLetters);


const products = [
    {name:"laptop",price:45000},
    {name:"phone",price:5000},
    {name:"tablet",price:145000},
]

const price = products.map(pd => pd.price);
const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    // console.log(index, upperCaseName, productsArray);
    return upperCaseName;
})

// console.log(names);

const result = products.forEach(pd => console.log(pd.name));