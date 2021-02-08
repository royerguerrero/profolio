const burgerButton = document.getElementsByClassName('burger-button')[0]
const menu = document.querySelector('header > .menu') 
let menuCollapsed = false
const menuLinks = document.getElementsByClassName('link')

const openMenu = () => {
    menuCollapsed = true
    burgerButton.src = 'assets/img/close.svg'
    burgerButton.style.width = '25px'
    menu.style.display = 'flex'
}

const closeMenu = () => {
    menuCollapsed = false
    burgerButton.style.width = '35px'
    burgerButton.src = 'assets/img/burger.svg'
    menu.style.display = 'none'
}

burgerButton.addEventListener('click', () => {
    if (menuCollapsed === false) {
        openMenu()
    } else {
        closeMenu()
    }
})

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        if (menuCollapsed === true) {
            closeMenu()
        }
    })
}