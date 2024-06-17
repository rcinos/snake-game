import { Observer } from './observer';

export class ScoreDisplay implements Observer {
    update(score: number): void {
        console.log(`Score: ${score}`);
    }
}
