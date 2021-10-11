const burgerButton = document.getElementsByClassName("burger-button")[0];
const menu = document.querySelector("header > .menu");
let menuCollapsed = false;
const menuLinks = document.getElementsByClassName("link");

const openMenu = () => {
  menuCollapsed = true;
  burgerButton.src = "assets/img/close.svg";
  burgerButton.style.width = "25px";
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
};

const closeMenu = () => {
  menuCollapsed = false;
  burgerButton.style.width = "35px";
  burgerButton.src = "assets/img/burger.svg";
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
};

burgerButton.addEventListener("click", () => {
  if (menuCollapsed === false) {
    openMenu();
  } else {
    closeMenu();
  }
});

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", () => {
    if (menuCollapsed === true) {
      closeMenu();
    }
  });
}

const seeMoreProjectsButton = document.querySelector('#see-more-projects')
const seeMoreProjectsContent = document.querySelector('.more-projects__container')
seeMoreProjectsButton.addEventListener('click', () => seeMoreProjectsContent.classList.toggle('more-projects__container--show'))