

function createNewUser() {
    const newUser = {

        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your last name'),
        birthday: prompt('Enter your date of birth in the format: dd.mm.yyyy'),

        getLogin: function() {
            return (this.firstName[0] + this.lastName).toLowerCase()
        },
        getAge: function() {
            const date = Date.now()
            const birth = new Date(this.birthday.substr(3, 3) + this.birthday.substr(0, 3) + this.birthday.substr(-4, 4)).getTime()
            const age = date - birth
            return Math.floor(age / 1000 / 60 / 60 / 24 / 365)  // ИДЕЯ ЭТОГО СПОСОБА ЗАКЛЮЧАЕТСЯ В ТОМ, ЧТО МЫ ПЕРЕВОДИМ СЕГОДНЯШНЮЮ ДАТУ, И ДАТУ РОЖДЕНИЯ В МИЛЕСЕКУНДЫ, ВЫЧЕТАЕМ РАЗНИЦУ И ПЕРЕВОДИМ В ГОДА, ОКРУГЛЯЯ РЕЗУЛЬТАТ.
        },
        getPassword: function() {
            return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.substr(-4, 4)
        },
    }
    return newUser
}

let user = createNewUser()

// console.log(user.getLogin())

console.log(user.getPassword())

console.log(user.getAge())




///////////////////////////////////////////// ДОП. ВАРИАНТ 1 (ПРОСТОЙ И БАЗОВЫЙ, НО НЕ ТОЧНЫЙ) //////////////////////////////////////////

// function createNewUser() {
//     return {
//         userName: prompt("Введите имя"),
//         userSurname: prompt("Введите фамилию"),
//         birthday: new Date(prompt("Введите дату рождения в формате dd.mm.yyyy")),
//         getLogin: function () {
//             return (this.userName[0] + this.userSurname).toLowerCase();
//         },
//         getAge: function () {
//             const now = new Date();
//             const date = now.getFullYear() - this.birthday.getFullYear();
//             return date;
//         },
//         getPassword: function () {
//             return (this.userName[0] + (this.userSurname.toLowerCase()) + this.birthday.getFullYear());
//         }
//     }
// }
// const newUser = createNewUser();
// console.log(newUser.getLogin());
// console.log(newUser.getAge());
// console.log(newUser.getPassword());





//////////////////////////////////////////    ДОП. ВАРИАНТ 2 (НЕМНОГО ЗАМУДРЁННЫЙ, НО БОЛЕЕ ТОЧНЫЙ)   ///////////////////////////////////////////////



// function createNewUser() {
//     return {
//         userName: prompt("Введите имя"),
//         userSurname: prompt("Введите фамилию"),
//         birthday: prompt("Введите дату рождения в формате dd.mm.yyyy"),
//         getLogin: function () {
//             return (this.userName[0] + this.userSurname).toLowerCase();
//         },
//         getAge: function () {
//             const now = new Date();
//             const birthdayDate = this.birthday.split('.');
//             const date = new Date(birthdayDate[2], birthdayDate[1] - 1, birthdayDate[0]);
//             const time = now - date;
//             return new Date(Date.now() - date).getFullYear() - 1970;
//         },
//         getPassword: function () {
//             return (this.userName[0] + (this.userSurname.toLowerCase()) + this.birthday.split('.')[2]);
//         }
//     }
// }
// const newUser = createNewUser();
// console.log(newUser.getLogin());
// console.log(newUser.getAge());
// console.log(newUser.getPassword());