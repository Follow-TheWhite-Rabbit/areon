

const burger = document.querySelector('.nav-menu__burger')

burger.addEventListener('click', () => {
    document.querySelectorAll('.nav-menu__burger').forEach(el => el.classList.toggle('active-burger'));
    document.querySelectorAll('.mobile-nav').forEach(el => el.classList.toggle('mobile-nav__active'));

})