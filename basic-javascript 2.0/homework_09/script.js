
let arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]

const createElement = (arr, parent = document.body) => {
    const element = document.createElement('ol')
    element.innerHTML = arr.map(el => `<li>${el}</li>`).join(' ')
    parent.append(element)
}

createElement(arr)

