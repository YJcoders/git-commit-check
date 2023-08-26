module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }], //将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错,忽略此问题
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/attribute-hyphenation": 0, // 忽略属性连字
    "vue/order-in-components": [0], // 忽略vue生命周期排序
    "vue/attributes-order": [
      // 属性顺序
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
          // DEFINITION e.g. 'is', 'v-is'
          // LIST_RENDERING e.g. 'v-for item in items'
          // CONDITIONALS e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          // RENDER_MODIFIERS e.g. 'v-once', 'v-pre'
          // GLOBAL e.g. 'id'
          // UNIQUE e.g. 'ref', 'key'
          // SLOT e.g. 'v-slot', 'slot'.
          // TWO_WAY_BINDING e.g. 'v-model'
          // OTHER_DIRECTIVES e.g. 'v-custom-directive'
          // OTHER_ATTR e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
          // EVENTS e.g. '@click="functionCall"', 'v-on="event"'
          // CONTENT e.g. 'v-text', 'v-html'
        ],
        alphabetical: false,
      },
    ],
    "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容前后需要换行符
    "vue/multiline-html-element-content-newline": "off", // 在多行元素的内容之前和之后需要换行符
    "vue/name-property-casing": ["error", "PascalCase"], // JS/JSX中的组件名应该始终是帕斯卡命名法
    "vue/no-v-html": "off",
    "vue/prop-name-casing": [1, "camelCase"], // 在声明prop的时候，其命名应该始终使用驼峰命名
    "vue/require-v-for-key": 1, // 给v-for设置键值，与key结合使用，可以高效的更新虚拟DOM
    "vue/no-use-v-if-with-v-for": [
      // 不要把 v-if 和 v-for 用在同一个元素上——因为v-for 比 v-if 具有更高的优先级
      2,
      {
        allowUsingIterationVar: false,
      },
    ],
    quotes: [
      //使用双引号
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, "always"], //使用分号结尾
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "vue/html-self-closing": [
      // 标签闭合
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/max-attributes-per-line": [
      // 多个特性的元素应该分多行撰写，每个特性一行
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "accessor-pairs": 2, // 定义对象的set存取器属性时，强制定义get
    "arrow-parens": [2, "as-needed"], // 箭头函数必须括号
    "arrow-spacing": [
      // 箭头函数前后括号
      2,
      {
        before: true,
        after: true,
      },
    ],
    "block-spacing": [0], // 块级作用域缩进 https://eslint.org/docs/rules/block-spacing#rule-details
    "brace-style": [
      // 大括号风格，允许写在一行 https://eslint.org/docs/rules/brace-style#require-brace-style-brace-style
      1,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      // 在命名变量时，风格为驼峰命名
      2,
      {
        properties: "always",
      },
    ],
    "comma-spacing": [
      // 规则在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距。
      2,
      {
        before: false,
        after: true,
      },
    ],
    "no-mixed-spaces-and-tabs": 2, // 不允许空格和tab混合
    "no-multi-spaces": 2, // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
    "no-multi-str": 2, // 防止使用多行字符串 https://cloud.tencent.com/developer/section/1135719
    "no-multiple-empty-lines": [
      //减少多余的空白行。它会在超过最大空行数量时发出警告
      2,
      {
        max: 1,
      },
    ],
    "no-global-assign": 2, // 不允许修改只读全局变量
    "no-new-object": 2, // 不允许使用Object构造函数，直接赋值：var myObject = {};
    "no-new-require": 2, // 不允许使用new require 引入 消除new require表达的使用 https://cloud.tencent.com/developer/section/1135728
    "no-new-symbol": 2, // 不允许使用 new Symbol
    "no-new-wrappers": 2, // 杜绝使用String，Number以及Boolean与new操作-第一个问题是基本包装对象实际上是对象。这意味着typeof将返回"object"，而不是"string"，"number"或"boolean"。第二个问题来自布尔对象。每个对象都是 truthy,它的实际值是一个Boolean总是可以解决即使实际值为 false, 总是解析为 true的实例。
    "no-obj-calls": 2, // 不允许调用Math，JSON和Reflect对象作为功能
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-redeclare": 2, // 禁止同一范围内具有多个声明的变量
    "no-regex-spaces": 2, // 正则表达式文字中不允许有多个空格 /foo {3}bar/
    "no-return-assign": [2, "except-parens"], // return 方法中 除非用圆括号括起来，否则不允许赋值
    "no-self-assign": 2, // 自我分配没有效果，因此可能会由于重构不完全而导致错误-不允许 foo = foo
    "no-self-compare": 2, // x === x
    "no-sequences": 2, // 禁止使用逗号运算符，但以下情况除外：在for语句的初始化或更新部分;如果表达式序列显式包含在圆括号中。
    "no-shadow-restricted-names": 2, // 禁止使用关键字作为名称
    "no-spaced-func": 2, // 禁止函数名称和调用它的左括号之间的空格。
    "func-call-spacing": 2, // 禁止函数名称和调用它的左括号之间的空格。
    "no-sparse-arrays": 2, // 不允许稀疏数组文字 https://cloud.tencent.com/developer/section/1135759
    "no-throw-literal": 2, // 不允许抛出不可能是Error对象的文字和其他表达式来抛出异常时保持一致性。https://cloud.tencent.com/developer/section/1135765
    "no-trailing-spaces": 2, // 不允许在行尾添加尾随空白
    "no-unused-vars": [
      // 消除未使用的变量，函数和函数的参数 https://cloud.tencent.com/developer/section/1135779
      2,
      {
        vars: "all",
        args: "none",
      },
    ],
    "no-useless-computed-key": 2, // 禁止不必要地使用计算属性键
    "no-whitespace-before-property": 2, // 对象的属性位于同一行上，则该规则不允许围绕点或在开头括号之前留出空白。当对象和属性位于不同的行上时，此规则允许使用空格，因为向更长的属性链添加换行符是很常见的
    "no-array-constructor": 2, // 不允许使用Array构造函数。
    "no-caller": 2, //禁止使用arguments.caller或arguments.callee
    "no-class-assign": 2, //禁止给类赋值
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-control-regex": 0, //禁止在正则表达式中使用控制字符
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-dupe-args": 2, //函数参数不能重复
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": 2,
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": [
      2,
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-useless-call": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 0,
    "no-with": 2,

    "operator-linebreak": [
      // 实施一致的换行样式:
      2,
      "after", // 需要将换行符置于操作员之后
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "space-before-blocks": [2, "always"], // 强化块之前的间距一致性。它只适用于不以新行开始的块
    "space-in-parens": [2, "never"], // 强制直接在括号内进行间隔的一致性-在圆括号内强制使用零空格
    "spaced-comment": [
      // 注释开始后，此规则将强制间距的一致性
      2,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ",",
        ],
      },
    ],
    "template-curly-spacing": [2, "never"], // 保持模板文字内部空间的一致性-不允许大括号内的空格
    "use-isnan": 2, // 不允许比较'NaN:使用 isNaN()
    "valid-typeof": 2, // 强制将typeof表达式与有效的字符串文字进行比较:对比所输入的值是否有效
    "yield-star-spacing": [2, "both"], // 强制执行*周围 yield*表达式的间距
    yoda: [2, "never"], // 强制执行一种将变量与文字值进行比较的一致条件样式。https://cloud.tencent.com/developer/section/1135855
    "prefer-const": 2, // 如果一个变量从不重新分配，使用const声明更好
    "array-bracket-spacing": [2, "never"], // 数组括号内强制实现一致的间距
    "comma-style": [2, "last"],
    "constructor-super": 2, //逗号风格，换行时在行首还是行尾
    curly: [2, "multi-line"], // 将块语句包装在花括号中
    "dot-location": [2, "property"], //对象访问符的位置，换行的时候在 与属性部分位于同一行
    "eol-last": 0, //文件以单一的换行符结束
    // eqeqeq: ["error", "always", { null: "ignore" }], //必须使用全等，忽略null
    indent: [
      //缩进风格
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "key-spacing": [
      // 对象字面量属性中的键和值之间保持一致的间距
      2,
      {
        beforeColon: false, // 不允许在对象文字中的键和冒号之间使用空格。
        afterColon: true, // 需要在冒号和对象文字中的值之间至少有一个空格
      },
    ],
    "keyword-spacing": [
      // 围绕关键字和关键字标记的一致空格
      2,
      {
        before: true,
        after: true,
      },
    ],
    "new-cap": [
      // 构造函数名以大写字母开头
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    "new-parens": 2, //new时必须加小括号
    "one-var": [
      2,
      {
        initialized: "never",
      },
    ],
    "padded-blocks": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    "wrap-iife": [2, "any"],
    yoda: [2, "never"],
    "object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: true,
      },
    ],
  },
};
