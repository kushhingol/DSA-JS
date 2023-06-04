type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  subscribedObj!: object;
  constructor() {
    this.subscribedObj = {};
  }
  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.subscribedObj[eventName]) {
      this.subscribedObj[eventName].push(callback);
    } else {
      this.subscribedObj[eventName] = [callback];
    }
    return {
      unsubscribe: () => {
        this.subscribedObj[eventName].pop();
        return;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const eventSubscriptionList = this.subscribedObj[eventName];
    const isSubscribed =
      !!eventSubscriptionList && eventSubscriptionList.length;
    if (isSubscribed) {
      return eventSubscriptionList.map((fn) => fn(...args));
    }
    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
