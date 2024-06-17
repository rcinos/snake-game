import { GameObject } from "./gameObject";
import { GameManager } from "../game/gameManager";

export class Snake extends GameObject {
  body: { x: number; y: number }[] = [
    { x: this.x, y: this.y },
    { x: this.x - this.cellSize, y: this.y },
    { x: this.x - 2 * this.cellSize, y: this.y },
  ];
  direction: { x: number; y: number } = { x: this.cellSize, y: 0 };
  canChangeDirection: boolean = true;

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "yellow"; // Color for the head
    ctx.fillRect(this.body[0].x, this.body[0].y, this.cellSize, this.cellSize);

    ctx.fillStyle = "green"; // Color for the rest of the body
    this.body
      .slice(1)
      .forEach((part) =>
        ctx.fillRect(part.x, part.y, this.cellSize, this.cellSize),
      );
    this.canChangeDirection = true;
  }

  move(): void {
    const newHead = {
      x: this.body[0].x + this.direction.x,
      y: this.body[0].y + this.direction.y,
    };

    // Wrap around screen edges
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    if (!canvas) {
      throw new Error("Canvas element not found");
    }

    if (newHead.x < 0) {
      newHead.x = canvas.width - this.cellSize;
    } else if (newHead.x >= canvas.width) {
      newHead.x = 0;
    }
    if (newHead.y < 0) {
      newHead.y = canvas.height - this.cellSize;
    } else if (newHead.y >= canvas.height) {
      newHead.y = 0;
    }

    // Check for self-collision
    for (let i = 0; i < this.body.length; i++) {
      if (newHead.x === this.body[i].x && newHead.y === this.body[i].y) {
        GameManager.getInstance().setGameOver();
        return;
      }
    }
    this.body.unshift(newHead);
    this.body.pop();
  }

  grow(): void {
    const newPart = {
      x: this.body[this.body.length - 1].x,
      y: this.body[this.body.length - 1].y,
    };
    this.body.push(newPart);
  }

  changeDirection(newDirection: { x: number; y: number }): void {
    // Prevent the snake from reversing
    if (
      this.direction.x + newDirection.x !== 0 ||
      this.direction.y + newDirection.y !== 0
    ) {
      if (this.canChangeDirection) {
        this.direction = newDirection;
        this.canChangeDirection = false;
      }
    }
  }
}
