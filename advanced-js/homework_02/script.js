const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

////////////////////////////////////////////////////////////////////////////

// const renderList = (list, parent = document.getElementById("root")) => {
//
//     const element = document.createElement('ul')
//     list.forEach(value => element.innerHTML += `<li><h2>${"Автор:" + " " + value.author}</h2><p>${"Назва книги:" + " " + value.name}</p><p>${"Ціна:" + " " + value.price}</p></li>`)
//     parent.append(element)
// }
//
// renderList(books)

///////////////////////////////////////////////////////////////////////////

const renderList = (list, parent = document.getElementById("root")) => {

    const element = document.createElement('ul')

    list.forEach(value => {
        try {
        if (!value.author || !value.name || !value.price) {
        throw new SyntaxError("Данные неполны")
         } else { element.innerHTML += `<li><h2>${"Автор:" + " " + value.author}</h2><p>${"Назва книги:" + " " + value.name}</p><p>${"Ціна:" + " " + value.price}</p></li>`}
        } catch (err) {
            if (!value.author) {
                console.log(err + ", автор: " + value.author)
            }else if (!value.name) {
                console.log(err + ", назва книги: " + value.name)
            }else if (!value.price) {
                console.log(err + ", ціна: " + value.price)
            }
        }
    })

    parent.append(element)
}

renderList(books)

//////////////////////////////////////////////////////////////////////////////

// try {
//     const renderList = (list, parent = document.getElementById("root")) => {
//         if (!list.author || !list.name|| !list.price) {
//             throw new SyntaxError("Данные неполны")
//         }
//     const element = document.createElement('ul')
//     list.forEach(value => element.innerHTML += `<li><h2>${"Автор:" + " " + value.author}</h2><p>${"Назва книги:" + " " + value.name}</p><p>${"Ціна:" + " " + value.price}</p></li>`)
//     parent.append(element)
// }
// } catch (err) {
//     console.log(err)
//     renderList(books)
// }


//////////////////////////////////////////////////////////////////////////////

// class Books {
//     constructor(author, name, price) {
//     }
//
//     renderList (list, parent = document.getElementById("root")) {
//         const element = document.createElement('ul')
//         list.forEach(value => element.innerHTML += `<li><h2>${"Автор:" + " " + value.author}</h2><p>${"Назва книги:" + " " + value.name}</p><p>${"Ціна:" + " " + value.price}</p></li>`)
//         parent.append(element)
//     }
//
// }
//
//
//
// const gogi = new Books(books)
// renderList(gogi)