import { GameObject } from "./gameObject";
import { Snake } from "./snake";
import { Food } from "./food";


export class GameObjectFactory {
  static createObject(
    type: "snake" | "food",
    x: number,
    y: number,
    cellSize: number,
    imgSrc?: string,
  ): GameObject {
    switch (type) {
      case "snake":
        return new Snake(x, y, cellSize);
      case "food":
        if (imgSrc) {
          return new Food(x, y, cellSize, imgSrc);
        } else {
          throw new Error("Image source is required for food");
        }
      default:
        throw new Error("Unknown type");
    }
  }
}
