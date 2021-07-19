const array = ["fff", 4, "18", "fix", 132, "gogi"];

const filterBy = (arr, type) => arr.filter(array => typeof array !== type);

console.log(filterBy(array, "number"));
