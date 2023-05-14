import { snake } from "./snake";
import {
  gameDifficultyHandler,
  buttonDisplay,
  buttonYes,
  difficultyLevel,
} from "./gameSetup";

const buttonYseHandler = () => {
  buttonDisplay.classList.toggle("toggled");
  difficultyLevel.classList.toggle("toggled");
  document.addEventListener("keydown", snake.movingControls.bind(snake));
  buttonYes.removeEventListener("click", buttonYseHandler);
};
buttonYes.addEventListener("click", buttonYseHandler);
difficultyLevel.addEventListener("click", gameDifficultyHandler);
