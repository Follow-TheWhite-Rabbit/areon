

const arr = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
document.body. insertAdjacentHTML('afterbegin', `<ul>${arr.map(town => `<li>${town}</li>`).join('')}</ul>`);