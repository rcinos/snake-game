import { Observer, Subject } from "./observer";

export class GameManager implements Subject {
  private static instance: GameManager;
  private score: number = 0;
  private observers: Observer[] = [];
  private gameOver: boolean = false;

  private constructor() {}

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  public unsubscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      return;
    }
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify(): void {
    this.observers.forEach((observer) => observer.update(this.score));
  }

  public updateScore(points: number): void {
    this.score += points;
    this.notify();
  }

  public getScore(): number {
    return this.score;
  }

  public setGameOver(): void {
    this.gameOver = true;
  }

  public isGameOver(): boolean {
    return this.gameOver;
  }
}
