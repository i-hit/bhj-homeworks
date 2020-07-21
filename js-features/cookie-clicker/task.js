const imgCookie = document.getElementById("cookie");
const countClick = document.getElementById("clicker__counter");
const cliclSpeed = document.getElementById("clickerSpeed");
let timeFirstClick = 0;

imgCookie.onclick = function() {
  if (this.classList.contains("big")) {
    this.classList.remove("big");
    this.width = "200";
  } else {
    this.classList.add("big");
    this.width = "250";
  }

  countClick.textContent++;

  let timeNextClick = Date.now();

  cliclSpeed.textContent = (1000 / (timeNextClick - timeFirstClick)).toFixed(2);
  timeFirstClick = timeNextClick;
};

