

// fetch("https://ajax.test-danit.com/api/swapi/films")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         render(data);
//     });
//
//
// function getCharacters (url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(({name}) => {
//             console.log(name);
//
//             // const gogi = document.createElement('li')
//             // gogi.innerHTML += name
//             // element.appendChild(gogi);
//             // document.body.append(element)
//
//             // element.innerHTML += `<li>${name}</li>`
//
//         });
// }
//
// function render (characters) {
//     const element = document.createElement('ul')
//
//
//     characters.forEach(({characters, name}) => {
//         element.innerHTML += `<li>${name}</li>`
//         characters.forEach(el => getCharacters(el))
//     })
//     document.body.append(element)
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function render (movie) {
    const element = document.createElement('div')
    const ul = document.createElement('ul')


    element.innerHTML = `<div><h2>${movie.name}</h2><p>${"Episode № " + movie.episodeId}</p>Description: <p>${movie.openingCrawl}</p>Starring:</div>`
    element.append(ul)


    const characterUrl = movie.characters.map(url => fetch(url).then(response => response.json()))

    Promise.all(characterUrl).then(characters => {
        characters.map(character => ul.innerHTML += `<li>${character.name}</li>`)
    })
    document.body.append(element)
}

fetch("https://ajax.test-danit.com/api/swapi/films")
    .then(response => response.json())
    .then(movies => movies.forEach(movie => render(movie)));