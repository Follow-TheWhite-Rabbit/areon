// 4.
// Следующий код создаёт массив из стрелков (shooters).
//
//     Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
//
//  function makeArmy() {
//      let shooters = [];
//
//      let i = 0;
//      while (i < 10) {
//          let shooter = function() { // функция shooter
//              console.log(i) // должна выводить порядковый номер
//          };
//          shooters.push(shooter);
//          i++;
//      }
//
//      return shooters;
//  }
//
// let army = makeArmy();
//
//
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

//////////////////////////////////

// function makeArmy() {
//     let shooters = [];
//
//
//     for (let i = 0; i < 10; i++){
//         let shooter = function() { // функция shooter
//             console.log(i) // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
//
// army[0]();
// army[5]();

/////////////////////////////////

// function makeArmy() {
//      let shooters = [];
//
//      let i = 0;
//      while (i < 10) {
//          let shooter = function(a) { // функция shooter
//              return function () {
//                  console.log(a)
//              }
//          };
//          shooters.push(shooter(i));
//          i++;
//      }
//
//      return shooters;
//  }
//
// let army = makeArmy();
//
//
// army[0]();
// army[5]();


////////////////////////////////////

//  function makeArmy() {
//      let shooters = [];
//
//      let i = 0;
//      while (i < 10) {
//          let x = i
//          let shooter = function() { // функция shooter
//              console.log(x) // должна выводить порядковый номер
//          };
//          shooters.push(shooter);
//          i++;
//      }
//
//      return shooters;
//  }
//
// let army = makeArmy();
//
//
// army[0]();
// army[5]();


/////////////////////////////////////////////////////////////////////////////////////////////////  2   //////////////

// function getPokemon (url) {
//     fetch (url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//              renderPokemon(data);
//         });
//
// }
//
// function renderPokemon (pokemon) {
//     let div = document.createElement('div');
//     let name = document.createElement('div');
//     let id = document.createElement('div');
//     let height = document.createElement('div');
//     let weight = document.createElement('div');
//     name.innerText = pokemon.name
//     id.innerText = pokemon.id
//     height.innerText = pokemon.height
//     weight.innerText = pokemon.weight
//     div.append(name, id, height, weight)
//     document.body.appendChild(div)
// }
//
// function renderPokemons(pokemons) {
//     let ul = document.createElement('ul');
//     pokemons.forEach(({name, url}) => {
//         let li = document.createElement('li');
//         ul.appendChild(li);
//         let a = document.createElement("a")
//         a.setAttribute("href", "#")
//         a.innerText = name;
//         li.appendChild(a);
//         li.addEventListener("click", () => getPokemon(url))
//     });
//     document.body.appendChild(ul);
// }
// fetch ('https://pokeapi.co/api/v2/pokemon')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         renderPokemons(data.results);
//     });



////////////////////////////////////////////////////////////////////////



// const prevButton = document.createElement('button');
// const nextButton = document.createElement('button');
// prevButton.innerText = 'prev pokemons';
// nextButton.innerText = 'next pokemons';
// prevButton.disabled = true;
// document.body.append(prevButton);
// document.body.append(nextButton);
// let nextLink;
// let prevLink;
// prevButton.addEventListener('click', () => {
//     const prevPockemon = document.querySelector('.pokemon');
//     if (prevPockemon) {
//         prevPockemon.remove();
//     }
//     getPokemons(prevLink);
// });
// nextButton.addEventListener('click', () => {
//     const prevPockemon = document.querySelector('.pokemon');
//     if (prevPockemon) {
//         prevPockemon.remove();
//     }
//     getPokemons(nextLink);
// });
// function getPokemons(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             nextLink = data.next;
//             prevLink = data.previous;
//             nextButton.disabled = !data.next;
//             prevButton.disabled = !data.previous;
//             renderPokemons(data.results);
//         });
// }
// function getPokemon(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             renderPokemon(data);
//         });
// }
// function renderPokemon(pokemon) {
//     const prevPockemon = document.querySelector('.pokemon');
//     if (prevPockemon) {
//         prevPockemon.remove();
//     }
//     let div = document.createElement('div');
//     let name = document.createElement('div');
//     let id = document.createElement('div');
//     let height = document.createElement('div');
//     let weight = document.createElement('div');
//     const img = document.createElement('img');
//     div.classList.add('pokemon');
//     img.src = pokemon.sprites.front_default;
//     name.innerText = pokemon.name;
//     id.innerText = pokemon.id;
//     height.innerText = pokemon.height;
//     weight.innerText = pokemon.weight;
//     div.append(name, id, height, weight, img);
//     document.body.appendChild(div);
// }
// function renderPokemons(pokemons) {
//     const prevPockemons = document.querySelector('.pokemons');
//     if (prevPockemons) {
//         prevPockemons.remove();
//     }
//     let ul = document.createElement('ul');
//     pokemons.forEach(({ name, url }) => {
//         let li = document.createElement('li');
//         ul.appendChild(li);
//         let a = document.createElement("a")
//         a.setAttribute("href", "#")
//         a.innerText = name;
//         li.appendChild(a);
//         li.addEventListener("click", () => getPokemon(url))
//     });
//     ul.classList.add('pokemons');
//     document.body.appendChild(ul);
// }
//
//
// getPokemons('https://pokeapi.co/api/v2/pokemon');




