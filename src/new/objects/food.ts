import { GameObject } from './gameObject';

export class Food extends GameObject {
    private img: HTMLImageElement;

    constructor(x: number, y: number, cellSize: number, imgSrc: string) {
        super(x, y, cellSize);
        this.img = new Image();
        this.img.src = imgSrc;
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (this.img.complete) {
            ctx.drawImage(this.img, this.x, this.y, this.cellSize, this.cellSize);
        } else {
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, this.cellSize, this.cellSize);
            };
        }
    }
}
