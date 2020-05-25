# 异步 JS

程序都是顺序执行，同一时刻只会发生一件事。如果一个函数依赖于另一个函数的结果，它只能等待那个函数结束才能继续执行，从用户的角度来说，整个程序才算运行完毕.

JavaScript 是一种同步的、阻塞的、单线程的语言，在这种语言中，一次只能执行一个操作。即使有多个内核，也只能在单一线程上运行多个任务，此线程称为主线程（main thread）

经过发展，javaScript 获得了一些工具来帮助解决这种问题。通过 Web workers 可以把一些任务交给一个名为 worker 的单独的线程，这样就可以同时运行多个 JavaScript 代码块。一般来说，用一个 worker 来运行一个耗时的任务，主线程就可以处理用户的交互（避免了阻塞）

## Web Workers

Web Workers 相当于开辟了新的线程进行干活。

web workers 相当有用，但是他们确实也有局限。

主要的一个问题是他们不能访问 DOM — 不能让一个 worker 直接更新 UI。我们不能在 worker 里面渲染 1 百万个蓝色圆圈，它基本上只能做算数的苦活。

不能处理依赖，所以需要异步处理

## Callbacks

例子： 异步 callback 就是 addEventListener()第二个参数

```js
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

请注意，不是所有的回调函数都是异步的 — 有一些是同步的。比如使用 Array.prototype.forEach() 来遍历数组

```js
const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach(function(eachName, index) {
  console.log(index + '. ' + eachName);
});
```

## Promise

promise 是表示异步操作完成或失败的对象。可以说，它代表了一种中间状态。

像 promise 这样的异步操作被放入事件队列中，事件队列在主线程完成处理后运行，这样它们就不会阻止后续 JavaScript 代码的运行。排队操作将尽快完成，然后将结果返回到 JavaScript 环境。

promises 相比较 callbacks 的优点:

- 避免回调地狱
- 顺序调用
- 通过 `catch()` 统一错误处理

## async awit

构造在 promises 之上的语法糖，允许您使用更像编写同步回调代码的语法来运行异步操作。

Async/await 让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。 但是 await 关键字会阻塞其后的代码，直到 promise 完成，就像执行同步操作一样。

有一种模式可以缓解这个问题 ––通过**将 Promise 对象存储在变量中来同时开始它们**，然后等待它们全部执行完毕。让我们看一些证明这个概念的例子。

```js
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('done');
    }, interval);
  });
}

async function timeTest1() {
  // 一个一个开始
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
async function timeTest2() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  // 同时开始
  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}

let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert('Time taken in milliseconds: ' + timeTaken); // timeTest1 9秒+，timeTest2 3秒+
});
```

相关链接

- https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/Choosing_the_right_approach
