
let userName = prompt('What is your name?')
let userAge = prompt('How old are you?')

while (userName === null || userName === "") {
    userName = prompt("You didn't enter a name, please try again.", userName)
}

while (isNaN(+userAge) || userAge === null || userAge === "") {
    userAge = prompt('You entered not a number, please try again.', userAge)
}


if (userAge < 18) {
    alert('You are not allowed to visit this website')
} else if (userAge >= 18 && userAge <= 22) {
    confirm('Are you sure you want to continue?')
    if (true) {
        alert(`Welcome, ${userName}`)
    } else {
        alert('You are not allowed to visit this website')
    }
} else {
    alert(`Welcome, ${userName}`)
}

