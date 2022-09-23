

let ourServices = document.querySelector('.service_menu')

ourServices.addEventListener('click', function (event) {
    const clickedBtn = event.target
   if (clickedBtn.tagName === 'LI') {

        const lastActive = event.currentTarget.querySelector('.active')
        const tabName = event.target.dataset.tab
        const tabContentItem = document.querySelector(`.service_options[data-tab="${tabName}"]`)
        const lastActiveTabContent = document.querySelector('.options_active')
       if (lastActive !== clickedBtn) {
           lastActive.classList.remove('active')
       }
       if (lastActiveTabContent !== tabContentItem) {
           lastActiveTabContent.classList.remove('options_active')
       }
       tabContentItem.classList.add('options_active')
       clickedBtn.classList.add('active')
   }
})

// ourServices.addEventListener('click', function (ev) {
//     const clickedBtn = event.target
//     const lastActive = event.currentTarget.querySelector('.active')
//    if (clickedBtn.tagName === 'LI') {
//     clickedBtn.classList.add('active')
//        if (lastActive !== clickedBtn) {
//            lastActive.classList.remove('active')
//        }
//    }
//
// })