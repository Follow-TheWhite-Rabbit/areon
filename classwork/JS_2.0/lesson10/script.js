/**
 * Задание 1.
 *
 * Получить и вывести в консоль следующие элементы страницы:
 * - По идентификатору (id): элемент с идентификатором list;
 * - По классу — элементы с классом list-item;
 * - По тэгу — элементы с тэгом li;
 * - По CSS селектору (один элемент) — третий li из всего списка;
 * - По CSS селектору (много элементов) — все доступные элементы li.
 *
 * Вывести в консоль и объяснить свойства элемента:
 * - innerText;
 * - innerHTML;
 * - outerHTML.
 */

// <header>
//     A header
// </header>
// <div className="sidebar">
//     <ul id="list">
//         <li className="list-item">Item 1</li>
//         <li className="list-item">Item 2</li>
//         <li className="list-item">Item 3</li>
//         <li className="list-item">Item 4</li>
//         <li className="list-item">Item 5</li>
//     </ul>
// </div>
// <main>
//     <h1 className="title">A title</h1>
//     <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nulla
//         laborum, blanditiis suscipit veniam dolore. Debitis incidunt, eligendi
//         illum cupiditate nesciunt deserunt voluptatem fuga iure eveniet harum
//         libero fugit ab!
//     </p>
// </main>
// <footer>
//     A footer
// </footer>

// console.log(document.getElementById("list"));
//
// console.log(document.querySelectorAll(".list-item:nth-child(3)"));
// console.log(document.querySelectorAll(".list-item")[3]);
//
// console.log(document.getElementsByTagName("li"));
//
// console.log(document.querySelectorAll("li"));
//
// console.log(document.getElementsByClassName("sidebar")[0].innerText);



/**
 * Задание 1.
 *
 * Получить элемент с классом .remove.
 * Удалить его из разметки.
 *
 * Получить элемент с классом .bigger.
 * Заменить ему CSS-класс .bigger на CSS-класс .active.
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 */


// <ul className="list">
//     <li className="list-item remove">Item 1</li>
//     <li className="list-item">Item 2</li>
//     <li className="list-item">Item 3</li>
//     <li className="list-item">Item 4</li>
//     <li className="list-item bigger">Item 5</li>
//     <li className="list-item">Item 6</li>
//     <li className="list-item">Item 7</li>
// </ul>



// document.querySelector(".remove").remove();
// // console.log(document.querySelector(".remove"));
// document.querySelector(".bigger").classList.replace("bigger", "active");
// let element = document.querySelector(".bigger");
// element.classList.remove("bigger");
// element.classList.add("active");
// // document.querySelector(".bigger").classList.add("active");




/**
 * Задание 2.
 *
 * На экране указан список товаров с указанием названия и количества на складе.
 *
 * Найти товары, которые закончились и:
 * - Изменить 0 на «закончился»;
 * - Изменить цвет текста на красный;
 * - Изменить жирность текста на 600.
 *
 * Требования:
 * - Цвет элемента изменить посредством модификации атрибута style.
 */


// <h1>Магазин</h1>
// <ul className="store">
//     <li>Сыр: 5</li>
//     <li>Вода: 16</li>
//     <li>Кофе: 0</li>
//     <li>Масло: 102</li>
//     <li>Чай: 13</li>
//     <li>Молоко: 0</li>
//     <li>Мёд: 10</li>
// </ul>



// const collection = document.querySelectorAll('.store li');
// collection.forEach(element  => {
//     if (element.innerText.includes(': 0')) {
//         element.innerText = element.innerText.replace(': 0',': out of stock');
//         element.setAttribute('style','color: blue; font-weight: 600');
//         // element.style.color = 'red'
//         // element.style.fontWeight = '600'
//     }
// })




/**
* Написать программа для редактирования количества остатка продуктов на складе магазина.
*
* Программа должна запрашивать название товара для редактирования.
* Если ввёденного товара на складе нет — программа проводит повторный запрос названия товара
* до тех пор, пока соответствующее название не будет введено.
*
* После чего программа запрашивает новое количество товара.
* После чего программа вносит изменения на веб-страницу: заменяет остаток указанного товара его новым количеством.
 */


