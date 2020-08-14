"use strict";

const targets = document.querySelectorAll(".has-tooltip");
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

targets.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("tooltip_active")) return;

    tooltip.innerText = e.target.title;
    tooltip.classList.add("tooltip_active");
    const elRect = e.target.getBoundingClientRect();
    tooltip.setAttribute(
      "style",
      `left: ${elRect.left}px; top: ${elRect.bottom}px`
    );
    e.target.insertAdjacentElement("afterEnd", tooltip);
  })
);

tooltip.addEventListener("click", (e) => {
  e.target.remove();
});

document.addEventListener("scroll", () => {
  const parent = tooltip.previousElementSibling;
  const parentRect = parent.getBoundingClientRect();
  tooltip.setAttribute(
    "style",
    `left: ${parentRect.left}px; top: ${parentRect.bottom}px`
  );
});
