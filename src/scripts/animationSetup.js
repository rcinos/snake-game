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
