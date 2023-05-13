import { snake } from "./snake";
import { startGame } from "./gameLaunch";

const buttonYes = document.getElementById("button-yes");
const buttonNo = document.getElementById("button-no");
const buttonDisplay = document.getElementById("button-display");
const wrapper = document.getElementById("wrapper");
const buttonDisplayPadding = window
  .getComputedStyle(buttonDisplay)
  .getPropertyValue("padding-left");
const buttonDisplayTop = window
  .getComputedStyle(buttonDisplay)
  .getPropertyValue("top");
const buttonDisplayLeft = window
  .getComputedStyle(buttonDisplay)
  .getPropertyValue("left");
const buttonYseHandler = () => {
  wrapper.classList.toggle("toggled");
  buttonDisplay.classList.toggle("toggled");
  startGame();
  document.addEventListener("keydown", snake.movingControls.bind(snake));
  buttonYes.removeEventListener("click", buttonYseHandler);
};
// const buttonNoHandler = () => {
//
//   buttonNo.removeEventListener("click", buttonNoHandler);
// };
buttonYes.addEventListener("click", buttonYseHandler);
// buttonNo.addEventListener("mouseover", buttonNoHandler);
