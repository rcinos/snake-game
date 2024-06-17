export interface Observer {
    update(score: number): void;
}

export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}