/////////////////////////////////////////////////////////////////////////////////////////////////  3   //////////////


// https://pokeapi.co/docs/v2#resource-listspagination-section  -  Ссылка на базу


const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const limitElement = document.querySelector('.limit');
const sendBtn = document.querySelector('.send_btn');
const page = document.querySelector('.page');
let limit = limitElement.value;
let offset = 0;
let count = 0;
sendBtn.addEventListener('click', () => {
    limit = limitElement.value;
    getPokemons(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
});
prevButton.innerText = 'prev pokemons';
nextButton.innerText = 'next pokemons';
prevButton.disabled = true;
document.body.append(prevButton);
document.body.append(nextButton);
prevButton.addEventListener('click', () => {
    if (offset < 0) return;
    offset -= Number(limit);
    page.innerText = `${offset + Number(limit)} of ${count}`;
    const prevPockemon = document.querySelector('.pokemon');
    if (prevPockemon) {
        prevPockemon.remove();
    }
    getPokemons(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
});
nextButton.addEventListener('click', () => {
    if (offset > count) return;
    offset += Number(limit);
    page.innerText = `${offset + Number(limit)} of ${count}`;
    const prevPockemon = document.querySelector('.pokemon');
    if (prevPockemon) {
        prevPockemon.remove();
    }
    // console.log(offset);
    // console.log(limit);
    getPokemons(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
});
function getPokemons(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            count = data.count;
            nextLink = data.next;
            prevLink = data.previous;
            nextButton.disabled = !data.next;
            prevButton.disabled = !data.previous;
            renderPokemons(data.results);
            page.innerText = `${offset + Number(limit)} of ${count}`;
        });
}
function getPokemon(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            renderPokemon(data);
        });
}
function renderPokemon(pokemon) {
    const prevPockemon = document.querySelector('.pokemon');
    if (prevPockemon) {
        prevPockemon.remove();
    }
    let div = document.createElement('div');
    let name = document.createElement('div');
    let id = document.createElement('div');
    let height = document.createElement('div');
    let weight = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('pokemon');
    img.src = pokemon.sprites.front_default;
    name.innerText = pokemon.name;
    id.innerText = pokemon.id;
    height.innerText = pokemon.height;
    weight.innerText = pokemon.weight;
    div.append(name, id, height, weight, img);
    document.body.appendChild(div);
}
function renderPokemons(pokemons) {
    const prevPockemons = document.querySelector('.pokemons');
    if (prevPockemons) {
        prevPockemons.remove();
    }
    let ul = document.createElement('ul');
    pokemons.forEach(({ name, url }) => {
        let li = document.createElement('li');
        ul.appendChild(li);
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.innerText = name;
        li.appendChild(a);
        li.addEventListener('click', () => getPokemon(url));
    });
    ul.classList.add('pokemons');
    document.body.appendChild(ul);
}
getPokemons(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
);
// getPokemons('https://pokeapi.co/api/v2/pokemon?limit=5');




















