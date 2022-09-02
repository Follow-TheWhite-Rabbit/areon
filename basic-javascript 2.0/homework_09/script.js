
let arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"]

const createElement = (arr, parent = document.body) => {
    const element = document.createElement('ol')
    const filter = (arr) => arr.reduce((start, curr) => start.concat(Array.isArray(curr) ? filter(curr) : `<li>${curr}</li>`), []).join(' ')
    element.innerHTML = filter(arr)
    parent.append(element)
}

createElement(arr)



// let arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]
//
// const createElement = (arr, parent = document.body) => {
//     const element = document.createElement('ol')
//     element.innerHTML = arr.map(el => `<li>${el}</li>`).join(' ')
//     parent.append(element)
// }
//
// createElement(arr)


