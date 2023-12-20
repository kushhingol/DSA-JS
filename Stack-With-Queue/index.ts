export class MyStack {
  private queue: Array<any>;
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.unshift(x);
  }

  pop(): number {
    return this.queue.shift();
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
