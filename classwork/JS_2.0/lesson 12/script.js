

// <style>
//     form {
//     margin - bottom: 2rem;
// }
//     #bands {
//     width: 350px;
//     margin-bottom: 2rem;
// }
//     #bands span {
//     border: 1px solid #ccc;
//     margin: 0 3px 3px 0;
//     display: inline-block;
//     padding: 3px 10px;
// }
//     .hidden {
//     display: none !important;
// }
// </style>
//
// <form name="musicFilters">
//     <label>
//         <input type="checkbox" name="rock" checked>
//             Rock
//     </label>
//     <label>
//         <input type="checkbox" name="pop" checked>
//             Pop
//     </label>
//     <label>
//         <input type="checkbox" name="jazz" checked>
//             Jazz
//     </label>
// </form>
//
// <div id="bands">
//     <span data-type="rock">AC/DC</span>
//     <span data-type="rock">Scorpions</span>
//     <span data-type="rock">Offspring</span>
//     <span data-type="rock">Accept</span>
//     <span data-type="rock">Queen</span>
//     <span data-type="pop">Madonna</span>
//     <span data-type="pop">Spicy Girls</span>
//     <span data-type="pop">U2</span>
//     <span data-type="pop">Backstreet Boys</span>
//     <span data-type="jazz">Louis Armstrong</span>
//     <span data-type="jazz">Miles Davis</span>
//     <span data-type="jazz">John Coltrane</span>
//     <span data-type="jazz">Charles Lloyd</span>
// </div>
//
// <button onClick="filter()">Filter</button>
//





//
// const music = Array.from(document.getElementById('bands').children)
//
// const checkBoxs = Array.from(document.musicFilters.querySelectorAll('input'))
//
// function filter() {
//     music.forEach(el => filterChecked().includes(el.dataset.type) ? el.classList.remove('hidden') : el.classList.add('hidden'))
//
//
//     console.log(filterChecked())
// }
//
// function filterChecked() {
//     return checkBoxs.map(el => el.checked ? el.name : false).filter(el => el)
// }
//
// console.log(music)
// console.log(checkBoxs)


//////////////////////////////////////////////////////////////////////////////////////////////


// <style>
//     .container {
//     display: flex;
//     max-width: 1200px;
//     margin: 0 auto;
// }
//     .container > div {
//     width: 50%;
// }
//     textarea {
//     width: 100%;
// }
// </style>
//
// <div className="container">
//     <div id="wrapper"></div>
//     <div>
//         <form name="insertForm">
//             <textarea name="textarea" rows="10"></textarea>
//         </form>
//         <button onClick="insert()">Insert</button>
//     </div>
// </div>





// function insert() {
//     let getText = document.insertForm.textarea.value
//     console.log(getText)
//     wrapper.insertAdjacentHTML('beforebegin', getText)
//     document.insertForm.textarea.value = ''
// }
//
//
// const wrapper = document.querySelector('#wrapper')




//////////////////////////////////////////////////////////////////////////////////////////////////






// <div id="wrapper">
//
// </div>
//
// <script>
//     const arr = [
//     'apple',
//     'orange',
//     'banana',
//     'grape',
//     'mango',
//     'kivi'];
// </script>
//
// <!--вивести списком масив-->


//
// const arr = ['apple', 'orange', 'banana', 'grape', 'mango', 'kivi']
//
//
// let list = document.getElementById('wrapper');
// let newList = document.createElement('ul');
// list.append(newList);
//
// newList.innerHTML = arr.map(element => <li>${element}</li>).join(' ');
//
// newList.addEventListener(click, function(event){
//     newList.append(event.target);
//     console.log(event);
// })



/////////////////////////////////////////////////////////////////////////////////////////////////


// <main className="container">
//     <div className="col-6"></div>
//     <div className="col-6">
//         <p className="text-warning">Paragraph</p>
//         <ul className="list">
//             <li className="list__item">List 1</li>
//             <li className="list__item">List 2</li>
//             <li className="list__item">List 3</li>
//             <li className="list__item">List 4</li>
//             <li className="list__item">
//                 <ul className="sub-list">
//                     <li className="sub-list__item">Sublist 1</li>
//                     <li className="sub-list__item">Sublist 2</li>
//                     <li className="sub-list__item">
//                         <span className="text-success">Sublist 2</span>
//                     </li>
//                 </ul>
//             </li>
//         </ul>
//     </div>
// </main>




