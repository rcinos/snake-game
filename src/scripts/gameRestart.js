import { buttonTryAgain, darkBackground, scoreBoard } from "./gameSetup";
import { snake } from "./snake";
import { startGame } from "./gameLaunch";
import { game } from "./game";
import { pauseGame } from "./pauseHandler";
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
