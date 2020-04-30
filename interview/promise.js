// 语法
const promise = new Promise((resolve, reject) => {
  // executor
})



//

// Promise.all()

// Promise.race()

// Promise.reject()


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

// Promise.toString()

// Promise.catch()
