module.exports = {
  types: [
    { value: "feat", name: "feat:        新功能" },
    { value: "fix", name: "fix:         问题修复" },
    { value: "docs", name: "docs:        文档变更" },
    { value: "style", name: "style:       代码格式(不影响代码运行的变动)" },
    { value: "refactor", name: "refactor:    重构" },
    { value: "perf", name: "perf:        性能优化" },
    { value: "test", name: "test:        测试相关" },
    { value: "revert", name: "revert:      回退" },
    { value: "build", name: "build:       打包构建" },
    { value: "chore", name: "chore:       其他或辅助工具的变动" },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "请选择提交类型:",
    scope: "请输入文件修改范围(可选):",
    // used if allowCustomScopes is true
    customScope: "请输入修改范围(可选):",
    subject: "请简要描述提交(必填):",
    // body: "请输入详细描述(可选):",
    // breaking: "非兼容性说明 (可选):\n",
    // footer: "请输入要关闭的issue(待优化去除，跳过即可):",
    confirmCommit: "确认使用以上信息提交？(y/n)",
  },
  scopes: [],
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ["body", "footer"],
  // limit subject length, commitlint默认是72
  subjectLimit: 72,
};
