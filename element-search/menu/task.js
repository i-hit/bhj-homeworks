const menuLinks = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function () {
    if (!this.nextElementSibling) {
      return;
    }

    if (!this.nextElementSibling.classList.contains("menu_active")) {
      for (let j of Array.from(menuSub)) {
        j.classList.remove("menu_active");
      }
      
      this.nextElementSibling.classList.add("menu_active");
      return false;
    }

    this.nextElementSibling.classList.remove("menu_active");

    return false;
  };
}
