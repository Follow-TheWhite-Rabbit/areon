

const pass1 = document.querySelector('input[name="pass-1"]')
const pass2 = document.querySelector('input[name="pass-2"]')

const labelInputFirst = document.querySelector('.first')
const labelInputSecond = document.querySelector('.second')


labelInputFirst.addEventListener('click', function (event) {

        if (event.target.closest('.fa-eye')) {
            event.target.classList.add('not-active')
            document.querySelectorAll('.fa-eye-slash')[0].classList.remove('not-active')
            document.querySelectorAll('input')[0].type = 'text'
        }
        if (event.target.closest('.fa-eye-slash')) {
            event.target.classList.add('not-active')
            document.querySelectorAll('.fa-eye')[0].classList.remove('not-active')
            document.querySelectorAll('input')[0].type = 'password'
        }
    })


labelInputSecond.addEventListener('click', function (event) {

    if (event.target.closest('.fa-eye')) {
        event.target.classList.add('not-active')
        document.querySelectorAll('.fa-eye-slash')[1].classList.remove('not-active')
        document.querySelectorAll('input')[1].type = 'text'

    }
    if (event.target.closest('.fa-eye-slash')) {
        event.target.classList.add('not-active')
        document.querySelectorAll('.fa-eye')[1].classList.remove('not-active')
        document.querySelectorAll('input')[1].type = 'password'
    }
})

function comparePass() {
    if (pass1.value === pass2.value && pass1.value !== '') {
        document.querySelector('#wrong') ? document.querySelector('#wrong').remove() : false
        return alert('You are welcome')
    } else {
        document.querySelector('#wrong') ? document.querySelector('#wrong').remove() : false
        pass2.insertAdjacentHTML('afterend', '<span id="wrong">Потрібно ввести однакові значення</span>')
        return false
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    comparePass()
    // comparePass() ? this.submit() : pass1.value = pass2.value = ''
})

