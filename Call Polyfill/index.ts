export {};
declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

/*

The below solution is more preferable in JS env as ts will complain about
we can't use hiddenKey as index type in context

Function.prototype.callPolyfill = function (
  context: Record<any, any>,
  ...args
) {
  // created unique hidden key using Symbol constructor
  const hiddenKey = Symbol();

  // Assigned this i.e the parent method in the context object, (Similar to this.bind(obj))
  context[hiddenKey] = this;

  // fetching the result
  const result = context[hiddenKey](...args);

  delete context[hiddenKey];
  return result;
};
*/

Function.prototype.callPolyfill = function (
  context: Record<any, any>,
  ...args
) {
  const parentFn = this;

  Object.defineProperty(context, "func", {
    value: parentFn,
    enumerable: false, //this will hide the property while looping the keys
  });

  return context["func"](...args);
};

const fn = function add(b) {
  return this.a + b;
};

console.log(fn.callPolyfill({ a: 5 }, 7));
