# 计划

- 自我介绍
- 项目经历

## 算法和数据结构

### 数据结构

- 数组
- 链表
- 栈
- 队列
- 堆

### 算法

- 二叉查找树
- 排序
  - 冒泡
  - 选择
  - 插入
  - 归并
  - 快速
  - 堆排序
- 图的搜索
  - 广度优先搜索
  - 深度优先搜索
- 动态规划

### 算法题

- 前序/中序/后序遍历
- 树的镜像复制
- 二分查找一个值
- 反向字符串的实现
- 数组去重
- 排序算法
- 动态规划，参见背包问题
- 二叉树
- 加油站问题(贪心算法)
- 二分法
- 二叉树遍历
- 单链表反转
- 取 1000 个数字里面的质数
- 找出数组中和为给定值的两个元素，如：[1, 2, 3, 4, 5]中找出和为 6 的两个元素。
- 线性顺序存储结构和链式存储结构有什么区别？以及优缺点

## JS 基础

### JS 基本

- 数据类型
- 运算
- 事件
  - 事件委托、代理
  - 如何让事件先冒泡后捕获
- Event Loop: 主微宏
  - 进程和线程
  - 任务队列
- this
- defineProperty
- 作用域
- 闭包
- 模块化
- Ajax
- 数组
  - 常用工具函数
  - 最子序列的最大和
  - 数组去重
  - 数组常用方法
  - 查找数组重复项
  - 扁平化数组
  - 按数组中各项和特定值差值排序
- 对象：模拟 new
- RegExp、JSON、Ajax、DOM、BOM（BOM 属性对象方法）
- 函数：柯里化等
- 继承，模拟继承
- Prototype
- 垃圾回收机制
- iframe（缺点有哪些）

### 异步

- Promise
  - 实现原理
  - all 的实现
- async await

### 高级应用

- ES6、7、8
- 跨域
- 内存泄漏
- 调用栈
- 模板引擎
- 节流和防抖 throttle & debounce
- 链式调用
- 性能优化
- 深拷贝和浅拷贝
- 服务端渲染
- IIFE 立即执行函数和使用场景
- call apply 区别，原生实现 bind，call，apply，bind 三者用法和区别：角度可为参数、绑定规则（显示绑定和强绑定），运行效率、运行情况
- 函数柯里化
- for...in 迭代和 for...of 有什么区别
- window 的 onload 事件和 domcontentloaded
- 原型/原型链/构造函数/实例/继承
- 有几种方式可以实现继承
- 用原型实现继承有什么缺点，怎么解决
- rguments
- 数据类型判断
- 作用域链、闭包、作用域
- jsx 的原生写法
- 对象深拷贝、浅拷贝
- 图片懒加载、预加载
- 实现页面加载进度条
- this 关键字
- 函数式编程
- 手动实现 parseInt
- 为什么会有同源策略
- 怎么判断两个对象是否相等
- 构造函数的 this
- 遍历对象的所有的 keys，有哪些方式，每种方式的优缺点

```md
for in: 主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性
Object.keys: 返回一个数组，元素均为对象自有的可枚举属性
Object.getOwnPropertyNames: 用于返回对象的自有属性，包括可枚举和不可枚举的
```

### ES6

- 声明 let、const
- 解构赋值
- 声明类与继承：class、extend
- Promise 的使用与实现
- generator（异步编程、yield、next()、await 、async）
- 箭头函数 this 指向问题、拓展运算符
- map 和 set 有没有用过，如何实现一个数组去重，map 数据结构有什么优点？
- ES6 怎么编译成 ES5,css-loader 原理,过程
- ES6 转成 ES5 的常见例子
- ES6 class 与 ES5 function 区别及联系
- 使用 es5 实现 es6 的 class

## TypeScript

- 泛型
- 接口
- 类型注解

## NodeJS

## CSS 基础

### CSS 基本

- 文档流
- 盒模型
- css 单位
- css 选择器
- 计算权重
- display 哪些取值
- 层叠上下文
- 响应式布局
- CSS 预处理器，后处理
- CSS 模块化
- CSS hack 方式
- CSS3 新特性

### 布局

- 常见页面布局
- 水平垂直居中
- 三栏式布局
- flex 布局
- 网格布局
- 多列布局
- 响应式设计 & 布局

### 定位

- flex 定位
- position 定位
- float 定位
- float 和 position 的相互影响
- 单位：px、em/rem、%、vw/vh、vmax/vmin
- z-index 优缺点 https://www.cnblogs.com/starof/p/4424926.html
- BFC

### CSS3

- animation 和 transiton 的区别和相关属性
- animate 和 translate

### 问题

- 相邻的两个 inline-block 节点为什么会出现间隔，该如何解决
- meta viewport 移动端适配属性
- CSS 实现宽度自适应 100%，宽高 16:9 的比例的矩形
- rem 布局的优缺点
- 画三角形
- 1 像素边框问题
- bfc 清除浮动，内容塌陷

## 框架应用知识

- Flux
- 同构
- Hybrid App(React Native、Ionic)
- 单页应用的问题：首屏加载慢。如何解决？多页应用 或 服务端渲染
- 路由原理
- 高阶组件

### vue

