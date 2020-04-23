// 图的数据结构

// 构建图
function Node(key) {
  this.key = key
  this.children = []
}

const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let nodeGraph = []
for (let i = 0; i < nodes.length; i++) {
  nodeGraph.push(new Node(nodes[i]))
}

nodeGraph[0].children.push(nodeGraph[1], nodeGraph[2], nodeGraph[3])
nodeGraph[1].children.push(nodeGraph[4], nodeGraph[5])
nodeGraph[2].children.push(nodeGraph[4], nodeGraph[5])
nodeGraph[3].children.push(nodeGraph[6], nodeGraph[7])

console.log(nodeGraph[0])

// const nodes = [1, 2, 3, 4, 5, 6, 7]
// let nodeGraph = []
// [1, 2, 3, 4, 5, 6, 7].forEach((v) => {
//   nodeGraph.push(new Node(v))
//   console.log(v, i)
// })

// 广度优先遍历
function bfs(root) {
  let nodes = []
  let queue = [root]
  while (queue.length > 0) {
    let newQueue = []
    for (let i = 0; i < queue.length; i++) {
      nodes.push(queue[i].key)
      newQueue = newQueue.concat(queue[i].children)
    }
    queue = newQueue
  }
  return nodes
}

// 求树的最大宽度
function maxWidth(root) {
  let queue = [root]
  let maxWidth = 0
  while (queue.length > 0) {
    let newQueue = []
    for (let i = 0; i < queue.length; i++) {
      newQueue = newQueue.concat(queue[i].children)
    }
    queue = newQueue
    maxWidth = Math.max(maxWidth, newQueue.length)
  }
  return maxWidth
}
console.log('max width: ', maxWidth(nodeGraph[0]))

// 深度优先遍历
function dfs(root) {
  let nodes = []
  if (!root) return []
  nodes.push(root.key)
  root.children.forEach(node => {
    nodes = nodes.concat(dfs(node))
  })
  return nodes
}

console.log(dfs(nodeGraph[0]))
