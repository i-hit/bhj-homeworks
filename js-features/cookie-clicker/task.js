const imgCookie = document.getElementById("cookie");
const countClick = document.getElementById("clicker__counter");

imgCookie.onclick = function() {
  if (this.classList.contains("big")) {
    this.classList.remove("big");
    this.width = "200";
  } else {
    this.classList.add("big");
    this.width = "250";
  }

  countClick.textContent++;
};
