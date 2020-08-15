"use strict";

const progress = document.getElementById("progress");
const buttonSend = document.getElementById("send");
const form = document.getElementById("form");

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", (event) => {
    progress.value = event.loaded / event.total;
  });
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(formData);
});
