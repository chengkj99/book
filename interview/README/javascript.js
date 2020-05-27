// JS 应用

// 实现一个 bind

function bind(context, fn) {
  return function () {
    fn.apply(context, arguments)
  }
}

Function.prototype.bind = function (context) {
  let that = this
  return function () {
    that.apply(context, arguments)
  }
}


// 实现一个函数节流 throttle，函数防抖 debounce

// 防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。
// 节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// function dobounce(fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer)
//     // 保证执行环境的上下文和参数
//     let context = this;
//     let args = arguments;
//     timer = setTimeout(() => {
//       fn.apply(context, args)
//     }, delay)
//   }
// }

// function throttle(fn, delay) {
//   let timer;
//   let last;
//   return function () {
//     const context = this;
//     const args = arguments;
//     let now = +new Date()
//     if (last && now < last + delay) {
//       clearTimeout(timer)
//       // 如果后面不再执行了，将最后这次执行
//       timer = setTimeout(() => {
//         last = now
//         fn.apply(context, args)
//       }, delay)
//     } else {
//       last = now
//       fn.apply(context, args)
//     }
//   }
// }



// function dobounce(fn, delay) {
//   let timer;
//   return function() {
//     clearInterval(timer)
//     const args = arguments
//     const self = this
//     timer =  setInterval(() => {
//       fn.apply(self, args)
//     }, delay);
//   }
// }

function throttle (fn, delay) {
  let timer
  let last
  return function () {
    let now = +new Date()
    const args = arguments
    const self = this
    if (last && last < now + delay) {
      last = +new Date()
      timer = setTimeout(() => {
        fn.apply(self, args)
      })
    } else {
      clearTimeout(timer)
      last = +new Date()
    }
  }
}


const outputName = throttle(() => {
  console.log('heihei')
}, 1000)

function main() {
  for (let i = 0; i < 20; i++) {
    console.log('index', i)
    setTimeout(() => {
      console.log('do', i)
      outputName()
    }, 500)
  }

}

main()
