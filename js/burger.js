const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn-open';
const BODY_FIXED_CLASSNAME_1 = 'body-fixed';

const burgerbodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME_1);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
