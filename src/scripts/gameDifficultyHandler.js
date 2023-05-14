import { difficultyLevel, gameSettings, wrapper } from "./gameSetup";
import { startGame } from "./gameLaunch";
import { pauseGame } from "./pauseHandler";
export { maxStep, gameDifficultyHandler };

let maxStep;
function gameDifficultyHandler(event) {
  switch (event.target.id) {
    case "easy-level":
      maxStep = 10;
      break;
    case "medium-level":
      maxStep = 5;
      break;
    case "hard-level":
      maxStep = 0;
      break;
  }
  gameSettings.classList.toggle("toggled");
  wrapper.classList.toggle("toggled");
  difficultyLevel.removeEventListener("click", gameDifficultyHandler);
  startGame();
  pauseGame();
}
