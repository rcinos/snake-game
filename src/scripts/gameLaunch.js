import {
  ctx,
  scoreBoard,
  canvas,
  darkBackground,
  score,
  buttonTryAgain,
  buttonPause,
} from "./gameSetup";
import { snake } from "./snake.js";
import { game } from "./game.js";
import { pauseHandler } from "./pauseHandler.js";
import { maxStep } from "./gameDifficultyHandler";
import { tryAgainHandler } from "./gameRestart.js";

export { startGame, animFrame };
let step = 0;
let animFrame;
function startGame() {
  animFrame = requestAnimationFrame(startGame);
  if (++step < maxStep) {
    return;
  }
  step = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.move();
  snake.drawSnake();
  game.drawBerry();
  if (snake.hitsBerry(game.berryX, game.berryY)) {
    snake.snakeGrows = true;
    game.setNewBerryX();
    game.setNewBerryY();
    game.score += 1;
    scoreBoard.innerText = game.score;
  }
  if (snake.hitsItself()) {
    gameFinish();
  }
}

function gameFinish() {
  darkBackground.classList.toggle("toggled");
  score.innerHTML = `${game.score}`;
  buttonTryAgain.addEventListener("click", tryAgainHandler);
  document.removeEventListener("keydown", snake.movingControls.bind(snake));
  buttonPause.removeEventListener("click", pauseHandler);
  cancelAnimationFrame(animFrame);
}
