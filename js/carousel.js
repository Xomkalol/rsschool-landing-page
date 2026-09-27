function setEventListenerOnArrow(moveLeft, moveRight) {
   const leftButton =  document.querySelector('.left');
   const rightButton =  document.querySelector('.right');
   
   console.log(leftButton);
    leftButton.addEventListener('click', () => {
       moveLeft();
    })
    rightButton.addEventListener('click', () => {
       moveRight();
    })
}

function carousel() {
    const carousel =  document.querySelector('.carousel');
    let index = 1;

    function moveLeft () {
        switch (index) {
                 case 0:
                   index = 2;
                   carousel.style.transform = 'translateX(-480px)';
                   break;
                 case 1:
                    index = 0;
                    carousel.style.transform = 'translateX(+480px)';
                   break;
                 case 2:
                    index = 1;
                    carousel.style.transform = 'translateX(0px)';
                   break;
                }
    }

    function moveRight () {
        switch (index) {
                 case 0:
                   index += 1;
                   carousel.style.transform = 'translateX(+0px)';
                   break;
                 case 1:
                   index += 1;
                   carousel.style.transform = 'translateX(-480px)';
                   break;
                 case 2:
                    index = 0;
                    carousel.style.transform = 'translateX(+480px)';
                   break;
                }
    }

    setEventListenerOnArrow(moveLeft, moveRight);


}

// setEventListenerOnArrow();
 carousel();