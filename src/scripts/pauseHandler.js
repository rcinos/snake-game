import { buttonPause } from "./gameSetup";
import { startGame, animFrame } from "./gameLaunch";
export { pauseGame, pauseHandler };
let paused = false;
function pauseGame() {
  buttonPause.addEventListener("click", pauseHandler);
}

function pauseHandler() {
  if (!paused) {
    cancelAnimationFrame(animFrame);
    buttonPause.innerText = "Continue";
    paused = true;
  } else {
    requestAnimationFrame(startGame);
    paused = false;
    buttonPause.innerText = "Pause";
  }
}
