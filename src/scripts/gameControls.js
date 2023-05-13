import { canvas } from "./animationSetup";

export { GameControls, gameControls };
class GameControls {
  grid = 16;
  width;
  height;
  step = 0;
  maxStep = 10;
  constructor() {
    this.width = canvas.width / this.grid;
    this.height = canvas.height / this.grid;
  }
}

const gameControls = new GameControls();
