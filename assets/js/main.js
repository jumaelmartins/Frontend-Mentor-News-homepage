const menuItems = document.querySelector("#menuItems");
const toggle = document.querySelector(".mobile");
const img = document.querySelector("#img");

const toggleMenu = () => {
  toggle.addEventListener("click", (e) => {
    menuItems.classList.toggle("hiddenMenu");
    changeImgMenu();
  });
};

const changeImgMenu = () => {
  if (!menuItems.classList.contains("hiddenMenu")) {
    img.src = "./assets/images/icon-menu-close.svg"
  } else {
    img.src = "./assets/images/icon-menu.svg"
  }
};

const start = () => {
  toggleMenu();
};

start();
