"use strict";

const parents = document.querySelectorAll(".rotator");
const ads = Array.from(document.querySelectorAll(".rotator__case"));
let i = ads.length - 1;
let time = +ads[0].dataset.speed;
let color = ads[0].dataset.color;

startTimer();

function changeTime() {
  time = +ads[i].dataset.speed;
}

function changeColor() {
  color = ads[i].dataset.color;
}

function startTimer() {
  ads[i].classList.remove("rotator__case_active");
  i++;

  if (i === ads.length) {
    i = 0;
  }

  changeColor();

  ads[i].style.color = color;
  ads[i].classList.add("rotator__case_active");

  changeTime();

  setTimeout(startTimer, time);
}
