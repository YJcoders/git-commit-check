### 需要安装的依赖

husky: 通过 git 的钩子函数，拦截用户的 git commit 和 git push 操作
commitlint: 校验 git commit 内容
Commitizen: 帮助用户，更快的写出规范的 commit

husky + commitlint 通过 git hook 拦截，校验提交项目的规范，校验用户 commit 信息规范，阻止不规范的提交 push

### 实现步骤

#### 1、安装依赖 husky @commitlint/cli @commitlint/config-conventional

```sh
npm i husky @commitlint/cli @commitlint/config-conventional -D

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
2.3、添加钩子： npx husky add .husky/pre-commit 'npm run test'

1. 添加 pre-commit 钩子，使用 lint-staged 校验 文件内容格式是否符合 eslint
2. package.json 中配置 lint-staged

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,vue}": [
      "prettier --write",
      "eslint",
      "git add"
    ]
  }
}
```

2.4、添加钩子： 执行 npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

- 添加 commit-msg 钩子，并且使用 commitlint 校验 commit

### git commit 类型

```sh
feat 新功能
fix Bug 修复
docs 文档更新
style 代码的格式，标点符号的更新
refactor 代码重构
perf 性能优化
test 测试更新
build 构建系统或者包依赖更新
ci CI 配置，脚本文件等更新
chore 非 src 或者 测试文件的更新
revert commit 回退
```