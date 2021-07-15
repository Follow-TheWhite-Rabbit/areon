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





//////////// 2 ВАРИАНТ (БОЛЕЕ ПРАВИЛЬНЫЙ) ////////////////////////////////////////////////////////////////////



function createNewUser() {
    return {
        userName: prompt("Введите имя"),
        userSurname: prompt("Введите фамилию"),
        birthday: prompt("Введите дату рождения в формате dd.mm.yyyy"),
        getLogin: function () {
            return (this.userName[0] + this.userSurname).toLowerCase();
        },
        getAge: function () {
            const now = new Date();
            const birthdayDate = this.birthday.split('.');
            const date = new Date(birthdayDate[2], birthdayDate[1] - 1, birthdayDate[0]);
            const time = now - date;
            const dateTime = new Date(time);
            return new Date(Date.now() - date).getFullYear() - 1970;
        },
        getPassword: function () {
            return (this.userName[0] + (this.userSurname.toLowerCase()) + this.birthday.split('.')[2]);
        }
    }
}
const newUser = createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());