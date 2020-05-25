// JS 应用

// 实现一个 bind

function bind(context, fn) {
  return function() {
    fn.apply(context, arguments)
  }
}

Function.proroty.bind = function() {

}

