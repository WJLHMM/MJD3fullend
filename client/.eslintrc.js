module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
    "react-hooks",
    "emotion",
  ],
  settings: {
    'import/resolver': { // 该设置解决eslint报错，无法识别webpack中配置的别名路径@
      webpack: {
        config: './webpack.base.config.js',
      },
    },
  },
  rules: {
    semi: "off",
    quotes: "off", // 解决语句可以不需要分号结尾   或者 代码code最后加上分号“；”
    eqeqeq: 0, // ===区分==
    "max-len": 0,
    indent: 0,
    "arrow-spacing": 0,
    "import/no-cycle": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/prop-types": 0,
    "react/jsx-indent": 0,
    "react/button-has-type": 0,
    "react/no-unused-state": 0,
    "react-hooks/rules-of-hooks": 1,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [0, { extensions: [".js", ".jsx"] }], // 该设置解决sx not allow in files with extension '.js'报错
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-associated-control":0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-tabs": 0,
    "no-unused-vars": 0,
    "no-unused-expressions":0,
    "no-trailing-spaces": 1,
    "no-multi-spaces": "off",
    "no-irregular-whitespace": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-else-return": ["warn", { allowElseIf: true }],
    "key-spacing": 0,
    "spaced-comment": 0,
    "emotion/jsx-import": 1,
    "no-console": 0,
  },
};
