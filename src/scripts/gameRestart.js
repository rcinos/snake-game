import { buttonTryAgain, darkBackground, scoreBoard } from "./gameSetup.js";
import { snake } from "./snake.js";
import { game } from "./game.js";
import { startGame } from "./gameLaunch.js";
import { pauseGame } from "./pauseHandler.js";
export { restartGame, tryAgainHandler };
function restartGame() {
  darkBackground.classList.toggle("toggled");
  scoreBoard.innerText = "0";
  document.addEventListener("keydown", snake.movingControls.bind(snake));
  requestAnimationFrame(startGame);
  pauseGame();
  buttonTryAgain.removeEventListener("click", tryAgainHandler);
}

function tryAgainHandler(event) {
  event.preventDefault();
  snake.reset();
  game.reset();
  restartGame();
}
