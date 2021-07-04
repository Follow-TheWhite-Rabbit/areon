const userName = prompt("Enter your name");
const userAge = +prompt("Enter your age");

if (userAge < 18) {
    alert("You are not allowed to visit this website");
} else if (userAge > 22) {
    alert(`Welcome, ${userName}.`);
} else  {
    const result = confirm("Are you sure you want to continue?");
        if (result) {
        alert(`Welcome, ${userName}.`);
        }else  {
        alert("You are not allowed to visit this website")};
}
