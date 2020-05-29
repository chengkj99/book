# 寻找重复的子树

给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

         1
        / \
       2   3
      /   / \
     4   2   4
        /
       4

下面是两个重复的子树：

       2
      /
     4

和

     4

因此，你需要以列表的形式返回上述重复子树的根结点

解二叉树的题无非就以下几种思路：

- 先序遍历（深度优先搜索）
- 中序遍历（深度优先搜索）（尤其二叉搜索树）
- 后序遍历（深度优先搜索）
- 层序遍历（广度优先搜索）
- 序列化与反序列化（结构唯一性问题）

本题主要是使用序列化的方式，将每一个节点进行序列化表达，判断是否有重复的节点出现。

```js

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let res = [];
  let map = {};
  let dfs = root => {
    if (!root) {
      return '#';
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    str = `${root.val}, ${left}, ${right}`;
    console.log('str::', str);
    if (!map[str]) {
      map[str] = 1;
    } else {
      map[str]++;
      if (map[str] === 2) {
        res.push(root);
      }
    }
    return str;
  };
  dfs(root);
  return res;
};

console.log(findDuplicateSubtrees(root))

// str:: 4, #, #
// str:: 2, 4, #, #, #
// str:: 4, #, #
// str:: 2, 4, #, #, #
// str:: 4, #, #
// str:: 3, 2, 4, #, #, #, 4, #, #
// str:: 1, 2, 4, #, #, #, 3, 2, 4, #, #, #, 4, #, #

// [ { val: 4 }, { val: 2, left: { val: 4 } } ]
```
