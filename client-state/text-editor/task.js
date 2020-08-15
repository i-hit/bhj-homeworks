"use strict";

const textArea = document.getElementById("editor");
const buttonReset = document.querySelector(".reset");

if (localStorage.getItem("history")) {
  textArea.value = localStorage.getItem("history");
}

textArea.addEventListener("input", () => {
  localStorage.setItem("history", textArea.value);
});

buttonReset.addEventListener("click", (e) => {
  e.preventDefault();
  textArea.value = "";
  localStorage.clear();
});
