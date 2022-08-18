

const user = {
    name : "Alexey",
    lastName : "Kliuzhyn",
    profession : "Developer",

    sayHi () {
        console.log (`Hi, ${this.name}`)
    },

    update: function (key) {
        if (key in this) {
            this[key] = prompt(`Enter new value for ${key}`)
        }

    }

}



// user.update("name")
user.update(Object.keys(user)[0])
// user.update(this.name)
console.log(user)