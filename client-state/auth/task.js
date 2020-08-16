"use strict";

const formDiv = document.getElementById("signin");
const formAuth = document.getElementById("signin__form");
const btnAuth = document.getElementById("signin__btn");
const inputs = document.querySelectorAll(".control");

const welcome = document.getElementById("welcome");
const user = document.getElementById("user_id");
const btnExit = document.querySelector(".exit");

if (localStorage.user) {
  user.insertAdjacentText("afterbegin", localStorage.user);
  loadUser();
} else {
  btnAuth.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = new FormData(formAuth);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let answer = JSON.parse(xhr.responseText);
        if (!answer.success) {
          inputs.forEach((el) => (el.value = ""));
          alert("Неверный логин/пароль");
          return;
        }

        user.insertAdjacentText("afterbegin", answer.user_id);
        localStorage.user = answer.user_id;
        loadUser();
      }
    });
  });
}

function loadUser() {
  formDiv.classList.remove("signin_active");
  welcome.classList.add("welcome_active");

  btnExit.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    document.location.reload();
  });
}
