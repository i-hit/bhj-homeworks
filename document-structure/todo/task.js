"use strict";

const toDo = document.getElementById("tasks__list");
const dilerToDo = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
let removeToDo;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (dilerToDo.value.length) {
    addTask();
    getRemoveToDo();
  }
});

dilerToDo.addEventListener("keydown", (e) => {
  if (dilerToDo.value.length) {
    if (e.key === "Enter") {
      addTask();
      getRemoveToDo();
    }
  }
});


function addTask() {
  toDo.innerHTML += `
  <div class="task">
  <div class="task__title">
  ${dilerToDo.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
  </div>`;
  dilerToDo.value = "";
}

function getRemoveToDo() {
  removeToDo = document.querySelectorAll(".task__remove");
  removeToDo.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.target.closest(".task").remove();
    })
  );

}
