// 数组的查找

// 线性查找

function lineSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i
    }
  }
}

const a = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
// console.log(lineSearch(a, 3))

// 二分查找

a.sort((a, b) => (a - b))

function binarySearch(array, target, start = 0, end = array.length) {
  if (start > end) return -1
  let mid = Math.floor((end + start) / 2)
  if (target > array[mid]) {
    return binarySearch(array, target, mid + 1, end)
  } else if (target < array[mid]) {
    return binarySearch(array, target, start, mid - 1)
  } else {
    return mid
  }
}

function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    let mid = Math.floor(end - start / 2)
    if (target > array[mid]) {
      start = start + 1
    } else if (target < array[mid]) {
      end = end - 1
    } else if (target === array[mid]) {
      return mid
    }
  }
  return -1
}

console.log(a)
console.log(binarySearch(a, 3))
