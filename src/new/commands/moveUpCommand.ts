import { Command } from "./command";
import {Snake} from "../objects/snake.ts";

export class MoveUpCommand implements Command {
  private snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }

  execute(): void {
    this.snake.changeDirection({ x: 0, y: -this.snake.cellSize });
  }
}
