function createNewUser() {
    return {
        firstName: prompt('Введите имя '),
        lastName: prompt('Введите фамилию'),
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
    }
}
const newUser = createNewUser();
console.log(createNewUser());
console.log(newUser.getLogin());