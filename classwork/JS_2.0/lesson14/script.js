

const pass1 = document.querySelector('input[name="pass-1"]');
const pass2 = document.querySelector('input[name="pass-2"]');

// pass1.addEventListener('blur', function() {
//     console.log(this.value);
// })

pass2.addEventListener('blur', comparePass)

function comparePass() {
    if (pass1.value === pass2.value) {
        document.querySelector('#wrong') ? document.querySelector('#wrong').remove() : false;
        return true;
    } else {
        document.querySelector('#wrong') ? document.querySelector('#wrong').remove() : false;
        pass2.insertAdjacentHTML('afterend', '<span id="wrong">Password is not equal!</span>');
        return false;
    }
}


document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    comparePass() ? this.submit() : pass1.value = pass2.value = '';
    // console.log(ev)
})




////////////////////////////////////////////////////////////////////////////////////////////////////////


// function close () {
//     document.querySelector('.modal').style.display = "none"
// }
//
// document.getElementsByTagName('button')[0].addEventListener('click', close)
// document.querySelector('.modal').addEventListener('click', function (event) {
//     // if (event.target.classList('modal'))
//     event.target.classList.contains('modal') ? close() : false
//     // event.stopPropagation()
//
// })
//
// document.addEventListener('keydown', function (event) {
//     event.code == 'Escape' ? close() : false
// })
//
// document.getElementsByTagName('input')[0].addEventListener('focus', function (){
//     // document.getElementsByTagName('button')[0].setAttribute('disabled', 'disabled')
//     document.getElementsByTagName('button')[0].disabled = true
// })
//
// document.getElementsByTagName('input')[0].addEventListener('blur', function (){
//     document.getElementsByTagName('button')[0].disabled = false
// })