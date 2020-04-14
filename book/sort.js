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