- vue.js 原理
- vue 解决了什么问题
- MVVM 的理解
- 如何实现一个自定义组件，不同组件之间如何通信的？
- nextTick
- 生命周期
- 虚拟 dom 的原理
- 双向绑定的原理？数据劫持？
- 组件通信
  - 父->子
  - 子->父
  - 非父子组件
- Proxy 相比于 defineProperty 的优势
- watch computed 区别
- virtual dom 原理实现
- vue-router(hash， HTML5 新增的 pushState)
- 单页应用，如何实现其路由功能---路由原理
- vue-router 如何做用户登录权限等
- 你在项目中怎么实现路由的嵌套
- vuex 的理解
- vue 怎么监听数组

### React

### Angular

## 浏览器

- 浏览器内核
- 浏览器组成原理,浏览器的多进程/多线程
- 渲染原理
- 输入 url 到展示页面过程发生了什么？
- 重绘与回流

  - 重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用 --重绘对元素进行更新-- ，此时由于只需要 UI 层面的重新像素绘制，因此 损耗较少
  - 回流(reflow): 当元素的尺寸、结构或触发某些属性时，--浏览器会重新渲染页面，称为回流。-- 此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:
  - 回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。

- 页面初次渲染
- 浏览器窗口大小改变
- 元素尺寸、位置、内容发生改变
- 元素字体大小变化
- 添加或者删除可见的 dom 元素
- 激活 CSS 伪类（例如：:hover）
- 查询某些属性或调用某些方法
- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- getComputedStyle()
- getBoundingClientRect()
- scrollTo()
- 防抖与节流
- cookies、session、sessionStorage、localStorage

## 前端安全

## 设计模式

- 设计模式(要求说出如何实现,应用,优缺点)/单例模式实现
- 发布订阅模式的实现

## html

- 语义化
- 新标签新特性
- input 和 textarea 的区别
- 用一个 div 模拟 textarea 的实现
- 移动设备忽略将页面中的数字识别为电话号码的方法
- 对 Web 标准的理解（结构、表现、行为）
- HTML5（离线 & 存储、Histoy、多媒体、WebGL\SVG\Canvas）

## 服务端和网络

- 常见状态码：200 From cache 和 200、400、401、403 状态码分别代表什么
- 缓存
- 浏览器缓存
- cookie, session, token
- 前端持久化的方式、区别
- DNS 是怎么解析的
- cdn
- 计算机网络的相关协议
- http/https/http2.0
- get post 区别
- ajax、 axios 库
- tcp 三次握手，四次挥手流程
- 跨域
- 前端安全 XSS、CSRF
- websocket
- Http 请求中的 keep-alive 有了解吗
- 网络分层
- 即时通信，除了 Ajax 和 websocket
- 模块化，commonJS，es6，cmd，amd

## 项目知识

- HTTP
- RESTFul
- WEB 安全
- 前端工程化
- 依赖管理
- 重构
  - 可维护
  - 易用性
- SEO
- UED
- 前端技术选型
- 快速学习能力

### 性能优化

- 如何做性能监测？
- 如何做性能优化？

```md
1. 减少 HTTP 请求：合并图片，合并 CSS/JS 资源文件
2. 减少资源体积

- webpack 代码压缩优化： 代码压缩 UglifyJS，提取公共代码 CommonsChunkPlugin，缓存处理过的模块 cacheDirectory，排除不需要处理的模块 exclude
- 服务端开启 gzip 压缩： Content-Encoding: gzip

3. 使用缓存

- cache-control： 缓存静态资源 Cache-Control:public, max-age=31536000，禁用缓存 Cache-Control: no-cache, no-store, must-revalidate

4. 代码优化
   避免使用 CSS 表达式
```

- 页面 DOM 节点太多，会出现什么问题？如何优化？

### webpack

- 打包原理
- 打包插件
- webpack 热更新原理
- 优化构建速度
- webpack 单页应用和多页应用
- webpack 懒加载
- webpack loader/plugin

### Web 安全

1. XSS (跨站脚本攻击)

- 含义：注入有害的 javascript 脚本
- 解决：用户输入和接口查询输出校验

2. CSRF (Cross-site request forgery, 跨站请求伪造)

- 含义：攻击者诱导用户访问曾经认证过的网站(cookie 有效)，发起有害请求
- 解决：1. referer 代表着请求源进行校验; 2. token 校验; 3. 在 HTTP 头中自定义属性并验证；

### HTTP

> header 头里的内容详细了解，会引申出很多内容

- 缓存控制的字段, cache-control： max-age, no-cache, no-store, public
- 安全相关的字段, refer 代表请求源
- 各种状态码的含义, 200 404 304 500 502 504
- Content-Type
- Content-Encoding
- 缓存

  - 通过 e-tag 或者 last-modify 来判断
  - e-tag 是请求内容的标识，e-tag 改变，说明内容改变。它能够解决 last-Modify 缓存的问题，如 1. 短时间多次更新；2. 仅仅是修改时间内容并没有更新等问题；

- ...

### 其他问题

- 无限滚动方案
- 如何处理兼容性问题
- 你遇到过最难的问题是什么
- 微信网页版登录机制思考
- 如何快速让字符串变成已千为精度的数字
