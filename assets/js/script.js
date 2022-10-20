let menuHamburgue = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");

menuHamburgue.onclick = () => {
    menuHamburgue.classList.toggle("bx-x");
    menu.classList.toggle("abrir");
}