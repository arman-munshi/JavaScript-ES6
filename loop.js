const employee = {
    name: "arman munshi",
    1: "desk one",
    "home-address": "123 main st",
    salary: 50000,
    position:"software Engineer"
}

for (const key in employee) {
    const value = employee[key]
    console.log(key, ":",value);
}