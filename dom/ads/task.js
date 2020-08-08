"use strict";

const parents = document.querySelectorAll(".rotator");

parents.forEach((e) => {

  const ads = Array.from(e.querySelectorAll(".rotator__case"));
  let i = ads.length - 1;
  let time = +ads[0].dataset.speed;
  let color = ads[0].dataset.color;
  let fontSize = ads[0].dataset.fontSize;
  
  startTimer();
  
  function changeTime() {
    time = +ads[i].dataset.speed;
  }
  
  function changeColor() {
    color = ads[i].dataset.color;
  }

  function changeFontSize() {
    if (!ads[i].dataset.fontSize) {
      fontSize = "1rem";
    } else {
      fontSize = ads[i].dataset.fontSize;
    }
  }
  
  function startTimer() {
    ads[i].classList.remove("rotator__case_active");
    i++;
  
    if (i === ads.length) {
      i = 0;
    }
  
    changeColor();
    changeFontSize();
  
    ads[i].style.color = color;
    ads[i].style.fontSize = fontSize;
    ads[i].classList.add("rotator__case_active");
  
    changeTime();
  
    setTimeout(startTimer, time);
  }
})

