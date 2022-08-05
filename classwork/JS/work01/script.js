let name = prompt("Give me you name")
let age = prompt("Give your age")

console.log(name, age)

if (name === "") {
    console.error("Wrong name")
}

if (isNaN(age)) {
    console.error("Wrong age")
} else if (age < 0) {
    console. error("Age less then zero")
}


