const showMenu = document.querySelector("#showMenu");
const menuItems = document.querySelector("#menuItems");
const hideMenu = document.querySelector("#hideMenu");
const toggle = document.querySelector(".mobile");

const toggleMenu = () => {
  toggle.addEventListener("click", (e) => {
    menuItems.classList.toggle("hidden");
    showMenu.classList.toggle("hidden");
    hideMenu.classList.toggle("hidden");
  });
};


const start = () => {
  toggleMenu();
};

start();
