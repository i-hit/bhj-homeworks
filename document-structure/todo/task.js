"use strict";

const toDo = document.getElementById("tasks__list");
const dilerToDo = document.getElementById("task__input");
const buttonAdd = document.getElementById("tasks__add");
const buttonRemove = document.querySelector(".tasks__remove");

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (dilerToDo.value.length) {
    addTask();
  }
});

buttonRemove.addEventListener("click", () => {
  toDo.innerHTML = "";
});

dilerToDo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (dilerToDo.value.length) {
      addTask();
    }
  }
});

toDo.addEventListener("click", (e) => {
  if (e.target.classList.contains("task__remove")) {
    e.preventDefault();
    e.target.closest(".task").remove();
  }
});

function addTask() {
  toDo.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task">
    <div class="task__title">
    ${dilerToDo.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
  );
  dilerToDo.value = "";
}
