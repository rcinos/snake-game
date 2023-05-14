import { ctx, grid, height, width } from "./gameSetup";

export { game };

class Game {
  #berryImg = document.getElementById("red-point");
  #berryX;
  #berryY;
  #score;
  constructor() {
    this.#berryX = this.getRandomXPoint();
    this.#berryY = this.getRandomYPoint();
    this.#score = 0;
  }

  getRandomXPoint() {
    return Math.floor(Math.random() * width);
  }
  getRandomYPoint() {
    return Math.floor(Math.random() * height);
  }

  drawBerry() {
    ctx.drawImage(this.#berryImg, this.#berryX * grid, this.#berryY * grid);
  }
  reset() {
    this.#berryX = this.getRandomXPoint();
    this.#berryY = this.getRandomYPoint();
    this.#score = 0;
  }
  get berryX() {
    return this.#berryX;
  }
  setNewBerryX() {
    this.#berryX = this.getRandomXPoint();
  }
  get berryY() {
    return this.#berryY;
  }
  setNewBerryY() {
    this.#berryY = this.getRandomYPoint();
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    return (this.#score = newScore);
  }
}

let game = new Game();
