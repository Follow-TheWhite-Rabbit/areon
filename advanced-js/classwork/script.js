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


/////////////////////////////////////////////////////////////////////////////////////////////////

function getPokemon (url) {
    fetch (url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
             renderPokemon(data);
        });

}

function renderPokemon (pokemon) {
    let div = document.createElement('div');
    let name = document.createElement('div');
    let id = document.createElement('div');
    let height = document.createElement('div');
    let weight = document.createElement('div');
    name.innerText = pokemon.name
    id.innerText = pokemon.id
    height.innerText = pokemon.height
    weight.innerText = pokemon.weight
    div.append(name, id, height, weight)
    document.body.appendChild(div)
}

function renderPokemons(pokemons) {
    let ul = document.createElement('ul');
    pokemons.forEach(({name, url}) => {
        let li = document.createElement('li');
        ul.appendChild(li);
        let a = document.createElement("a")
        a.setAttribute("href", "#")
        a.innerText = name;
        li.appendChild(a);
        li.addEventListener("click", () => getPokemon(url))
    });
    document.body.appendChild(ul);
}
fetch ('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderPokemons(data.results);
    });




























