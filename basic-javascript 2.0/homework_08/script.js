
/////////////////////////////////////////////////   первый пункт  //////////////////////////////////////////



let paragraphColor = document.querySelectorAll('p')

paragraphColor.forEach(el => el.setAttribute('style', 'background-color: #ff0000'))


///////////////////////////////////////////////      второй пункт   /////////////////////////////////////////


let elem = document.querySelector(`#optionsList`)


console.log(elem, elem.parentElement, elem.childNodes)


///////////////////////////////////////////        третий пункт      /////////////////////////////////////



let elem2 = document.querySelector('#testParagraph')

elem2.innerHTML =  "This is a paragraph"


////////////////////////////////////////////      пункты 4, 5            /////////////////////////////////////



let elem3 = document.querySelector(".main-header")

let elemArr = Array.from(elem3.children)

elemArr.forEach(el => el.classList.add("nav-item"))

console.log(elemArr)


////////////////////////////////////////       пункт 6      ////////////////////////////////////////////////



let elem4 = document.querySelectorAll('.section-title')

elem4.forEach(el => el.classList.remove("section-title"))

console.log(elem4)
