"use strict";

const poll = document.querySelector(".poll");
const title = document.getElementById("poll__title");
const answersButton = document.getElementById("poll__answers");
const results = document.querySelector(".poll__results");

const xhr = new XMLHttpRequest();
const xhr1 = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const answer = JSON.parse(xhr.responseText);
    title.insertAdjacentText("afterbegin", answer.data.title);
    title.dataset.id = answer.id;
    for (let key in answer.data.answers) {
      answersButton.insertAdjacentHTML(
        "beforeend",
        `
      <button class="poll__answer" id=${key}>
      ${answer.data.answers[key]}
      </button>
      `
      );
    }
  }
});

poll.addEventListener("click", (e) => {
  if (e.target.classList.contains("poll__answer")) {
    alert("Спасибо, ваш голос засчитан!");
    xhr1.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
    xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr1.send(`vote=${title.dataset.id}&answer=${e.target.id}`);
  }
});

xhr1.addEventListener("readystatechange", () => {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    const answer = JSON.parse(xhr1.responseText);
    answersButton.innerHTML = "";

    let allVotes = 0;
    for (let key in answer.stat) {
      allVotes += answer.stat[key].votes;
    }

    for (let key in answer.stat) {
      results.insertAdjacentHTML(
        "beforeend",
        `
      <div class="poll__result">
      ${answer.stat[key].answer}: ${(
          (100 * answer.stat[key].votes) /
          allVotes
        ).toFixed(2)}%
      </div>
      `
      );
    }
    console.log(answer);
  }
});
