
const tabsList = document.querySelector('.tabs')

tabsList.addEventListener('click', (event) => {
    const clickedBtn = event.target

    if (clickedBtn.tagName === 'LI') {
        // const lastActiveBtn = tabsList.querySelector('.active')
        const lastActiveBtn = event.currentTarget.querySelector('.active')

        const tabName = clickedBtn.dataset.tab
        const tabContentItem = document.querySelector(`.tabs-content-title[data-tab="${tabName}"]`)
        const lastActiveTabContent = document.querySelector('.tabs-content-title-active')

        if (lastActiveBtn !== clickedBtn) {
            lastActiveBtn.classList.remove('active')
        }

        if (lastActiveTabContent !== tabContentItem) {
            lastActiveTabContent.classList.remove('tabs-content-title-active')
        }

        tabContentItem.classList.add('tabs-content-title-active')
        clickedBtn.classList.add('active')
    }
})

