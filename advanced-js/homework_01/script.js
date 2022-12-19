

class Employee {

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.salary = options.salary
    }

    get nameInfo () {return this.name}
    get ageInfo () {return this.age}
    get salInfo () {return this.salary}

    set nameInfo (newName) {this.name = newName}
    set ageInfo (newAge) {this.age = newAge}
    set salInfo (newSal) {this.salary = newSal}
}

class Programmer extends Employee {

    constructor(options) {
        super(options)
        this.lang = options.lang
    }

     get salInfo () {
        return this.salary * 3
    }
}

const alex = new Programmer ({
    name: "Alex",
    age: 25,
    salary: 30000,
    lang: "eng"
})
const nic = new Programmer({
    name: "Nic",
    age: 23,
    salary: 25000,
    lang: "ua"
})
const lera = new Programmer({
    name: "Lera",
    age: 24,
    salary: 23000,
    lang: "ua"
})

console.log(alex, nic, lera)