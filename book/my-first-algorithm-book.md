# 我的第一步算法书

## 0 算法基本知识

### 什么是算法

算法是计算机解决问题的步骤。

算法和程序的区别：算法和程序有些相似，区别在于程序是以计算机能够理解的编程语言编写而成的，可以在计算机上运行，而算法是以人类能够理解的方式描述的，用于编写程序之前。

如何选择算法：从**时间**和**空间**两个维度考虑选择，运行过程中不需要耗费太多空间资源的算法，就十分适用于内存小的计算机。不过，一般来说我们最为重视的是算法的运行时间，即从输入数据到输出结果这个过程所 花费的时间。

计算机的运算能力：高性能的计算机 1 秒能计算 1 万亿（$10^{12}$）次。

### 运行时间的计算方法

使用「步数」来描述运行时间，计算运算的步数（如：`5Tx n3 +12Ty n2 +3Tz n`）， 使用 O($n^3$) 表示。

> O 这个符号的意思是「忽略重要项以外的内容」，读音同 Order。O(n2) 的含义就是「算法的运行时间最长也就是 n2 的常数倍」

## 1 数据结构

### 什么是数据结构

数据存储于内存时，决定了数据顺序和位置关系的便是「数据结构」。

将数据存储于内存时，根据使用目的选择合适的数据结构，可以提高内存的利用率。

### 链表

数据呈线性排列，在链表中数据的添加和删除比较方便，就是访问比较耗费时间。

在链表中添加数据和删除数据只需要改变指针的指向即可，时间复杂度为 O(1)；访问数据时由于最多有可能需要遍历一遍，所以时间复杂度 O(n)。

#### 链表的扩展

- 循环链表

  循环链表没有头和尾的概念。想要保存数量固定的最新数据时通常会使用这种链表。

- 双向链表

  使用这种链表，不仅可以从前往后， 还可以从后往前遍历数据，十分方便。但是，双向链表存在两个缺点:一是指针数的增加会导致存储空间需求增加;二是 添加和删除数据时需要改变更多指针的指向。

### 数组

呈线性排列。与前一节中的链表不同，在数组中，访问数据十分简单，而添加和删除数据比较耗工夫。

|      | 访问 | 添加 | 删除 |
| ---- | ---- | ---- | ---- |
| 链表 | 慢   | 快   | 快   |
| 数组 | 快   | 慢   | 慢   |

### 栈

数据呈线性排列，栈就像一摞书，放书时放在最上面，取书时从最上面取。后出先出（LIFO: Last In First Out）的数据结构。

添加和删除数据的操作只能在一端进行，访问数据也只能访问到顶端的数据。想要访问中间的数据时，就必须通过出栈操作将目标数据移到栈顶才行。

> 栈的使用:
>
> 栈只能在一端操作这一点看起来似乎十分不便，但在只需要访问最新数据时，使用它就比较方便了。

### 队列

数据也呈线性排列。和栈类似，但是队列的添加和删除数据的操作分别可以在两端进行。就像是一排人站队。先进先出（FIFO：First In First Out）的数据结构。

> 应用案例：
>
> 「先来的数据先处理」是非常常见的思路。

### 哈希表

哈希表存储的是由键(key)和值(value)组 成的数据。

计算哈希值，通过 mod 运算得到存储的位置，进行存储，如果位置冲突，则使用链表进行存储。

### 堆

是一种树形结构，被用于实现「优先队列」。

堆中最顶端的数据始终最小，所以无论数据量多少，取出最小值的时间复杂度都是 O(1)。

> 应用案例
>
> 如果需要频繁地从管理的数据中取出最小值，那么使用堆来操作会非常方便。

### 二叉查找树

二叉查找树（也称二叉搜索树或二叉排序树），是一种图的树形结构。

二叉查找树有两个性质：

- 第一个是每个结点的值均大于其左子树上任意一个结点的值。比如，结点 9 大于其左子树上的 3 和 8。
- 第二个是每个结点的值均小于其右子树上任意 一个结点的值。比如结点 15 小于其右子树上的 23、17 和 28。

## 2 排序

### 什么是排序

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

## 数组的查找

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

### 选择哪种查找方式

二分查找相比较于线性查找的效率是指数级的提升；二分查找的前提是已排序的数组，所以这要求数组在添加操作时，要求将数组加到对应的位置；

线性查找是不要求数组的顺序，不限制操作方式。

所以这两种的选择，**如果是  查找多，操作少的情况下选择二分查找；如果是查找少操作多的情况下选择线性查找**。

## 图的搜索

### 什么是图

这个图不是我们常说的「饼状图」、「柱状图」等等，而是指计算机中的图。计算机中的图的含义：由顶点和连接每对顶点的边所构成的图形就是图。

#### 图可以表现各种关系

通过图可以表示铁路线、网络拓扑结构、人和人之间的关系等等。

#### 加权图

我们还可以给边加上一个值，这个值叫作边的「权重」或者「权」。没有权的边只能表示两个顶点的连接状态，而有权的边就可以表示顶点之间的「连接程度」。这个「程度」可以根据图的内容含义代表着不同的含义，如：传输数据的时间、车票的价格、关系的密切程度等等。

#### 有向图

有时间两个点之间的链接是有方向的，这个时候构成有向图。比如：网络的链接就具有方向性。

#### 图带给我们的便利

在一些问题上：寻找计算机网络中通信时间最短的路径，寻找路线图中耗时最短的路径，寻找路线图中最省乘车费的路径等等，这类问题可以通过图来表示这些关系，这样我们就可以用解决图问题的算法解决看似不一样的问题了。

#### 图的搜索算法

- 广度优先搜索
- 深度优先搜索

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
