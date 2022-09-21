

const labelInput = document.querySelector('.button')

if (localStorage.getItem('active', "background") !== null) {
    let background = document.querySelectorAll('.conteiner').forEach(el => el.classList.toggle('active'))
    let textTag = document.querySelectorAll('p').forEach(el => el.classList.toggle('active-text'))
    let linkTag = document.querySelectorAll('a').forEach(el => el.classList.toggle('active-text'))
}


labelInput.addEventListener('click', function (event) {
    if (event.target.closest('.button')) {
        let background = document.querySelectorAll('.conteiner').forEach(el => el.classList.toggle('active'))
        let textTag = document.querySelectorAll('p').forEach(el => el.classList.toggle('active-text'))
        let linkTag = document.querySelectorAll('a').forEach(el => el.classList.toggle('active-text'))
        document.querySelector('.conteiner').classList.contains('active') ? localStorage.setItem('active', true) : localStorage.removeItem('active')

    }
})

