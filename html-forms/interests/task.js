"use strict";

const allCheckbox = document.querySelectorAll("[type=checkbox]");

allCheckbox.forEach((e) =>
  e.addEventListener("change", () => {
    const chain = e.closest("li").querySelectorAll("[type=checkbox]");
    chain.forEach((el) => {
      el.indeterminate = false;
      el.checked = e.checked;
    });

    const parent = e.closest("ul").closest("li");
    if (parent) {
      checkElements(e, parent);
    }
  })
);

function checkElements(e, parent) {
  parent = parent.querySelector("[type=checkbox]");
  e = e.closest("ul");
  e.classList.add("current");
  const chain = Array.from(
    e.querySelectorAll(".current > li > label > [type=checkbox]")
  );
  e.classList.remove("current");

  const chainIndeterminate = chain.filter((el) => el.indeterminate);
  if (chainIndeterminate.length > 0) {
    parent.checked = false;
    parent.indeterminate = true;
  } else {
    const chainChecked = chain.filter((el) => el.checked);
    let result = chain.length - chainChecked.length;

    switch (result) {
      case 0:
        parent.checked = true;
        parent.indeterminate = false;
        break;
      case chain.length:
        parent.checked = false;
        parent.indeterminate = false;
        break;

      default:
        parent.checked = false;
        parent.indeterminate = true;
        break;
    }
  }

  const grandPa = parent.closest("ul").closest("li");
  if (grandPa) {
    checkElements(parent, grandPa);
  }
}
