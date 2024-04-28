let textIndex = 0;
const textSlides = document.querySelectorAll('.text-slide');

function showText() {
    textSlides.forEach((textSlide) => {
        textSlide.classList.remove('active');
    });
    textSlides[textIndex].classList.add('active');
    textIndex = (textIndex + 1) % textSlides.length;
}

setInterval(showText, 5000);


window.addEventListener('load', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');
    const slideWidth = slides[0].offsetWidth;
    let counter = 0;

    for (let i = 0; i < slides.length; i++) {
        const cloneSlide = slides[i].cloneNode(true);
        slider.appendChild(cloneSlide);
    }

    function slide() {
        counter++;
        slider.style.transform = `translateX(-${slideWidth * counter}px)`;
        slider.style.transition = 'transform 0.5s ease-in-out';

        if (counter === slides.length) {
            counter = 0;
            setTimeout(function() {
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
            }, 500); 
        }
    }

    setInterval(slide, 2000);
});
