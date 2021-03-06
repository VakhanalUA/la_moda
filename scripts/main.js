const headerCityButton = document.querySelector('.header__city-button');

if (localStorage.getItem('lomoda-location')) {
    headerCityButton.textContent = localStorage.getItem('lomoda-location')
}

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
    const city = prompt('укажите ваш город')
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city)
})

//scroll

const disableScroll = () => {

    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    window.scroll({ disableScroll })
    document.body.style.cssText = `
    position: fixxed;
    top: ${-window.scrollY}px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
`;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    })
};


//Modal 
const subheaderСart = document.querySelector('.subheader__cart')
const cartOverlay = document.querySelector('.cart-overlay')

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
}
const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
}

subheaderСart.addEventListener('click', () => {
    cartOverlay.classList.add('cart-overlay-open')
})

cartOverlay.addEventListener('click', event => {
    const target = event.target

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose()
    }
})