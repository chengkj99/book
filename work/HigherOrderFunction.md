
## 什么是高阶函数

高阶函数是指至少满足下列条件之一的函数。
* 函数可以作为参数被传递;
* 函数可以作为返回值输出。

## 高阶函数应用场景

### 函数作为参数传递

```js
const getUserInfo = function (uid, callback) {
  $.ajax(`http://xxx.com/getUserInfo?uid=${uid}`, function(data){
    callback(data)
  })
}

getUserInfo(101, function(data) {
  console.log(data)
})

```

### 函数作为返回值输出

以判断数据的类型为例。

```js
const isType = function(type) {
  return function(obj){
    return Object.prototype.toString.call(obj) === `[Object ${type}]`
  }
}

const isString = isType('String')
const isNumber = isType('Number')
const isArray = isType('Array')
```

<!-- ### 高阶函数实现AOP -->

### 高阶函数的其他应用

#### 1. 函数科里化（也称部分求值）

```js
const currying = function(fn) {
  const args = []
  return function() {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return arguments.callee
    }
  }
}
const cost = (function() {
  let money = 0;
  return function() {
    for (let i = 0; i < arguments.length; i++) {
      money += arguments[i]
    }
    return money
  }
})()
const cost = currying(cost) // 转成 currying 函数
cost(10) // 未求值
cost(20) // 未求值
cost(30) // 未求值
console.log(cost()) 求值并输出：600
```

#### 2. 函数节流

将即将被执行的函数用 setTimeout 延迟一段时间执行。如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求。 throttle 函数接受 2 个参数，第一个参数为需要被延迟执行的函数，第二个参数为延迟执行的时 间。具体实现代码如下:

```js
const throttle = function(fn, interval) {
  let self = fn
  let isFirstTime = true
  let timer = null

  return function() {
    let args = arguments
    let me = this

    if (isFirstTime) {
      // 第一次不需要延迟执行
      self.apply(this, args)
      return isFirstTime = false
    }
    if (timer) {
      // 如果定时器还在，说明前一次延迟执行还没有完成
      return false
    }

    timer = setTimeout(function() {
      // 延迟一段时间执行
      clearInterval(timer)
      timer = null
      self.apply(me, args)
    }, interval)
  }
}

```

#### 3. 分时函数

某些函数确实是用户主动调用的，但因为一些客观的原因，这些函数会严 重地影响页面性能。如果一个好友用一个节点来表示，当我们在页面中渲染这个列表的时候，可能要一次性往页面中创建成百上千 个节点。在短时间内往页面中大量添加 DOM 节 点显然也会让浏览器吃不消，我们看到的结果往往就 是浏览器的卡顿甚至假死。代码如下:

```js
const arry = [];
for (let i = 1; i <= 1000; i++){
  arry.push( i ); // 假设 arry 装载了 1000 个好友的数据
};
let renderList = function(data) {
  for (let i = 0; i < data.length; i++){
    let div = document.creatElement('div')
    div.innerHtml = i
    document.body.appendChild(div)
  }
}
renderList(arry)
```
这个问题的解决方案之一是下面的 timeChunk 函数，timeChunk 函数让创建节点的工作分批进行，比如把 1 秒钟创建 1000 个节点，改为每隔 200 毫秒创建 8 个节点。
timeChunk 函数接受 3 个参数，第 1 个参数是创建节点时需要用到的数据，第 2 个参数是封装了创建节点逻辑的函数，第 3 个参数表示每一批创建的节点数量。代码如下:

```js
const timeChunk = function(array, fn, count) {
  let t, cur
  let start = function() {
    for (let i = 0; i < Math.min(count || 1, array.length); i++) {
      cur = array.shift()
      fn(cur)
    }
  }
  return function() {
    t = setInterval(function() {
      if (array.length === 0) {
        clearInterval(t)
      }
      start()
    }, 300)
  }
}

let renderList = timeChunk(array, function(n) {
  console.log(n)
}, 10)
renderList()
```

#### 4. 惰性加载函数

 addEvent 被声明为一个普通函数，在函数里依然有一些分支判断。但是在第一次进入条件分支之后，在函数内部会重写这个函数，重写之后的函数就是我们期望的 addEvent 函数，在下一次进入 addEvent 函数的时候，addEvent 函数里不再存在条件分支语句:

```js
var addEvent = function( elem, type, handler ) {
  if ( window.addEventListener ){
    addEvent = function( elem, type, handler ) {
      elem.addEventListener( type, handler, false );
    }
  } else if ( window.attachEvent ){
    addEvent = function( elem, type, handler ) {
       elem.attachEvent( 'on' + type, handler );
    }
  }
  addEvent( elem, type, handler );
};
```
