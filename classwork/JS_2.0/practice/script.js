

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




let arr = ["Kharkiv", "Kiev", ["Borispol",["Borispol", "Irpin"], "Irpin"], "Odessa", "Lviv", "Dnieper", ["Borispol", "Irpin"]]

let gogi = []

function filter(el) {
    debugger
    if (Array.isArray(el)) {
        for (let i = 0; i < el.length; i++)
        filter(el[i])
    } else {
        return gogi.push(el)
    }
}

arr.map(filter)

console.log(gogi)