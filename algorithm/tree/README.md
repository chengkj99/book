# 树

## 树和二叉树在数据结构上的区别

```js
// 普通树
const tree = {
  key: 1,
  children: {
    a: {
      key: 2,
      children: []
    }
    b: {
      key: 2,
      children: []
    }
  }
};
// 二叉树
const binaryTree = {
  key: 1,
  left: {
    key: 2
    left: {}
    right: {}
  },
  right: {
    key: 3
    left: {}
    right: {}
  }
};
```

## 构造二叉树

```js
class BinaryTree {
  constructor() {
    this.root = null;
  }
  getNode(value) {
    return {
      value,
      left: null,
      right: null
    };
  }

  insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  insert(value) {
    let newNode = this.getNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}
```

## 广度优先搜索

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

### 层序遍历

<!-- 利用队列的方式 -->

```js
function levelOrder(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let newQueue = [];
    queue.forEach(node => {
      result.push(node.val);
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    });
    queue = newQueue;
  }
  return result;
}
```

## 深度优先搜索

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

### 前序遍历

```js
function preorderTraversal(root) {
  if (!root) {
    return [];
  }
  let result = [];
  result.push(root.val);
  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));
  return result;
}
```

### 中序遍历

```js
function inorderTraversal(root) {
  if (!root) {
    return [];
  }
  let result = [];
  result = result.concat(inorderTraversal(root.left));
  result.push(root.val);
  result = result.concat(inorderTraversal(root.right));
  return result;
}
```

### 后序遍历

```js
function postorderTraversal(root) {
  if (!root) {
    return [];
  }
  let result = [];
  result = result.concat(postorderTraversal(root.left));
  result = result.concat(postorderTraversal(root.right));
  result.push(root.val);
  return result;
}
```

## 相关题

### 求二叉树的宽度

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

### 求二叉树的最大深度

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

### 镜像复制二叉树

```js
function mirrortCopyTree(tree) {
  if (!tree) return null;
  [tree.left, tree.right] = [tree.right, tree.left];
  mirrortCopyTree(tree.right);
  mirrortCopyTree(tree.left);
}
```
