

// <ol>
//     <li>item1</li>
//     <li>item2</li>
//     <li>item3</li>
//     <li>item4</li>
// </ol>
// <script>
//     document.querySelector("ol li").addEventListener("mouseover", function(ev){
//     this.style.backgroundColor = "cyan"
//
//     console.log(ev);
//
// } )
//     document.querySelector("ol li").addEventListener("mouseout", function(ev){
//     this.style.backgroundColor = "";
//
//     console.log(ev);
//
// } )


////////////////////////////////////////////////////////////////////////////////////////////////

//
// <div className="box"></div>
// <style>
//     .box {
//     background - color: red;
//     width: 10px;
//     height: 10px;
//     position: fixed;
// }
// </style>



// let box = document.querySelector('.box')
//
// function moveBox(x, y) {
//     box.style.cssText = `top:${y}px; left:${x}px`
// }
//
// // document.body.addEventListener("mousemove", function (event) {
// //     moveBox(event.clientX, event.clientY)
// // })
//
// window.addEventListener("mousemove", function (event) {
//     moveBox(event.clientX, event.clientY)
// })



///////////////////////////////////////////////////////////////////////////////////////////////////////


// <div className="wrapper">
//
//     <span className="arrowLeft"></span>
//     <span className="arrowRight"></span>
//
//     <div className="images">
//
//         <div className="slider">
//
//             <img
//                 src="https://img.freepik.com/free-photo/wall-mockup-with-green-plant-clock-shelf-empty-cream-color-background_41470-4768.jpg">
//                 <img
//                     src="https://img.freepik.com/premium-photo/abstract-art-background-oil-painting-canvas-fractal-artwork-creative-graphic-design_263779-157.jpg">
//                     <img src="https://img.freepik.com/free-photo/abstract-paint-canvas_53876-88900.jpg">
//                         <img
//                             src="https://img.freepik.com/premium-photo/colorful-painted-concrete-wall-abstract-background-retro-vintage-backdrop_28586-698.jpg">
//                             <img
//                                 src="https://img.freepik.com/free-photo/abstract-detail-acrylic-paints-canvas-relief-artistic-background-gold-red-black-silver-color_87414-4943.jpg">
//
//         </div>
//
//     </div>
//
// </div>
//
// <style>
//     .wrapper {
//     position: relative;
//     /*overflow: hidden;*/
//     width: 50vw;
//     margin: 0 auto;
//     /*display: flex;*/
// }
//
//     .images {
//     /*display: flex;*/
//     overflow: hidden;
// }
//
//     .slider {
//     display: flex;
//     /*min-width: max-content;*/
//     position: absolute;
//     top: 0;
//     left: 0;
// }
//
//     .wrapper img {
//     /*width: 100%;*/
//     flex: 1 0 50vw;
//     /*min-width: 100%;*/
// }
//
//     .arrowLeft {
//     top: calc(50% - 50px);
//     left: -60px;
//     position: absolute;
//     width: 0;
//     height: 0;
//     border-style: solid;
//     border-width: 50px 50px 50px 0;
//     border-color: transparent #000000 transparent transparent;
//
// }
//
//     .arrowRight {
//     top: calc(50% - 50px);
//     right: -60px;
//     position: absolute;
//     width: 0;
//     height: 0;
//     border-style: solid;
//     border-width: 50px 0 50px 50px;
//     border-color: transparent transparent transparent #000000;
// }
// </style>




// const imgLength = document.querySelectorAll('.images img').length
//
// let width = document.querySelector('.images').offsetWidth
// console.log(width)
//
// let currentIndex = 0
//
// let leftArrow = document.querySelector('.arrowLeft')
// leftArrow.addEventListener('click', function () {
//     slide('left')
// })
//
// let rightArrow = document.querySelector('.arrowRight')
// rightArrow.addEventListener('click', function () {
//     slide('right')
// })
//
// const slider = document.querySelector('.slider')
//
//
//     function slide(direction) {
//     // console.log(direction)
//     switch (direction) {
//         case 'left':
//             if (currentIndex > 0) {
//                 currentIndex--
//                 slider.style.transform = 'translateX(${currentIndex * width}px)'
//             }
//             break
//         case 'right':
//             if (currentIndex < imgLength) {
//                 currentIndex++
//                 slider.style.transform = 'translateX(${currentIndex * width * -1}px)'
//             }
//             break
//         default:
//             false
//     }
// }

////////////////////////////////////////////   задача на стэп  ////////////////////////////////////////////////


const imgLength = document.querySelectorAll(".images img").length;
let currentIndex = 0;
let leftArrow = document.querySelector(".arrowLeft");
leftArrow.addEventListener("click", function () {
    slide("left");
});
let rightArrow = document.querySelector(".arrowRight");
rightArrow.addEventListener("click", function () {
    slide("right");
});
let width = document.querySelector(".images").offsetWidth;
console.log(width);
const slider = document.querySelector(".slider");
function slide(direction) {
    switch (direction) {
        case "left":
            if (currentIndex > 0) {
                currentIndex--;
                slider.style.cssText = `transform: translateX( ${
                    currentIndex * width * -1
                }px)`;
            }
            break;
        case "right":
            currentIndex++;
            if (currentIndex < imgLength) {
                slider.style.cssText = `transform: translateX( ${
                    currentIndex * width * -1
                }px)`;
            }
            break;
        default:
            false;
    }
}




