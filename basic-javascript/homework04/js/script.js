function createNewUser() {
    return {
        userName: prompt("Введите имя"),
        userSurname: prompt("Введите фамилию"),
        getLogin: function () {
            return (this.userName[0] + this.userSurname).toLowerCase();
        }
    }
}
const newUser = createNewUser();
console.log(newUser.getLogin());