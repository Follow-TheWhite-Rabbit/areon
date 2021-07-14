function createNewUser() {
    return {
        userName: prompt("Введите имя"),
        userSurname: prompt("Введите фамилию"),
        birthday: new Date(prompt("Введите дату рождения в формате dd.mm.yyyy")),
        getLogin: function () {
            return (this.userName[0] + this.userSurname).toLowerCase();
        },
        getAge: function () {
            const now = new Date();
            const date = now.getFullYear() - this.birthday.getFullYear();
            return date;
        },
        getPassword: function () {
            return (this.userName[0] + (this.userSurname.toLowerCase()) + this.birthday.getFullYear());
        }
    }
}
const newUser = createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());
