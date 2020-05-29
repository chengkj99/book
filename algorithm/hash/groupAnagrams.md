# 字母异位词分组

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

**示例:**

输入:

`["eat", "tea", "tan", "ate", "nat", "bat"]`

输出:

```shell
 [
   ["ate","eat","tea"],
   ["nat","tan"],
   ["bat"]
 ]
```

说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

**解答：**

1. 将每一个字符串进行排序，将排序后的字符串作为 key；`eat` 和 `tea` 排序后的 `key` 是 `aet`
2. 将具有相同 key 的字符串放到同一个数组中；`{aet: ['eat', 'tea', 'ate'] ...}`

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const res = {};
  for (let i = 0; i < strs.length; i++) {
    const mark = strs[i]
      .split('')
      .sort()
      .join('');
    if (!res[mark]) {
      res[mark] = [];
      res[mark].push(strs[i]);
    } else {
      res[mark].push(strs[i]);
    }
  }
  return Object.values(res);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
```
