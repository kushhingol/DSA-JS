export class ArrayWrapper {
  private array: number[] = [];
  constructor(nums: number[]) {
    this.array = nums;
  }

  valueOf(): number {
    return this.array.reduce((prev, curr) => prev + curr, 0);
  }

  toString(): string {
    return `[${this.array}]`;
  }
}
