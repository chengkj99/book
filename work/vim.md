# vim 操作命令

## vim 的四种模式

### 1 普通模式

- 普通模式的作用

  在普通模式一般浏览文件使用，也包括一些复制、粘贴、删除等操作。
  普通模式是进入文档后的默认模式。切换到普通模式可以使用：

- 切换到普通模式
  - `[ECS]`
  - `CTRL + [`
  - 命令模式和可视模式执行完操作后会默认切换到普通模式

### 2 编辑模式

- 作用

  进入编辑状态，通过键盘输入内容。

- 切换到编辑模式
  - i 在光标前插入
  - a 在光标后插入

### 3 命令模式

- 作用

  就像是进入了 shell 环境，可以进行保存、退出、查询、替换等操作。

- 进入命令模式
  - /
  - :

### 4 可视模式

- 作用

  选中文本进行操作增、删、改等操作。

- 进入可视模式
  - v 逐个字符选择文本
  - V 逐行选择文本
  - `CTRL + v` 按照块的方式选择文本

## 移动

- j 下（坠落的感觉）
- k 上（飞的感觉）
- l 右
- h 左

- gg 移动到文档顶部
- G 移动至文档底部
- nG 移动至文档第 n 行
- `CTRL + G` 查看当前文档的位置信息

## 复制

- y 复制
- yy 复制一行

## 删除

```shell
# 命令： 操作 + 数字 + 动作
  operator [number] motion
# 删除命令
  d  [number] motion
```

- x 删除光标所在处字符
- X 删除光标前一个字符
- dw 删除到下一个单词开头
- de 删除到本单词末尾
- dE 删除到本单词末尾包括标点在内
- db 删除到前一个单词
- dB 删除到前一个单词包括标点在内
- d0 删除光标位置到本行开头
- d\$ 删除光标位置到本行行尾
- dd 删除一行
- ndd 删除 N 行

## 恢复/撤销

- `[ECS]` 如果第一个命令按错了，可以使用 `[ECS]` 重新开始。
- u 撤销上一个操作
- U 撤销一行的所有操作
- `CTRL + R` 撤销「撤销操作」

## 重复

- . 重复上一个步骤

## 删除更改

- p 使用`d`操作的内容，可以使用`p`进行粘贴
- rx 将光标位置的字母替换为 x
- ce 删除光标位置到单词结尾，并切换到 `insert` 模式，`c` 的更改命令和 `d` 类似

```shell
# 命令： 操作 + 数字 + 动作
  operator [number] motion
  c  [number] motion
```

c 是一个更改命令，和`d`不同的是，删除对应的内容后，并切换到 `insert` 模式

- cw 删除到下一个单词开头
- ce 删除到本单词末尾
- cE 删除到本单词末尾包括标点在内
- cb 删除到前一个单词
- cB 删除到前一个单词包括标点在内
- c0 删除光标位置到本行开头
- c\$ 删除光标位置到本行行尾
- cd 删除一行
- ncc 删除 N 行

## 查询替换

- `/` 查询使用 `/` 匹配符
- n 匹配下一个查询
- N 匹配上一个查询

## 选择文本

- v 按`v`进入`visual` 模式， 然后按`:`，出现`:'<,'>`，在后面输入 `w TEST`，执行后，将选中的文本保存在`TEST`文件中
- :'<,'>w TEST 选择文本并保存在 TEST 文件中

```shell
/error
# 查询 "error" 字符串
```

- :s/old/new/g 全局匹配「old」并用「new」替换

```shell
  To substitute new for the first old in a line type    :s/old/new
  To substitute new for all 'old's on a line type       :s/old/new/g
  To substitute phrases between two line #'s type       :#,#s/old/new/g
  To substitute all occurrences in the file type        :%s/old/new/g
  To ask for confirmation each time add 'c'             :%s/old/new/gc
```

## 执行外部命令

- :!ls 执行`ls`命令
- :! w filename 先用 `v` 选中了内容，将保存选中的部分到 filename 中
- :w filename 保存当前打开的文档到文件 filename

## 相关教程

- 在终端执行 `vimtutor`命令，打开交互式教程，按照教程可以学习到最基础的内容。
- [Vim 从入门到精通](https://github.com/wsdjeg/vim-galore-zh_cn#%E4%BB%80%E4%B9%88%E6%98%AF-vim)
- [Vim 的操作小技巧](https://kaochenlong.com/2011/12/28/vim-tips/)
