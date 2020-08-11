"use strict";

const allCheckbox = document.querySelectorAll("[type=checkbox]");

allCheckbox.forEach((e) =>
  e.addEventListener("change", () => {
    const chain = e.closest("li").querySelectorAll("[type=checkbox]");
    chain.forEach((el) => (el.checked = e.checked));
    //
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
      console.log(parent);
      break;
    case 0:
      parent.checked = false;
      parent.indeterminate = false;
      console.log(parent);
      break;

    default:
      parent.checked = false;
      parent.indeterminate = true;
      break;
  }
  const grandPa = parent.closest("ul").closest("li");
}

// function checkElements(el, length) {
//   const grandPa = el.closest("li");
//   let result = 0;
//   if (el === grandPa) {
//     const chain = Array.from(el.querySelectorAll("[type=checkbox]"));
//     for (let i = 1; i < chain.length - length; i++) {
//       result = chain[i].checked ? (result += 1) : result;
//     }
//     console.error(length, result, chain)
//     switch (result) {
//       case chain.length - 1 - length:
//         chain[0].checked = true;
//         break;
//       case 0:
//         chain[0].checked = false;

//       default:
//         // chain[0].checked = false;
//         chain[0].indeterminate = true;
//         break;
//     }
//   } else {
//     checkElements(grandPa, chain.length);
//   }
// }
