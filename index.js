const sideMenu = document.querySelector('.side-menu')
const openMenuButton = document.querySelector('.menu-icon');
const closeMenuButton = document.querySelector('.side-menu__close-icon');

const openSideMenu = () => {
  sideMenu.style.transform = 'translateX(0)';
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

const closeSideMenu = () => {
  sideMenu.style.transform = 'translateX(100%)';
  document.body.style.backgroundColor = "#fff";
}

openMenuButton.addEventListener('click', openSideMenu);
closeMenuButton.addEventListener('click', closeSideMenu);