module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: 1,
    quotes: 1, // 解决语句可以不需要分号结尾   或者 代码code最后加上分号“；”
    eqeqeq: 1, // ===区分==
    'max-len': 1,
    indent: 1,
    'arrow-spacing': 1,
    'no-tabs': 1,
    'no-unused-vars': 1,
    'no-unused-expressions': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 'off',
    'no-irregular-whitespace': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-else-return': [1, { allowElseIf: true }],
    'key-spacing': 1,
    'spaced-comment': 1,
    'no-console': 0,
    'no-underscore-dangle': [2, { allow: ['__express'] }],
  },
};
