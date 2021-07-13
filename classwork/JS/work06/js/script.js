// function repeat(str,qty){
//     if(typeof str !== 'string') {
//         throw Error('First parameter should be a string type.');
//     }
//     if(isNaN(qty)) {
//         throw Error('Second parameter should be a number type.');
//     }
//     let result = '';
//     for (let i = 0; i < qty; i++){
//         result = result + str;
//     }
//     return result
// }
// // console.log(repeat)
//
// const string = 'Hello, world!';
// console.log(repeat(string, 3)); // Hello, world!Hello, world!Hello, world!
// console.log(repeat(string, 1)); // Hello, world!
// console.log(repeat(string, 2)); // Hello, world!Hello, world!
// console.log(repeat(string, 5)); // Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!
// console.log(repeat(7, 5)); // Error: First parameter should be a string type.


//////1 задачка//////////////////////////////////////////////////////////////////////////////////////////////

const array = [{
    name: "Bilbo",
    age: 50,
    alive: true
}, {
    name: "Nazgul",
    age: 1200,
    alive: false
}, {
    name: "Gandalf",
    age: 7777,
    alive: false
}, {
    name: "Aragorn",
    age: 86,
    alive: false
}, {
    name: 'Galadriel',
    age: 8000,
    alive: true
}];

const ages = array.filter(hero => hero.age < 7000);
console.log(ages);

const alives = ages.filter(lenght => lenght.alive);
console.log(alives);

const names = alives.map(item => item.name);
console.log(names);

/////////// 2 вариант /////////


// const names = array
//     .filter(hero => hero.age < 7000)
//     .filter(lenght => lenght.alive)
//     .map(item => item.name);
//
// console.log(names);



/////////////////////////////////////////////////////////////////////////////////////////////////









