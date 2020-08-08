"use strict";

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timeElement = container.querySelector(".time");

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keypress", (e) => {
      const char = this.getKeyCode(
        this.currentSymbol.textContent.toLowerCase()
      );
      if (e.code !== char) {
        this.fail();
        return;
      }

      this.success();
    });
  }

  startTimer() {
    if (this.startTimer.id !== undefined) {
      clearInterval(this.startTimer.id);
    }

    this.startTimer.id = setInterval(() => {
      console.log(this.startTimer.id);
      this.timeElement.textContent -= 1;
      if (+this.timeElement.textContent <= 0) {
        clearInterval(this.startTimer.id);
        this.fail();
      }
    }, 1000);
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.timeElement.textContent = word.length;

    this.renderWord(word);

    this.startTimer();
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
        "курсы",
        "клавиатура",
        "курсы netology",
        "нетология netology",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }

  getKeyCode(char) {
    let result = "";
    switch (char) {
      case "q":
      case "й":
        result = "KeyQ";
        break;
      case "w":
      case "ц":
        result = "KeyW";
        break;
      case "e":
      case "у":
        result = "KeyE";
        break;
      case "r":
      case "к":
        result = "KeyR";
        break;
      case "t":
      case "е":
        result = "KeyT";
        break;
      case "y":
      case "н":
        result = "KeyY";
        break;
      case "u":
      case "г":
        result = "KeyU";
        break;
      case "i":
      case "ш":
        result = "KeyI";
        break;
      case "o":
      case "щ":
        result = "KeyO";
        break;
      case "p":
      case "з":
        result = "KeyP";
        break;
      case "[":
      case "х":
        result = "BracketLeft";
        break;
      case "]":
      case "ъ":
        result = "BracketRight";
        break;
      case "a":
      case "ф":
        result = "KeyA";
        break;
      case "s":
      case "ы":
        result = "KeyS";
        break;
      case "d":
      case "в":
        result = "KeyD";
        break;
      case "f":
      case "а":
        result = "KeyF";
        break;
      case "g":
      case "п":
        result = "KeyG";
        break;
      case "h":
      case "р":
        result = "KeyH";
        break;
      case "j":
      case "о":
        result = "KeyJ";
        break;
      case "k":
      case "л":
        result = "KeyK";
        break;
      case "l":
      case "д":
        result = "KeyL";
        break;
      case ";":
      case "ж":
        result = "Semicolon";
        break;
      case "'":
      case "э":
        result = "Quote";
        break;
      case "z":
      case "я":
        result = "KeyZ";
        break;
      case "x":
      case "ч":
        result = "KeyX";
        break;
      case "c":
      case "с":
        result = "KeyC";
        break;
      case "v":
      case "м":
        result = "KeyV";
        break;
      case "b":
      case "и":
        result = "KeyB";
        break;
      case "n":
      case "т":
        result = "KeyN";
        break;
      case "m":
      case "ь":
        result = "KeyM";
        break;
      case ",":
      case "б":
        result = "Comma";
        break;
      case ".":
      case "ю":
        result = "Period";
        break;
      case " ":
        result = "Space";
        break;
    }
    return result;
  }
}

new Game(document.getElementById("game"));
