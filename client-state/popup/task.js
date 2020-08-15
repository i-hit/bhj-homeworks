"use strict";

const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (getCookie("modalClass") !== "hide") {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClass=hide; max-age=10";
});
