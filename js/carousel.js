function setEventListenerOnArrow(moveLeft, moveRight) {
   const leftButton =  document.querySelector('.left');
   const rightButton =  document.querySelector('.right');
   
    leftButton.addEventListener('click', () => {
       moveLeft();
    })
    rightButton.addEventListener('click', () => {
       moveRight();
    })
}

function carousel() {
    const carousel =  document.querySelector('.carousel');
    const sliders = document.querySelectorAll('.slider-dot');
    let index = 1;

    function moveLeft () {
        switch (index) {
                 case 0:
                   index = 2;
                   carousel.style.transform = 'translateX(-480px)';
                   sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[2].classList.add('active')
                   break;
                 case 1:
                    index = 0;
                    carousel.style.transform = 'translateX(+480px)';
                     sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[0].classList.add('active')
                   break;
                 case 2:
                    index = 1;
                    carousel.style.transform = 'translateX(0px)';
                   sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[1].classList.add('active')
                   break;
                }
    }

    function moveRight () {
        switch (index) {
                 case 0:
                   index += 1;
                   carousel.style.transform = 'translateX(+0px)';
                   sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[1].classList.add('active')
                   break;
                 case 1:
                   index += 1;
                   carousel.style.transform = 'translateX(-480px)';
                   sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[2].classList.add('active')
                   break;
                 case 2:
                    index = 0;
                    carousel.style.transform = 'translateX(+480px)';
                   sliders.forEach(slider => {
                     slider.classList.remove('active');
                   })
                   sliders[0].classList.add('active')
                   break;
                }
    }

    setEventListenerOnArrow(moveLeft, moveRight);


}

 carousel();