// const goods = document.querySelector(".store");
// const goodsList = document.querySelectorAll(".store li");
//
// function edit() {
//     let product = prompt("enter product");
//
//     while (!goods.innerText.includes(product)) {
//         product = prompt("enter product");
//     }
//     goodsList.forEach(item => {
//         if (item.innerText.includes(product)) {
//             let newQuantity = prompt("set new quantity");
//             let oldQuantity = item.innerText.slice(item.innerText.indexOf(":"));
//             item.innerText = item.innerText.replace(oldQuantity, `: ${newQuantity}`);
//         }
//     });
// }
//
// edit();








// const select = document.createElement("select");
// const input = document.createElement("input");
// const saveButton = document.createElement("button");
// saveButton.innerText = "Save";
//
// document.querySelector("footer").appendChild(select);
// document.querySelector("footer").appendChild(input);
// document.querySelector("footer").appendChild(saveButton);
// select.style.width = "200px";
//
// const elements = document.querySelectorAll(".store li");
//
// elements.forEach(item => {
//     let el = document.createElement("option");
//     el.innerText = item.innerText.slice(0, item.innerText.indexOf(":"));
//     select.appendChild(el);
// });
//
// let selectProduct = select.value.slice(0, select.value.indexOf(":"));
//
// select.addEventListener("change", function() {
//     selectProduct = select.value.slice(0, select.value.indexOf(":"));
//
//     for (let item of elements) {
//         if (item.innerText.includes(selectProduct)) {
//             input.value = item.children[0].innerText;
//         }
//     }
//     console.log(selectProduct);
// });
//
// input.setAttribute("type", "number");
//
// input.addEventListener("change", save);
// saveButton.addEventListener("click", save);
//
// function save () {
//     for (let item of elements) {
//         if (item.innerText.includes(selectProduct)) {
//             item.children[0].innerText = input.value;
//         }
//     }
// }



/**
 * Задание 1.
 *
 * Написать скрипт, который создаст квадрат произвольного размера.
 *
 * Размер квадрата в пикселях получить интерактивно посредством диалогового окна prompt.
 *
 * Если пользователь ввёл размер квадрата в некорректном формате —
 * запрашивать данные повторно до тех пор, пока данные не будут введены корректно.
 *
 * Все стили для квадрата задать через JavaScript посредством одной строки кода.
 *
 * Тип элемента, описывающего квадрат — div.
 * Задать ново-созданному элементу CSS-класс .square.
 *
 * Квадрат в виде стилизированного элемента div необходимо
 * сделать первым и единственным потомком body документа.
 */


// let windowHeight = window.innerHeight
// let windowWidth = window.innerWidth
//
// let numberBlocks = prompt("Enter number")
//
// const blocks = []
//
// while (isNaN(numberBlocks)) {
//      numberBlocks = prompt("Enter number")
// }
//
// function createBlock () {
//     return {
//         size: Math.floor(Math.random() * 100 + 100),
//         color: '#' + Math.floor(Math.random()*16777215).toString(16),
//     }
// }
//
//
// for (let i = 0; i < numberBlocks; i++) {
//     blocks.push(createBlock())
// }
//
//
//
// blocks.map(el => {
//     el.positionLeft = Math.floor(Math.random() * (windowWidth - el.size))
//     el.positionTop = Math.floor(Math.random() * (windowHeight - el.size))
// })
//
// console.log(blocks);
//
// function createElement (el) {
//     let block = document.createElement('div')
//     block.style.cssText = `position: absolute; width: ${el.size}px; height: ${el.size}px; background-color: ${el.color}; top: ${el.positionTop}px; left: ${el.positionLeft}px`
//     return block
// }
//
// // blocks.forEach(el => document.body.append(createElement(el)))
//
//
// blocks.forEach((el, i) => {
//     setTimeout(() => {
//         document.body.append(createElement(el))
//     }, i * 1000);
// });
