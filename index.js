import { handleCommand } from "./handleCommand.js";

const form = document.querySelector(".cmd-form");
const input = document.querySelector(".cmd-input");
const output = document.querySelector(".cmd-output");
const cmdName = `C:\\web-cmd>`;
let commandHistory = [];
let currentCommand = 0;

const handleCommandHistory = (keyPressed) => {
  switch (keyPressed.key) {
    case "ArrowUp":
      if (currentCommand > 0) {
        currentCommand--;
        input.value = commandHistory[currentCommand];
      }
      break;
    case "ArrowDown":
      if (currentCommand + 1 < commandHistory.length) {
        currentCommand++;
        input.value = commandHistory[currentCommand];
      }
      break;
  }
};

const handleCommandSubmit = (e) => {
  e.preventDefault();

  if (input.value.trim()) {
    commandHistory.push(input.value);
    currentCommand = commandHistory.length;

    //shows previous actions performed
    output.innerHTML += `${cmdName}  ${input.value}  <br>  ${handleCommand(
      input.value
    )}  <br>`;
    input.value = null;
  }
};

window.addEventListener("keydown", handleCommandHistory);

form.addEventListener("submit", handleCommandSubmit);
