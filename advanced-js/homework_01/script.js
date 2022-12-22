

class Employee {

    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    get nameInfo () {return this.name}
    get ageInfo () {return this.age}
    get salInfo () {return this.salary}

    set nameInfo (newName) {this.name = newName}
    set ageInfo (newAge) {this.age = newAge}
    set salInfo (newSal) {this.salary = newSal}
}

class Programmer extends Employee {

    constructor(name, age, salary, lang) {
        super(name, age, salary)
        this.lang = lang
    }

     get salInfo () {
        return this.salary * 3
    }
    get langInfo () {return this.lang}
    set langInfo (newLang) {this.lang = newLang}
}

const alex = new Programmer ("Alex", 25, 30000, "eng")
const nic = new Programmer("Nic", 23, 25000, "ua")
const lera = new Programmer("Lera", 24, 23000, "ua")

console.log(alex, nic, lera)