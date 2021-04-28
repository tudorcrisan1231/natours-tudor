console.log('salut');


//HAMBURGER MENU

const btn = document.querySelector(".navigation__button");
const background = document.querySelector(".navigation__background");
const nav = document.querySelector(".navigation__nav");
const nav__list = document.querySelector(".navigation__list");

const line1 = document.querySelector(".navigation__icon-1");
const line2 = document.querySelector(".navigation__icon-2");
const line3 = document.querySelector(".navigation__icon-3");


btn.addEventListener('click',function() {

    background.classList.toggle('scale');
    nav.classList.toggle('hidden');

    line1.classList.toggle('rotate2');
    line3.classList.toggle('rotate1');
    line2.classList.toggle('hidden1');

    nav__list.addEventListener('click', function() {
        background.classList.remove('scale');
        nav.classList.remove('hidden');

        line1.classList.remove('rotate2');
        line3.classList.remove('rotate1');
        line2.classList.remove('hidden1');
    });
});


//POPUP

const popup_close = document.querySelector(".popup__close");
const popup_open = document.querySelectorAll(".popup_open");
const popup_content = document.querySelector(".popup__content");
const popup_back = document.querySelector('.popup__background');
const btn__close_book = document.querySelector('.close');


popup_open.forEach(i => {
    i.addEventListener('click', function () {
        popup_back.classList.toggle("open");
        popup_content.classList.toggle("open1");

        btn__close_book.addEventListener('click', function () {
            popup_back.classList.remove("open");
            popup_content.classList.remove("open1");
        });
    });
});

popup_close.addEventListener('click', function() {
    popup_back.classList.toggle("open");
    popup_content.classList.toggle("open1");
});

popup_back.addEventListener('click', function() {
    popup_back.classList.toggle("open");
    popup_content.classList.toggle("open1");
});

