let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById("slider");
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

const sliderContainer = document.getElementById("slider-container");
const hammertime = new Hammer(sliderContainer);

hammertime.on("swipeleft", function () {
    nextSlide();
});

hammertime.on("swiperight", function () {
    prevSlide();
});


setInterval(function () {
    nextSlide();
}, 8000);
let isAutoPlay = true;
        let autoPlayInterval;

        function toggleAutoPlay() {
            isAutoPlay = !isAutoPlay;
            const playPauseBtn = document.querySelector('.slider-btn[aria-label="Reproducir/Pausar"] i');
            if (isAutoPlay) {
                playPauseBtn.classList.remove('fa-pause');
                playPauseBtn.classList.add('fa-play');
            } else {
                playPauseBtn.classList.remove('fa-play');
                playPauseBtn.classList.add('fa-pause');
            }

            if (isAutoPlay) {
                autoPlayInterval = setInterval(nextSlide, 8000);
            } else {
                clearInterval(autoPlayInterval);
            }
        }