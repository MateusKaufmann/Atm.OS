const menuLink = document.querySelector(".menu-link");
const navMenu = document.querySelector(".nav-submenu");
const navLink = document.querySelectorAll(".nav-link");
menuLink.addEventListener("click", menuMovel);

function menuMovel() {
    navMenu.classList.toggle("active");
}