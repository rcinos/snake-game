import { buttonTryAgain, darkBackground, scoreBoard } from "./animationSetup";
import { snake } from "./snake";
import { startGame } from "./gameLaunch";
import { game } from "./game";
export { restartGame, tryAgainHandler };
function restartGame() {
  darkBackground.classList.toggle("toggled");
  scoreBoard.innerText = "0";
  document.addEventListener("keydown", snake.movingControls.bind(snake));
  requestAnimationFrame(startGame);
  buttonTryAgain.removeEventListener("click", tryAgainHandler);
}

function tryAgainHandler(event) {
  event.preventDefault();
  snake.reset();
  game.reset();
  restartGame();
}
