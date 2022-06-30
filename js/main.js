
const burger = window.document.getElementById('header__burger');//кнопка бургера
const menu_burger = window.document.getElementById('header__burger__nav-list');//меню


//анимация бургера
burger.addEventListener('click', function () {
    burger.classList.toggle("header__burger-active");
    menu_burger.classList.toggle("active-burger");
    window.document.body.classList.toggle('lock')

});