// const elements = document.querySelectorAll('body *')
//
// let arr = []
//
// elements.forEach(el => arr.push(el.className))
//
//
// console.log(new Set(arr))



// const arr = []
//
// function recurs (el) {
//
//    // el.classList.length ? arr.push(el.className) : false
//     el.className ? arr.push(el.className) : false
//     if (el.hasChildNodes()) {
//         for (let i = 0; i < el.children.length; i++) {
//             recurs(el.children[i])
//         }
//     }
//     return new Set(arr)
// }
//
//
// // recurs(document.body)
// console.log(recurs(document.body))





////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// <style>
//     body {
//     margin: 0;
//     font-family: sans-serif;
//     font-size: 14px;
// }
//     nav {
//     display: flex;
//     padding: 10px;
//     background-color: #050532;
//     align-items: center;
// }
//     nav a {
//     padding: 0 20px;
//     text-decoration: none;
//     color: #fff;
// }
//     nav a:hover {
//     color: rgb(226, 165, 144);
// }
//     .dropdown {
//     position: relative;
// }
//     .sublist {
//     width: 150px;
//     list-style: none;
//     position: absolute;
//     padding: 0;
//     display: block;
//     background-color: #050532;
//     box-shadow: 0 0 5px 0 rgba(0,0,0,15);
//     left: 20px;
//     top: 17px;
//     border-radius: 4px;
// }
//     .sublist a {
//     display: inline-flex;
//     padding: 5px 10px;
// }
// </style>
//
// <nav>
//     <a href="#">Home</a>
//     <a href="#">Products</a>
//     <a href="#">Services</a>
//     <a href="#">Policy</a>
//     <div className="dropdown"><a href="#">About us &bigtriangledown;</a>
//         <ul className="sublist">
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Contacts</a></li>
//             <li><a href="#">Contact Us</a></li>
//             <li><a href="#">Subscribe!</a></li>
//         </ul>
//     </div>
// </nav>








// const headerList = document.querySelectorAll("nav > a, .dropdown > a");
//
// headerList.forEach(el => {
//     el.addEventListener("click", function() {
//         if (document.querySelector("nav .active")) {
//             document.querySelector("nav .active").classList.remove('active');
//         }
//         el.classList.add("active");
//     })
// })
//
//


// <style>
//
//     body {
//     margin: 0;
//     font-family: sans-serif;
//     font-size: 14px;
// }
//
//     nav {
//     display: flex;
//     padding: 10px;
//     background-color: #050532;
//     align-items: center;
// }
//
//     nav a {
//     padding: 0 20px;
//     text-decoration: none;
//     color: #fff;
// }
//
//     nav a:hover {
//     color: rgb(226, 165, 144);
// }
//
//     nav .active {
//     background - color: #fff;
//     color: #050532;
// }
//
//     .dropdown {
//     position: relative;
// }
//
//     nav a.active + .sublist{
//     display: block;
// }
//
//     .sublist {
//     width: 150px;
//     list-style: none;
//     position: absolute;
//     padding: 0;
//     display: none;
//     background-color: #050532;
//     box-shadow: 0 0 5px 0 rgba(0, 0, 0, 15);
//     left: 20px;
//     top: 17px;
//     border-radius: 4px;
// }
//
//     .sublist a {
//     display: inline-flex;
//     padding: 5px 10px;
// }
// </style>
//
// <nav>
//     <a href="#">Home</a>
//     <a href="#">Products</a>
//     <a href="#">Services</a>
//     <a href="#">Policy</a>
//     <div className="dropdown">
//         <a href="#">About us &bigtriangledown;</a>
//         <ul className="sublist">
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Contacts</a></li>
//             <li><a href="#">Contact Us</a></li>
//             <li><a href="#">Subscribe!</a></li>
//         </ul>
//     </div>
// </nav>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////





