# Promise

promise 是一个代理一个值的对象，被代理的值在创建时是未知的，它允许你为这个值的成功和失败绑定处理方法。初始状态是 pending 状态，那个值的当成功回调时。

## Promise.all(iterable)

全部成功才会返回成功(结果按顺序)，一个失败就返回失败。

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'foo');
});
const promise3 = 42;

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, "foo", 42]
```

## Promise.race(iterable)

一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

如果传的迭代是空的，则返回的 promise 将永远等待。

```js
const promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

## Promise.reject(reason)

返回一个带有拒绝原因的 Promise 对象。

## Promise.resolve(value)

返回一个带着给定值解析过的 Promise 对象。

返回一个状态由给定 value 决定的 Promise 对象。如果该值是 thenable(即，带有 then 方法的对象)，返回的 Promise 对象的最终状态由 then 方法执行决定；否则的话(该 value 为空，基本类型或者不带 then 方法的对象),返回的 Promise 对象状态为 fulfilled，并且将该 value 传递给对应的 then 方法。
◊

## Promise.prototype.catch(onRejected)

catch() 方法返回一个 Promise，并且处理拒绝的情况。它的行为与调用 Promise.prototype.then(undefined, onRejected) 相同。

## Promise.prototype.then(onFulfilled, onRejected)

then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

## Promise.prototype.finally(onFinally)

finally() 方法返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式。
这避免了同样的语句需要在 then()和 catch()中各写一次的情况。
