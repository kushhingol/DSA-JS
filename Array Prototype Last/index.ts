export {};
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function (): number {
  const length = this.length;
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3

const arr2 = [];
console.log(arr2.last()); // -1
