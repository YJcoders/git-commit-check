### 一、如何安装？

### 需要安装的依赖

husky: 通过 git 的钩子函数，拦截用户的 git commit 和 git push 操作
commitlint: 校验 git commit 内容
commitizen: 帮助用户，更快的写出规范的 commit

husky + commitlint 通过 git hook 拦截，校验提交项目的规范，校验用户 commit 信息规范，阻止不规范的提交 push

#### 1、安装依赖 husky

```sh
npm i husky -D

# 卸载 husky 同时要还原 git默认钩子指向
npm uninstall husky && git config --unset core.hooksPath
```

### 2、添加 git hook

husky v6.x 版本起，使用方式有改动(以前版本是添加了所有的 git hook，造成性能浪费；新版本按需使用 hook，将 .git/hook 指向 ./husky 下的 hook 执行)
只需安装需要使用的 hook
[参考：官方解析](https://blog.typicode.com/husky-git-hooks-autoinstall/)
[参考：官方文档](https://typicode.github.io/husky/getting-started.html)
2.1、在 package.json 的 scripts 添加 husky install

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

2.2、执行 npm run prepare 添加、启用钩子(创建.husky 文件夹，存放 git hook)
2.3、添加 pre-commit 钩子： npx husky add .husky/pre-commit 'npm run lint-staged'

1. 作用：在提交之前，使用 lint-staged 校验 待提交文件内容格式（本次改动文件）是否符合 eslint
2. 在 package.json 中配置 lint-staged (先执行 eslint --fix如果有代码错误，直接报错，格式错误先修复，然后再经过prettier格式化)
```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,vue}": [
      "eslint --fix",
      "prettier --ignor-unknown --cache --write"
    ]
  }
}
```
3. 解决eslint和prettier冲突：安装最新 eslint-config-prettier eslint-plugin-prettier
并在 .eslintrc 中 extends 添加 prettier 配置（必须放最后，覆盖前面的规则定义）

```sh
npm i eslint-config-prettier eslint-plugin-prettier -D

# 安装之后，.eslintrc 中添加配置
# {
#   extends: ["eslint:recommended", "prettier"],
# }
```


2.4、添加 commit-msg 钩子： 执行 npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
使用 commitlint 校验 commit 内容是否符合规范

2.5、安装 @commitlint/cli @commitlint/config-conventional

```sh
npm i @commitlint/cli @commitlint/config-conventional -D
```

2.6、配置 commitlint.config.js 校验 commit 相关配置

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 检测规则
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert", "build"],
    ],
  },
};

// commit 类型
// feat 新功能
// fix Bug 修复
// docs 文档更新
// style 代码的格式，标点符号的更新
// refactor 代码重构
// perf 性能优化
// test 测试更新
// build 构建系统或者包依赖更新
// ci CI 配置，脚本文件等更新
// chore 非 src 或者 测试文件的更新
// revert commit 回退
```

2.7、安装 commitizen cz-conventional-changelog
注意： 2.7 和 2.8 选择一个方式安装即可
默认的 cz-conventional-changelog 不支持自定义修改 commitizen 相关配置（比如：修改步骤提示语；跳过不常用的步骤 breaking,footer 等）

```sh
# commitizen 建议全局安装，可以全局使用  git-cz
npm install commitizen -g
# cz-conventional-changelog  按项目安装
npm install commitizen cz-conventional-changelog  -D
```

并在 package.json 中添加关联配置

```json
"scripts": {
  "commit": "git-cz",
},
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

使用：

```sh
# 自己写commit
git add .
git commit -m 'fix: 修改bug'

# 使用 commitizen 帮助写commit
git add .
npm run commit
# 然后控制台出现 git-cz
# 安装 git-cz 步骤操作即可
# 不支持自定义修改 commitizen 相关配置（比如：修改步骤提示语；跳过不常用的步骤 breaking,footer 等
```

2.8、如果想自定义 cz 的相关配置， 使用 cz-customizable
cz-customizable 可以支持自定义配置，但是 subject 为空没有拦截掉,
删除 commitizen 和 cz-conventional-changelog 的依赖

```sh
# cz-customizable 按项目安装
npm install cz-customizable -D
```

修改 package.json 使用配置

```json
"scripts": {
  "commit": "git add . && cz-customizable",
},
```

添加 .cz-config.js 自定义配置

```json

```

### 二、如何使用？

```sh
# 自己写commit
git add .
git commit -m 'fix: 修改bug'

# 使用 commitizen 帮助写commit
git add .
npm run commit
# 然后控制台出现 git-cz
# 安装 git-cz 步骤操作即可
```

### 某次提交，忽略校验

```sh
git commit --no-verify -m "xxx"
```

### 生成提交记录，提交日志

安装 standard-version

```sh
npm i standard-version -D

# 执行 生成 CHANGELOG.md 文件
npx standard-version

# 也可以配置在 package.json 的  script里面
# "scripts": {
#   "release": "standard-version",
# }
```
