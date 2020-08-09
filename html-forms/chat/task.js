"use strict";

const chatWidget = document.querySelector(".chat-widget");
const inputMessage = chatWidget.querySelector("#chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const messagesDiv = document.querySelector(".chat-widget__messages-container");
let startMessage;

chatWidget.addEventListener("click", (e) => {
  if (!chatWidget.classList.contains("chat-widget_active")) {
    e.currentTarget.classList.add("chat-widget_active");
    startMessage = setTimeout(() => {
      printAnswer();
    }, 2000);
  }
});

inputMessage.addEventListener("input", (e) => {
  if (startMessage !== undefined) {
    clearTimeout(startMessage);
  }
});

inputMessage.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    if (e.target.value.length > 0) {
      messages.innerHTML += `
    <div class="message_client">
      <div class="message__time">${new Date().getHours()} : ${new Date().getMinutes()}</div>
      <div class="message__text">
        ${e.target.value}
      </div>
    </div>
    `;
    scrollToBottom(messagesDiv);

      e.target.value = "";

      printAnswer();
    }
  }
});

function printAnswer() {
  setTimeout(() => {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">
      ${new Date().getHours()} : ${new Date().getMinutes()}</div>
      <div class="message__text">
        ${getAnswer()}
      </div>
    </div>
    `;
    scrollToBottom(messagesDiv);
  }, 1000);

}

function getAnswer() {
  const words = [
      "мы на карантине",
      "никто не работает",
      "почему Вы без маски?",
      "не засоряйте эфир",
      "зачем Вы здесь?",
      "Валера, настало твоё время",
      "Ломай меня полностью",
      "Онотоле",
      "Превед",
    ],
    index = Math.floor(Math.random() * words.length);

  return words[index];
}

function scrollToBottom(e){
  e.scrollTop = e.scrollHeight - e.clientHeight;
}
