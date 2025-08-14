module.exports = {
  globals: {
    uni: 'readonly',
    getCurrentPages: 'readonly',
    UniNamespace: 'readonly',
    plus: 'readonly'
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 0,
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error'
  }
}
