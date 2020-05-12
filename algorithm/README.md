# 算法

## 基本概念

- 算法：计算机解决问题的步骤。
- 数据结构：内存数据之间的位置和关系。
- 算法和数据结构的目标：提高效率。（算法是解决问题的效率；数据结构是提高数据的存取效率和内存利用率。）

## 数据结构

- 数组
- 链表
- 栈
- 堆
- 队列
- 哈希表
- 二叉树

## 算法概览

![算法概览](/algorithm/algorithm.png)

[算法概览](https://zh.wikipedia.org/wiki/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95)

图中需要掌握的核心算法：

- 排序算法
  - 线性排序
  - 比较排序
- 搜索算法
  - 列表搜索
  - 树、图的搜索
- 其他算法
  - 动态规划
  - 贪心算法

## 排序算法

排序就是将输入的数字按照从小到大的顺序进行排列

### 冒泡排序

冒泡排序就是重复「从序列右边开始比较相邻两个数字的大小，再根据结果交换两个数字的位置」这一操作的算法。

```js
function bubbleSort(array) {
  let len = array.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
```

### 选择排序

选择排序就是重复「从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换」这一操作的算法。在序列中寻找最小值时使用的是线性查找。

```js
function selectionSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let minValue = array[i];
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (minValue > array[j]) {
        minValue = array[j];
        minIndex = j;
      }
    }
    let temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
}
```

### 插入排序

插入排序是一种从序列左端开始依次对数据进行排序的算法。在排序过程中，左侧的数据陆续归位，而右侧留下的就是还未被排序的数据。插入排序的思路就是从右侧的未排序区域内 取出一个数据，然后将它插入到已排序区域内合适的位置上。

```js
// 插入排序
function insertionSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
```

### 归并排序

把序列分成长度相同的两个子序列，当无法继续往下分时（也就是每个子序列只有一个数据时），就对子序列进行归并。归并是指把两个排列好的子序列合并成一个有序序列。重复执行该操作。

将一整个序列，分段排序之后，进行一段一段的组装，组装过程中比较第一个数，将小的数加入新的数组中(由于是每一段都是从小到大排序的，当第一个数小于另一段中的第一个数，那么这个数也就小于这一小整段的数)，然后将剩下的数组进行连接。

```js
function mergeSort(array) {
  if (array.length == 1) return array;
  let len = array.length;
  let mid = Math.floor(len / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right)); // 将一个序列进行拆分
}

function merge(left, right) {
  let temp = [];
  while (left.length > 0 && right.length > 0) {
    // 取第一个数比较，将较小的数放进数组，重复此操作完成合并
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return temp.concat(left).concat(right); // 连接剩下的数组
}
```

### 快速排序

快速排序算法首先会在序列中随机选择一个基准值(pivot)，然后将除了基准值以外的数分为「比基准值小的数」和「比基准值大的数」这两个类别，再将其排列成以下形式。

[ 比基准值小的数 ] 基准值 [ 比基准值大的数 ]，递归这个操作。

```js
function quickSort(array) {
  if (array.length < 1) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivotValue = array.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([pivotValue], quickSort(right));
}
```

## 数组查找算法

### 线性查找

```js
function lineSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
}
```

### 二分查找

```js
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let mid = Math.floor(end - start / 2);
    if (target > array[mid]) {
      start = start + 1;
    } else if (target < array[mid]) {
      end = end - 1;
    } else if (target === array[mid]) {
      return mid;
    }
  }
  return -1;
}
```

## 图的搜索算法

### 广度优先搜索

```js
function bfs(root) {
  let nodes = [];
  let queue = [root];
  while (queue.length > 0) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      nodes.push(queue[i].key);
      newQueue = newQueue.concat(queue[i].children);
    }
    queue = newQueue;
  }
  return nodes;
}
```

### 深度优先搜索

```js
function dfs(root) {
  let nodes = [];
  if (!root) return [];
  nodes.push(root.key);
  root.children.forEach(node => {
    nodes = nodes.concat(dfs(node));
  });
  return nodes;
}
```

### 相关题

#### 求二叉树的宽度

```js
function getTreeWidth(tree) {
  let queue = [tree];
  let maxMidth = 0;
  while (queue.length > 0) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      let left = queue[i].left;
      let right = queue[i].right;
      left && newQueue.push(left);
      right && newQueue.push(right);
    }
    maxWidth = Math.max(maxMidth, newQueue.length);
    queue = newQueue;
  }
  return maxWidth;
}
```

#### 求二叉树的最大深度

```js 求二叉树的深度
function getTreeHight(tree) {
  if (!tree) {
    return 0;
  }
  let maxHeight = 0;
  let leftH = getTreeHeight(tree.left);
  let rightH = getTreeHeight(tree.right);

  return leftH > rightH ? leftH : rightH;
}
```

#### 镜像复制二叉树

```js
function mirrortCopyTree(tree) {
  if (!tree) return null;
  [tree.left, tree.right] = [tree.right, tree.left];
  mirrortCopyTree(tree.right);
  mirrortCopyTree(tree.left);
}
```

## 最优解算法

### 动态规划算法

若要解一个给定问题，我们先解其子问题，再根据子问题的解以得出原问题的解。

### 贪心算法（greedy algorithm）

是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。

### 两者区别

| 算法     | 相同点         | 区别          | 案例问题         |
| -------- | -------------- | ------------- | ---------------- |
| 动态规划 | 解决重叠子问题 | A 最优+B 最优 | 背包问题         |
| 贪心     | 解决重叠子问题 | （A+B）最优   | 最小生成树的算法 |

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

贪心的 A 为是前一步的最优结果，B 最优需要遍历找到。动态规划的 A 为前一步的可行解，需要选择一个 B 后再去找 A。

也可以在某种程度上说，动规是贪心的泛化，贪心是动规的特例。
