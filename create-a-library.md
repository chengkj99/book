# 如何创建一个第三方库

## 创建一个基于 vue 的库(Create Library)

在我第一次创建一个第三方库的时候，那是基于 `vue` 的基础代码库，名为 `admin-base`，里面有公共的 components，utils、transforms、store、mixin 等等内容，刚开始要做这个项目的时候，自己并没有这方面相关的经验，在当时 leader 的指导下，完成了 Library 的创建，完成这个任务之后很有成就感，可能是因为这会影响更多的身边的人吧（我发现去做可以获得影响力的事情是会给人带来成就感的）。

创建 `admin-base` 流程如下:

### 1.抽取公共逻辑

添加 travis.yml 和 git hook 链接

配置 release.sh，release.sh 是自动化执行 shell 脚本，在这里做了执行构建发布和代码恢复的事情 在 travis 中执行

### 2.作为依赖被引入 rit

fusion-admin 及 cdnboss 均将 admin-base 作为依赖引入，包括四个部分：

1. admin-base 的发布前构建（考察是不是需要）
2. 发布 admin-base 的版本（tag & release）
3. fusion-admin 及 cdnboss 将 admin-base 加入到 package.json 的 dependencies 中
4. 考虑构建环境（jenkins）部署时安装该依赖（admin-base 是私有 repo）会不会有权限问题

### 3.自动化 admin-base 的版本发布

参考 portal-base 的做法，自动化 admin-base 的版本发布，主要做法：通过 travis 配置 master 分支 push 行为的 hook，在 hook 中构建出结果，将结果打包；使用从 package.json 中提取的版本好作为 tag 名发布

### 4.自动化测试

包括两个部分：

1. 为 admin-base 的代码引入测试
2. 将测试行为通过 travis 配置到 PR 的 hook 里
   travis.yml

script:

- npm test

## 创建 Angular 库

在 Angular 中，创建第三方库有自己的一套解决方案。在 Angular 官方文档中，有创建库的相关指南[Angular 库开发概述](https://angular.cn/guide/libraries)。如果有问题看这篇指南就可以了。

在 Angular 中创建一个 Library 是非常方便的，使用 Angular CLI 可以帮开发者创建好库的基本架构，开箱即用。大概流程如下：

### 第一步：创建一个 Angular 工作空间

```shell
ng new my-app
```

### 第二步：在 Angular 中，创建 Library 项目

```shell
cd my-app
ng generate library my-lib
```

### 第三步：抽取公共服务、组件等代码抽取到项目中

抽取的时候，值得注意的是：

1. 组件和管道之类的可声明对象应该设计成无状态的，这意味着它们不依赖或修改外部变量。如果必要要引入状态，要评估这个状态是放在库里还是放在应用里。
2. 组件内部订阅的所有可观察对象都应该在这些组件的生命周期内进行清理和释放。
3. 检查所有内部依赖。
   - 对于在组件或服务中使用的自定义类或接口，检查它们是否依赖于其它类或接口，它们也需要一起迁移。
   - 同样，如果你的库代码依赖于某个服务，则需要迁移该服务。
   - 如果你的库代码或其模板依赖于其它库（比如 Angular Material ），你就必须把它们配置为该库的依赖。

### 第四步：发布

```shell
ng build my-lib
cd dist/my-lib
npm publish
```
