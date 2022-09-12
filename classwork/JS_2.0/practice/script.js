

// const dataIcecream = [
//     { name: "хрещатик", price: "7,99 uah" },
//     { name: "100% пломбір", price: "2,50 uah" },
//     { name: "maximus", price: "12,99 uah" },
//     { name: "пташине молоко", price: "20,99 uah" },
// ]
//
// const renderList = (list) => {
//     const element = document.createElement('ul')
//     list.forEach(value => element.innerHTML += `<li><h2>${value.name}</h2><p>${value.price}</p></li>`)
//     document.body.append(element)
// }
//
// renderList(dataIcecream)
//




// let arr = ["Kharkiv", "Kiev", ["Borispol",["Borispol", "Irpin"], "Irpin"], "Odessa", "Lviv", "Dnieper", ["Borispol", "Irpin"]]

// let gogi = []
//
// function filter(el) {
//     debugger
//     if (Array.isArray(el)) {
//         for (let i = 0; i < el.length; i++)
//         filter(el[i])
//     } else {
//         return gogi.push(el)
//     }
// }
//
// arr.map(filter)
//
// console.log(gogi)


// let arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]
//
// const createElement = (arr, parent = document.body) => {
//     const element = document.createElement('ol')
//     element.innerHTML = arr.map(el => `<li>${el}</li>`).join(' ')
//     parent.append(element)
// }
//
// createElement(arr)


// let arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper", ["Borispol", "Irpin"]]
//
//
//
// const createElement = (arr, parent = document.body) => {
//
//     const element = document.createElement('ol')
//     parent.append(element)
//
//         arr.map(filter)
//
//             function filter(el) {
//             if (Array.isArray(el)) {
//                 let gogi = document.createElement('ul')
//                 element.append(gogi)
//                 for (let i = 0; i < el.length; i++)
//                 gogi.innerHTML += filter(el[i])
//
//             } else {
//                 return element.innerHTML += `<li>${el}</li>`
//             }
//             }
//
// }
//
// createElement(arr)



////////////////////////////////////////  решение доп. задания, 9 дз    ////////////////////////////////////////////////////////


// const townsList = ['Kharkiv', 'Kiev', ["Borispol", "Irpin"], 'Odessa', 'Lviv', 'Dnieper',];
//
// const timerDisplay = document.createElement('div');
// let start = 3;
// const SECOND = 1000;
//
// timerDisplay.textContent = start;
// document.body.append(timerDisplay);
//
// const countdown = setInterval(() => {
//     console.log('second passed!');
//     timerDisplay.textContent = --start;
// }, SECOND);
//
// setTimeout(() => {
//     document.body.innerHTML = '';
//     clearInterval(countdown);
// }, start * SECOND);
//
// showList(townsList);
//
// function showList(arr, parent = document.body) {
//     const HTMLContent = walk(arr);
//     parent = document.body.insertAdjacentHTML('beforeend', `<ul>${HTMLContent}</ul>`);
//
//     function walk(arr) {
//         return arr.map((item) => {
//             if (Array.isArray(item)) return `<li><ul>${walk(item)}</ul></li>`; // шаг рекурсии - вызываем функцию walk
//             return `<li>${item}</li>`; // база рекурсии - возвращаем значение
//         }).join('');
//     }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// рпавильное решение дз ///////////////////////////////////////

// let ul = document.querySelector('.tabs')
//
// ul.addEventListener('click', function (ev) {
//
//     document.querySelector('.active-p').classList.remove('active-p')
//
//     document.querySelector('.active-tab').classList.remove('active-tab')
//
//     document.querySelector(`[data-li = ${data}]`).classList.add('active-p')
//
//     ev.target.classList.add('active-tab')
//
// })


///////////////////////////////////////////////////////////////////////////////////////////////////

// const tabList = document.querySelector('.tabs')
// tabList.addEventListener("click", (event) => {
//     const clickedBtn = event.target
//     const lastActiveBtn = event.currentTarget.querySelector('.active')
//     if (lastActiveBtn !== clickedBtn) {
//         lastActiveBtn.classList.remove('active')
//     }
//     clickedBtn.classList.add('active')
//
// })
//
//
//
// console.log(tabList)
//
//
//
//
//
// const tabList = document.querySelectorAll('.tabs-title')
//
// tabList.forEach(el => {
//     el.addEventListener("click", function() {
//         if (document.querySelector(".active")) {
//             document.querySelector(".active").classList.remove('active')
//         }
//         el.classList.add("active")
//     })
// })
//
//
// const tabArr = Array.from(document.querySelector('.tabs').children)
// console.log(tabArr)

//
//
// const contentArr = Array.from(document.querySelector('.tabs-content').children)
// console.log(contentArr)


























