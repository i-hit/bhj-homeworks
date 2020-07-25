const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");
const slides = document.querySelectorAll(".slider__item")
const classActive = "slider__item_active";
let currentSlide = 0;

next.onclick = function() {
  toggleSlideClass();
  currentSlide + 1 === slides.length ? currentSlide = 0 : currentSlide++;
  toggleSlideClass();
}

prev.onclick = function() {
  toggleSlideClass();
  currentSlide - 1 < 0 ? currentSlide = slides.length - 1 : currentSlide--;
  toggleSlideClass();
}

function toggleSlideClass() {
  slides[currentSlide].classList.toggle(classActive);
}