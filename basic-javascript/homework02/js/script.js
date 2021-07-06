let number = +prompt("Enter the number");
    if (number < 5) {
        console.log("Sorry, no numbers");
} else for (let i = 0; i <= number; i++) {
            if (i % 5 === 0 && i !== 0) {
                console.log(i);
    }
}