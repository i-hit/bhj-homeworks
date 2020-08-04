const dropdownLists = document.querySelectorAll(".dropdown__list");
const dropdownValues = document.querySelectorAll(".dropdown__value");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownValues.forEach((el) =>
  el.addEventListener("click", (e) => {
    toggleList(e.currentTarget, "dropdown__list_active");
  })
);

dropdownItems.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    el.closest(".dropdown").querySelector(".dropdown__value").textContent =
      el.textContent;
    removeClass(dropdownLists, "dropdown__list_active");
  })
);

function toggleList(el, className) {
  const nextEl = el.nextElementSibling;
  if (nextEl.classList.contains(className)) {
    nextEl.classList.remove(className);
  } else {
    removeClass(dropdownLists, className);
    nextEl.classList.add("dropdown__list_active");
  }
}

function removeClass(el, className) {
  el.forEach((el) => el.classList.remove(className));
}
