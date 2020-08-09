"use strict";

const tabsSize = document.querySelector(".book__control_font-size").querySelectorAll(".font-size");
const tabsColorText = document.querySelector(".book__control_color").querySelectorAll(".color");
const tabsColorBg = document.querySelector(".book__control_background").querySelectorAll(".color");

tabsSize.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClass(tabsSize, e.target, "font-size_active");
    changeFontSize(e.target);
  })
)

tabsColorText.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClass(tabsColorText, e.target, "color_active");
    changeColor(e.target);
  })
)

tabsColorBg.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClass(tabsColorBg, e.target, "color_active");
    changeColorBg(e.target);
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

function changeColor(elem) {
  let color = !elem.dataset.color
    ? "black"
    : elem.dataset.color === "gray"
    ? "gray"
    : "whitesmoke";
    document.querySelector("#book").style.color = color;
}

function changeColorBg(elem) {
  let colorBg = !elem.dataset.color
    ? "whitesmoke"
    : elem.dataset.color === "gray"
    ? "gray"
    : "black";
    document.querySelector("#book").style.backgroundColor = colorBg;
}

