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
  gameSettings,
  buttonYes,
  wrapper,
  buttonDisplay,
  difficultyLevel,
  buttonPause,
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
const buttonPause = document.getElementById("pause-button");
