

// const wrapper = document.querySelector(".wrapper");
// const rabbit = '<span class="material-symbols-outlined">cruelty_free</span>';
//
// let interval;
//
// let scores = 0;
// let recordValue;
// if (localStorage.getItem("record") !== null) {
//     recordValue = localStorage.getItem("record");
//     document.querySelector("#record").innerText = recordValue;
// } else {
//     recordValue = 0;
// }
//
//
// for (let i = 1; i < 10; i++) {
//     const div = document.createElement("div");
//     div.id = `number-${i}`;
//     wrapper.append(div);
// }
// function random() {
//     let divNumber = Math.floor(Math.random() * 9) + 1;
//     const currentDiv = document.querySelector(` #number-${divNumber}`)
//     currentDiv.innerHTML = rabbit;
//     setTimeout(function () {
//         console.log(currentDiv.hasChildNodes());
//         currentDiv.hasChildNodes() ? currentDiv.children[0].remove() : false;
//     }, 1000)
//
// }
// wrapper.addEventListener("click", function (ev) {
//     if (ev.target.classList.contains("material-symbols-outlined")) {
//         scores++;
//         document.querySelector("#scores").innerText = scores;
//         ev.target.remove();
//
//     }
//
// });
//
// document.querySelector("#start-button").addEventListener("click", function () {
//     interval = setInterval(random, 1000);
// });
// document.querySelector("#stop-button").addEventListener("click", function () {
//     console.log(recordValue);
//     console.log(scores);
//     if (recordValue < scores) {
//         localStorage.setItem("record", scores);
//         document.querySelector("#record").innerText = scores;
//     }
//
//     clearInterval(interval);
// });





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const wrapper = document.querySelector(".wrapper");
const rabbit = '<span class="material-symbols-outlined">cruelty_free</span>';

let interval;

let scores = 0;
let recordValue;
let gameIsRun = false;

if (localStorage.getItem("record") !== null) {
    recordValue = localStorage.getItem("record");
    document.querySelector("#record").innerText = recordValue;
} else {
    recordValue = 0;
}

for (let i = 1; i < 10; i++) {
    const div = document.createElement("div");
    div.id = `number-${i}`;
    wrapper.append(div);
}
function random() {
    let divNumber = Math.floor(Math.random() * 9) + 1;
    const currentDiv = document.querySelector(` #number-${divNumber}`);
    currentDiv.innerHTML = rabbit;
    setTimeout(function () {
        console.log(currentDiv.hasChildNodes());
        currentDiv.hasChildNodes() ? currentDiv.children[0].remove() : false;
    }, 1000);
}
wrapper.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("material-symbols-outlined")) {
        scores++;
        document.querySelector("#scores").innerText = scores;
        ev.target.remove();
    }
});

document.querySelector("#start-button").addEventListener("click", function () {
    !gameIsRun ? (interval = setInterval(random, 1000)) : false;
    gameIsRun = true;
});
document.querySelector("#stop-button").addEventListener("click", function () {
    gameIsRun = false;
    recordValue < scores ? setRecord(scores) : false;
    clearInterval(interval);
});
document.querySelector("#reset").addEventListener("click", () => {
    setRecord(0);
    scores = 0;
    document.querySelector("#scores").innerText = scores;
});

function setRecord(value) {
    recordValue = value;
    localStorage.setItem("record", value);
    document.querySelector("#record").innerText = value;
}