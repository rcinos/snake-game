import { ctx, grid, height, width } from "./animationSetup";

export { snake };

class Snake {
  #snakeBody;
  #snakeGrows;
  #direction;
  #drawnDirection;

  constructor() {
    this.snakeBody = [
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
    ];
    this.snakeGrows = false;
    this.direction = "down";
    this.drawnDirection = "down";
  }
  drawSnake() {
    this.drawnDirection = this.direction;
    this.snakeBody.slice(0, this.snakeBody.length - 1).forEach((cell) => {
      ctx.fillStyle = "#A00034";
      ctx.fillRect(cell[0] * grid, cell[1] * grid, grid, grid);
    });
    this.drawHead();
  }

  drawHead() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.head[0] * grid, this.head[1] * grid, grid, grid);
  }

  move() {
    if (!this.snakeGrows) {
      this.snakeBody.shift();
    }
    switch (this.direction) {
      case "down":
        this.#moveDown();
        break;
      case "up":
        this.snakeBody.push(this.#moveUp());
        break;
      case "left":
        this.snakeBody.push(this.#moveLeft());
        break;
      case "right":
        this.#moveRight();
        break;
    }
    this.snakeGrows = false;
  }

  hitsBerry(x, y) {
    return this.#containsCoordinates([x, y], this.head);
  }

  hitsItself() {
    const usedElements = [];
    return this.snakeBody.some((el) => {
      if (usedElements.includes(String(el))) {
        return true;
      }
      usedElements.push(String(el));
    });
  }

  movingControls(event) {
    if (event.code === "KeyS") {
      if (this.direction !== "up" && this.drawnDirection !== "up") {
        this.direction = "down";
      }
    } else if (event.code === "KeyA") {
      if (this.direction !== "right" && this.drawnDirection !== "right") {
        this.direction = "left";
      }
    } else if (event.code === "KeyD") {
      if (this.direction !== "left" && this.drawnDirection !== "left") {
        this.direction = "right";
      }
    } else if (event.code === "KeyW") {
      if (this.direction !== "down" && this.drawnDirection !== "down") {
        this.direction = "up";
      }
    }
  }

  reset() {
    this.snakeBody = [
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
    ];
    this.snakeGrows = false;
    this.direction = "down";
    this.drawnDirection = "down";
  }

  #containsCoordinates(xy, ab) {
    return ab[0] === xy[0] && ab[1] === xy[1];
  }
  #moveLeft() {
    if (this.head[0] === 0) {
      return [this.head[0] + width - 1, this.head[1]];
    }
    return [(this.head[0] - 1) % width, this.head[1]];
  }
  #moveUp() {
    if (this.head[1] === 0) {
      return [this.head[0], this.head[1] + height - 1];
    }
    return [this.head[0] % width, (this.head[1] - 1) % height];
  }
  #moveRight() {
    this.snakeBody.push([(this.head[0] + 1) % width, this.head[1] % height]);
  }
  #moveDown() {
    this.snakeBody.push([this.head[0] % width, (this.head[1] + 1) % height]);
  }
  get snakeBody() {
    return this.#snakeBody;
  }
  set snakeBody(newBody) {
    if (typeof newBody === "object") {
      this.#snakeBody = newBody;
    } else {
      throw new Error("incorrect type for snakeBody variable");
    }
  }

  get snakeGrows() {
    return this.#snakeGrows;
  }
  set snakeGrows(value) {
    this.#snakeGrows = value;
  }
  get head() {
    return this.snakeBody[this.snakeBody.length - 1];
  }
  get direction() {
    return this.#direction;
  }
  set direction(newDirection) {
    this.#direction = newDirection;
  }
  get drawnDirection() {
    return this.#drawnDirection;
  }
  set drawnDirection(newDrawnDirection) {
    this.#drawnDirection = newDrawnDirection;
  }
}

let snake = new Snake();
