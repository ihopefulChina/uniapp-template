module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    uni: 'readonly',
    getCurrentPages: 'readonly',
    UniNamespace: 'readonly',
    plus: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],

  rules: {
    // ---- Vue 模板相关 ----
    'vue/html-indent': [
      'error',
      2,
      {
        // 缩进 2 空格
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: { max: 1, allowFirstLine: false }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',

    // ---- TS & 代码风格 ----
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // ---- Prettier 相关 ----
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        printWidth: 160,
        tabWidth: 2,
        endOfLine: 'auto'
      }
    ]
  }
}
