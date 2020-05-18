# 基于 VSCode 编辑器的代码风格设置

## 在 Vscode 中安装 eslint、piettier 插件

## 配置 .vscode/settings.json

开启自动保存自动格式化等功能

```json
{
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    }
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 在项目中创建 prettier.config.js，并配置代码风格

```js
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf'
};
```

### 安装 TS 相关依赖，配置 tsconfig.json

tsconfig.json 接收类型化编译器的配置，如允许 JavaScript 文件、文件的位置等。

[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### 安装 TSLint 相关依赖， 配置 tslint.json

tslint.json 是 tslint 的配置，tslint 帮助您检测错误的编码实践或遵循编码风格

[tslint.json](https://palantir.github.io/tslint/usage/configuration/)
