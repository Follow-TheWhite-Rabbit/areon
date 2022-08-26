



const array = ['hello', 'world', 23, [1, 2], '23', null, true, 53, 'magic', 0, {a:1}, function(){}]

function filterBy(arr, type) {
    const newArr = array.filter((arr) => typeof arr !== type)
    return newArr
}

console.log(filterBy(array, 'number'))






///////////////////////////// КОРОТКАЯ ЗАПИСЬ ////////////////////////////////////////////



// const array = ['hello', 'world', 23, [1, 2], '23', null, true, 53, 'magic', 0, {a:1}, function(){}];
//
// const filterBy = (arr, type) => arr.filter(array => typeof array !== type);
//
// console.log(filterBy(array, "number"));


