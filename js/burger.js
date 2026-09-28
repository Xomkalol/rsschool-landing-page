function openMenu(burgerButton, header,body) {
    burgerButton.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('active');
}


function setEventListener() {
    const burgerButton = document.querySelector('.header__burger-button');
    const header = document.querySelector('.header__container');
    const body = document.body;
    const burgerLinks = document.querySelectorAll('nav a');

    function setEscapeListener() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            burgerButton.classList.remove('active');
            header.classList.remove('active');
            body.classList.remove('active');
        }
    });
}

setEscapeListener();

    burgerButton.addEventListener('click',() => openMenu(burgerButton,header,body));
    burgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            openMenu(burgerButton,header,body);
        })
    })
}


setEventListener();