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








