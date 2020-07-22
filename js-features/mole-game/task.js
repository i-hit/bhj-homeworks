const countDead = document.getElementById("dead");
const countLost = document.getElementById("lost");

let reset = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function () {
    getHole(i).classList.contains("hole_has-mole")
      ? countDead.textContent++
      : countLost.textContent++;

    if (countDead.textContent === "10") {
      reset++;
      alert("Win :)");
    }

    if (countLost.textContent === "5") {
      reset++;
      alert("You lose :(");
    }

    if (reset) {
      countDead.textContent = 0;
      countLost.textContent = 0;
      reset--;
    }
  };
}
