"use strict";

const tabs = document.querySelectorAll(".tab");

tabs.forEach((e) =>
  e.addEventListener("mouseover", (e) => {
    const parent = e.target.closest(".tabs");
    const tabs = Array.from(parent.querySelectorAll(".tab"));
    const tabsContent = Array.from(parent.querySelectorAll(".tab__content"));

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", (e) => {
        removeClass(tabs, "tab_active");
        removeClass(tabsContent, "tab__content_active");
        e.target.classList.add("tab_active");
        tabsContent[i].classList.add("tab__content_active");
      });
    }
  })
);

function removeClass(elements, className) {
  elements.forEach((e) => e.classList.remove(className));
}
