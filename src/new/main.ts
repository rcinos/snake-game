import { GameManager } from "./game/gameManager";
import { ScoreDisplay } from "./game/scoreDisplay";
import { GameObjectFactory } from "./objects/gameObjectFactory";
import { MoveUpCommand } from "./commands/moveUpCommand";
import { MoveDownCommand } from "./commands/moveDownCommand";
import { MoveLeftCommand } from "./commands/moveLeftCommand";
import { MoveRightCommand } from "./commands/moveRightCommand";
import { Command } from "./commands/command";
import { Food } from "./objects/food";
import { Snake } from "./objects/snake";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Canvas element not found");
  }
  const score = document.getElementById("score") as HTMLDivElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }

  const gameManager = GameManager.getInstance();
  const scoreDisplay = new ScoreDisplay();
  gameManager.subscribe(scoreDisplay);

  const cellSize = 16; // Define the cell size

  const snakeInitialX =
    Math.floor((Math.random() * canvas.width) / cellSize) * cellSize;
  const snakeInitialY =
    Math.floor((Math.random() * canvas.height) / cellSize) * cellSize;
  const foodInitialX =
    Math.floor((Math.random() * canvas.width) / cellSize) * cellSize;
  const foodInitialY =
    Math.floor((Math.random() * canvas.height) / cellSize) * cellSize;

  const snake = GameObjectFactory.createObject(
    "snake",
    snakeInitialX,
    snakeInitialY,
    cellSize,
  ) as Snake;
  // Update the image source to the path of your apple image
  const appleImgSrc = "./../../assets/icons/red_point.svg";
  const food = GameObjectFactory.createObject(
    "food",
    foodInitialX,
    foodInitialY,
    cellSize,
    appleImgSrc,
  ) as Food;

  const commands: { [key: string]: Command } = {
    ArrowUp: new MoveUpCommand(snake),
    ArrowDown: new MoveDownCommand(snake),
    ArrowLeft: new MoveLeftCommand(snake),
    ArrowRight: new MoveRightCommand(snake),
  };
  document.addEventListener("keydown", (event) => {
    const command = commands[event.key];
    if (command) {
      command.execute();
    }
  });
  const speed = localStorage.getItem("speed")
    ? parseInt(localStorage.getItem("speed") as string)
    : 50;

  function gameLoop() {
    if (gameManager.isGameOver()) {
      console.log("Game Over!");
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    snake.render(ctx);
    food.render(ctx);
    score.innerText = gameManager.getScore().toString();

    // Check for collisions and update score
    if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
      gameManager.updateScore(1);
      food.x = Math.floor((Math.random() * canvas.width) / cellSize) * cellSize;
      food.y =
        Math.floor((Math.random() * canvas.height) / cellSize) * cellSize;
      snake.grow();
    }
  }

  // Use setInterval instead of requestAnimationFrame for controlling speed
  setInterval(gameLoop, speed);
});
