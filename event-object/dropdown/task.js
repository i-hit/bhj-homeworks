const dropdownLists = document.querySelectorAll(".dropdown__list");
const dropdownValues = document.querySelectorAll(".dropdown__value");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownValues.forEach((el) => el.addEventListener("click", (e) => {
  toggleList(e.currentTarget);
}))

dropdownItems.forEach((el) => el.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(el.textContent);
  el.closest(".dropdown").querySelector(".dropdown__value").textContent = el.textContent;
  dropdownLists.forEach((el) => el.classList.remove("dropdown__list_active"));
}
))

function toggleList(el) {
  const nextEl = el.nextElementSibling;
  if (nextEl.classList.contains("dropdown__list_active")) {
    nextEl.classList.remove("dropdown__list_active");
  } else {
    dropdownLists.forEach((el) => el.classList.remove("dropdown__list_active"));
    nextEl.classList.add("dropdown__list_active");
  }
} 
