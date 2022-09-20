

// gameIsRun = false
//
// index = 1
//
// function roleImage() {
//     index++
//     if(index===5){
//         index = 1
//     }
//     adv = document.querySelector('.image-to-show')
//     adv.src = "./img/"+index+".jpg"
// }
// let interval = setInterval(roleImage,3000)


gameIsRun = false

const img = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.png"]
let nums = 0
function change() {
    nums++
    if (nums === 4) {nums = 0}
    document.querySelector('.image-to-show').src = img[nums]
}
let interval = setInterval(change, 3000)



document.querySelector("#stop-button").addEventListener("click", function () {
    gameIsRun = false
    clearInterval(interval)
})

document.querySelector("#reestablish-button").addEventListener("click", function () {
    !gameIsRun ? (interval = setInterval(change, 3000)) : false
    gameIsRun = true
})

