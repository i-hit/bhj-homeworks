const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");
const slides = document.querySelectorAll(".slider__item")
const dots = document.querySelectorAll(".slider__dot");

let currentSlide = 0;

next.onclick = function() {
  toggleSlide();
  currentSlide = currentSlide + 1 === slides.length ?  0 : currentSlide + 1;
  toggleSlide();
}

prev.onclick = function() {
  toggleSlide();
  currentSlide = currentSlide - 1 < 0 ?  slides.length - 1 : currentSlide - 1;
  toggleSlide();
}

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    toggleSlide();
    currentSlide = i;
    toggleSlide();
  }
}

function toggleSlide() {
  slides[currentSlide].classList.toggle("slider__item_active");
  dots[currentSlide].classList.toggle("slider__dot_active");
}