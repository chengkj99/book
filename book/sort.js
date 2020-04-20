// 冒泡排序
function bubbleSort(array) {
  let len = array.length
  for (let i = len - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

const arr1 = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
console.log(bubbleSort(arr1))

// 选择排序
function selectionSort(array) {
  let len = array.length
  for (let i = 0; i < len; i++) {
    let minValue = array[i]
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (minValue > array[j]) {
        minValue = array[j]
        minIndex = j
      }
    }
    let temp = array[i]
    array[i] = minValue
    array[minIndex] = temp
  }
  return array
}

const arr2 = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
console.log(selectionSort(arr2))

// 插入排序
function insertionSort(array) {
  let len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const arr3 = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
console.log(insertionSort(arr3))


// 归并排序
function mergeSort(array) {
  if (array.length == 1) return array;
  let len = array.length
  let mid = Math.floor(len / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let temp = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      temp.push(left.shift())
    } else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left).concat(right)
}
const arr4 = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
console.log(mergeSort(arr4))

// 快速排序
function quickSort(array) {
  if (array.length < 1) return array
  let pivotIndex = Math.floor(array.length / 2)
  let pivotValue = array.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat([pivotValue], quickSort(right))
}

const arr5 = [5, 8, 2, 1, 2, 3, 4, 6, 8, 9]
console.log(quickSort(arr5))
