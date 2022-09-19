

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tree > li ul').forEach(el => el.hidden = true);
    const rootList = document.querySelector('.tree');
    rootList.addEventListener('click', function (event){
        // event.target.querySelector('ul').hidden = !event.target.querySelector('ul').hidden
        if (event.target.querySelector('ul')) {
            event.target.querySelector('ul').hidden = !event.target.querySelector('ul').hidden
        }

    });
});

document.addEventListener('readystatechange', function () {
    console.log(document.readyState)
})


