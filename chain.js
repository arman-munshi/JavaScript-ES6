const employee = {
    name: "arman munshi",
    1: "desk one",
    "home-address": "123 main st",
    salary: 50000,
    family: {
        father: "kashem munshi",
        // mother: {
        //     name: "tania begum",
        //     age: 46
        // }
        mother: {
            name: "tania begum",
            age: 46
        }
        
    },

    position:"software Engineer"
}


// optional chaining , thats why use Question mark.
console.log(employee.family?.mother?.name) 