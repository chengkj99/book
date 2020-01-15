# vim 基础教程

## vim 的五种模式

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
  - `i` 在光标前插入
  - `a` 在光标后插入
  - `A` 在当前行最后插入内容
  - `o` 在光标下插入一行
  - `O` 在光标上插入一行

### 3 命令模式

- 作用

  就像是进入了 shell 环境，可以进行保存、退出、查询、替换等操作。

- 进入命令模式
  - `/`
  - `:`

### 4 可视模式

- 作用

  选中文本进行操作增、删、改等操作。

- 进入可视模式
  - `v` 逐个字符选择文本
  - `V` 逐行选择文本
  - `CTRL + v` 按照块的方式选择文本

### 5 替换模式

- 作用

  内容更改替换

- `R`

  在光标位置使用 R，将进入 `replace` 模式，输入的内容将原内容进行一一替换

## 移动

- `j` 下（坠落的感觉）
- `k` 上（飞的感觉）
- `l` 右
- `h` 左

- `e` 向右逐词移动到下一个单词的结尾
- `w` 向右逐词移动下一个单词的开头
- `b` 向左逐词移动到下一个单词的开头

- `gg` 移动到文档顶部
- `G` 移动至文档底部
- `nG` 移动至文档第 n 行
- `CTRL + G` 查看当前文档的位置信息

## 复制

- `y` 复制
- `yy` 复制一行
- `yw`/ye 复制一个光标到结尾的单词
- `yb` 复制一个光标到开头的结尾
- `v + y` 使用 v 进入 visual 模式，选中内容，再通过 y 复制选中的内容

## 删除

```shell
  命令公式:
    operator [number] motion # 命令： 操作 + 数字 + 动作
  如：
    d  [number] motion # 删除命令
```

- `x` 删除光标所在处字符
- `X` 删除光标前一个字符
- `dw` 删除到下一个单词开头
- `de` 删除到本单词末尾
- `dE` 删除到本单词末尾包括标点在内
- `db` 删除到前一个单词
- `dB` 删除到前一个单词包括标点在内
- `d0` 删除光标位置到本行开头
- `d`\$ 删除光标位置到本行行尾
- `dd` 删除一行
- `ndd` 删除 N 行

```shell
例子:
  3dw 删除到第三个单词的开头
```

## 恢复/撤销

- `[ECS]` 如果第一个命令按错了，可以使用 `[ECS]` 重新开始。
- `u` 撤销上一个操作
- `U` 撤销一行的所有操作
- `CTRL + R` 撤销「撤销操作」

## 重复

- . 重复上一个步骤

## 删除更改

- `p` 使用`d`操作的内容，可以使用`p`进行粘贴
- `rx` 将光标位置的字母替换为 x
- `ce` 删除光标位置到单词结尾，并切换到 `insert` 模式，`c` 的更改命令和 `d` 类似
- `R` 在光标位置使用 R，将进入 `replace` 模式，输入的内容将原内容进行一一替换

```shell
命令公式：
  operator [number] motion # 命令： 操作 + 数字 + 动作
如：
  c  [number] motion
```

`c` 是一个更改命令，和`d`不同的是，删除对应的内容后，并切换到 `insert` 模式

- `cw` 删除到下一个单词开头
- `ce` 删除到本单词末尾
- `cE` 删除到本单词末尾包括标点在内
- `cb` 删除到前一个单词
- `cB` 删除到前一个单词包括标点在内
- `c0` 删除光标位置到本行开头
- `c`\$ 删除光标位置到本行行尾
- `cc` 删除一行
- `ncc` 删除 N 行

```shell
例子：
  3cc 删除三行并切换到编辑模式
```

## 选择文本

- `v` 按`v`进入`visual` 模式， 然后按`:`，出现`:'<,'>`，在后面输入 `w TEST`，执行后，将选中的文本保存在`TEST`文件中
- `:'<,'>w TEST` 选择文本并保存在 TEST 文件中

## 插入编辑

- `o` 在光标位置下一行新开一行，并切换到`insert`模式
- `O` 在光标位置上一行新开一行，并切换到`insert`模式
- `a` 在光标后插入内容
- `A` 在当前行最后插入内容
- `i` 在当前光标插入内容

## 查询替换

- `/` 查询使用 `/` 匹配符
- `n` 匹配下一个查询
- `N` 匹配上一个查询

```shell
例子：
/error # 查询 "error" 字符串
```

- `:s/old/new/g` 全局匹配「old」并用「new」替换

```shell
  To substitute new for the first old in a line type    :s/old/new
  To substitute new for all 'old's on a line type       :s/old/new/g
  To substitute phrases between two line #'s type       :#,#s/old/new/g
  To substitute all occurrences in the file type        :%s/old/new/g
  To ask for confirmation each time add 'c'             :%s/old/new/gc
```

- `:set options` 设置查询配置（忽略大小写，部分匹配，高亮）

```shell
  'ic'  'ignorecase'   ':set ic'    ignore upper/lower case when searching
  'is'  'incsearch'    ':set is'    show partial matches for a search phrase
  'hls' 'hlsearch'     ':set hls'   highlight all matching phrases

  Prepend "no" to switch an option off:   `:set noic`
```

## 函数跳转

- `CTRL + ]` 跳转至函数光标所在定义的地方
- `CTRL + T` 原路返回

## 执行外部命令

```shell
:!command # 执行外部命令
```

- `:!ls` 执行`ls`命令
- `:! w` filename 先用 `v` 选中了内容，将保存选中的部分到 filename 中
- `:w filename` 保存当前打开的文档到文件 filename
- `:r filename` 读取 filename 文件内容到当前文件的光标位置
- `:!rm filename` 删除 filename 文件

## 查看帮助

- `[F1]`
- `:help`
- `:command` 先输入`:e` 再按`CTRL + D` 查看以 `e` 为开头的命令
- `:help user-manual` 查看用户手册

```shell
例子：
  :help w 查看 w 相关的使用
```

## 相关教程

- 在终端执行 `vimtutor`命令，打开交互式教程，按照教程可以学习到最基础的内容。
- [vim user manual](http://vimdoc.sourceforge.net/htmldoc/usr_toc.html)
- [Vim 从入门到精通](https://github.com/wsdjeg/vim-galore-zh_cn#%E4%BB%80%E4%B9%88%E6%98%AF-vim)
