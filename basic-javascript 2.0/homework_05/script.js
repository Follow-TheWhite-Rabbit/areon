
function createNewUser() {
    const newUser = {

        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your last name'),

        getLogin: function() {
            return (this.firstName[0] + this.lastName).toLowerCase()
        }
    }
    return newUser
}

let user = createNewUser()
console.log(user.getLogin())



///////////////////////////// БОЛЕЕ КОРОТКАЯ ЗАПИСЬ ///////////////////

// function createNewUser() {
//     return {
//         userName: prompt("Введите имя"),
//         userSurname: prompt("Введите фамилию"),
//         getLogin: function () {
//             return (this.userName[0] + this.userSurname).toLowerCase();
//         }
//     }
// }
// const newUser = createNewUser();
// console.log(newUser.getLogin());