// 字母异位词分组
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const res = {}
  for (let i = 0; i < strs.length; i++) {
      const mark = strs[i].split('').sort().join('')
      if (!res[mark]) {
           res[mark] = []
          res[mark].push(strs[i])
      } else {
          res[mark].push(strs[i])
      }
  }
  return Object.values(res)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))




// 我们解二叉树的题无非就以下几种思路：

// 先序遍历（深度优先搜索）
// 中序遍历（深度优先搜索）（尤其二叉搜索树）
// 后序遍历（深度优先搜索）
// 层序遍历（广度优先搜索）
// 序列化与反序列化（结构唯一性问题）

// 寻找重复的子树
// 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

// 两棵树重复是指它们具有相同的结构以及相同的结点值。

// 示例 1：

//         1
//        / \
//       2   3
//      /   / \
//     4   2   4
//        /
//       4
// 下面是两个重复的子树：

//       2
//      /
//     4
// 和

//     4
// 因此，你需要以列表的形式返回上述重复子树的根结点

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
  let res = []
  let map = {}
  let dfs = (root) => {
    if (!root) {return '#'}
    let left = dfs(root.left)
    let right = dfs(root.right)
    str = `${root.val}, ${left}, ${right}`
    console.log('str::', str)
    if (!map[str]) {
      map[str] = 1
    } else {
      map[str]++
      if (map[str]===2) {
        res.push(root)
      }
    }
    return str
  }
  dfs(root)
  return res
};


const root = {
  val: 1,
  left: {
    val: 2,
    left: {val: 4}
  },
  right: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 4
      }
    },
    right: {
      val: 4
    }
  }
}

console.log(findDuplicateSubtrees(root))
