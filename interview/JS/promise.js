// 语法
const promise = new Promise((resolve, reject) => {
  // executor
})


// Promise.reject()

Promise.reject = function (val) {
  return new Promise((resolve, reject) => {
    reject(val)
  })
}

// Promise.resolve()

Promise.resolve = function (val) {
  return new Promise((resolve, reject) => {
    resolve(val)
  })
}

const p = Promise.resolve({
  then: (resolve) => {
    throw Error('Error')
    resolve("Resolving")
  }
})
p.then((value) => {
  // 不会被调用
}).catch((error) => {
  console.log('..', error)
})




// Promise.then()
Promise.then = function (onFufilled, onRejected) {
  if (this.status === 'resolve') {
    onFufilled(this.value)
  }
  if (this.status === 'reject') {
    onRejected(this.reason)
  }
}


// Promise.prototype.catch
Promise.prototype.catch = function (onRejected) {
  return Promise.then(null, onRejected)
}


// Promise.all
const all = function (promises) {
  let data = []
  let len = promises.length
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      promises[i].then(res => {
        data[i] = res
      }, err => {
        reject(err)
      })
    }
    resolve(data)
  })
}

const p1 = Promise.resolve(3)
const p2 = Promise.resolve(2)

all([p1, p2]).then((res) => {
  console.log(res)
}) // [ 3, 2 ]


// Promise.race
const race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

const p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'three');
});
const p4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'four');
});
const p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 150, 'five');
});

race([p3, p4, p5]).then((data) => {
  console.log(data)
})




// reject promise


// const p6 = new Promise((resolve, reject) => {
//   // Promise.reject(Promise.resolve(99))
//   reject(new Error(99))
// })
// p6.then(data => {
//   console.log(data)
// }, err => console.log('11111', err)).catch(err => console.log('2222', err))


// let promise1 = new Promise((resolve, reject) => {
//   // setTimeout(() => reject(new Error("Whoops!")), 1000);
//   reject(new Error("Whoops!"))
// });

// // .catch(f) is the same as promise.then(null, f)
// // promise1.catch((err) => { console.log('333', err)});
// promise1.catch(console);
