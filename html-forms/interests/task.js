"use strict";

const allCheckbox = document.querySelectorAll("[type=checkbox]");

allCheckbox.forEach((e) =>
  e.addEventListener("change", () => {
    const chain = e.closest("li").querySelectorAll("[type=checkbox]");
    chain.forEach((el) => {
      el.indeterminate = false;
      el.checked = e.checked
    });
    
    const parent = e.closest("ul").closest("li");
    if (parent) {
      checkElements(e, parent);
    }
  })
);

function checkElements(e, parent) {
  parent = parent.querySelector("[type=checkbox]");
  let result = 0;
  const chain = e.closest("ul").querySelectorAll("[type=checkbox]");
  chain.forEach((el) => (result = el.checked ? (result += 1) : result));

  switch (result) {
    case chain.length:
      parent.checked = true;
      parent.indeterminate = false;
      break;
    case 0:
      parent.checked = false;
      parent.indeterminate = false;
      break;

    default:
      parent.checked = false;
      parent.indeterminate = true;
      break;
  }

  const grandPa = parent.closest("ul").closest("li");
  if (grandPa) {
    checkElements(parent, grandPa);
  }
}

