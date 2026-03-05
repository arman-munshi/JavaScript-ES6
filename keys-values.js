const king = { name: "mufasa", age: 55, kingdom: "pride lands" };
const keys = Object.keys(king);
// console.log(keys);
const values = Object.values(king);
// console.log(values);
const entries = Object.entries(king);
// console.log(entries);

// =======================================

// lear about freeze

const king2 = { name: "mufasa king", age: 55, kingdom: "pride lands beautiful" };
// Object.freeze(king2)
Object.seal(king2);

delete king2.age;
king2.name="rustom king"
king2.queen = "sarabi";
console.log(king2)


