"use strict";

const divs = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  divs.forEach((e) => {
    if (checkElement(e)) {
      e.classList.add("reveal_active");
    }
    if (!checkElement(e)) {
      e.classList.remove("reveal_active");
    }
  });
});

function checkElement(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  return elementTop > viewportHeight || elementBottom < 0 ? false : true;
}
