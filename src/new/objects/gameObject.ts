export abstract class GameObject {
  x: number;
  y: number;
  cellSize: number;

  constructor(x: number, y: number, cellSize: number) {
    this.x = x;
    this.y = y;
    this.cellSize = cellSize;
  }

  abstract render(ctx: CanvasRenderingContext2D): void;
}
