class TimeLimitedCache {
  cacheObj!: object;
  timeOut!: any;
  constructor() {
    this.cacheObj = {};
    this.timeOut = null;
  }

  set(key: number, value: number, duration: number): boolean {
    let isKeyPresent = false;

    // clears out exisiting key timeout if the value is set again for the same key
    if (this.timeOut && this.cacheObj[key]) {
      clearTimeout(this.timeOut);
    }

    if (this.cacheObj[key]) {
      isKeyPresent = true;
    }

    this.cacheObj[key] = value;

    this.timeOut = setTimeout(() => {
      delete this.cacheObj[key];
    }, duration);

    return isKeyPresent;
  }

  get(key: number): number {
    return this.cacheObj[key] ? this.cacheObj[key] : -1;
  }

  count(): number {
    return Object.keys(this.cacheObj).length;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
