const elementTimer = document.getElementById("timer");

// minutes
const time = 148940.1; 

// timer in 1440 minutes maximum
function ticTac(time) {
  if (time > 1440) {
    time = 1440;
  }
  let allSeconds = time * 60;

  function updateTicTac() {
    allSeconds--;
    let seconds = allSeconds % 60;
    let minutes = allSeconds / 60 % 60;
    let hours = allSeconds / 60 / 60 % 24;

    let result = new Date(0, 0, 0, hours, minutes, seconds).toLocaleTimeString();
    
    elementTimer.textContent = result;

    if (allSeconds < 0) {
      clearInterval(timeInterval);
      document.getElementById("status").textContent = "Конкурс завершен";
      alert("Вы победили в конкурсе!");
      document.getElementById("win").href = "https://speed.hetzner.de/100MB.bin";
      document.getElementById("win").click();
    }
  }

  updateTicTac();
  let timeInterval = setInterval(updateTicTac, 1000);
}

ticTac(time);


