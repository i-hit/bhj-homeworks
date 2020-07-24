const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalActive = document.querySelector(".modal_active");
const modalClose = document.querySelectorAll(".modal__close");

modalMain.classList.add("modal_active");

for (let i = 0; i < modalClose.length; i++) {

  modalClose[i].onclick = function () {
    
    if (!this.closest(".modal_active")) {
      return;
    }

    this.closest(".modal_active").classList.remove("modal_active");

    if (this.classList.contains("show-success")) {
      modalSuccess.classList.add("modal_active");
    }
  };
}
