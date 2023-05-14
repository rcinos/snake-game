import { startGame } from "./gameLaunch";
import {pauseGame} from "./pauseHandler";

export {
  ctx,
  scoreBoard,
  canvas,
  darkBackground,
  score,
  buttonTryAgain,
  width,
  height,
  grid,
  maxStep,
  gameDifficultyHandler,
  buttonYes,
  wrapper,
  buttonDisplay,
  difficultyLevel,
    buttonPause
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreBoard = document.getElementById("score-board");
const grid = 16;
const width = canvas.width / grid;
const height = canvas.height / grid;
const darkBackground = document.getElementById("dark-background");
const buttonTryAgain = document.getElementById("try-again");
const score = document.getElementById("score");
const gameSettings = document.getElementById("game-settings");
const buttonYes = document.getElementById("button-yes");
const buttonDisplay = document.getElementById("button-display");
const wrapper = document.getElementById("wrapper");
const difficultyLevel = document.getElementById("difficulty-level");
const buttonPause = document.getElementById("pause-button")

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
