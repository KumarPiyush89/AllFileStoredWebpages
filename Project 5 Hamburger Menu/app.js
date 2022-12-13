//Using Vanilla JS
document.querySelector(".hamburguer").addEventListener("click", function () {
    document.querySelector(".full-menu").classList.toggle("active");
    document.querySelector(".hamburguer").classList.toggle("close-hamburguer");
});
