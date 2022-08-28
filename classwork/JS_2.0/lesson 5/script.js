//
//
// const user = {
//     name : "Alexey",
//     lastName : "Kliuzhyn",
//     profession : "Developer",
//
//     sayHi () {
//         console.log (`Hi, ${this.name}`)
//     },
//
//     update: function (key) {
//         if (key in this) {
//             this[key] = prompt(`Enter new value for ${key}`)
//         }
//
//     }
//
// }
//
//
//
// // user.update("name")
// user.update(Object.keys(user)[0])
// // user.update(this.name)
// console.log(user)



/**
 * Задание 1.
 *
 * Написать имплементацию встроенной функции строки repeat(times).
 *
 * Функция должна обладать двумя параметрами:
 * - Целевая строка для поиска символа по индексу;
 * - Количество повторений целевой строки.
 *
 * Функция должна возвращать преобразованную строку.
 *
 * Условия:
 * - Генерировать ошибку, если первый параметр не является строкой, а второй не является числом.
 */

// function repeat(str, n) {
//     if (typeof(str) !== `string` || isNaN(n)) {
//         throw new Error(`Error`)
//     } else {
//         let str1 = str
//         for (let i = 1; i < n; i++) {
//             str1 += str
//         }return str1
//     }
// }
// console.log(repeat(`hello `, 3))
//
// function initials() {
//     let str = prompt(`hi`)
//
//     str = str.split(` `)  // прописан пробел, что бы сработало.
//
//     let result = ``
//
//     for (let item of str) {
//         result += item[0].toUpperCase()
//     } return result
// }
//
// console.log(initials())


/**
 * Даны две строки, найдите количество общих символов между ними.

 Пример

 Для s1 = "aabcc" и s2 = "adcaa" вывод должен быть
 решение(s1, s2) = 3.

 Строки имеют 3 общих символа - 2 "a" и 1 "c".
 */




/**
 * Задание 1.
 *
 * Написать функцию, которая возвращает название дня недели (словом),
 * который был указанное количество дней назад.
 *
 * Функция обладает одним параметром:
 * - Число, которое описывает на сколько дней назад мы хотим вернуться, чтобы узнать желаемый день.
 *
 * Условия:
 * - Использование объекта Date обязательно.
 *
 * Заметка:
 * - Можно использовать готовый объект с днями недели.
 */


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// function calcTime(number){
//     let now = new Date().getTime();
//     const offsetDate = number * 86400000;
//     let targetDate = new Date (now - offsetDate);
//     return days[targetDate.getDay()];
// }
// console.log(calcTime(0));



/**
 * Задача 2.
 *
 * Написать мульти-язычную программу-органайзер.
 *
 * Программа спрашивает у пользователя на каком языке он желает увидеть список дней недели.
 * После ввода пользователем желаемого языка программа выводит в консоль дни недели на указанном языке.
 *
 * Доступные языки (локали): ua, ru, en.
 *
 * Если введённая пользователем локаль не совпадает с доступными — программа переспрашивает его до тех пор,
 * пока доступная локаль не будет введена.
 *
 * Условия:
 * - Решение должно быть коротким, лаконичным и универсальным;
 * - Всячески использовать методы массива;
 * - Использование метода Object.keys() обязательно.
 */




// const days = {
//     ua: [
//         'Понеділок',
//         'Вівторок',
//         'Середа',
//         'Четвер',
//         'П’ятниця',
//         'Субота',
//         'Неділя',
//     ],
//     ru: [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье',
//     ],
//     en: [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday',
//     ],
// };
//
// function getLanguadge(){
//     let userChoice = prompt("Which language do you want to have?");
//     while (!Object.keys(days).includes(userChoice)){
//         userChoice = prompt("Which language do you want to have?");
//     }
//     days[userChoice].forEach(item => console.log(item))
// }
//
// console.log(Object.keys(days))
// getLanguadge();


/**
 * Задача 3.
 *
 * Напишите функцию mergeArrays для объединения нескольких массивов в один.
 *
 * Функция обладает неограниченным количеством параметров.
 * Функция возвращает один массив, который является сборным из массивов,
 * переданных функции в качестве аргументов при её вызове.
 *
 * Условия:
 * - Все аргументы функции должны обладать типом «массив», иначе генерировать ошибку;
 * - В ошибке обязательно указать какой по счёту аргумент провоцирует ошибку.
 *
 * Заметки:
 * - Делать поддержку выравнивания вложенных массивов не нужно.
 */



// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = [1, 2, 3];
//
//
// function unitedArrays(...args) {
//     args.forEach((item, index) => {
//         if (typeof item !== "object") {
//             throw new Error(`Возникла ошибка в элементе номер : ${index}`);
//         }
//     });
//     return new Array().concat(...args);
// }
// console.log(unitedArrays(arr1, arr2, arr3, "adadad"));


//////////////// matrix //////////////////////////////////////

// const matrix = [[1, 1, 1, 0],
//     [0, 5, 0, 1],
//     [2, 1, 3, 10]];
//
//
//
// function countMatrix(array){
//     // let numIndex = array[1][1];
//     // console.log(numIndex);
//     let count = 0;
//
//     for(let i = 0; i < array[0].length; i++){
//         for(let k = 0; k < array.length; k++){
//             if(array[k][i] == 0){
//                 break;
//             }else{
//                 count += array[k][i];
//             }
//         }
//     }
//     return count
// }
//
// console.log(countMatrix(matrix2));




// const arr = ["aa","aba", "aa", "ad", "vcd", "aba", "vcd", "aa", "ad", "aba", "vcd", "aba"]
//
// let res = []                                     // СОЗДАЛИ НОВЫЙ МАССИВ
//
// res = arr.map((value) => value.length)    // ПЕРЕЗАПИСАЛИ В НЕГО ДЛИННУ КАЖДОЙ СТРОКИ
//
// let result = []                                 // СОЗДАЛИ ЕЩЕ ОДИН ПУСТОЙ МАССИВ
//
// for (let i = 0; i < res.length; i++) {          // С ПОМОЩЬЮ ЦИКЛА, ПЕРЕБРАЛИ МАССИВ res, И ЗАПИСАЛИ В result ИНДЕКСЫ ВСЕХ МАКСИМАЛЬНЫХ ЧИСЕЛ (В КАЧЕСТВЕ ЗНАЧЕНИЙ)
//     if (res[i] === Math.max(...res)) {
//         result.push([i])
//     }
// }
//
// let newArr = []                // СОЗДАЛИ ЕЩЕ ОДИН ПУСТОЙ МАССИВ
//
// result.forEach((value) => {    // ПЕРЕБРАЛИ МАССИВ result С ПОМОЩЬЮ МЕТОДА forEach И ЗАПИСАЛИ В НОВЫЙ МАССИВ newArr ВСЕ ДЛИННЫЕ СЛОВА, ИСПОЛЬЗУЯ ИНДЕКСЫ МАКСИМАЛЬНЫХ ЧИСЕЛ
//     newArr.push(arr[value])
// })
//
//
// console.log(res)
// console.log(result)
// console.log(newArr)





// res = arr.map((value) => value.length)
//
// res.sort((a, b) => b-a)
//
// let result = 0
//
// for (let i = 0; i < res.length; i++) {
//     if (res[0] === res[i]) {
//         result++
//     }
// }
//
// console.log(res)
// console.log(result)



// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

// const arr  = [3, 6, -2, 5, 7, 3]
// function arrElementProduct(inputArray) {
//     return Math.max(...inputArray.slice(1).map((el,i )=> el * inputArray[i] ))
//
// }
//
// console.log(arrElementProduct(arr))





// Написать функцию-помощник покупателя.
//
//     Функция не обладает параметрами и возвращает массив.
//     Функция запрашивает у пользователя строку с товарами, которые он желает приобрести.
//     Строка должна содержать все товары через запятую.
//
//     Программа повторно опрашивает пользователя если:
//     - Введено менее чем один товар;
// - Не введено товаров вообще.
//
//     После чего программа выводит в консоль введённые пользователем товары,
//     при этом исключив из списка дубликаты.
//
//     Условия:
// - Обязательно использовать структуру данных Set.
//
//
//
//     function helper(){
//     let input = prompt('enter products!');
//     while (input === null  !input.split(',')[0].length || !input.split(',')[1].length){
//         // console.log(typeof input.split(',')[0])
//         input = prompt('enter products!');
//
//     }
//
//     return new Set(input.split(','));
//
// }
//
// console.log(helper());
















