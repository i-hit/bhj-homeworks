"use strict";

const list = document.getElementById("items");
const loader = document.getElementById("loader");

if (localStorage.getItem("history")) {
  const historyList = JSON.parse(localStorage.getItem("history")).response
    .Valute;
  loader.classList.remove("loader_active");
  getList(historyList);
}

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    loader.classList.remove("loader_active");
    const answer = JSON.parse(xhr.responseText).response.Valute;
    list.innerHTML = "";
    getList(answer);
    localStorage.setItem("history", xhr.responseText);
  }
});

function getList(element) {
  for (let key in element) {
    list.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item">
      <div class="item__code">
      ${element[key].CharCode}
      </div>
      <div class="item__value">
      ${element[key].Value}
      </div>
      <div class="item__currency">
      руб.
      </div>
      </div>
      `
    );
  }
}
