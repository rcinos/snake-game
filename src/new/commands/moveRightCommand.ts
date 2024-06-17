import { Command } from "./command";
import {Snake} from "../objects/snake.ts";

export class MoveRightCommand implements Command {
  private snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }

  execute(): void {
    this.snake.changeDirection({ x: this.snake.cellSize, y: 0 });
  }
}
