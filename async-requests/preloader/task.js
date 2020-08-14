"use strict";

const list = document.getElementById("items");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

if (xhr.status === 200) {
}
