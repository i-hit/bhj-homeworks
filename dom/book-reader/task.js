"use strict";

const tabs = document.querySelectorAll(".font-size");

tabs.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClass(tabs, e.target, "font-size_active");
    changeFontSize(e.target);
  })
);

function toggleClass(elements, elem, className) {
  elements.forEach((e) => e.classList.remove(className));
  elem.classList.add(className);
}

function changeFontSize(elem) {
  let fontSize = !elem.dataset.size
    ? "16px"
    : elem.dataset.size === "big"
    ? "20px"
    : "12px";
  document.querySelector("#book").style.fontSize = fontSize;
}
