const burgerButton = document.getElementsByClassName('burger-button')[0]
const menu = document.querySelector('header > .menu') 
let menuColapsed = false

burgerButton.addEventListener('click', () => {
    if (menuColapsed == false) {
        menuColapsed = true
        burgerButton.src = 'assets/img/close.svg'
        burgerButton.style.width = '25px'
        menu.style.display = 'flex'
    } else {
        menuColapsed = false
        burgerButton.style.width = '35px'
        burgerButton.src = 'assets/img/burger.svg'
        menu.style.display = 'none'
    }
})  