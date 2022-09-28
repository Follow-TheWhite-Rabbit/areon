const feedbackLength = document.querySelectorAll(".client_feedback_items").length

let currentIndex = 0

let leftArrow = document.querySelector(".button_left")
leftArrow.addEventListener("click", function () {
    slide("left")
})
let rightArrow = document.querySelector(".button_right")
rightArrow.addEventListener("click", function () {
    slide("right")
})

let width = document.querySelector(".client_feedback_gallery").offsetWidth

const slider = document.querySelector(".slider")

//////////////////// доработка ///////////////////////////////////////////////////////////////////////////////////////

let thumbWidth = "97"
let visibleThumbs = (document.querySelectorAll(".client_carousel_img img").length) - 4


function update () {
    if (currentIndex === 0 || currentIndex < 3) {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(0px)`
    } else if (currentIndex === visibleThumbs || currentIndex > visibleThumbs) {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${visibleThumbs * -thumbWidth}px)`
    } else {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${(currentIndex * -thumbWidth) + 97}px)`

    }
}

//////////////////// доработка ///////////////////////////////////////////////////////////////////////////////////

function slide(direction) {
    switch (direction) {
        case "left":
            if (currentIndex > 0) {
                currentIndex--
                slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex) {
                        el.style.marginBottom = "30px"
                    }
                })
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex + 1) {
                        el.style.marginBottom = "0"
                    }
                })
            }
            break;
        case "right":
            currentIndex++
            if (currentIndex < feedbackLength) {
                slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex) {
                        el.style.marginBottom = "30px"
                    }
                })
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex - 1) {
                        el.style.marginBottom = "0"
                    }
                })
            } else {currentIndex--}
            break;
        default:
            false;
    }
    update ()
}


document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
    el.addEventListener('click', () => {
        currentIndex = index
        slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${(currentIndex * -thumbWidth) + 97}px)`  ///////////// доработка ////////////////
        document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
            el.style.marginBottom = "0"
        })
        el.style.marginBottom = "30px"
    })
})